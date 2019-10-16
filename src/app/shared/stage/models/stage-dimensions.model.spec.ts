import { StageDimensions, isStageDimensions } from './stage-dimensions.model';
import * as STAGE_DIMENSIONS_RAW from './mocks/stage-dimensions-raw';
import * as STAGE_DIMENSIONS from './mocks/stage-dimensions';

describe('StageDimensionsModel', () => {
  describe('isStageDimensions()', () => {

    function _testBadData(problem) {
      /**/
      // console.log(`=== SPEC - CHECK STAGE DIMENSIONS DATA TYPE (${problem}) ===`);
      // console.log(`BAD_DATA[${problem}]: ${JSON.stringify(STAGE_DIMENSIONS.BAD_DATA[problem])}`);
      expect(isStageDimensions(STAGE_DIMENSIONS.BAD_DATA[problem])).toBe(false);
    }

    it('should treat valid stage dimensions as StageDimenions', () => {
      expect(isStageDimensions(STAGE_DIMENSIONS.TOWN)).toBe(true);
    });

    describe('stage dimensions validation', () => {

      it('should reject dimensions with a non-string name', () => {
        _testBadData('nameNotString'); 
      });

      it('should reject dimensions with a non-string game name', () => {
        _testBadData('gameNameNotString');
      });

      it('should reject dimensions with a non-number blastzone width', () => {
        _testBadData('blastzoneWidthNotNumber');
      });

      it('should reject dimensions with a non-number stage length', () => {
        _testBadData('stageLengthNotNumber');
      });

      it('should reject dimensions with a non-number off-stage distance', () => {
        _testBadData('offStageDistanceNotNumber');
      });

      it('should reject dimensions with a non-number ceiling height', () => {
        _testBadData('ceilingHeightNotNumber');
      });
    
    });

  });
});
