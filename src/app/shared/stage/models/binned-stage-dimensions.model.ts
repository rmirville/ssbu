import { StageMiscInfo, isStageMiscInfo } from './stage-misc-info.model';
import { StageDimensionsBinParams, isStageDimensionsBinParams } from './stage-dimensions-bin-params.model';

/**
 * Represents a Stage's summary dimensions
 * and bin parameters within a given group of stages
 *
 * @interface BinnedStageDimensions
 */
export interface BinnedStageDimensions extends StageMiscInfo {
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
    && (isStageDimensionsBinParams(dimensions.blastzoneWidth))
    && (isStageDimensionsBinParams(dimensions.stageLength))
    && (isStageDimensionsBinParams(dimensions.offStageDistance))
    && (isStageDimensionsBinParams(dimensions.ceilingHeight))
  );
}
