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
  let isStagePosition = true;
  if ((!Array.isArray(position))
    || (!position.forEach)
    || (position.length !== 2)
  ) {
    isStagePosition = false;
    return;
  }

  position.forEach((coordinate) => {
    /**/
    // console.log(`    * coordinate: ${coordinate}`)
    if (typeof coordinate !== 'number') {
      isStagePosition = false;
      return;
    }
  });
  return isStagePosition;
}

/**
 * Checks that the parameter matches the format for an array of StageCoordinates
 *
 * @param {*} positions the variable to validate
 * @returns {boolean}
 */
export function hasStagePositions(positions): boolean {
  if ((!Array.isArray(positions))
    || (!positions.forEach)
  ) { return false; }

  let hasStagePositions = true;
  positions.forEach((position) => {
    if (!isStagePosition(position)) {
      hasStagePositions = false;
    }
  });
  return hasStagePositions;
}
