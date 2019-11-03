import { isStageSelectInfo } from './stage-select-info.model';
import * as STAGE_SELECTIONS from './mocks/stage-select-info';

describe('StageSelectInfoModel', () => {

  function _testBadData(problem) {
    /**/
    // console.log(`=== SPEC - CHECK STAGE SELECT INFO DATA TYPE (${problem}) ===`);
    // console.log(`BAD_DATA[${problem}]: ${JSON.stringify(STAGE_SELECTIONS.BAD_DATA[problem])}`);
    expect(isStageSelectInfo(STAGE_SELECTIONS.BAD_DATA[problem])).toBe(false);
  }
  describe('isStageSelectInfo()', () => {
    it('should treat a valid stage info object as StageSelectInfo', () => {
      let validInfo = STAGE_SELECTIONS.VALID;
      expect(isStageSelectInfo(validInfo)).toBe(true);
    });
    
    describe('data validation', () => {

      it('should reject an info object with a non-string name', () => {
        _testBadData('nameNotString');
      });

      it('should reject an info object with a non-string gameName', () => {
        _testBadData('gameNameNotString');
      });

      it('should reject an info object with a non-string series', () => {
        _testBadData('seriesNotString');
      });

      it('should reject an info object with a non-numerical tourneyPresence', () => {
        _testBadData('tourneyPresenceNotNumber');
      });

    });
  });
});