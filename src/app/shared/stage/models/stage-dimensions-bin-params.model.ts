/**
 * Represents a Stage's summary dimension value
 * and bin parameters within a group of given stages
 *
 * @interface StageDimensionsBinParams
 */
export interface StageDimensionsBinParams {
  value: number;
  bin: number;
  min: boolean;
  max: boolean;
}

export function isStageDimensionsBinParams(params: any): params is StageDimensionsBinParams {
  return ((typeof params.value === 'number')
    && (Number.isInteger(params.bin))
    && (typeof params.min === 'boolean')
    && (typeof params.max === 'boolean')
  );
}
