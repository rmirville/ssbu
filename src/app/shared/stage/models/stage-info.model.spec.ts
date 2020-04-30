import { isStageInfo } from './stage-info.model';
import * as STAGE_INFO from './mocks/stage-info';

describe('StageInfoModel', () => {

  describe('isStageInfo()', () => {
    it('should treat a valid stage info object as StageInfo', () => {
      const validInfo = STAGE_INFO.VALID;
      expect(isStageInfo(validInfo)).toBe(true);
    });

    it('should reject an info object with a non-string name', () => {
      const invalidInfo = STAGE_INFO.BAD_DATA_NAME;
      expect(isStageInfo(invalidInfo)).toBe(false);
    });

    it('should reject an info object with a non-string gameName', () => {
      const invalidInfo = STAGE_INFO.BAD_DATA_GAMENAME;
      expect(isStageInfo(invalidInfo)).toBe(false);
    });
  });

});