import { TestBed, waitForAsync } from '@angular/core/testing';

import { StageClassificationsService } from './stage-classifications.service';

import { asyncData } from '../../../testing/async-observable-helpers';
import { StageClassifications, isStageClassifications } from '../models/stage-classifications.model';
import { StageInfo } from '../models/stage-info.model';

import * as STAGE_CLASSES_INPUT from '../models/mocks/stage-classifications-input';
import * as STAGE_CLASSES from '../models/mocks/stage-classifications';
import { HttpClient } from '@angular/common/http';
import { SsbuApiStageClassificationsSetResponse } from 'src/app/data/ssbu-api/models';

describe('StageClassificationsService', () => {

  let service: StageClassificationsService;
  let httpSpy: { get: jasmine.Spy };
  const DEFAULT_RES: SsbuApiStageClassificationsSetResponse = STAGE_CLASSES.INIT.res;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should be created', () => {
    httpSpy.get.and.returnValue(asyncData(DEFAULT_RES));
    TestBed.configureTestingModule({
      providers: [
        StageClassificationsService,
        {provide: HttpClient, useValue: httpSpy}
      ]
    });
    service = TestBed.inject(StageClassificationsService);
    expect(service).toBeTruthy();
  });

  describe('classifyStages()', () => {

    describe('basic functionality', () => {

      it('should produce a StageClassifications array when fed gameName', waitForAsync(() => {

        const input: StageInfo[] = STAGE_CLASSES.GAME_NAME_ONLY.input;
        const res: SsbuApiStageClassificationsSetResponse = STAGE_CLASSES.GAME_NAME_ONLY.res;

        httpSpy.get.and.returnValue(asyncData(res));
        service = new StageClassificationsService(httpSpy as any);

        let actualClassifiedStages$ = service.classifyStages(input);

        actualClassifiedStages$.subscribe(actualClassifiedStages => {

          expect(actualClassifiedStages.length).withContext('There should be items in the array').toEqual(input.length);
          actualClassifiedStages.forEach(actualClassifiedStage => {
            expect(isStageClassifications(actualClassifiedStage)).toEqual(true);
          });

        });

      }));

      it('should match classifications from its database to the objects by gameName', waitForAsync(() => {
        ///
        // console.group(`=== SPEC - MATCH GAME NAME ===`);

        const input: StageInfo[] = STAGE_CLASSES.MATCH_GAME_NAME.input;
        const res: SsbuApiStageClassificationsSetResponse = STAGE_CLASSES.MATCH_GAME_NAME.res;
        const expectedClassifiedStages: StageClassifications[] = STAGE_CLASSES.MATCH_GAME_NAME.output;

        httpSpy.get.and.returnValue(asyncData(res));
        service = new StageClassificationsService(httpSpy as any);
        ///
        // console.log('res', res);
        // console.log('input', input);
        // console.log('expected', expectedClassifiedStages);

        let actualClassifiedStages$ = service.classifyStages(input);

        actualClassifiedStages$.subscribe({
          next: actualClassifiedStages => {

            expect(actualClassifiedStages.length).withContext('The number of items should match the input array length').toEqual(expectedClassifiedStages.length);

            for (let i = 0; i < expectedClassifiedStages.length; i++) {

              expect(actualClassifiedStages[i]).withContext(`actualClassifiedStages[${i}] should match expectedClassifiedStages[${i}]`).toEqual(expectedClassifiedStages[i]);

            }
            ///
            // console.groupEnd();
          },
          error: _ => {
            ///
            // console.groupEnd();
            fail();
          }
        });
      }));

      it('should add null values to stages not in the db', waitForAsync(() => {
        ///
        // console.log(`=== SPEC - ADD NULL PROPERTIES ===`);

        const input: StageInfo[] = STAGE_CLASSES.UNKNOWN_GAME_NAMES.input;
        const expectedClassifiedStages: StageClassifications[] = STAGE_CLASSES.UNKNOWN_GAME_NAMES.output;
        const res: SsbuApiStageClassificationsSetResponse = STAGE_CLASSES.UNKNOWN_GAME_NAMES.res;

        httpSpy.get.and.returnValue(asyncData(res));
        service = new StageClassificationsService(httpSpy as any);

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
      beforeEach(() => {
        httpSpy.get.and.returnValue(asyncData(DEFAULT_RES));
        service = new StageClassificationsService(httpSpy as any);
      });

      function _testBadData(problem, message) {
        ///
        // console.log(`=== SPEC - CHECK PARAMETER DATA TYPE (${problem}) ===`);
        const invalidStages: StageInfo[] = STAGE_CLASSES_INPUT.BAD_DATA[problem];
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
