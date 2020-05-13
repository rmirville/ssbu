import { isStageMiscInfo, isStageMiscInfoArray } from './stage-misc-info.model';
import * as STAGE_MISC_INFO from './mocks/stage-misc-info';

describe('StageMiscInfoModel', () => {

  describe('isStageMiscInfo()', () => {
    it('should treat a valid stage info object as StageMiscInfo', () => {
      const validInfo = STAGE_MISC_INFO.VALID;
      expect(isStageMiscInfo(validInfo)).toBe(true);
    });

    it('should treat an object with a gameName property and extra properties as StageMiscInfo', () => {
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

  describe('isStageMiscInfoArray()', () => {
    it('should pass a valid StageMiscInfo array', () => {
      const validArr = STAGE_MISC_INFO.ARRAY_VALID;
      expect(isStageMiscInfoArray(validArr)).toBe(true);
    });

    it('should reject an undefined value', () => {
      const invalidArr = undefined;
      expect(isStageMiscInfoArray(invalidArr)).toBe(false);
    });

    it('should reject a null value', () => {
      const invalidArr = null;
      expect(isStageMiscInfoArray(invalidArr)).toBe(false);
    });

    it('should reject a non-array value', () => {
      const invalidArr = STAGE_MISC_INFO.ARRAY_NOTARR;
      expect(isStageMiscInfoArray(invalidArr)).toBe(false);
    });

    it('should reject an array with non-StageMiscInfo items', () => {
      const invalidArr = STAGE_MISC_INFO.ARRAY_INVALIDITEMS;
      expect(isStageMiscInfoArray(invalidArr)).toBe(false);
    });
  });

});