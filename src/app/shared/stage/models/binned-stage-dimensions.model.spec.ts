import { isBinnedStageDimensions } from './binned-stage-dimensions.model';
import * as BIN_STAGE_DIMENSIONS from './mocks/binned-stage-dimensions';

describe('BinnedStageDimensionsModel', () => {
  describe('isBinnedStageDimensions()', () => {

    function _testBadData(problem) {
      /**/
      // console.log(`=== SPEC - CHECK STAGE DIMENSIONS RANGE DATA TYPE (${problem}) ===`);
      // console.log(`BAD_DATA[${problem}]: ${JSON.stringify(STAGE_DIMENSIONS_RANGE.BAD_DATA[problem])}`);
      expect(isBinnedStageDimensions(BIN_STAGE_DIMENSIONS.BAD_DATA[problem])).toBe(false);
    }

    it('should treat a valid binned stage dimensions as BinnedStageDimenions', () => {
      expect(isBinnedStageDimensions(BIN_STAGE_DIMENSIONS.VALID)).toBe(true);
    });

    describe('binned stage dimensions validation', () => {

      it('should reject binned dimensions with a non-string name', () => {
        _testBadData('nameNotString');
      });

      it('should reject binned dimensions with a non-string gameName', () => {
        _testBadData('gameNameNotString');
      });

      it('should reject binned dimensions with a non-bin params blastzoneWidth', () => {
        _testBadData('blastzoneWidthNotBinParams');
      });

      it('should reject binned dimensions with a non-bin params stageLength', () => {
        _testBadData('stageLengthNotBinParams');
      });

      it('should reject binned dimensions with a non-bin params offStageDistance', () => {
        _testBadData('offStageDistanceNotBinParams');
      });

      it('should reject binned dimensions with a non-bin params ceilingHeight', () => {
        _testBadData('ceilingHeightNotBinParams');
      });

    });
  });
});
