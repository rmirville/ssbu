import { BinnedStageDimensions, isBinnedStageDimensions } from './binned-stage-dimensions.model';
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

  describe('sortBlastzoneDesc()', () => {
    it('returns a positive number when the first blastzone width is smaller than the second', () => {
      const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_BLAST_POS.dimA;
      const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_BLAST_POS.dimB;

      const actualNum: number = BinnedStageDimensions.sortBlastzoneDesc(dimA, dimB);
      expect(actualNum).toBeGreaterThan(0);
    });

    it('returns a negative number when the first blastzone width is greater than the second', () => {
      const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_BLAST_NEG.dimA;
      const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_BLAST_NEG.dimB;

      const actualNum: number = BinnedStageDimensions.sortBlastzoneDesc(dimA, dimB);
      expect(actualNum).toBeLessThan(0);
    });

    describe('blastzone widths are equal', () => {
      it('returns a positive number when the first stage length is smaller than the second', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_STAGELENGTH_POS.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_STAGELENGTH_POS.dimB;

        const actualNum: number = BinnedStageDimensions.sortBlastzoneDesc(dimA, dimB);
        expect(actualNum).toBeGreaterThan(0);
      });

      it('returns a negative number when the first stage length is greater than the second', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_STAGELENGTH_NEG.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_STAGELENGTH_NEG.dimB;

        const actualNum: number = BinnedStageDimensions.sortBlastzoneDesc(dimA, dimB);
        expect(actualNum).toBeLessThan(0);
      });
    });

    describe('blastzone widths and stage lengths are equal', () => {
      it('returns a positive number when the first ceiling height is smaller than the second', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_CEILING_POS.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_CEILING_POS.dimB;

        const actualNum: number = BinnedStageDimensions.sortBlastzoneDesc(dimA, dimB);
        expect(actualNum).toBeGreaterThan(0);
      });

      it('returns a negative number when the first ceiling height is greater than the second', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_CEILING_NEG.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_CEILING_NEG.dimB;

        const actualNum: number = BinnedStageDimensions.sortBlastzoneDesc(dimA, dimB);
        expect(actualNum).toBeLessThan(0);
      });

      it('returns 0 when the ceiling height are equal', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_EQUAL.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_EQUAL.dimB;

        const actualNum: number = BinnedStageDimensions.sortBlastzoneDesc(dimA, dimB);
        expect(actualNum).toEqual(0);
      });
    });

    describe('data validation', () => {

      it('rejects a non-BinnedStageDimensions parameter a', () => {
        const badData = {
          invalidDim: BIN_STAGE_DIMENSIONS.SORTBLASTDESC_INVALID_A.invalidDim
        };
        const propName: string = 'invalidDim';
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_INVALID_A.dimB;
        let errorThrown: boolean = true;

        expect(() => {
          const actualNum: number = BinnedStageDimensions.sortBlastzoneDesc(badData[propName], dimB);
        }).withContext('should throw an error').toThrow(new TypeError('One of the arguments was not of type BinneDstageDimensions'));
      });

      it('rejects a non-BinnedStageDimensions parameter b', () => {
        const badData = {
          invalidDim: BIN_STAGE_DIMENSIONS.SORTBLASTDESC_INVALID_A.invalidDim
        };
        const propName: string = 'invalidDim';
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_INVALID_B.dimA;

        expect(() => {
          const actualNum: number = BinnedStageDimensions.sortBlastzoneDesc(dimA, badData[propName]);
        }).withContext('should throw an error').toThrow(new TypeError('One of the arguments was not of type BinneDstageDimensions'));
      });

    });
  });
});
