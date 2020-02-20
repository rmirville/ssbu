/**
 * Represents a raw value paired with
 * bin parameters within a given group of stages
 *
 * @interface StageDimensionsBinParams
 */
export interface StageDimensionsBinParams {
  value: number;
  bin: number;
  min: boolean;
  max: boolean;
}

/**
 * Type guard for the StageDimensionsBinParams interface
 *
 * @param {*} params the variable to validate
 * @returns {this is StageDimensionsBinParams}
 */
export function isStageDimensionsBinParams(params: any): params is StageDimensionsBinParams {
  return ((typeof params.value === 'number')
    && (Number.isInteger(params.bin))
    && (params.bin >= 0)
    && (typeof params.min === 'boolean')
    && (typeof params.max === 'boolean')
  );
}
