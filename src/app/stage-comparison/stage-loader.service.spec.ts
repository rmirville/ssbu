import { async, fakeAsync, tick } from '@angular/core/testing';
import { asyncData, asyncError } from '../testing/async-observable-helpers';

import { StageLoaderService } from './stage-loader.service';

import * as STAGE_LIST from './spec/stage-list';
import * as STAGE_DETAILS from './spec/stage-details';
import * as STAGES from './spec/stages';

describe('StageLoaderService', () => {
  let service: StageLoaderService;
  let httpClientSpy: { get: jasmine.Spy };

  describe('constructor()', () => {
    it(`should reject a parameter that isn't an HttpClient`);
  });

  describe('loadStages()', () => {
    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new StageLoaderService(<any>httpClientSpy);
    });

    it('should return data composed of stage list data and stage details data', async(() => {
      /**/console.log(`SPEC === LOADSTAGES() BASIC ===`);

      let stageList = STAGE_LIST.PRINCESS_PEACH_CASTLE;
      /**///console.log('SPEC - stageList: ' + JSON.stringify(stageList));
      let stageDetails = STAGE_DETAILS.PRINCESS_PEACH_CASTLE;
      let expectedStages = STAGES.PRINCESS_PEACH_CASTLE;

      httpClientSpy.get.and.returnValues(asyncData(stageList), asyncData(stageDetails));
      /**/console.log(`SPEC - stageDetails type: ${typeof stageDetails}`);
      /**/console.log(`SPEC - stageDetails length: ${stageDetails.length}`);

      let actualStages$ = service.loadStages();
      /**///console.log('SPEC - obtained observable from service.loadStages()');

      actualStages$.subscribe((actualStages) => {
        /**///console.log(`SPEC - actualStages: ${JSON.stringify(actualStages)}`);
        expect(actualStages.length).toBe(1);
        expect(actualStages).toEqual(expectedStages);
        expect(httpClientSpy.get.calls.count()).toBe(2);
      });
      /**///console.log('SPEC - subscribed to service.loadStages()');
    }));
    
    it(`should reject stage list data that isn't of type StageSummary[]`, async(() => {
      /**/console.log(`SPEC === CHECK STAGE LIST DATA TYPE ===`);

      let stageListBad = STAGE_LIST.BAD_DATA;
      let stageDetails = STAGE_DETAILS.PRINCESS_PEACH_CASTLE;
      let actualStages$Arr = [];

      for (let i = 0; i < stageListBad.length; i++) {
        httpClientSpy.get.and.returnValues(asyncData(stageListBad[i]), asyncData(stageDetails));

        /**///console.log('SPEC - loading stages');
        actualStages$Arr[i] = service.loadStages();
        /**///console.log(`SPEC - actualStages$: ${actualStages$Arr[i]}`);
        actualStages$Arr[i].subscribe({
          next: () => {
            /**///console.log('SPEC - got data somehow');
            fail(`loadStages() did not encounter TypeError`);
          },
          error: (error) => {
            /**///console.log(`SPEC - Error: ${error}`);
            expect(error instanceof TypeError).toBeTruthy(`error instanceof TypeError`);
          }
        });
      }
    }));
    
    it(`should reject stage details data that isn't of type StageDetails[]`, fakeAsync(() => {
      /**/console.log(`SPEC === CHECK STAGE DETAILS DATA TYPE ===`);

      let stageList = STAGE_LIST.PRINCESS_PEACH_CASTLE;
      let stageDetailsBad = STAGE_DETAILS.BAD_DATA;
      let actualStages$Arr = [];

      for (let [problem, detailsDataBad] of Object.entries(stageDetailsBad)) {

        /**///console.log('SPEC - setting httpClientSpy');
        httpClientSpy.get.and.returnValues(asyncData(stageList), asyncData(detailsDataBad));
        
        /**///console.log('SPEC - stageDetailsBad type: ' + typeof detailsDataBad);

        /**///console.log('SPEC - loading stages');
        actualStages$Arr[problem] = service.loadStages();
        /**///console.log('SPEC - actualStages$: ' + actualStages$Arr[problem]);
        actualStages$Arr[problem].subscribe({
          next: () => {
            /**///console.log('SPEC - got data somehow');
            fail(`loadStages() did not encounter TypeError`);
          },
          error: (error) => {
            /**///console.log(`SPEC - ${error}`);
            expect(error instanceof TypeError).toBeTruthy(`error instanceof TypeError`);
          }
        });
        /**///console.log('SPEC - tick started');
        tick();
        /**///console.log('SPEC - tick finished');
      }
    }));

    afterEach(() => {
    });
  });
});
