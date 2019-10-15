import { async } from '@angular/core/testing';

import { StageDimensionsService } from './stage-dimensions.service';

import * as STAGES from '../models/mocks/stage-dimensions-raw';
import * as STAGE_DIMENSIONS from '../models/mocks/stage-dimensions';

describe('StageFormatterService', () => {
  let service: StageDimensionsService;

  describe('', () => {

    beforeEach(() => {
      service = new StageDimensionsService();
    });

    it('takes a stage and returns an object with basic stage dimensions', async(() => {
      const rawStages = STAGES.TWO_STAGES;
      const expectedFormattedStages = STAGE_DIMENSIONS.TWO_STAGES;
      let formattedStages$ = service.formatFullNumber(rawStages);
      formattedStages$.subscribe((actualFormattedStages) => {
        expect(actualFormattedStages.length).toEqual(2);
        for (let i = 0; i < 2; i++) {
          expect(actualFormattedStages[i]["name"]).toEqual(expectedFormattedStages[i]["name"]);
          expect(actualFormattedStages[i]["gameName"]).toEqual(expectedFormattedStages[i]["gameName"]);
          expect(actualFormattedStages[i]["blastzoneWidth"]).toBeCloseTo(expectedFormattedStages[i]["blastzoneWidth"], 6);
          expect(actualFormattedStages[i]["stageLength"]).toBeCloseTo(expectedFormattedStages[i]["stageLength"], 6);
          expect(actualFormattedStages[i]["offStageDistance"]).toBeCloseTo(expectedFormattedStages[i]["offStageDistance"], 6);
          expect(actualFormattedStages[i]["ceilingHeight"]).toBeCloseTo(expectedFormattedStages[i]["ceilingHeight"], 6);
        }
      });
    }));

  });
});
