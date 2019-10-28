import { isStagePieceMap } from './stage-piece-map.model';
import * as STAGE_MAP from './mocks/stage-piece-map';

describe('StagePieceMapModel', () => {
  describe('isStagePieceMap()', () => {

    function _testBadData(problem) {
      /**/
      // console.log(`=== SPEC - CHECK STAGE DIMENSIONS RANGE DATA TYPE (${problem}) ===`);
      // console.log(`BAD_DATA[${problem}]: ${JSON.stringify(STAGE_DIMENSIONS_RANGE.BAD_DATA[problem])}`);
      expect(isStagePieceMap(STAGE_MAP.BAD_DATA[problem])).toBe(false);
    }

    it('should treat a valid stage dimensions range as StageDimenionsRange', () => {
      expect(isStagePieceMap(STAGE_MAP.VALID)).toBe(true);
    });

    describe('stage dimensions range validation', () => {

      it('should reject a range with a non-string lvd', () => {
        _testBadData('lvdNotString'); 
      });

      it('should reject a range with a non-string pieceName', () => {
        _testBadData('pieceNameNotString');
      });

    });

  });
});
