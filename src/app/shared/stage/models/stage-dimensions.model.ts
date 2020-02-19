/**
 * Represents a Stage's summary dimension data
 *
 * @interface StageDimensions
 */
export interface StageDimensions {
  name: string;
  gameName: string;
  values: {
    blastzoneWidth: number;
    stageLength: number;
    offStageDistance: number;
    ceilingHeight: number;
  };
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
    || (typeof dimensions.values.blastzoneWidth !== 'number')
    || (typeof dimensions.values.stageLength !== 'number')
    || (typeof dimensions.values.offStageDistance !== 'number')
    || (typeof dimensions.values.ceilingHeight !== 'number')
  ) { return false; }
  return true;
}
