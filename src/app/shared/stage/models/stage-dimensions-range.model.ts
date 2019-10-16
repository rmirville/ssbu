/**
 * Represents the range of a stage's dimension
 *
 * @export
 * @interface StageDimensionsRange
 */
export interface StageDimensionsRange {
  min: number;
  max: number;
  range: number;
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
    || (typeof range.range !== 'number')
  ) { return false; }
  if ((range.min > range.max)
    || (range.range < 0)
  ) { return false; }
  return true;
}
