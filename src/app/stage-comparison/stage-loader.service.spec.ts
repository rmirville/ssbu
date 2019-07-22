import { async } from '@angular/core/testing';
import { asyncData, asyncError } from '../testing/async-observable-helpers';

import { StageLoaderService } from './stage-loader.service';

import * as STAGE_LIST from './spec/stage-list';
import * as STAGE_DETAILS from './spec/stage-details';
import * as STAGES from './spec/stages';

describe('StageLoaderService', () => {
  let service: StageLoaderService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new StageLoaderService(<any> httpClientSpy);
  });

  describe('loadStages()', () => {
    it(`should return an Observable Stages array composed of stage list data and stage details data`, async(() => {
      let stageList = STAGE_LIST.PRINCESS_PEACH_CASTLE;
      /**///console.log('SPEC - stageList: ' + JSON.stringify(stageList));
      let stageDetails = STAGE_DETAILS.PRINCESS_PEACH_CASTLE;
      let expectedStages = STAGES.PRINCESS_PEACH_CASTLE;

      httpClientSpy.get.and.returnValues(asyncData(stageList), asyncData(stageDetails));

      let actualStagesObs = service.loadStages();
      /**///console.log('SPEC - obtained observable from service.loadStages()');

      actualStagesObs.subscribe((actualStages) => {
        /**///console.log('SPEC - actualStages: ' + JSON.stringify(actualStages));
        expect(actualStages.length).toBe(1);
        expect(actualStages).toEqual(expectedStages);
        expect(httpClientSpy.get.calls.count()).toBe(2);
      });
      /**///console.log('SPEC - subscribed to service.loadStages()');
    }));

    afterEach(() => {
    });
  });
});
