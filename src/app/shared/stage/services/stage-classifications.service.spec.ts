import { TestBed, async } from '@angular/core/testing';

import { StageClassificationsService } from './stage-classifications.service';

import { isStageClassifications } from '../models/stage-classifications.model';
import { isStageSelectInfo } from '../models/stage-select-info.model';

import * as STAGE_CLASSES from '../models/mocks/stage-classifications';
import * as STAGE_CLASSES_INPUT from '../models/mocks/stage-classifications-input';
import * as STAGE_CLASSES_OUTPUT from '../models/mocks/stage-classifications-output';

fdescribe('StageClassificationsService', () => {

  let service: StageClassificationsService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(StageClassificationsService);
    expect(service).toBeTruthy();
  });

  describe('classifyStages()', () => {

    beforeEach(() => {
      service = new StageClassificationsService();
    });

    describe('basic functionality', () => {

      it('should produce a StageClassifications array when fed only gameName', async(() => {

        const input = STAGE_CLASSES_INPUT.GAME_NAME_ONLY;
        let actualClassifiedStages$ = service.classifyStages(input);

        actualClassifiedStages$.subscribe(actualClassifiedStages => {

          expect(actualClassifiedStages.length).withContext('There should be items in the array').toEqual(input.length);
          actualClassifiedStages.forEach(actualClassifiedStage => {
            expect(isStageClassifications(actualClassifiedStage)).toEqual(true);
          });

        });

      }));

      it('should produce a StageSelectInfo array when fed only gameName and name', async(() => {
        
        const input = STAGE_CLASSES_INPUT.GAME_NAME_NAME;
        let actualClassifiedStages$ = service.classifyStages(input);

        actualClassifiedStages$.subscribe(actualClassifiedStages => {

          expect(actualClassifiedStages.length).withContext('There should be items in the array').toEqual(input.length);
          actualClassifiedStages.forEach(actualClassifiedStage => {
            expect(isStageSelectInfo(actualClassifiedStage)).toEqual(true);
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

    });
    
    describe('data validation', () => {

      xit('should reject parameters that are not arrays');
      xit('should reject parameters that are not arrays of objects');
      xit('should reject arrays of objects that have no gameName attribute');
      xit(`should reject arrays of objects with gameNames not in the service's datastore`);
      xit('should reject arrays of objects with non-string gameNames');

    });
  });
});
