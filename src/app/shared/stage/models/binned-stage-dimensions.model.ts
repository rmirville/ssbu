import { StageMiscInfo, isStageMiscInfo } from './stage-misc-info.model';
import { StageDimensionsBinParams, isStageDimensionsBinParams } from './stage-dimensions-bin-params.model';

import { compareText } from '../../utility/compare-functions';

/**
 * Represents a Stage's summary dimensions
 * and bin parameters within a given group of stages
 *
 * @interface BinnedStageDimensions
 */
export interface BinnedStageDimensions extends StageMiscInfo {
  name: string;
  blastzoneWidth: StageDimensionsBinParams;
  stageLength: StageDimensionsBinParams;
  offStageDistance: StageDimensionsBinParams;
  ceilingHeight: StageDimensionsBinParams;
}

/**
 * Type guard for the BinnedStageDimensions interface
 *
 * @param {*} dimensions the variable to validate
 * @returns {this is BinnedStageDimensions}
 */
export function isBinnedStageDimensions(dimensions: any): dimensions is BinnedStageDimensions {
  return ((isStageMiscInfo(dimensions))
    && (typeof dimensions.name === 'string')
    && (isStageDimensionsBinParams(dimensions.blastzoneWidth))
    && (isStageDimensionsBinParams(dimensions.stageLength))
    && (isStageDimensionsBinParams(dimensions.offStageDistance))
    && (isStageDimensionsBinParams(dimensions.ceilingHeight))
  );
}

export namespace BinnedStageDimensions {
  export function sortBlastzoneDesc(a: BinnedStageDimensions, b: BinnedStageDimensions): number {
    if ((!isBinnedStageDimensions(a))
      || (!isBinnedStageDimensions(b))) {
      throw new TypeError('One of the arguments was not of type BinnedStageDimensions');
    }
    let result: number = b.blastzoneWidth.value - a.blastzoneWidth.value;
    if (result !== 0) { return result; }
    else { return compareText(a.name, b.name); }
  }

  export function sortStageLengthDesc(a: BinnedStageDimensions, b: BinnedStageDimensions): number {
    if ((!isBinnedStageDimensions(a))
      || (!isBinnedStageDimensions(b))) {
      throw new TypeError('One of the arguments was not of type BinnedStageDimensions');
    }
    let result: number = b.stageLength.value - a.stageLength.value;
    if (result !== 0) { return result; }
    else { return compareText(a.name, b.name); }
  }

  export function sortOffStageDesc(a: BinnedStageDimensions, b: BinnedStageDimensions): number {
    if ((!isBinnedStageDimensions(a))
      || (!isBinnedStageDimensions(b))) {
      throw new TypeError('One of the arguments was not of type BinnedStageDimensions');
    }
    let result: number = b.offStageDistance.value - a.offStageDistance.value;
    if (result !== 0) { return result; }
    else { return compareText(a.name, b.name); }
  }

  export function sortCeilingDesc(a: BinnedStageDimensions, b: BinnedStageDimensions): number {
    if ((!isBinnedStageDimensions(a))
      || (!isBinnedStageDimensions(b))) {
      throw new TypeError('One of the arguments was not of type BinnedStageDimensions');
    }
    let result: number = b.ceilingHeight.value - a.ceilingHeight.value;
    if (result !== 0) { return result; }
    else { return compareText(a.name, b.name); }
  }
}
