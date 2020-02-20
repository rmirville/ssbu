import { isStageDimensionsBinParams } from './stage-dimensions-bin-params.model';
import * as STAGE_BIN_PARAMS from './mocks/stage-dimensions-bin-params';

fdescribe('StageDimensionsBinParamsModel', () => {
  describe('isStageDimensionsBinParams()', () => {

    function _testBadData(problem) {
      /**/
      // console.log(`=== SPEC - CHECK STAGE DIMENSIONS RANGE DATA TYPE (${problem}) ===`);
      // console.log(`BAD_DATA[${problem}]: ${JSON.stringify(STAGE_DIMENSIONS_RANGE.BAD_DATA[problem])}`);
      expect(isStageDimensionsBinParams(STAGE_BIN_PARAMS.BAD_DATA[problem])).toBe(false);
    }

    it('should treat a valid stage dimensions bin params as StageDimenionsBinParams', () => {
      expect(isStageDimensionsBinParams(STAGE_BIN_PARAMS.VALID)).toBe(true);
    });

    describe('stage dimensions bin params validation', () => {

      it('should reject bin params with a non-numerical value', () => {
        _testBadData('valueNotNumber'); 
      });

      it('should reject bin params with a non-numerical bin', () => {
        _testBadData('binNotNumber');
      });

      it('should reject bin params with a non-integer bin', () => {
        _testBadData('binNotInteger');
      });

      it('should reject bin params with a negative bin', () => {
        _testBadData('binNegative');
      });

      it('should reject bin params with a non-boolean min', () => {
        _testBadData('minNotBoolean');
      });

      it('should reject bin params with a non-boolean max', () => {
        _testBadData('maxNotBoolean');
      });

    });

  });
});
