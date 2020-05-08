import { isStageSummary } from './stage-summary.model';
import * as STAGE_SUMMARY from './mocks/stage-summary';

describe('StageSummaryModel', () => {
  describe('isStageSummary()', () => {

    it('should treat a valid stage summary as StageSummary', () => {
      expect(isStageSummary(STAGE_SUMMARY.VALID)).toBe(true);
    });

    describe('data validation', () => {

      it('should reject a null value', () => {
        const badValue = null;
        expect(isStageSummary(badValue)).toBe(false);
      });

      it('should reject an undefined value', () => {
        const badValue = undefined;
        expect(isStageSummary(badValue)).toBe(false);
      });

      it('should reject a non-string name', () => {
        const badValue = STAGE_SUMMARY.BAD_DATA["nameNotString"];
        expect(isStageSummary(badValue)).toBe(false);
      });

      it('should reject a non-string gameName', () => {
        const badValue = STAGE_SUMMARY.BAD_DATA["gameNameNotString"];
        expect(isStageSummary(badValue)).toBe(false);
      });

      it('should reject a non-numerical Type', () => {
        const badValue = STAGE_SUMMARY.BAD_DATA["typeNotNumber"];
        expect(isStageSummary(badValue)).toBe(false);
      });

    });

  });
});
