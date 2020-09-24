import { TestBed, async } from '@angular/core/testing';

import { StageClassificationsService } from './stage-classifications.service';

import { isStageClassifications } from '../models/stage-classifications.model';
import { StageMiscInfo } from '../models/stage-misc-info.model';

import * as STAGE_CLASSES_INPUT from '../models/mocks/stage-classifications-input';
import * as STAGE_CLASSES_OUTPUT from '../models/mocks/stage-classifications-output';

describe('StageClassificationsService', () => {

  let service: StageClassificationsService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.inject(StageClassificationsService);
    expect(service).toBeTruthy();
  });

  describe('classifyStages()', () => {

    beforeEach(() => {
      service = new StageClassificationsService();
    });

    describe('basic functionality', () => {

      it('should produce a StageClassifications array when fed gameName', async(() => {

        const input = STAGE_CLASSES_INPUT.GAME_NAME_ONLY;
        let actualClassifiedStages$ = service.classifyStages(input);

        actualClassifiedStages$.subscribe(actualClassifiedStages => {

          expect(actualClassifiedStages.length).withContext('There should be items in the array').toEqual(input.length);
          actualClassifiedStages.forEach(actualClassifiedStage => {
            expect(isStageClassifications(actualClassifiedStage)).toEqual(true);
          });

        });

      }));

      it('should match classifications from its database to the objects by gameName', async(() => {

        const input = STAGE_CLASSES_INPUT.MATCH_GAME_NAME;
        const expectedClassifiedStages = STAGE_CLASSES_OUTPUT.MATCH_GAME_NAME;
        let actualClassifiedStages$ = service.classifyStages(input);

        actualClassifiedStages$.subscribe(actualClassifiedStages => {

          expect(actualClassifiedStages.length).withContext('The number of items should match the input array length').toEqual(expectedClassifiedStages.length);

          for (let i = 0; i < expectedClassifiedStages.length; i++) {

            expect(actualClassifiedStages[i]).withContext(`actualClassifiedStages[${i}] should match expectedClassifiedStages[${i}]`).toEqual(expectedClassifiedStages[i]);

          }

        });

      }));

      it('should add null values to stages not in the db', async(() => {
        const input = STAGE_CLASSES_INPUT.UNKNOWN_GAME_NAMES;
        const expectedClassifiedStages = STAGE_CLASSES_OUTPUT.UNKNOWN_GAME_NAMES;

        const actualClassifiedStages$ = service.classifyStages(input);

        actualClassifiedStages$.subscribe(actualClassifiedStages => {
          expect(actualClassifiedStages.length).withContext('The number of items should match the input array length').toEqual(expectedClassifiedStages.length);

          for (let i = 0; i < expectedClassifiedStages.length; i++) {

            expect(actualClassifiedStages[i]).withContext(`actualClassifiedStages[${i}] should match expectedClassifiedStages[${i}]`).toEqual(expectedClassifiedStages[i]);

          }

        });

      }));

    });
    
    describe('data validation', () => {

      function _testBadData(problem, message) {
        ///
        // console.log(`=== SPEC - CHECK PARAMETER DATA TYPE (${problem}) ===`);
        const invalidStages: StageMiscInfo[] = STAGE_CLASSES_INPUT.BAD_DATA[problem];
        ///
        // console.log(`  * invalid stages: ${JSON.stringify(invalidStages)}`);
        expect(() => {
          const actualClassifiedStages$ = service.classifyStages(invalidStages);
        }).toThrow(new TypeError(message));
      }

      it('should reject parameters that are not arrays', () => {
        _testBadData('notArray', 'The list of stages to classify was not an array.');
      });
      
      it('should reject parameters that are not arrays of objects', () => {
        _testBadData('itemsNotObjects', 'The list of stages to classify did not contain objects.');
      });

      it('should reject arrays of objects that have no gameName attribute', () => {
        _testBadData('noGameName', 'The list of stages to classify did not contain a gameName property.');
      });

      it('should reject arrays of objects with non-string gameNames', () => {
        _testBadData('gameNameNotString', 'The list of stages to classify contained a non-string gameName.');
      });

    });
  });
});
