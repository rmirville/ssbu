import { isStageMiscInfo } from './stage-misc-info.model';
import * as STAGE_MISC_INFO from './mocks/stage-misc-info';

describe('StageMiscInfoModel', () => {

  describe('isStageMiscInfo()', () => {
    it('should treat a valid stage info object as StageInfo', () => {
      const validInfo = STAGE_MISC_INFO.VALID;
      expect(isStageMiscInfo(validInfo)).toBe(true);
    });

    it('should treat an object with a gameName property and extra properties as StageInfo', () => {
      const validInfo = STAGE_MISC_INFO.EXTRA_PROPERTIES;
      expect(isStageMiscInfo(validInfo)).toBe(true);
    });

    it('should reject an info object with a non-string gameName', () => {
      const invalidInfo = STAGE_MISC_INFO.BAD_DATA_GAMENAME;
      expect(isStageMiscInfo(invalidInfo)).toBe(false);
    });

    it('should reject an info object with a non-string ame', () => {
      const invalidInfo = STAGE_MISC_INFO.BAD_DATA_NAME;
      expect(isStageMiscInfo(invalidInfo)).toBe(false);
    });
  });

});