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
      it('returns a positive number when the first name comes after the second alphabetically', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_NAME_POS.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_NAME_POS.dimB;

        const actualNum: number = BinnedStageDimensions.sortBlastzoneDesc(dimA, dimB);
        expect(actualNum).toBeGreaterThan(0);
      });

      it('returns a negative number when the first name comes before the second alphabetically', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_NAME_NEG.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_NAME_NEG.dimB;

        const actualNum: number = BinnedStageDimensions.sortBlastzoneDesc(dimA, dimB);
        expect(actualNum).toBeLessThan(0);
      });

      it('returns 0 when the names are equal', () => {
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
        }).withContext('should throw an error').toThrow(new TypeError('One of the arguments was not of type BinnedStageDimensions'));
      });

      it('rejects a non-BinnedStageDimensions parameter b', () => {
        const badData = {
          invalidDim: BIN_STAGE_DIMENSIONS.SORTBLASTDESC_INVALID_A.invalidDim
        };
        const propName: string = 'invalidDim';
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTBLASTDESC_INVALID_B.dimA;

        expect(() => {
          const actualNum: number = BinnedStageDimensions.sortBlastzoneDesc(dimA, badData[propName]);
        }).withContext('should throw an error').toThrow(new TypeError('One of the arguments was not of type BinnedStageDimensions'));
      });

    });
  });

  describe('sortStageLengthDesc()', () => {
    it('returns a positive number when the first stage length is smaller than the second', () => {
      const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_STAGELENGTH_POS.dimA;
      const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_STAGELENGTH_POS.dimB;

      const actualNum: number = BinnedStageDimensions.sortStageLengthDesc(dimA, dimB);
      expect(actualNum).toBeGreaterThan(0);
    });

    it('returns a negative number when the first stage length is greater than the second', () => {
      const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_STAGELENGTH_NEG.dimA;
      const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_STAGELENGTH_NEG.dimB;

      const actualNum: number = BinnedStageDimensions.sortStageLengthDesc(dimA, dimB);
      expect(actualNum).toBeLessThan(0);
    });

    describe('stage lengths are equal', () => {
      it('returns a positive number when the first name comes before the second alphabetically', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_NAME_POS.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_NAME_POS.dimB;

        const actualNum: number = BinnedStageDimensions.sortStageLengthDesc(dimA, dimB);
        expect(actualNum).toBeGreaterThan(0);
      });

      it('returns a negative number when the first name comes after the second alphabetically', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_NAME_NEG.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_NAME_NEG.dimB;

        const actualNum: number = BinnedStageDimensions.sortStageLengthDesc(dimA, dimB);
        expect(actualNum).toBeLessThan(0);
      });

      it('returns 0 when the names are equal', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_EQUAL.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_EQUAL.dimB;

        const actualNum: number = BinnedStageDimensions.sortStageLengthDesc(dimA, dimB);
        expect(actualNum).toEqual(0);
      });
    });

    describe('data validation', () => {

      it('rejects a non-BinnedStageDimensions parameter a', () => {
        const badData = {
          invalidDim: BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_INVALID_A.invalidDim
        };
        const propName: string = 'invalidDim';
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_INVALID_A.dimB;
        let errorThrown: boolean = true;

        expect(() => {
          const actualNum: number = BinnedStageDimensions.sortStageLengthDesc(badData[propName], dimB);
        }).withContext('should throw an error').toThrow(new TypeError('One of the arguments was not of type BinnedStageDimensions'));
      });

      it('rejects a non-BinnedStageDimensions parameter b', () => {
        const badData = {
          invalidDim: BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_INVALID_A.invalidDim
        };
        const propName: string = 'invalidDim';
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTSTAGELENGTHDESC_INVALID_B.dimA;

        expect(() => {
          const actualNum: number = BinnedStageDimensions.sortStageLengthDesc(dimA, badData[propName]);
        }).withContext('should throw an error').toThrow(new TypeError('One of the arguments was not of type BinnedStageDimensions'));
      });

    });
  });

  describe('sortOffStageDesc()', () => {
    it('returns a positive number when the first off-stage distance is smaller than the second', () => {
      const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_OFFSTAGE_POS.dimA;
      const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_OFFSTAGE_POS.dimB;

      const actualNum: number = BinnedStageDimensions.sortOffStageDesc(dimA, dimB);
      expect(actualNum).toBeGreaterThan(0);
    });

    it('returns a negative number when the first off-stage distance is greater than the second', () => {
      const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_OFFSTAGE_NEG.dimA;
      const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_OFFSTAGE_NEG.dimB;

      const actualNum: number = BinnedStageDimensions.sortOffStageDesc(dimA, dimB);
      expect(actualNum).toBeLessThan(0);
    });

    describe('off-stage distances are equal', () => {
      it('returns a positive number when the first name comes before the second alphabetically', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_NAME_POS.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_NAME_POS.dimB;

        const actualNum: number = BinnedStageDimensions.sortOffStageDesc(dimA, dimB);
        expect(actualNum).toBeGreaterThan(0);
      });

      it('returns a negative number when the first name comes after the second alphabetically', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_NAME_NEG.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_NAME_NEG.dimB;

        const actualNum: number = BinnedStageDimensions.sortOffStageDesc(dimA, dimB);
        expect(actualNum).toBeLessThan(0);
      });

      it('returns 0 when the names are equal', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_EQUAL.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_EQUAL.dimB;

        const actualNum: number = BinnedStageDimensions.sortOffStageDesc(dimA, dimB);
        expect(actualNum).toEqual(0);
      });
    });

    describe('data validation', () => {

      it('rejects a non-BinnedStageDimensions parameter a', () => {
        const badData = {
          invalidDim: BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_INVALID_A.invalidDim
        };
        const propName: string = 'invalidDim';
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_INVALID_A.dimB;
        let errorThrown: boolean = true;

        expect(() => {
          const actualNum: number = BinnedStageDimensions.sortOffStageDesc(badData[propName], dimB);
        }).withContext('should throw an error').toThrow(new TypeError('One of the arguments was not of type BinnedStageDimensions'));
      });

      it('rejects a non-BinnedStageDimensions parameter b', () => {
        const badData = {
          invalidDim: BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_INVALID_A.invalidDim
        };
        const propName: string = 'invalidDim';
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTOFFSTAGEDESC_INVALID_B.dimA;

        expect(() => {
          const actualNum: number = BinnedStageDimensions.sortOffStageDesc(dimA, badData[propName]);
        }).withContext('should throw an error').toThrow(new TypeError('One of the arguments was not of type BinnedStageDimensions'));
      });

    });
  });

  describe('sortCeilingDesc()', () => {
    it('returns a positive number when the first ceiling height is smaller than the second', () => {
      const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_CEILING_POS.dimA;
      const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_CEILING_POS.dimB;

      const actualNum: number = BinnedStageDimensions.sortCeilingDesc(dimA, dimB);
      expect(actualNum).toBeGreaterThan(0);
    });

    it('returns a negative number when the first ceiling height is greater than the second', () => {
      const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_CEILING_NEG.dimA;
      const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_CEILING_NEG.dimB;

      const actualNum: number = BinnedStageDimensions.sortCeilingDesc(dimA, dimB);
      expect(actualNum).toBeLessThan(0);
    });

    describe('ceiling heights are equal', () => {
      it('returns a positive number when the first name comes before the second alphabetically', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_NAME_POS.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_NAME_POS.dimB;

        const actualNum: number = BinnedStageDimensions.sortCeilingDesc(dimA, dimB);
        expect(actualNum).toBeGreaterThan(0);
      });

      it('returns a negative number when the first name comes after the second alphabetically', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_NAME_NEG.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_NAME_NEG.dimB;

        const actualNum: number = BinnedStageDimensions.sortCeilingDesc(dimA, dimB);
        expect(actualNum).toBeLessThan(0);
      });

      it('returns 0 when the names are equal', () => {
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_EQUAL.dimA;
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_EQUAL.dimB;

        const actualNum: number = BinnedStageDimensions.sortCeilingDesc(dimA, dimB);
        expect(actualNum).toEqual(0);
      });
    });

    describe('data validation', () => {

      it('rejects a non-BinnedStageDimensions parameter a', () => {
        const badData = {
          invalidDim: BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_INVALID_A.invalidDim
        };
        const propName: string = 'invalidDim';
        const dimB: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_INVALID_A.dimB;
        let errorThrown: boolean = true;

        expect(() => {
          const actualNum: number = BinnedStageDimensions.sortCeilingDesc(badData[propName], dimB);
        }).withContext('should throw an error').toThrow(new TypeError('One of the arguments was not of type BinnedStageDimensions'));
      });

      it('rejects a non-BinnedStageDimensions parameter b', () => {
        const badData = {
          invalidDim: BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_INVALID_A.invalidDim
        };
        const propName: string = 'invalidDim';
        const dimA: BinnedStageDimensions = BIN_STAGE_DIMENSIONS.SORTCEILINGDESC_INVALID_B.dimA;

        expect(() => {
          const actualNum: number = BinnedStageDimensions.sortCeilingDesc(dimA, badData[propName]);
        }).withContext('should throw an error').toThrow(new TypeError('One of the arguments was not of type BinnedStageDimensions'));
      });

    });
  });
});
