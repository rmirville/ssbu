/**
 * Represents the range of a stage's dimension
 *
 * @export
 * @interface StageDimensionsRange
 */
export interface StageDimensionsRange {
  min: number;
  max: number;
}

/**
 * Type guard for the StageDimensionsRange interface
 *
 * @export
 * @param {*} range
 * @returns {range is StageDimensionsRange}
 */
export function isStageDimensionsRange(range): range is StageDimensionsRange {
  if ((typeof range.min !== 'number')
    || (typeof range.max !== 'number')
  ) { return false; }
  if (range.min > range.max) { return false; }
  return true;
}
