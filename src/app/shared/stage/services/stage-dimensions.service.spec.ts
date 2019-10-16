import { async } from '@angular/core/testing';

import { StageDimensionsService } from './stage-dimensions.service';

import * as STAGES from '../models/mocks/stage-dimensions-raw';
import * as STAGE_DIMENSIONS from '../models/mocks/stage-dimensions';

describe('StageFormatterService', () => {
  let service: StageDimensionsService;

  describe('getDimensionsFull()', () => {

    beforeEach(() => {
      service = new StageDimensionsService();
    });

    it('takes a stage and returns an object with basic stage dimensions', async(() => {
      const stages = STAGES.TWO_STAGES;
      const expectedDimensions = STAGE_DIMENSIONS.TWO_STAGES;
      let formattedDimensions$ = service.getDimensionsFull(stages);
      formattedDimensions$.subscribe((actualDimensions) => {
        expect(actualDimensions.length).toEqual(2);
        for (let i = 0; i < 2; i++) {
          expect(actualDimensions[i]["name"]).toEqual(expectedDimensions[i]["name"]);
          expect(actualDimensions[i]["gameName"]).toEqual(expectedDimensions[i]["gameName"]);
          expect(actualDimensions[i]["blastzoneWidth"]).toBeCloseTo(expectedDimensions[i]["blastzoneWidth"], 6);
          expect(actualDimensions[i]["stageLength"]).toBeCloseTo(expectedDimensions[i]["stageLength"], 6);
          expect(actualDimensions[i]["offStageDistance"]).toBeCloseTo(expectedDimensions[i]["offStageDistance"], 6);
          expect(actualDimensions[i]["ceilingHeight"]).toBeCloseTo(expectedDimensions[i]["ceilingHeight"], 6);
        }
      });
    }));

    // TODO: data validation

  });

  // TODO: getDimensionsHalf(stages: Stage[])

  // TODO: getDimensionsHalf(stages: Stage[], groups: number)
});
