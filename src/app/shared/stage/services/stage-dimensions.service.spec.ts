import { async } from '@angular/core/testing';

import { StageDimensionsService } from './stage-dimensions.service';

import { isStageDimensionsSet } from '../models/stage-dimensions-set.model';
import { StageDimensionsRange } from '../models/stage-dimensions-range.model';

import * as STAGES from '../models/mocks/stage-dimensions-raw';
import * as STAGE_DIMENSIONS_SET from '../models/mocks/stage-dimensions-set';

describe('StageFormatterService', () => {
  let service: StageDimensionsService;

  describe('getDimensionsFull()', () => {

    beforeEach(() => {
      service = new StageDimensionsService();
    });

    function _testRange(actualRange: StageDimensionsRange, expectedRange: StageDimensionsRange) {
      expect(actualRange['min']).toBeCloseTo(expectedRange['min'], 6);
      expect(actualRange['max']).toBeCloseTo(expectedRange['max'], 6);
      expect(actualRange['range']).toBeCloseTo(expectedRange['range'], 6);
    }

    it('takes an array of stages and returns their set of stage dimensions', async(() => {
      const stages = STAGES.TWO_STAGES;
      const expectedDimensionsSet = STAGE_DIMENSIONS_SET.TWO_STAGE_SET;
      const expectedDimensions = expectedDimensionsSet.dimensions;
      const expectedRanges = expectedDimensionsSet.ranges;
      let formattedDimensions$ = service.getDimensionsFull(stages);
      formattedDimensions$.subscribe((actualDimensionsSet) => {

        expect(isStageDimensionsSet(actualDimensionsSet)).toBe(true);
        
        const actualDimensions = actualDimensionsSet['dimensions'];
        expect(actualDimensions.length).toEqual(2);
        for (let i = 0; i < 2; i++) {
          expect(actualDimensions[i]['name']).toEqual(expectedDimensions[i]['name']);
          expect(actualDimensions[i]['gameName']).toEqual(expectedDimensions[i]['gameName']);
          expect(actualDimensions[i]['blastzoneWidth']).toBeCloseTo(expectedDimensions[i]['blastzoneWidth'], 6);
          expect(actualDimensions[i]['stageLength']).toBeCloseTo(expectedDimensions[i]['stageLength'], 6);
          expect(actualDimensions[i]['offStageDistance']).toBeCloseTo(expectedDimensions[i]['offStageDistance'], 6);
          expect(actualDimensions[i]['ceilingHeight']).toBeCloseTo(expectedDimensions[i]['ceilingHeight'], 6);
        }

        const actualRanges = actualDimensionsSet['ranges'];
        _testRange(actualRanges['blastzoneWidth'], expectedRanges['blastzoneWidth']);
        _testRange(actualRanges['stageLength'], expectedRanges['stageLength']);
        _testRange(actualRanges['offStageDistance'], expectedRanges['offStageDistance']);
        _testRange(actualRanges['ceilingHeight'], expectedRanges['ceilingHeight']);
      });
    }));

    // TODO: data validation

  });

  // TODO: getDimensionsHalf(stages: Stage[])

  // TODO: getDimensionsHalf(stages: Stage[], groups: number)
});
