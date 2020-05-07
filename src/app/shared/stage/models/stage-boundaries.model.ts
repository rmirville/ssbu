/**
 * Represents a pair of coordinates defining a rectangular area in a Stage
 */
export type StageBoundaries = [number, number, number, number];

/**
 * Checks that the parameter matches the format for an array of boundary markers
 *
 * @param {*} dimensions the variable to validate
 * @returns {this is StageBoundaries}
 */
export function isStageBoundaries(dimensions): dimensions is StageBoundaries {
  if ((dimensions === undefined)
    || (dimensions === null)
    || (!Array.isArray(dimensions))
    || (dimensions.length !== 4)
  ) { return false; }

  for (const dimension of dimensions) {
    if (typeof dimension !== 'number') { return false; }
  }

  return true;
}
