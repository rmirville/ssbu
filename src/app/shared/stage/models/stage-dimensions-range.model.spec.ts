import { isStageDimensionsRange } from './stage-dimensions-range.model';
import * as STAGE_DIMENSIONS_RANGE from './mocks/stage-dimensions-range';

describe('StageDimensionsRangeModel', () => {
  describe('isStageDimensionsRange()', () => {

    function _testBadData(problem) {
      /**/
      // console.log(`=== SPEC - CHECK STAGE DIMENSIONS RANGE DATA TYPE (${problem}) ===`);
      // console.log(`BAD_DATA[${problem}]: ${JSON.stringify(STAGE_DIMENSIONS_RANGE.BAD_DATA[problem])}`);
      expect(isStageDimensionsRange(STAGE_DIMENSIONS_RANGE.BAD_DATA[problem])).toBe(false);
    }

    it('should treat a valid stage dimensions range as StageDimenionsRange', () => {
      expect(isStageDimensionsRange(STAGE_DIMENSIONS_RANGE.VALID)).toBe(true);
    });

    describe('stage dimensions range validation', () => {

      it('should reject a range with a non-numerical min', () => {
        _testBadData('minNotNumber'); 
      });

      it('should reject a range with a non-numerical max', () => {
        _testBadData('maxNotNumber');
      });

      it('should reject a range with a non-numerical range', () => {
        _testBadData('rangeNotNumber');
      });

      it('should reject a range with a negative range', () => {
        _testBadData('rangeNegative');
      })

      it('should reject a range where the min is greater than the max', () => {
        _testBadData('minGreaterThanMax');
      });

    });

  });
});
