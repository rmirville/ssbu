import { BinnedStageDimensions, isBinnedStageDimensions } from './binned-stage-dimensions.model';
import { StageDimensionsRange, isStageDimensionsRange } from './stage-dimensions-range.model';

/**
 * Represent's an array of Stages' summary
 * and binned dimension data
 *
 * @export
 * @interface BinnedStageDimensionsSet
 */
export interface BinnedStageDimensionsSet {
  dimensions: BinnedStageDimensions[];
  bins: number;
  ranges: {
    blastzoneWidth: StageDimensionsRange;
    stageLength: StageDimensionsRange;
    offStageDistance: StageDimensionsRange;
    ceilingHeight: StageDimensionsRange;
  }
}

/**
 * Type guard for the BinnedStageDimensionsSet interface
 *
 * @param {*} set the variable to validate
 * @returns {this is BinnedStageDimensionsSet}
 */
export function isBinnedStageDimensionsSet(set): set is BinnedStageDimensionsSet {
  if (!Array.isArray(set.dimensions)) {
      return false;
    }

  for (const stageDimensions of set.dimensions) {
    if (!isBinnedStageDimensions(stageDimensions)) { return false; }
  }

  if (( !Number.isInteger(set.bins) )
    || (set.bins <= 0)
    || ( !isStageDimensionsRange(set.ranges.blastzoneWidth) )
    || ( !isStageDimensionsRange(set.ranges.stageLength) )
    || ( !isStageDimensionsRange(set.ranges.offStageDistance) )
    || ( !isStageDimensionsRange(set.ranges.ceilingHeight) )
    ) { return false; }

  return true;
}
