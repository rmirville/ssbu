import { StageInfo, isStageInfo } from './stage-info.model';
/**
 * Represents a Stage's summary dimension data
 *
 * @interface StageDimensions
 */
export interface StageDimensions extends StageInfo {
  blastzoneWidth: number;
  stageLength: number;
  offStageDistance: number;
  ceilingHeight: number;
}

/**
  * Type guard for the StageDimensions interface
  *
  * @param {*} dimensions the variable to validate
  * @returns {this is StageDimensions}
  */
export function isStageDimensions(dimensions): dimensions is StageDimensions {
  return ((isStageInfo(dimensions))
    && (typeof dimensions.blastzoneWidth === 'number')
    && (typeof dimensions.stageLength === 'number')
    && (typeof dimensions.offStageDistance === 'number')
    && (typeof dimensions.ceilingHeight === 'number')
  );
}
