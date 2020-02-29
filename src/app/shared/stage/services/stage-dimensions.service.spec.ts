import { async } from '@angular/core/testing';

import { StageDimensionsService } from './stage-dimensions.service';

import { BinnedStageDimensions } from '../models/binned-stage-dimensions.model';
import { BinnedStageDimensionsSet } from '../models/binned-stage-dimensions-set.model';
import { StageDimensionsSet, isStageDimensionsSet } from '../models/stage-dimensions-set.model';
import { StageDimensionsRange } from '../models/stage-dimensions-range.model';

import * as STAGES from '../models/mocks/stage-dimensions-raw';
import * as STAGE_DIMENSIONS_SET from '../models/mocks/stage-dimensions-set';
import * as STAGE_DIMENSIONS_SVC from '../models/mocks/stage-dimensions-service';
import { Observable } from 'rxjs';

describe('StageDimensionsService', () => {
  let service: StageDimensionsService;
  let stageDimDB: StageDimensionsSet;

  describe('getDimensionsFull()', () => {

    beforeEach(() => {
      service = new StageDimensionsService();
    });

    function _testRange(actualRange: StageDimensionsRange, expectedRange: StageDimensionsRange) {
      expect(actualRange['min']).toBeCloseTo(expectedRange['min'], 6);
      expect(actualRange['max']).toBeCloseTo(expectedRange['max'], 6);
      expect(actualRange['range']).toBeCloseTo(expectedRange['range'], 6);
    }

    it('takes an array of stages and returns their set of stage dimensions', async(() => {
      const stages = STAGES.TWO_STAGES;
      const expectedDimensionsSet = STAGE_DIMENSIONS_SET.TWO_STAGE_SET;
      const expectedDimensions = expectedDimensionsSet.dimensions;
      const expectedRanges = expectedDimensionsSet.ranges;
      let actualDimensionsSet$ = service.getDimensionsFull(stages);
      actualDimensionsSet$.subscribe((actualDimensionsSet) => {

        expect(isStageDimensionsSet(actualDimensionsSet)).toBe(true);
        
        const actualDimensions = actualDimensionsSet['dimensions'];
        expect(actualDimensions.length).toEqual(2);
        for (let i = 0; i < 2; i++) {
          expect(actualDimensions[i]['name']).toEqual(expectedDimensions[i]['name']);
          expect(actualDimensions[i]['gameName']).toEqual(expectedDimensions[i]['gameName']);
          expect(actualDimensions[i]['blastzoneWidth']).toBeCloseTo(expectedDimensions[i]['blastzoneWidth'], 6);
          expect(actualDimensions[i]['stageLength']).toBeCloseTo(expectedDimensions[i]['stageLength'], 6);
          expect(actualDimensions[i]['offStageDistance']).toBeCloseTo(expectedDimensions[i]['offStageDistance'], 6);
          expect(actualDimensions[i]['ceilingHeight']).toBeCloseTo(expectedDimensions[i]['ceilingHeight'], 6);
        }

        const actualRanges = actualDimensionsSet['ranges'];
        _testRange(actualRanges['blastzoneWidth'], expectedRanges['blastzoneWidth']);
        _testRange(actualRanges['stageLength'], expectedRanges['stageLength']);
        _testRange(actualRanges['offStageDistance'], expectedRanges['offStageDistance']);
        _testRange(actualRanges['ceilingHeight'], expectedRanges['ceilingHeight']);
      });
    }));

    // TODO: data validation

    // TODO: StagePieceMap parameter

  });

  describe('getDimensionsBinned()', () => {

    beforeEach(() => {
      service = new StageDimensionsService();
    });

    describe('output', () => {

      it('has five bins by default', async(() => {
        /**/
        // console.groupCollapsed('=== SPEC - has 5 bins ===');
        const inputStages: string[] = STAGE_DIMENSIONS_SVC.DIMENSIONS_BIN_SIZE;
        const expectedBinSize: number = 5;
        service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
        const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
        actualSet$.subscribe(actualSet => {
          expect(actualSet.bins).toEqual(expectedBinSize);
        });
        /**/
        // console.groupEnd();
      }));

      describe('dimensions array', () => {
        it('contains stages from a provided gameName array', async(() => {
          /**/
          // console.groupCollapsed('=== SPEC - dimensions - contains provided stages ===');
          const expectedStages: string[] = STAGE_DIMENSIONS_SVC.DIMENSIONS_INCLUDE;
          service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
          const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(expectedStages);
          actualSet$.subscribe(actualSet => {
            const actualStages: string[] = actualSet.dimensions.map(stage => stage.gameName);
            for (const expectedStage of expectedStages) {
              expect(actualStages).withContext(expectedStage).toContain(expectedStage);
            }
          });
          /**/
          // console.groupEnd();
        }));

        it('omits stages not on the provided gameName array', async(() => {
          /**/
          // console.groupCollapsed('=== SPEC - dimensions - omits excluded stages ===');
          const inputGameNames: string[] = STAGE_DIMENSIONS_SVC.DIMENSIONS_EXCLUDE.inputGameNames;
          const targetGameNames: string[] = STAGE_DIMENSIONS_SVC.DIMENSIONS_EXCLUDE.targetGameNames;
          service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
          const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputGameNames);
          actualSet$.subscribe(actualSet => {
            const actualStages: string[] = actualSet.dimensions.map(stage => stage.gameName);
            for (const targetStage of targetGameNames) {
              expect(actualStages.includes(targetStage)).withContext(targetStage).toBe(false);
            }
          });
          /**/
          // console.groupEnd();
        }));

        it('is the same size as the gameName array submitted', async(() => {
          /**/
          // console.groupCollapsed('=== SPEC - dimensions - same size as provided stages ===');
          const inputStages: string[] = STAGE_DIMENSIONS_SVC.DIMENSIONS_SIZE.inputGameNames;
          const expectedSize: number = STAGE_DIMENSIONS_SVC.DIMENSIONS_SIZE.expectedSize;
          service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
          const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
          actualSet$.subscribe(actualSet => {
            expect(actualSet.dimensions.length).toEqual(expectedSize);
          });
          /**/
          // console.groupEnd();
        }));

        describe('blastzoneWidth', () => {

          it('classes each stage into one of five bins by value within the group\'s range', async(() => {
            /**/
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - properly binned ===');
            const inputStages: string[] = STAGE_DIMENSIONS_SVC.DIMENSIONS_BLASTZONE_BINS.inputStages;
            const expectedBins: {[gameName: string]: number} = STAGE_DIMENSIONS_SVC.DIMENSIONS_BLASTZONE_BINS.expectedBins;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const actualStageDimensions of actualSet.dimensions) {
                const gameName: string = actualStageDimensions.gameName;
                const expectedBin: number = expectedBins[gameName];
                const actualBin: number = actualStageDimensions.blastzoneWidth.bin;
                expect(actualBin).withContext(gameName).toEqual(expectedBin);
              }
            });
            /**/
            // console.groupEnd();
          }));

          it('marks the largest value in the group', async(() => {
            /**/
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - marks the max ===');
            const inputStages: string[] = STAGE_DIMENSIONS_SVC.DIMENSIONS_BLASTZONE_MAX_POSITIVE.inputStages;
            const targetGameName: string = STAGE_DIMENSIONS_SVC.DIMENSIONS_BLASTZONE_MAX_POSITIVE.targetGameName;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.blastzoneWidth.max).toBe(true);
            });
            /**/
            // console.groupEnd();
          }));

          it('doesn\'t mark values that aren\'t the largest in the group', async(() => {
            /**/
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - doesn\'t mark non-max ===');
            const inputStages: string[] = STAGE_DIMENSIONS_SVC.DIMENSIONS_BLASTZONE_MAX_NEGATIVE.inputStages;
            const targetGameNames: string[] = STAGE_DIMENSIONS_SVC.DIMENSIONS_BLASTZONE_MAX_NEGATIVE.targetGameNames;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.blastzoneWidth.max).toBe(false);
              }
            });
            /**/
            // console.groupEnd();
          }));

          it('marks the smallest value in the group', async(() => {
            /**/
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - marks min ===');
            const inputStages: string[] = STAGE_DIMENSIONS_SVC.DIMENSIONS_BLASTZONE_MIN_POSITIVE.inputStages;
            const targetGameName: string = STAGE_DIMENSIONS_SVC.DIMENSIONS_BLASTZONE_MIN_POSITIVE.targetGameName;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.blastzoneWidth.min).toBe(true);
            });
            /**/
            // console.groupEnd();
          }));

          it('doesn\'t mark values that aren\'t the smallest in the group', async(() => {
            /**/
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - doesn\'t mark non-min ===');
            const inputStages: string[] = STAGE_DIMENSIONS_SVC.DIMENSIONS_BLASTZONE_MIN_NEGATIVE.inputStages;
            const targetGameNames: string[] = STAGE_DIMENSIONS_SVC.DIMENSIONS_BLASTZONE_MIN_NEGATIVE.targetGameNames;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.blastzoneWidth.min).toBe(false);
              }
            });
            /**/
            // console.groupEnd();
          }));

          it('marks the value in a one-item array as both the smallest and largest.', async(() => {
            /**/
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - marks solo item as min-max ===');
            const inputStages: string[] = STAGE_DIMENSIONS_SVC.DIMENSIONS_BLASTZONE_MINMAX;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.dimensions[0].blastzoneWidth.max).withContext('max').toBe(true);
              expect(actualSet.dimensions[0].blastzoneWidth.min).withContext('min').toBe(true);
            });
            // console.groupEnd();
          }));

        });

        xdescribe('stageLength', () => {

          it('classes each stage into one of five bins by value within the group\'s range', async(() => {
            const inputStages: string[] = null;
            const expectedBins: { [gameName: string]: number } = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const actualStageDimensions of actualSet.dimensions) {
                const gameName: string = actualStageDimensions.gameName;
                const expectedBin: number = expectedBins[gameName];
                const actualBin: number = actualStageDimensions.stageLength.bin;
                expect(actualBin).withContext(gameName).toEqual(expectedBin);
              }
            });
          }));

          it('marks the largest value in the group', async(() => {
            const inputStages: string[] = null;
            const targetGameName: string = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.stageLength.max).toBe(true);
            });
          }));

          it('doesn\'t mark values that aren\'t the largest in the group', async(() => {
            const inputStages: string[] = null;
            const targetGameNames: string[] = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.stageLength.max).toBe(false);
              }
            });
          }));

          it('marks the smallest value in the group', async(() => {
            const inputStages: string[] = null;
            const targetGameName: string = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.stageLength.min).toBe(true);
            });
          }));

          it('doesn\'t mark values that aren\'t the smallest in the group', async(() => {
            const inputStages: string[] = null;
            const targetGameNames: string[] = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.stageLength.min).toBe(false);
              }
            });
          }));

          it('marks the value in a one-item array as both the smallest and largest.', async(() => {
            const inputStages: string[] = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.dimensions[0].stageLength.max).withContext('max').toBe(true);
              expect(actualSet.dimensions[0].stageLength.min).withContext('min').toBe(true);
            });
          }));

        });

        xdescribe('offStageDistance', () => {

          it('classes each stage into one of five bins by value within the group\'s range', async(() => {
            const inputStages: string[] = null;
            const expectedBins: { [gameName: string]: number } = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const actualStageDimensions of actualSet.dimensions) {
                const gameName: string = actualStageDimensions.gameName;
                const expectedBin: number = expectedBins[gameName];
                const actualBin: number = actualStageDimensions.offStageDistance.bin;
                expect(actualBin).withContext(gameName).toEqual(expectedBin);
              }
            });
          }));

          it('marks the largest value in the group', async(() => {
            const inputStages: string[] = null;
            const targetGameName: string = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.offStageDistance.max).toBe(true);
            });
          }));

          it('doesn\'t mark values that aren\'t the largest in the group', async(() => {
            const inputStages: string[] = null;
            const targetGameNames: string[] = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.offStageDistance.max).toBe(false);
              }
            });
          }));

          it('marks the smallest value in the group', async(() => {
            const inputStages: string[] = null;
            const targetGameName: string = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.offStageDistance.min).toBe(true);
            });
          }));

          it('doesn\'t mark values that aren\'t the smallest in the group', async(() => {
            const inputStages: string[] = null;
            const targetGameNames: string[] = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.offStageDistance.min).toBe(false);
              }
            });
          }));

          it('marks the value in a one-item array as both the smallest and largest.', async(() => {
            const inputStages: string[] = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.dimensions[0].offStageDistance.max).withContext('max').toBe(true);
              expect(actualSet.dimensions[0].offStageDistance.min).withContext('min').toBe(true);
            });
          }));

        });

        xdescribe('ceilingHeight', () => {

          it('classes each stage into one of five bins by value within the group\'s range', async(() => {
            const inputStages: string[] = null;
            const expectedBins: { [gameName: string]: number } = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const actualStageDimensions of actualSet.dimensions) {
                const gameName: string = actualStageDimensions.gameName;
                const expectedBin: number = expectedBins[gameName];
                const actualBin: number = actualStageDimensions.ceilingHeight.bin;
                expect(actualBin).withContext(gameName).toEqual(expectedBin);
              }
            });
          }));

          it('marks the largest value in the group', async(() => {
            const inputStages: string[] = null;
            const targetGameName: string = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.ceilingHeight.max).toBe(true);
            });
          }));

          it('doesn\'t mark values that aren\'t the largest in the group', async(() => {
            const inputStages: string[] = null;
            const targetGameNames: string[] = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.ceilingHeight.max).toBe(false);
              }
            });
          }));

          it('marks the smallest value in the group', async(() => {
            const inputStages: string[] = null;
            const targetGameName: string = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.ceilingHeight.min).toBe(true);
            });
          }));

          it('doesn\'t mark values that aren\'t the smallest in the group', async(() => {
            const inputStages: string[] = null;
            const targetGameNames: string[] = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.ceilingHeight.min).toBe(false);
              }
            });
          }));

          it('marks the value in a one-item array as both the smallest and largest.', async(() => {
            const inputStages: string[] = null;
            service._dimensionsSetFull = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.dimensions[0].ceilingHeight.max).withContext('max').toBe(true);
              expect(actualSet.dimensions[0].ceilingHeight.min).withContext('min').toBe(true);
            });
          }));

        });

      });
      
      describe('ranges', () => {

        describe('blastzoneWidth', () => {
          
          it('should have a max set to the highest blastzoneWidth value');
          it('should have a max set to a one-stage set\'s only value');
          it('should have a min set to the lowest blastzoneWidth value');
          it('should have a min set to a one-stage set\'s only value');
          it('should have a range set to the range of the blastzoneWidth values');
          it('should have a range of zero when there is only one stage');

        });

        describe('stageLength', () => {
          
          it('should have a max set to the highest stageLength value');
          it('should have a max set to a one-stage set\'s only value');
          it('should have a min set to the lowest stageLength value');
          it('should have a min set to a one-stage set\'s only value');
          it('should have a range set to the range of the stageLength values');
          it('should have a range of zero when there is only one stage');

        });

        describe('offStageDistance', () => {
          
          it('should have a max set to the highest offStageDistance value');
          it('should have a max set to a one-stage set\'s only value');
          it('should have a min set to the lowest offStageDistance value');
          it('should have a min set to a one-stage set\'s only value');
          it('should have a range set to the range of the offStageDistance values');
          it('should have a range of zero when there is only one stage');

        });

        describe('ceilingHeight', () => {
          
          it('should have a max set to the highest ceilingHeight value');
          it('should have a max set to a one-stage set\'s only value');
          it('should have a min set to the lowest ceilingHeight value');
          it('should have a min set to a one-stage set\'s only value');
          it('should have a range set to the range of the ceilingHeight values');
          it('should have a range of zero when there is only one stage');

        });

      });
    });

    it('rejects a gameName array with gameNames not in the saved dataset');

    it('returns an error if there is no saved dataset');

  });

});
