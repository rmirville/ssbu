import { waitForAsync } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { StageDimensionsService } from './stage-dimensions.service';

import { DatasetNotFoundError } from '../../errors/dataset-not-found-error.model';
import { NotFoundError } from '../../errors/not-found-error.model';

import { BinnedStageDimensions } from '../models/binned-stage-dimensions.model';
import { BinnedStageDimensionsSet } from '../models/binned-stage-dimensions-set.model';
import { Stage } from '../models/stage.model';
import { StageDimensions } from '../models/stage-dimensions.model';
import { StageDimensionsSet, isStageDimensionsSet } from '../models/stage-dimensions-set.model';
import { StageDimensionsRange } from '../models/stage-dimensions-range.model';
import { StageMiscInfo } from '../models/stage-misc-info.model';
import { StagePieceMap } from '../models/stage-piece-map.model';

import * as STAGES from '../models/mocks/stages';
import * as STAGE_DIM_SET from '../models/mocks/stage-dimensions-set';
import * as STAGE_DIM_SVC from '../models/mocks/stage-dimensions-service';

describe('StageDimensionsService', () => {
  let service: StageDimensionsService;

  describe('getDimensionsFull()', () => {

    beforeEach(() => {
      service = new StageDimensionsService();
    });

    function _testRange(actualRange: StageDimensionsRange, expectedRange: StageDimensionsRange) {
      expect(actualRange['min']).withContext('min').toBeCloseTo(expectedRange['min'], 6);
      expect(actualRange['max']).withContext('max').toBeCloseTo(expectedRange['max'], 6);
      expect(actualRange['range']).withContext('range').toBeCloseTo(expectedRange['range'], 6);
    }

    it('takes an array of stages and returns their set of stage dimensions', waitForAsync(() => {
      const stages: Stage[] = STAGE_DIM_SVC.DIMENSIONS_FULL_CALC.inputStages;
      const expectedDimensionsSet: StageDimensionsSet = STAGE_DIM_SVC.DIMENSIONS_FULL_CALC.expectedSet;
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
          expect(actualDimensions[i]['blastzoneWidth']).withContext(`${expectedDimensions[i]['name']} blastzoneWidth`).toBeCloseTo(expectedDimensions[i]['blastzoneWidth'], 6);
          expect(actualDimensions[i]['stageLength']).withContext(`${expectedDimensions[i]['name']} stageLength`).toBeCloseTo(expectedDimensions[i]['stageLength'], 6);
          expect(actualDimensions[i]['offStageDistance']).withContext(`${expectedDimensions[i]['name']} offStageDistance`).toBeCloseTo(expectedDimensions[i]['offStageDistance'], 6);
          expect(actualDimensions[i]['ceilingHeight']).withContext(`${expectedDimensions[i]['name']} ceilingHeight`).toBeCloseTo(expectedDimensions[i]['ceilingHeight'], 6);
        }

        const actualRanges = actualDimensionsSet['ranges'];
        _testRange(actualRanges['blastzoneWidth'], expectedRanges['blastzoneWidth']);
        _testRange(actualRanges['stageLength'], expectedRanges['stageLength']);
        _testRange(actualRanges['offStageDistance'], expectedRanges['offStageDistance']);
        _testRange(actualRanges['ceilingHeight'], expectedRanges['ceilingHeight']);
      });
    }));

    describe('data validation', () => {
      it('rejects a non-array stages parameter', waitForAsync(() => {
        ///
        // console.groupCollapsed('=== SPEC - dimensionsFull() - reject non-array stages');
        const badData: {stages: Stage} = {
          stages: STAGES.MAGICANT
        };
        const propName: string = 'stages';

        expect(() => {
          const dimFull$: Observable<StageDimensionsSet> = service.getDimensionsFull(badData[propName]);
        }).toThrow(new TypeError('The stages argument was not an array'));

        ///
        // console.groupEnd();
      }));

      it('rejects a non-Stage array stages parameter', waitForAsync(() => {
        ///
        // console.groupCollapsed('=== SPEC - dimensionsFull() - reject non-Stage[] stages');
        const badData: {stages: number[]} = {
          stages: [3,5,-9]
        };
        const propName: string = 'stages';

        expect(() => {
          const dimFull$: Observable<StageDimensionsSet> = service.getDimensionsFull(badData[propName]);
        }).toThrow(new TypeError('The stages argument was not a Stage array'));

        ///
        // console.groupEnd();
      }));

      it('rejects a non-array pieceMaps', waitForAsync(() => {
        ///
        // console.groupCollapsed('=== SPEC - dimensionsFull() - reject non-array pieceMaps');
        const inputStages: Stage[] = [STAGES.DUCK_HUNT, STAGES.MAGICANT];
        const badData: {pieceMaps: StagePieceMap} = {
          pieceMaps: {
            lvd: 'adv780',
            pieceName: 'j41b7k8l'
          }
        };
        const propName: string = 'pieceMaps';

        expect(() => {
          const dimFull$: Observable<StageDimensionsSet> = service.getDimensionsFull(inputStages, badData[propName]);
        }).toThrow(new TypeError('The pieceMaps argument was not an array'));

        ///
        // console.groupEnd();
      }));

      it('rejects a non-StagePieceMap array pieceMaps', waitForAsync(() => {
        ///
        // console.groupCollapsed('=== SPEC - dimensionsFull() - reject non-StagePieceMap[] pieceMaps');
        const inputStages: Stage[] = [STAGES.POKEMON_STADIUM, STAGES.YOSHI_STORY, STAGES.DUCK_HUNT];
        const badData: {pieceMaps: boolean[]} = {
          pieceMaps: [true, true, false]
        };
        const propName: string = 'pieceMaps';

        expect(() => {
          const dimFull$: Observable<StageDimensionsSet> = service.getDimensionsFull(inputStages, badData[propName]);
        }).toThrow(new TypeError('The pieceMaps argument was not a StagePieceMap array'));

        ///
        // console.groupEnd();
      }));
    });

    // TODO: StagePieceMap parameter

  });

  describe('getDimensionsBinned()', () => {

    beforeEach(() => {
      service = new StageDimensionsService();
    });

    describe('output', () => {

      it('has five bins by default', waitForAsync(() => {
        ///
        // console.groupCollapsed('=== SPEC - has 5 bins ===');
        const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_BIN_SIZE;
        const expectedBinSize: number = 5;
        service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
        const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
        actualSet$.subscribe(actualSet => {
          expect(actualSet.bins).toEqual(expectedBinSize);
          ///
          // console.groupEnd();
        });
      }));

      describe('dimensions array', () => {

        it('contains stages from a provided StageMiscInfo array', waitForAsync(() => {
          ///
          // console.groupCollapsed('=== SPEC - dimensions - contains provided stages ===');
          const expectedStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_INCLUDE;
          service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
          const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(expectedStages);
          actualSet$.subscribe(actualSet => {
            const actualStages: StageMiscInfo[] = actualSet.dimensions.map(stage => { return { gameName: stage.gameName }; });
            for (const expectedStage of expectedStages) {
              expect(actualStages).withContext(expectedStage.gameName).toContain(expectedStage);
            }
            ///
            // console.groupEnd();
          });
        }));

        it('omits stages not on the provided stages', waitForAsync(() => {
          ///
          // console.groupCollapsed('=== SPEC - dimensions - omits excluded stages ===');
          const inputGameNames: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_EXCLUDE.inputStages;
          const targetGameNames: string[] = STAGE_DIM_SVC.DIMENSIONS_EXCLUDE.targetGameNames;
          service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
          const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputGameNames);
          actualSet$.subscribe(actualSet => {
            const actualStages: string[] = actualSet.dimensions.map(stage => stage.gameName);
            for (const targetStage of targetGameNames) {
              expect(actualStages.includes(targetStage)).withContext(targetStage).toBe(false);
            }
            ///
            // console.groupEnd();
          });
        }));

        it('omits stages in the provided stages that are not in the database', waitForAsync(() => {
          ///
          // console.groupCollapsed('=== SPEC - dimensions - omits unknown stages ===');
          const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_UNKNOWN.inputStages;
          const unknownGameNames: string[] = STAGE_DIM_SVC.DIMENSIONS_UNKNOWN.unknownGameNames;
          service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
          const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
          actualSet$.subscribe(actualSet => {
            const actualGameNames: string[] = actualSet.dimensions.map(stage => stage.gameName);
            expect(actualGameNames.length).withContext('dimensions size').toBeGreaterThan(0);
            for (const unknownGameName of unknownGameNames) {
              expect(actualGameNames.includes(unknownGameName)).withContext(unknownGameName).toBe(false);
            }
            ///
            // console.groupEnd();
          });
        }));

        it('is the same size as the stage array submitted', waitForAsync(() => {
          ///
          // console.groupCollapsed('=== SPEC - dimensions - same size as provided stages ===');
          const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_SIZE.inputStages;
          const expectedSize: number = STAGE_DIM_SVC.DIMENSIONS_SIZE.expectedSize;
          service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
          const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
          actualSet$.subscribe(actualSet => {
            expect(actualSet.dimensions.length).toEqual(expectedSize);
            ///
            // console.groupEnd();
          });
        }));

        it('contains the dimension values stored in the saved dataset', waitForAsync(() => {
          ///
          // console.groupCollapsed('=== SPEC - dimensions - same values as in dataset ===');
          const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_VALUES;
          const inputGameNames: string[] = inputStages.map(inputStage => inputStage.gameName);
          const expectedStages: StageDimensions[] = STAGE_DIM_SET.FULL_SIMPLE.dimensions.filter(stage => inputGameNames.includes(stage.gameName));
          service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
          const actualSet$ = service.getDimensionsBinned(inputStages);
          ///
          // console.log(`SPEC - inputStages: ${JSON.stringify(inputStages)}`);
          // console.log(`SPEC - inputGameNames: ${JSON.stringify(inputGameNames)}`);
          // console.log(`SPEC - expectedStages: ${JSON.stringify(expectedStages)}`);

          actualSet$.subscribe(actualSet => {
            for (const inputStage of inputStages) {
              const expectedValues: StageDimensions = expectedStages.find(   stage => { return (stage.gameName === inputStage.gameName); }   );
              const actualValues: BinnedStageDimensions = actualSet.dimensions.find(   stage => { return (stage.gameName === inputStage.gameName); }   );
              ///
              // console.log(`SPEC - gameName: ${inputStage.gameName}`);
              // console.log(`SPEC - expectedValues: ${JSON.stringify(expectedValues)}`);
              // console.log(`SPEC - actualValues: ${JSON.stringify(actualValues)}`);

              expect(actualValues.blastzoneWidth.value).withContext(`${inputStage.gameName} blastzoneWidth`).toBeCloseTo(expectedValues.blastzoneWidth, 6);
              expect(actualValues.stageLength.value).withContext(`${inputStage.gameName} stageLength`).toBeCloseTo(expectedValues.stageLength, 6);
              expect(actualValues.offStageDistance.value).withContext(`${inputStage.gameName} offStageDistance`).toBeCloseTo(expectedValues.offStageDistance, 6);
              expect(actualValues.ceilingHeight.value).withContext(`${inputStage.gameName} ceilingHeight`).toBeCloseTo(expectedValues.ceilingHeight, 6);
              ///
              // console.groupEnd();
            }
          });
        }));

        it('retains all properties from provided stages', waitForAsync(() => {
          ///
          // console.groupCollapsed('=== SPEC - dimensions - retain extra properties ===');
          const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_PROPERTIES;
          service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
          const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
          actualSet$.subscribe(actualSet => {
            for (const actualStage of actualSet.dimensions) {
              const gameName: string = actualStage.gameName;
              const expectedStage: StageMiscInfo = inputStages.find(inputStage => inputStage.gameName === gameName);
              for (const prop in expectedStage) {
                expect(actualStage[prop]).withContext(`${gameName}[${prop}]`).toEqual(expectedStage[prop]);
              }
            }
            ///
            // console.groupEnd();
          });
        }));

        describe('blastzoneWidth', () => {

          it('classes each stage into one of five bins by value within the group\'s range', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - properly binned ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_BINS.inputStages;
            const expectedBins: {[gameName: string]: number} = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_BINS.expectedBins;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const actualStageDimensions of actualSet.dimensions) {
                const gameName: string = actualStageDimensions.gameName;
                const expectedBin: number = expectedBins[gameName];
                const actualBin: number = actualStageDimensions.blastzoneWidth.bin;
                expect(actualBin).withContext(gameName).toEqual(expectedBin);
              }
              ///
              // console.groupEnd();
            });
          }));

          it('classes values at each bin boundary as the bin closer to the middle', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - bin edgecases ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_BINS_EDGES.inputStages;
            const expectedBins: { [gameName: string]: number } = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_BINS_EDGES.expectedBins;
            service._dimensionsSetFull = STAGE_DIM_SET.BLASTZONE_EDGE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const actualStageDimensions of actualSet.dimensions) {
                const gameName: string = actualStageDimensions.gameName;
                const expectedBin: number = expectedBins[gameName];
                const actualBin: number = actualStageDimensions.blastzoneWidth.bin;
                expect(actualBin).withContext(gameName).toEqual(expectedBin);
              }
              ///
              // console.groupEnd();
            });
          }));

          it('marks the largest value in the group', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - marks the max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_MAX_POSITIVE.inputStages;
            const targetGameName: string = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_MAX_POSITIVE.targetGameName;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.blastzoneWidth.max).toBe(true);
              ///
              // console.groupEnd();
            });
          }));

          it('doesn\'t mark values that aren\'t the largest in the group', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - doesn\'t mark non-max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_MAX_NEGATIVE.inputStages;
            const targetGameNames: string[] = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_MAX_NEGATIVE.targetGameNames;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.blastzoneWidth.max).toBe(false);
              }
              ///
              // console.groupEnd();
            });
          }));

          it('marks the smallest value in the group', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - marks min ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_MIN_POSITIVE.inputStages;
            const targetGameName: string = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_MIN_POSITIVE.targetGameName;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.blastzoneWidth.min).toBe(true);
              ///
              // console.groupEnd();
            });
          }));

          it('doesn\'t mark values that aren\'t the smallest in the group', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - doesn\'t mark non-min ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_MIN_NEGATIVE.inputStages;
            const targetGameNames: string[] = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_MIN_NEGATIVE.targetGameNames;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.blastzoneWidth.min).toBe(false);
              }
              ///
              // console.groupEnd();
            });
          }));

          it('marks the value in a one-item array as both the smallest and largest.', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - marks solo item as min-max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_MINMAX;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.dimensions[0].blastzoneWidth.max).withContext('max').toBe(true);
              expect(actualSet.dimensions[0].blastzoneWidth.min).withContext('min').toBe(true);
              ///
              // console.groupEnd();
            });
          }));

          it('marks all values in an all-same-value array as both the smallest and largest with a bin of 0.', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - blastzoneWidth - marks all-same-value items as min-max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_BLASTZONE_SAME;
            service._dimensionsSetFull = STAGE_DIM_SET.BLASTZONE_SAME;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const binnedDimensions of actualSet.dimensions) {
                expect(binnedDimensions.blastzoneWidth.bin).withContext('bin').toEqual(0);
                expect(binnedDimensions.blastzoneWidth.max).withContext('max').toBe(true);
                expect(binnedDimensions.blastzoneWidth.min).withContext('min').toBe(true);
              }
              ///
              // console.groupEnd();
            });
          }));

        });

        describe('stageLength', () => {

          it('classes each stage into one of five bins by value within the group\'s range', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_STAGE_BINS.inputStages;
            const expectedBins: { [gameName: string]: number } = STAGE_DIM_SVC.DIMENSIONS_STAGE_BINS.expectedBins;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
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

          it('classes values at each bin boundary as the bin closer to the middle', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - stageLength - bin edgecases ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_STAGE_BINS_EDGES.inputStages;
            const expectedBins: { [gameName: string]: number } = STAGE_DIM_SVC.DIMENSIONS_STAGE_BINS_EDGES.expectedBins;
            service._dimensionsSetFull = STAGE_DIM_SET.STAGE_EDGE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const actualStageDimensions of actualSet.dimensions) {
                const gameName: string = actualStageDimensions.gameName;
                const expectedBin: number = expectedBins[gameName];
                const actualBin: number = actualStageDimensions.stageLength.bin;
                expect(actualBin).withContext(gameName).toEqual(expectedBin);
              }
              ///
              // console.groupEnd();
            });
          }));

          it('marks the largest value in the group', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_STAGE_MAX_POSITIVE.inputStages;
            const targetGameName: string = STAGE_DIM_SVC.DIMENSIONS_STAGE_MAX_POSITIVE.targetGameName;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.stageLength.max).toBe(true);
            });
          }));

          it('doesn\'t mark values that aren\'t the largest in the group', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_STAGE_MAX_NEGATIVE.inputStages;
            const targetGameNames: string[] = STAGE_DIM_SVC.DIMENSIONS_STAGE_MAX_NEGATIVE.targetGameNames;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.stageLength.max).toBe(false);
              }
            });
          }));

          it('marks the smallest value in the group', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_STAGE_MIN_POSITIVE.inputStages;
            const targetGameName: string = STAGE_DIM_SVC.DIMENSIONS_STAGE_MIN_POSITIVE.targetGameName;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.stageLength.min).toBe(true);
            });
          }));

          it('doesn\'t mark values that aren\'t the smallest in the group', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_STAGE_MIN_NEGATIVE.inputStages;
            const targetGameNames: string[] = STAGE_DIM_SVC.DIMENSIONS_STAGE_MIN_NEGATIVE.targetGameNames;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.stageLength.min).toBe(false);
              }
            });
          }));

          it('marks the value in a one-item array as both the smallest and largest.', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_STAGE_MINMAX;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.dimensions[0].stageLength.max).withContext('max').toBe(true);
              expect(actualSet.dimensions[0].stageLength.min).withContext('min').toBe(true);
            });
          }));

          it('marks all values in an all-same-value array as both the smallest and largest with a bin of 0.', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - stageLength - marks all-same-value items as min-max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_STAGE_SAME;
            service._dimensionsSetFull = STAGE_DIM_SET.STAGE_SAME;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const binnedDimensions of actualSet.dimensions) {
                expect(binnedDimensions.stageLength.bin).withContext('bin').toEqual(0);
                expect(binnedDimensions.stageLength.max).withContext('max').toBe(true);
                expect(binnedDimensions.stageLength.min).withContext('min').toBe(true);
              }
              ///
              // console.groupEnd();
            });
          }));

        });

        describe('offStageDistance', () => {

          it('classes each stage into one of five bins by value within the group\'s range', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_BINS.inputStages;
            const expectedBins: { [gameName: string]: number } = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_BINS.expectedBins;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
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

          it('classes values at each bin boundary as the bin closer to the middle', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - offStageDistance - edgecases ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_BINS_EDGES.inputStages;
            const expectedBins: { [gameName: string]: number } = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_BINS_EDGES.expectedBins;
            service._dimensionsSetFull = STAGE_DIM_SET.OFFSTAGE_EDGE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const actualStageDimensions of actualSet.dimensions) {
                const gameName: string = actualStageDimensions.gameName;
                const expectedBin: number = expectedBins[gameName];
                const actualBin: number = actualStageDimensions.offStageDistance.bin;
                expect(actualBin).withContext(gameName).toEqual(expectedBin);
              }
              ///
              // console.groupEnd();
            });
          }));

          it('marks the largest value in the group', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_MAX_POSITIVE.inputStages;
            const targetGameName: string = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_MAX_POSITIVE.targetGameName;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.offStageDistance.max).toBe(true);
            });
          }));

          it('doesn\'t mark values that aren\'t the largest in the group', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_MAX_NEGATIVE.inputStages;
            const targetGameNames: string[] = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_MAX_NEGATIVE.targetGameNames;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.offStageDistance.max).toBe(false);
              }
            });
          }));

          it('marks the smallest value in the group', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_MIN_POSITIVE.inputStages;
            const targetGameName: string = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_MIN_POSITIVE.targetGameName;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.offStageDistance.min).toBe(true);
            });
          }));

          it('doesn\'t mark values that aren\'t the smallest in the group', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_MIN_NEGATIVE.inputStages;
            const targetGameNames: string[] = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_MIN_NEGATIVE.targetGameNames;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.offStageDistance.min).toBe(false);
              }
            });
          }));

          it('marks the value in a one-item array as both the smallest and largest.', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_MINMAX;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.dimensions[0].offStageDistance.max).withContext('max').toBe(true);
              expect(actualSet.dimensions[0].offStageDistance.min).withContext('min').toBe(true);
            });
          }));

          it('marks all values in an all-same-value array as both the smallest and largest with a bin of 0.', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - offStageDistance - marks all-same-value items as min-max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_OFFSTAGE_SAME;
            service._dimensionsSetFull = STAGE_DIM_SET.OFFSTAGE_SAME;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const binnedDimensions of actualSet.dimensions) {
                expect(binnedDimensions.offStageDistance.bin).withContext('bin').toEqual(0);
                expect(binnedDimensions.offStageDistance.max).withContext('max').toBe(true);
                expect(binnedDimensions.offStageDistance.min).withContext('min').toBe(true);
              }
              ///
              // console.groupEnd();
            });
          }));

        });

        describe('ceilingHeight', () => {

          it('classes each stage into one of five bins by value within the group\'s range', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_CEILING_BINS.inputStages;
            const expectedBins: { [gameName: string]: number } = STAGE_DIM_SVC.DIMENSIONS_CEILING_BINS.expectedBins;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
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

          it('classes values at each bin boundary as the bin closer to the middle', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - ceilingHeight - bin edgecases ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_CEILING_BINS_EDGES.inputStages;
            const expectedBins: { [gameName: string]: number } = STAGE_DIM_SVC.DIMENSIONS_CEILING_BINS_EDGES.expectedBins;
            service._dimensionsSetFull = STAGE_DIM_SET.CEILING_EDGE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const actualStageDimensions of actualSet.dimensions) {
                const gameName: string = actualStageDimensions.gameName;
                const expectedBin: number = expectedBins[gameName];
                const actualBin: number = actualStageDimensions.ceilingHeight.bin;
                expect(actualBin).withContext(gameName).toEqual(expectedBin);
              }
              ///
              // console.groupEnd();
            });
          }));

          it('marks the largest value in the group', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_CEILING_MAX_POSITIVE.inputStages;
            const targetGameName: string = STAGE_DIM_SVC.DIMENSIONS_CEILING_MAX_POSITIVE.targetGameName;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.ceilingHeight.max).toBe(true);
            });
          }));

          it('doesn\'t mark values that aren\'t the largest in the group', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_CEILING_MAX_NEGATIVE.inputStages;
            const targetGameNames: string[] = STAGE_DIM_SVC.DIMENSIONS_CEILING_MAX_NEGATIVE.targetGameNames;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.ceilingHeight.max).toBe(false);
              }
            });
          }));

          it('marks the smallest value in the group', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_CEILING_MIN_POSITIVE.inputStages;
            const targetGameName: string = STAGE_DIM_SVC.DIMENSIONS_CEILING_MIN_POSITIVE.targetGameName;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              const expectedMaxStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
              expect(expectedMaxStageDimensions.ceilingHeight.min).toBe(true);
            });
          }));

          it('doesn\'t mark values that aren\'t the smallest in the group', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_CEILING_MIN_NEGATIVE.inputStages;
            const targetGameNames: string[] = STAGE_DIM_SVC.DIMENSIONS_CEILING_MIN_NEGATIVE.targetGameNames;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const targetGameName of targetGameNames) {
                const targetStageDimensions: BinnedStageDimensions = actualSet.dimensions.find(stage => stage.gameName === targetGameName);
                expect(targetStageDimensions.ceilingHeight.min).toBe(false);
              }
            });
          }));

          it('marks the value in a one-item array as both the smallest and largest.', waitForAsync(() => {
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_CEILING_MINMAX;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.dimensions[0].ceilingHeight.max).withContext('max').toBe(true);
              expect(actualSet.dimensions[0].ceilingHeight.min).withContext('min').toBe(true);
            });
          }));

          it('marks all values in an all-same-value array as both the smallest and largest with a bin of 0.', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - dimensions - ceilingHeight - marks all-same-value items as min-max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.DIMENSIONS_CEILING_SAME;
            service._dimensionsSetFull = STAGE_DIM_SET.CEILING_SAME;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              for (const binnedDimensions of actualSet.dimensions) {
                expect(binnedDimensions.ceilingHeight.bin).withContext('bin').toEqual(0);
                expect(binnedDimensions.ceilingHeight.max).withContext('max').toBe(true);
                expect(binnedDimensions.ceilingHeight.min).withContext('min').toBe(true);
              }
              ///
              // console.groupEnd();
            });
          }));

        });

      });
      
      describe('ranges', () => {

        describe('blastzoneWidth', () => {
          
          it('should have a max set to the highest blastzoneWidth value', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - ranges - blastzoneWidth - max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_BLASTZONE_MAX.inputStages;
            const expectedMax: number = STAGE_DIM_SVC.RANGES_BLASTZONE_MAX.expectedMax;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.blastzoneWidth.max).toBeCloseTo(expectedMax, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a max set to a one-stage set\'s only value', waitForAsync(() => {
            ///
            // console.groupCollapsed('== SPEC - range - blastzoneWidth - one-item max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_BLASTZONE_MAX_ONE.inputStages;
            const expectedMax: number = STAGE_DIM_SVC.RANGES_BLASTZONE_MAX_ONE.expectedMax;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.blastzoneWidth.max).toBeCloseTo(expectedMax, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a min set to the lowest blastzoneWidth value', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - ranges - blastzoneWidth - min ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_BLASTZONE_MIN.inputStages;
            const expectedMin: number = STAGE_DIM_SVC.RANGES_BLASTZONE_MIN.expectedMin;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.blastzoneWidth.min).toBeCloseTo(expectedMin, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a min set to a one-stage set\'s only value', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - ranges - blastzoneWidth - one-item min ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_BLASTZONE_MIN_ONE.inputStages;
            const expectedMin: number = STAGE_DIM_SVC.RANGES_BLASTZONE_MIN_ONE.expectedMin;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.blastzoneWidth.min).toBeCloseTo(expectedMin, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a range set to the range of the blastzoneWidth values', waitForAsync(() => {
            ///
            // console.groupCollapsed('== SPEC - ranges - blastzoneWidth - range ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_BLASTZONE_RANGE.inputStages;
            const expectedRange: number = STAGE_DIM_SVC.RANGES_BLASTZONE_RANGE.expectedRange;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.blastzoneWidth.range).toBeCloseTo(expectedRange, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a range of zero when there is only one stage', waitForAsync(() => {
            ///
            // console.groupCollapsed('== SPEC - ranges - blastzoneWidth - one-item range ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_BLASTZONE_RANGE_ONE;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.blastzoneWidth.range).toEqual(0);
              ///
              // console.groupEnd();
            });
          }));

        });

        describe('stageLength', () => {
          
          it('should have a max set to the highest stageLength value', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - ranges - stageLength - max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_STAGE_MAX.inputStages;
            const expectedMax: number = STAGE_DIM_SVC.RANGES_STAGE_MAX.expectedMax;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.stageLength.max).toBeCloseTo(expectedMax, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a max set to a one-stage set\'s only value', waitForAsync(() => {
            ///
            // console.groupCollapsed('== SPEC - range - stageLength - one-item max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_STAGE_MAX_ONE.inputStages;
            const expectedMax: number = STAGE_DIM_SVC.RANGES_STAGE_MAX_ONE.expectedMax;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.stageLength.max).toBeCloseTo(expectedMax, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a min set to the lowest stageLength value', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - ranges - stageLength - min ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_STAGE_MIN.inputStages;
            const expectedMin: number = STAGE_DIM_SVC.RANGES_STAGE_MIN.expectedMin;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.stageLength.min).toBeCloseTo(expectedMin, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a min set to a one-stage set\'s only value', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - ranges - stageLength - one-item min ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_STAGE_MIN_ONE.inputStages;
            const expectedMin: number = STAGE_DIM_SVC.RANGES_STAGE_MIN_ONE.expectedMin;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.stageLength.min).toBeCloseTo(expectedMin, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a range set to the range of the stageLength values', waitForAsync(() => {
            ///
            // console.groupCollapsed('== SPEC - ranges - stageLength - range ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_STAGE_RANGE.inputStages;
            const expectedRange: number = STAGE_DIM_SVC.RANGES_STAGE_RANGE.expectedRange;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.stageLength.range).toBeCloseTo(expectedRange, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a range of zero when there is only one stage', waitForAsync(() => {
            ///
            // console.groupCollapsed('== SPEC - ranges - stageLength - one-item range ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_STAGE_RANGE_ONE;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.stageLength.range).toEqual(0);
              ///
              // console.groupEnd();
            });
          }));

        });

        describe('offStageDistance', () => {
          
          it('should have a max set to the highest offStageDistance value', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - ranges - offStageDistance - max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_OFFSTAGE_MAX.inputStages;
            const expectedMax: number = STAGE_DIM_SVC.RANGES_OFFSTAGE_MAX.expectedMax;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.offStageDistance.max).toBeCloseTo(expectedMax, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a max set to a one-stage set\'s only value', waitForAsync(() => {
            ///
            // console.groupCollapsed('== SPEC - range - offStageDistance - one-item max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_OFFSTAGE_MAX_ONE.inputStages;
            const expectedMax: number = STAGE_DIM_SVC.RANGES_OFFSTAGE_MAX_ONE.expectedMax;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.offStageDistance.max).toBeCloseTo(expectedMax, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a min set to the lowest offStageDistance value', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - ranges - offStageDistance - min ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_OFFSTAGE_MIN.inputStages;
            const expectedMin: number = STAGE_DIM_SVC.RANGES_OFFSTAGE_MIN.expectedMin;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.offStageDistance.min).toBeCloseTo(expectedMin, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a min set to a one-stage set\'s only value', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - ranges - offStageDistance - one-item min ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_OFFSTAGE_MIN_ONE.inputStages;
            const expectedMin: number = STAGE_DIM_SVC.RANGES_OFFSTAGE_MIN_ONE.expectedMin;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.offStageDistance.min).toBeCloseTo(expectedMin, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a range set to the range of the offStageDistance values', waitForAsync(() => {
            ///
            // console.groupCollapsed('== SPEC - ranges - offStageDistance - range ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_OFFSTAGE_RANGE.inputStages;
            const expectedRange: number = STAGE_DIM_SVC.RANGES_OFFSTAGE_RANGE.expectedRange;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.offStageDistance.range).toBeCloseTo(expectedRange, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a range of zero when there is only one stage', waitForAsync(() => {
            ///
            // console.groupCollapsed('== SPEC - ranges - offStageDistance - one-item range ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_OFFSTAGE_RANGE_ONE;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.offStageDistance.range).toEqual(0);
              ///
              // console.groupEnd();
            });
          }));

        });

        describe('ceilingHeight', () => {
          
          it('should have a max set to the highest ceilingHeight value', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - ranges - ceilingHeight - max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_CEILING_MAX.inputStages;
            const expectedMax: number = STAGE_DIM_SVC.RANGES_CEILING_MAX.expectedMax;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.ceilingHeight.max).toBeCloseTo(expectedMax, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a max set to a one-stage set\'s only value', waitForAsync(() => {
            ///
            // console.groupCollapsed('== SPEC - range - ceilingHeight - one-item max ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_CEILING_MAX_ONE.inputStages;
            const expectedMax: number = STAGE_DIM_SVC.RANGES_CEILING_MAX_ONE.expectedMax;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.ceilingHeight.max).toBeCloseTo(expectedMax, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a min set to the lowest ceilingHeight value', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - ranges - ceilingHeight - min ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_CEILING_MIN.inputStages;
            const expectedMin: number = STAGE_DIM_SVC.RANGES_CEILING_MIN.expectedMin;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.ceilingHeight.min).toBeCloseTo(expectedMin, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a min set to a one-stage set\'s only value', waitForAsync(() => {
            ///
            // console.groupCollapsed('=== SPEC - ranges - ceilingHeight - one-item min ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_CEILING_MIN_ONE.inputStages;
            const expectedMin: number = STAGE_DIM_SVC.RANGES_CEILING_MIN_ONE.expectedMin;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.ceilingHeight.min).toBeCloseTo(expectedMin, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a range set to the range of the ceilingHeight values', waitForAsync(() => {
            ///
            // console.groupCollapsed('== SPEC - ranges - ceilingHeight - range ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_CEILING_RANGE.inputStages;
            const expectedRange: number = STAGE_DIM_SVC.RANGES_CEILING_RANGE.expectedRange;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.ceilingHeight.range).toBeCloseTo(expectedRange, 6);
              ///
              // console.groupEnd();
            });
          }));

          it('should have a range of zero when there is only one stage', waitForAsync(() => {
            ///
            // console.groupCollapsed('== SPEC - ranges - ceilingHeight - one-item range ===');
            const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.RANGES_CEILING_RANGE_ONE;
            service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
            const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
            actualSet$.subscribe(actualSet => {
              expect(actualSet.ranges.ceilingHeight.range).toEqual(0);
              ///
              // console.groupEnd();
            });
          }));

        });

      });
    });

    describe('with integer parameter', () => {
      it('rounds all values to the nearest integer', waitForAsync(() => {
        ///
        // console.groupCollapsed('=== SPEC - integer - rounds all values');
        const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.INTEGER_VALUES.inputStages;
        const expectedSet: BinnedStageDimensionsSet = STAGE_DIM_SVC.INTEGER_VALUES.expectedSet;
        service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;

        const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages, true);
        actualSet$.subscribe((actualSet: BinnedStageDimensionsSet) => {
            for (const expectedStage of expectedSet.dimensions) {
              const actualStage: BinnedStageDimensions = actualSet.dimensions.find((actualStage: BinnedStageDimensions) => actualStage.gameName === expectedStage.gameName);
              expect(actualStage.blastzoneWidth.value).withContext(`${expectedStage.gameName} blastzoneWidth`).toEqual(expectedStage.blastzoneWidth.value);
              expect(actualStage.stageLength.value).withContext(`${expectedStage.gameName} stageLength`).toEqual(expectedStage.stageLength.value);
              expect(actualStage.offStageDistance.value).withContext(`${expectedStage.gameName} offStageDistance`).toEqual(expectedStage.offStageDistance.value);
              expect(actualStage.ceilingHeight.value).withContext(`${expectedStage.gameName} ceilingHeight`).toEqual(expectedStage.ceilingHeight.value);
            }
            for (const dimension of Object.keys(expectedSet.ranges)) {
              expect(actualSet.ranges[dimension].min).withContext(`${dimension} min`).toEqual(expectedSet.ranges[dimension].min);
              expect(actualSet.ranges[dimension].max).withContext(`${dimension} max`).toEqual(expectedSet.ranges[dimension].max);
              expect(actualSet.ranges[dimension].range).withContext(`${dimension} range`).toEqual(expectedSet.ranges[dimension].range);
            }
            ///
            // console.groupEnd();
          });
      }));

      it('sets stages as minimums based on their integer values', waitForAsync(() => {
        // use two stages with close minimums
        ///
        // console.groupCollapsed('=== SPEC - integer - minimum by integer value');
        const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.INTEGER_MIN.inputStages;
        const expectedDimensions: BinnedStageDimensions[] = STAGE_DIM_SVC.INTEGER_MIN.expectedDimensions;
        service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;

        const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages, true);
        actualSet$.subscribe((actualSet: BinnedStageDimensionsSet) => {
          for (const expectedStage of expectedDimensions) {
            const actualStage: BinnedStageDimensions = actualSet.dimensions.find((actualStage: BinnedStageDimensions) => actualStage.gameName === expectedStage.gameName);
            for (const dimension of ['blastzoneWidth', 'stageLength', 'offStageDistance', 'ceilingHeight']) {
              expect(actualStage[dimension].min).withContext(`${dimension} min`).toBe(expectedStage[dimension].min);
            }
          }
          ///
          // console.groupEnd();
        });
      }));

      it('sets stages as maximums based on their integer values', waitForAsync(() => {
        // use two stages with close maxes
        ///
        // console.groupCollapsed('=== SPEC - integer - maximum by integer value');
        const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.INTEGER_MAX.inputStages;
        const expectedDimensions: BinnedStageDimensions[] = STAGE_DIM_SVC.INTEGER_MAX.expectedDimensions;
        service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;

        const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages, true);
        actualSet$.subscribe((actualSet: BinnedStageDimensionsSet) => {
          for (const expectedStage of expectedDimensions) {
            const actualStage: BinnedStageDimensions = actualSet.dimensions.find((actualStage: BinnedStageDimensions) => actualStage.gameName === expectedStage.gameName);
            for (const dimension of ['blastzoneWidth', 'stageLength', 'offStageDistance', 'ceilingHeight']) {
              expect(actualStage[dimension].max).withContext(`${dimension} max`).toBe(expectedStage[dimension].max);
            }
          }
          ///
          // console.groupEnd();
        });
      }));

      it('sets stages as both the maximum and minimum if their integer values are all the same', () => {
        // bin values should be 0
        // use two stages with close values, e.g. bf and bf common
        ///
        // console.groupCollapsed('=== SPEC - integer - same-values');
        const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.INTEGER_MINMAX.inputStages;
        const expectedDimensions: BinnedStageDimensions[] = STAGE_DIM_SVC.INTEGER_MINMAX.expectedDimensions;
        service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;

        const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages, true);
        actualSet$.subscribe((actualSet: BinnedStageDimensionsSet) => {
          for (const expectedStage of expectedDimensions) {
            const actualStage: BinnedStageDimensions = actualSet.dimensions.find((actualStage: BinnedStageDimensions) => actualStage.gameName === expectedStage.gameName);
            for (const dimension of ['blastzoneWidth', 'stageLength', 'offStageDistance', 'ceilingHeight']) {
              expect(actualStage[dimension].bin).withContext(`${dimension} bin`).toBe(expectedStage[dimension].bin);
              expect(actualStage[dimension].min).withContext(`${dimension} min`).toBe(expectedStage[dimension].min);
              expect(actualStage[dimension].max).withContext(`${dimension} max`).toBe(expectedStage[dimension].max);
            }
          }
          ///
          // console.groupEnd();
        });
      });

    });

    describe('data validation', () => {
      it('returns an error if there is no saved dataset', waitForAsync(() => {
        ///
        // console.groupCollapsed('== SPEC - getDimensionsBinned() - validate - no db ===');
        const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.INVALID_NO_DB;
        expect(() => {
          const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
        }).toThrow(new DatasetNotFoundError());
        ///
        // console.groupEnd();
      }));

      it('returns an error when no gameNames are provided', waitForAsync(() => {
        ///
        // console.groupCollapsed('== SPEC - getDimensionsBinned() - validate - no gameNames ===');
        const inputStages: StageMiscInfo[] = [];
        expect(() => {
          const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
        }).toThrow(new NotFoundError());
        ///
        // console.groupEnd();
      }));

      it('returns an error when no provided gameNames are in the database', waitForAsync(() => {
        ///
        // console.groupCollapsed('== SPEC - getDimensionsBinned() - validate - unknown gamenames ===');
        const inputStages: StageMiscInfo[] = STAGE_DIM_SVC.INVALID_UNKNOWN_STAGES;
        service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
        const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages);
        actualSet$.subscribe({
          next: () => {
            fail('Expected function to throw an exception');
            ///
            // console.groupEnd();
          },
          error: e => {
            expect(e instanceof NotFoundError).toBe(true);
            ///
            // console.groupEnd();
          },
          complete: () => {
            fail('Expected function to throw an exception');
            ///
            // console.groupEnd();
          }
        });
      }));

      it('rejects a non-StageMiscInfo[] stages', () => {
        ///
        // console.groupCollapsed('=== SPEC - getDimensionsBinned() - validate - non-array gameNames');

        const badData = {
          gameNames: "lrDcx0DGRS"
        };

        const propName: string = "gameNames";

        service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
        expect(() => {
          const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(badData[propName]);
        }).toThrow(new TypeError('gameNames is not of type StageMiscInfo[]'));

        ///
        // console.groupEnd();
      });

      it('rejects a non-boolean round', () => {
        ///
        // console.groupCollapsed('=== SPEC - getDimensionsBinned() - validate - non-boolean round');

        const inputStages: StageMiscInfo[] = [
          { gameName: "mhrImLZ1vO" },
          { gameName: "CUpustSUyx" },
          { gameName: "hQhNnzppm5" }
        ];

        const badData = {
          round: 35
        };

        const propName: string = "round";

        service._dimensionsSetFull = STAGE_DIM_SET.FULL_SIMPLE;
        expect(() => {
          const actualSet$: Observable<BinnedStageDimensionsSet> = service.getDimensionsBinned(inputStages, badData[propName]);
        }).toThrow(new TypeError('round is not of type boolean'));
        
        ///
        // console.groupEnd();
      });

    });

  });

});
