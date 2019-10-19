import { StageDimensions, isStageDimensions } from './stage-dimensions.model';
import { StageDimensionsRange, isStageDimensionsRange } from './stage-dimensions-range.model';

/**
 * Represent's an array of Stages' summary dimension data
 *
 * @export
 * @interface StageDimensionsSet
 */
export interface StageDimensionsSet {
  dimensions: StageDimensions[];
  ranges: {
    blastzoneWidth: StageDimensionsRange;
    stageLength: StageDimensionsRange;
    offStageDistance: StageDimensionsRange;
    ceilingHeight: StageDimensionsRange;
  }
}

export function isStageDimensionsSet(set): set is StageDimensionsSet {
  /**/
  // console.log('StageDimensionsSetModel::isStageDimensionsSet()');
  if (( !Array.isArray(set.dimensions) )
    || (!set.dimensions.forEach)) {
      /**/
      // console.log(`  * set.dimensions is not array`);
      // console.log(`  * isArray: ${Array.isArray(set.dimensions)}`);
      // console.log(`  * forEach: ${typeof set.dimensions.forEach}`);
      return false;
    }

  let hasStageDimensions = true;
  set.dimensions.forEach((stageDimensions) => {
    /**/
    // console.log(`  * stageDimensions: ${JSON.stringify(stageDimensions)}`);
    if (!isStageDimensions(stageDimensions)) {
      /**/
      // console.log(`  * set.dimensions.stageDimensions is not stage dimensions`);
      hasStageDimensions = false;
    }
  });
  if (!hasStageDimensions) { 
    /**/
    // console.log('  * set.dimensions does not have stage dimensions');
    return false;
  }

  if (( !isStageDimensionsRange(set.ranges.blastzoneWidth) )
    || ( !isStageDimensionsRange(set.ranges.stageLength) )
    || ( !isStageDimensionsRange(set.ranges.offStageDistance) )
    || ( !isStageDimensionsRange(set.ranges.ceilingHeight) )
    ) { return false; }

  return true;
}
