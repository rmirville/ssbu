import { isBinnedStageDimensionsSet } from './binned-stage-dimensions-set.model';
import * as BINNED_DIMENSIONS_SETS from './mocks/binned-stage-dimensions-set';

describe('BinnedStageDimensionsSetModel', () => {
  describe('isBinnedStageDimensionsSet()', () => {

    function _testBadData(problem) {
      expect(isBinnedStageDimensionsSet(BINNED_DIMENSIONS_SETS.BAD_DATA[problem])).toBe(false);
    }

    it('should treat a valid stage dimensions set as StageDimensionsSet', () => {
      // console.log(`VALID: ${JSON.stringify(BINNED_DIMENSIONS_SETS.VALID)}`);
      expect(isBinnedStageDimensionsSet(BINNED_DIMENSIONS_SETS.VALID)).toBe(true);
    });

    describe('binned stage dimensions set validation', () => {

      it('should reject an undefined value', () => {
        const badValue = undefined;
        expect(isBinnedStageDimensionsSet(badValue)).toBe(false);
      });

      it('should reject a null value', () => {
        const badValue = null;
        expect(isBinnedStageDimensionsSet(badValue)).toBe(false);
      });

      it('should reject a set with a non-number bins property', () => {
        _testBadData('binsNotNumber');
      });

      it('should reject a set with a non-integer bins property', () => {
        _testBadData('binsNotInteger');
      });

      it('should reject a set with a non-positive bins property', () => {
        _testBadData('binsNotPositive');
      });

      it('should reject a set with a non-array dimensions property', () => {
        _testBadData('dimensionsNotArray');
      });

      it('should reject a set with a dimensions property not containing BinnedStageDimensions', () => {
        _testBadData('dimensionsNotBinnedStageDimensions');
      });

      it('should reject a set with a non-StageDimensionsRange blastzoneWidth property', () => {
        _testBadData('blastzoneWidthNotRange');
      });

      it('should reject a set with a non-StageDimensionsRange stageLength property', () => {
        _testBadData('stageLengthNotRange');
      });

      it('should reject a set with a non-StageDimensionsRange offStageDistance property', () => {
        _testBadData('offStageDistanceNotRange');
      });

      it('should reject a set with a non-StageDimensionsRange ceilingHeight property', () => {
        _testBadData('ceilingHeighthNotRange');
      });

    });

  });
});
