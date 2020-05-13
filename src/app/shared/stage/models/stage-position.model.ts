/**
 * Represents two-dimensional coordinates for a position in a Stage
 */
export type StagePosition = [number, number];

/**
 * Checks that the parameter matches the format for a two-dimensional coordinate
 *
 * @param {*} position the variable to validate
 * @returns {this is StagePosition}
 */
export function isStagePosition(position): position is StagePosition {
  if ((position === undefined)
    || (position === null)
    || (!Array.isArray(position))
    || (position.length !== 2)
  ) { return false; }

  for (const coordinate of position) {
    if (typeof coordinate !== 'number') { return false; }
  }

  return true;
}

/**
 * Checks that the parameter matches the format for an array of StageCoordinates
 *
 * @param {*} positions the variable to validate
 * @returns {boolean}
 */
export function isStagePositionArray(positions): positions is StagePosition[] {
  if ((positions === undefined)
    || (positions === null)
    || (!Array.isArray(positions))
    ) { return false; }

  for (const position of positions) {
    if (!isStagePosition(position)) { return false; }
  }

  return true;
}
