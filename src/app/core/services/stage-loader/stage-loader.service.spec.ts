import { async, fakeAsync, tick } from '@angular/core/testing';
import { asyncData, asyncError } from '../../../testing/async-observable-helpers';

import { StageLoaderService } from './stage-loader.service';

import * as STAGE_LIST from '../../../shared/models/stage/mocks/stage-list';
import * as STAGE_DETAILS from '../../../shared/models/stage/mocks/stage-details';
import * as STAGE_EXCLUDE from '../../../shared/models/stage/mocks/stage-exclude';
import * as STAGES from '../../../shared/models/stage/mocks/stages';

describe('StageLoaderService', () => {
  let service: StageLoaderService;
  let httpClientSpy: { get: jasmine.Spy };

  describe('constructor()', () => {
    it(`should reject a parameter that isn't an HttpClient`);
  });

  describe('loadStages()', () => {
    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new StageLoaderService(httpClientSpy as any);
    });

    describe('basic functionality', () => {
      it('should return data composed of stage list data and stage details data', async(() => {
        /**/
        // console.log(`=== SPEC - LOADSTAGES() BASIC ===`);

        const stageList = STAGE_LIST.PRINCESS_PEACH_CASTLE;
        /**/
        // console.log('SPEC - stageList: ' + JSON.stringify(stageList));
        const stageDetails = STAGE_DETAILS.PRINCESS_PEACH_CASTLE;
        const expectedStages = STAGES.ONE_STAGE;

        httpClientSpy.get.and.returnValues(asyncData(stageList), asyncData(stageDetails));
        /**/
        // console.log(`SPEC - stageDetails type: ${typeof stageDetails}`);
        /**/
        // console.log(`SPEC - stageDetails length: ${stageDetails.length}`);

        const actualStages$ = service.loadStages();
        /**/
        // console.log('SPEC - obtained observable from service.loadStages()');

        actualStages$.subscribe((actualStages) => {
          /**/
          // console.log(`SPEC - actualStages: ${JSON.stringify(actualStages)}`);
          expect(actualStages.length).toBe(1);
          expect(actualStages).toEqual(expectedStages);
          expect(httpClientSpy.get.calls.count()).toBe(2);
        });
        /**/
        // console.log('SPEC - subscribed to service.loadStages()');
      }));
    });

    describe(`excluding stages`, () => {

      function _testBadData(problem, message) {
        /**/
        console.log(`=== SPEC - CHECK STAGE EXCLUSIONS DATA TYPE (${problem}) ===`);
        const stageList = STAGE_LIST.BAD_STAGE_EXCLUDE;
        const stageDetails = STAGE_DETAILS.BAD_STAGE_EXCLUDE;
        const stageExclusions = STAGE_EXCLUDE.BAD_DATA[problem];

        httpClientSpy.get.and.returnValues(asyncData(stageList), asyncData(stageDetails[0]), asyncData(stageDetails[1]));

        expect( () => {
          const actualStages$ = service.loadStages(stageExclusions);
        }).toThrow(new TypeError(message));
      }

      it(`should omit data from a stage whose name is provided`, async(() => {
        /**/
        // console.log('=== SPEC - EXCLUDE ONE STAGE ===');
        const stageList = STAGE_LIST.TWO_STAGES;
        const stageDetails = STAGE_DETAILS.TWO_STAGES;
        const stageExclusions = STAGE_EXCLUDE.TWO_STAGES;
        const expectedStages = STAGES.TWO_STAGES;

        httpClientSpy.get.and.returnValues(asyncData(stageList), asyncData(stageDetails[0]), asyncData(stageDetails[1]));

        const actualStages$ = service.loadStages(stageExclusions);
        actualStages$.subscribe((actualStages) => {
          expect(actualStages.length).toEqual(1);
          expect(actualStages).toEqual(expectedStages);
        });
      }));

      it(`should omit data from a list of stages whose names are provided`, async(() => {
        /**/
        // console.log('=== SPEC - EXCLUDE TWO STAGES ===');
        const stageList = STAGE_LIST.FOUR_STAGES;
        const stageDetails = STAGE_DETAILS.FOUR_STAGES;
        const stageExclusions = STAGE_EXCLUDE.FOUR_STAGES;
        const expectedStages = STAGES.FOUR_STAGES;

        httpClientSpy.get.and.returnValues(asyncData(stageList), asyncData(stageDetails[0]), asyncData(stageDetails[1]));

        const actualStages$ = service.loadStages(stageExclusions);
        actualStages$.subscribe((actualStages) => {
          /**/
          // console.log(`SPEC - actualStages: ${JSON.stringify(actualStages)}`);
          expect(actualStages.length).toEqual(2);
          expect(actualStages).toEqual(expectedStages);
        });
      }));

      it(`should reject a stage exclusion list that isn't an array`, async(() => {
        _testBadData('notArray', 'The excluded stages were not an array.');
      }));

      it(`should reject a stage exclusion list whose items aren't strings`, async(() => {
        _testBadData('itemsNotString', 'The excluded stages were not strings.');

      }));
    });

    describe('stage list data validation', () => {
      it(`should reject stage list data that isn't of type StageSummary[]`, async(() => {
        /**/
        // console.log(`=== SPEC - CHECK STAGE LIST DATA TYPE ===`);

        const stageListBad = STAGE_LIST.BAD_DATA;
        const stageDetails = STAGE_DETAILS.PRINCESS_PEACH_CASTLE;
        const actualStages$Arr = [];

        for (let i = 0; i < stageListBad.length; i++) {
          httpClientSpy.get.and.returnValues(asyncData(stageListBad[i]), asyncData(stageDetails));

          /**/
          // console.log('SPEC - loading stages');
          actualStages$Arr[i] = service.loadStages();
          /**/
          // console.log(`SPEC - actualStages$: ${actualStages$Arr[i]}`);
          actualStages$Arr[i].subscribe({
            next: () => {
              /**/
              // console.log('SPEC - got data somehow');
              fail(`loadStages() did not encounter TypeError`);
            },
            error: (error) => {
              /**/
              // console.log(`SPEC - Error: ${error}`);
              expect(error instanceof TypeError).toBeTruthy(`error instanceof TypeError`);
            }
          });
        }
      }));
    });

    describe(`stage details data validation`, () => {
      let stageList;
      let stageDetailsBad;
      let actualStages$;

      function _testBadData(problem) {
        /**/
        // console.log(`=== SPEC - CHECK STAGE DETAILS DATA TYPE (${problem}) ===`);
        httpClientSpy.get.and.returnValues(asyncData(stageList), asyncData(stageDetailsBad[problem]));

        actualStages$ = service.loadStages();
        /**/
        // console.log('SPEC - actualStages$: ' + actualStages$);
        actualStages$.subscribe({
          next: () => {
            /**/
            // console.log('SPEC - got data somehow');
            fail(`loadStages() did not encounter TypeError`);
          },
          error: (error) => {
            /**/
            // console.log(`SPEC - ${error}`);
            expect(error instanceof TypeError).toBeTruthy(`error instanceof TypeError`);
          }
        });
      }

      beforeEach(() => {
        stageList = STAGE_LIST.PRINCESS_PEACH_CASTLE;
        stageDetailsBad = STAGE_DETAILS.BAD_DATA;
      });

      it(`should reject data that is not an array`, fakeAsync(() => {
        _testBadData('notArray');
      }));

      it(`should reject data with a non-string stage property`, fakeAsync(() => {
        _testBadData('stageNotString');
      }));

      it(`should reject data with a non-string name property`, fakeAsync(() => {
        _testBadData('nameNotString');
      }));

      it(`should reject data with a non-string lvd property`, fakeAsync(() => {
        _testBadData('lvdNotString');
      }));

      it(`should reject data with a non-array collisions property`, fakeAsync(() => {
        _testBadData('collisionsNotArray');
      }));

      it(`should reject data with a non-string collisions.name property`, fakeAsync(() => {
        _testBadData('collisionsNameNotString');
      }));

      it(`should reject data with a non-array collisions.vertex property`, fakeAsync(() => {
        _testBadData('collisionsVertexNotArray');
      }));

      it(`should reject data with a non-array collisions.vertex item`, fakeAsync(() => {
        _testBadData('collisionsVertexItemsNotArray');
      }));

      it(`should reject data with a collisions.vertex item that isn't length 2`, fakeAsync(() => {
        _testBadData('collisionVertexItemsNotLength2');
      }));

      it(`should reject data with a non-number collisions.vertex item's item`, fakeAsync(() => {
        _testBadData('collisionsVertexItemItemsNotNumbers');
      }));

      it(`should reject data with a non-array collisions.materials property`, fakeAsync(() => {
        _testBadData('collisionsMaterialsNotArray');
      }));

      it(`should reject data with a non-boolean collisions.materials.leftLedge property`, fakeAsync(() => {
        _testBadData('collisionsMaterialLeftLedgeNotBoolean');
      }));

      it(`should reject data with a non-boolean collisions.materials.rightLedge property`, fakeAsync(() => {
        _testBadData('collisionsMaterialsRightLedgeNotBoolean');
      }));

      it(`should reject data with a non-boolean collisions.materials.noWallJump property`, fakeAsync(() => {
        _testBadData('collisionsMaterialsNoWallJumpNotBoolean');
      }));

      it(`should reject data with a non-number collisions.materials.passthroughAngle property`, fakeAsync(() => {
        _testBadData('collisionsMaterialsPassthroughAngleNotNumber');
      }));

      it(`should reject data with a non-number collisions.materials.length property`, fakeAsync(() => {
        _testBadData('collisionsMaterialsLengthNotNumber');
      }));

      it(`should reject data with a non-boolean collisions.materials.ceiling property`, fakeAsync(() => {
        _testBadData('collisionsMaterialsCeilingNotBoolean');
      }));

      it(`should reject data with a non-boolean collisions.materials.wall property`, fakeAsync(() => {
        _testBadData('collisionsMaterialsWallNotBoolean');
      }));

      it(`should reject data with a non-string collisions.materials.material property`, fakeAsync(() => {
        _testBadData('collisionsMaterialsMaterialNotString');
      }));

      it(`should reject data with a non-array collisions.boundingBox property`, fakeAsync(() => {
        _testBadData('collisionsBoundingBoxNotArray');
      }));

      it(`should reject data with a non-array collisions.boundingBox item`, fakeAsync(() => {
        _testBadData('collisionsBoundingBoxItemNotArray');
      }));

      it(`should reject data with a collisions.boundingBox item that isn't length 2`, fakeAsync(() => {
        _testBadData('collisionsBoundingBoxItemNotLength2');
      }));

      it(`should reject data with a non-number collisions.boundingBox item's item`, fakeAsync(() => {
        _testBadData('collisionsBoundingBoxItemItemNotNumber');
      }));

      it(`should reject data with a non-array platforms property`, fakeAsync(() => {
        _testBadData('platformsNotArray');
      }));

      it(`should reject data with a non-string platforms.name property`, fakeAsync(() => {
        _testBadData('platformsNameNotString');
      }));

      it(`should reject data with a non-array platforms.vertex property`, fakeAsync(() => {
        _testBadData('platformsVertexNotArray');
      }));

      it(`should reject data with a non-array platforms.vertex item`, fakeAsync(() => {
        _testBadData('platformsVertexItemsNotArray');
      }));

      it(`should reject data with a platforms.vertex item that isn't length 2`, fakeAsync(() => {
        _testBadData('platformsVertexItemsNotLength2');
      }));

      it(`should reject data with a non-number platforms.vertex item's item`, fakeAsync(() => {
        _testBadData('platformsVertexItemItemsNotNumbers');
      }));

      it(`should reject data with a non-array platforms.materials property`, fakeAsync(() => {
        _testBadData('platformsMaterialsNotArray');
      }));

      it(`should reject data with a non-boolean platforms.materials.leftLedge property`, fakeAsync(() => {
        _testBadData('platformsMaterialLeftLedgeNotBoolean');
      }));

      it(`should reject data with a non-boolean platforms.materials.rightLedge property`, fakeAsync(() => {
        _testBadData('platformsMaterialsRightLedgeNotBoolean');
      }));

      it(`should reject data with a non-boolean platforms.materials.noWallJump property`, fakeAsync(() => {
        _testBadData('platformsMaterialsNoWallJumpNotBoolean');
      }));

      it(`should reject data with a non-number platforms.materials.passthroughAngle property`, fakeAsync(() => {
        _testBadData('platformsMaterialsPassthroughAngleNotNumber');
      }));

      it(`should reject data with a non-number platforms.materials.length property`, fakeAsync(() => {
        _testBadData('platformsMaterialsLengthNotNumber');
      }));

      it(`should reject data with a non-boolean platforms.materials.ceiling property`, fakeAsync(() => {
        _testBadData('platformsMaterialsCeilingNotBoolean');
      }));

      it(`should reject data with a non-boolean platforms.materials.wall property`, fakeAsync(() => {
        _testBadData('platformsMaterialsWallNotBoolean');
      }));

      it(`should reject data with a non-string platforms.materials.material property`, fakeAsync(() => {
        _testBadData('platformsMaterialsMaterialNotString');
      }));

      it(`should reject data with a non-array platforms.boundingBox property`, fakeAsync(() => {
        _testBadData('platformsBoundingBoxNotArray');
      }));

      it(`should reject data with a non-array platforms.boundingBox item`, fakeAsync(() => {
        _testBadData('platformsBoundingBoxItemNotArray');
      }));

      it(`should reject data with a platforms.boundingBox item that isn't length 2`, fakeAsync(() => {
        _testBadData('platformsBoundingBoxItemNotLength2');
      }));

      it(`should reject data with a non-number platforms.boundingBox item's item`, fakeAsync(() => {
        _testBadData('platformsBoundingBoxItemItemNotNumber');
      }));

      it(`should reject data with a non-array blast_zones property`, fakeAsync(() => {
        _testBadData('blast_zonesNotArray');
      }));

      it(`should reject data with a blast_zones array that isn't length 4`, fakeAsync(() => {
        _testBadData('blast_zonesNotLength4');
      }));

      it(`should reject data with a non-number blast_zones item`, fakeAsync(() => {
        _testBadData('blast_zonesItemNotNumber');
      }));

      it(`should reject data with a non-array camera property`, fakeAsync(() => {
        _testBadData('cameraNotArray');
      }));

      it(`should reject data with a camera array that isn't length 4`, fakeAsync(() => {
        _testBadData('cameraNotLength4');
      }));

      it(`should reject data with a non-number camera item`, fakeAsync(() => {
        _testBadData('cameraItemNotNumber');
      }));

      it(`should reject data with a non-array center property`, fakeAsync(() => {
        _testBadData('centerNotArray');
      }));

      it(`should reject data with a center array that isn't length 2`, fakeAsync(() => {
        _testBadData('centerNotLength2');
      }));

      it(`should reject data with a non-number center item`, fakeAsync(() => {
        _testBadData('centerItemNotNumber');
      }));

      it(`should reject data with a non-array spawns property`, fakeAsync(() => {
        _testBadData('spawnsNotArray');
      }));

      it(`should reject data with a non-array spawns item`, fakeAsync(() => {
        _testBadData('spawnsItemsNotArray');
      }));

      it(`should reject data with a spawns item that isn't length 2`, fakeAsync(() => {
        _testBadData('spawnsItemsNotLength2');
      }));

      it(`should reject data with a non-number spawns item's item`, fakeAsync(() => {
        _testBadData('spawnsItemItemsNotNumbers');
      }));

      it(`should reject data with a non-array respawns property`, fakeAsync(() => {
        _testBadData('respawnsNotArray');
      }));

      it(`should reject data with a non-array respawns item`, fakeAsync(() => {
        _testBadData('respawnsItemsNotArray');
      }));

      it(`should reject data with a respawns item that isn't length 2`, fakeAsync(() => {
        _testBadData('respawnsItemsNotLength2');
      }));

      it(`should reject data with a non-number respawns item's item`, fakeAsync(() => {
        _testBadData('respawnsItemItemsNotNumbers');
      }));

      afterEach(() => {

      });

    });

    afterEach(() => {
    });
  });
});
