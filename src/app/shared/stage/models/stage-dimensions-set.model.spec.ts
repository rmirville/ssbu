import { isStageDimensionsSet } from './stage-dimensions-set.model';
import * as STAGE_DIMENSIONS_SETS from './mocks/stage-dimensions-set';

describe('StageDimensionsSetModel', () => {
  describe('isStageDimensionsSet()', () => {

    function _testBadData(problem) {
      /**/
      // console.log(`=== SPEC - CHECK STAGE DIMENSIONS RANGE DATA TYPE (${problem}) ===`);
      // console.log(`BAD_DATA[${problem}]: ${JSON.stringify(STAGE_DIMENSIONS_SETS.BAD_DATA[problem])}`);
      // console.log(`BAD_DATA[${problem}].ranges: ${JSON.stringify(STAGE_DIMENSIONS_SETS.BAD_DATA[problem].ranges)}`);
      expect(isStageDimensionsSet(STAGE_DIMENSIONS_SETS.BAD_DATA[problem])).toBe(false);
    }

    it('should treat a valid stage dimensions set as StageDimensionsSet', () => {
      // console.log(`VALID: ${JSON.stringify(STAGE_DIMENSIONS_SETS.VALID)}`);
      expect(isStageDimensionsSet(STAGE_DIMENSIONS_SETS.VALID)).toBe(true);
    });

    describe('stage dimensions set validation', () => {

      it('should reject an undefined value', () => {
        const badValue = undefined;
        expect(isStageDimensionsSet(badValue)).toBe(false);
      });

      it('should reject a null value', () => {
        const badValue = null;
        expect(isStageDimensionsSet(badValue)).toBe(false);
      });

      it('should reject a set with a non-array dimensions property', () => {
        _testBadData('dimensionsNotArray');
      });

      it('should reject a set with a dimensions property not containing StageDimensions', () => {
        _testBadData('dimensionsNotStageDimensions');
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
