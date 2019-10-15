/**
 * Represents a Stage's summary dimension data
 *
 * @interface StageDimensions
 */
export interface StageDimensions {
  name: string;
  gameName: string;
  blastzoneWidth: number;
  stageLength: number;
  offStageDistance: number;
  ceilingHeight: number;
}

/**
  * Type guard for the StageDimensions interface
  *
  * @param {*} dimensions the variable to validate
  * @returns {this is StageMaterial}
  */
export function isStageDimensions(dimensions): dimensions is StageDimensions {
  if ((typeof dimensions.name !== 'string')
    || (typeof dimensions.gameName !== 'string')
    || (typeof dimensions.blastzoneWidth !== 'number')
    || (typeof dimensions.stageLength !== 'number')
    || (typeof dimensions.offStageDistance !== 'number')
    || (typeof dimensions.ceilingHeight !== 'number')
  ) { return false; }
  return true;
}
