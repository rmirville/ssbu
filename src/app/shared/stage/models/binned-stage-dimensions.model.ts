import { StageDimensionsBinParams, isStageDimensionsBinParams } from './stage-dimensions-bin-params.model';

/**
 * Represents a Stage's summary dimensions
 * and bin parameters within a given group of stages
 *
 * @interface BinnedStageDimensions
 */
export interface BinnedStageDimensions {
  name: string;
  gameName: string;
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
  return ((typeof dimensions.name === 'string')
    && (typeof dimensions.gameName === 'string')
    && (isStageDimensionsBinParams(dimensions.blastzoneWidth))
    && (isStageDimensionsBinParams(dimensions.stageLength))
    && (isStageDimensionsBinParams(dimensions.offStageDistance))
    && (isStageDimensionsBinParams(dimensions.ceilingHeight))
  );
}