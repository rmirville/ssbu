import { isStageBoundaries } from './stage-boundaries.model';
import { hasStagePositions, isStagePosition } from './stage-position.model';
import { StagePiece, isStagePiece } from './stage-piece.model';

/**
 * Represents detailed data about a stage's dimensions and properties
 *
 * @interface StageDetails
 */
export interface StageDetails {
  stage: string;
  name: string;
  collisions: StagePiece[];
  platforms: StagePiece[];
  blast_zones: number[];
  camera: number[];
  spawns: number[][];
  respawns: number[][];
}

/**
 * Type guard for the StageDetails interface
 *
 * @param {*} phase the variable to validate
 * @returns {this is StageDetails}
 */
export function isStageDetails(phase): phase is StageDetails {
  /**/
  // console.log('  isStageDetails()');
  /**/
  // console.log(`    * details: ${JSON.stringify(phase)}`);
  if ((typeof phase.stage !== 'string')
    || (typeof phase.name !== 'string')
    || (typeof phase.lvd !== 'string')
    || (!Array.isArray(phase.collisions))
  ) { return false; }
  /**/
  // console.log(`    * phase.collisions type: ${typeof phase.collisions}`);
  /**/
  // console.log(`    * phase.collisions: ${JSON.stringify(phase.collisions)}`);
  let isPiece = true;
  phase.collisions.forEach((piece) => {
    if (!isStagePiece(piece)) {
      isPiece = false;
    }
  });
  if (!isPiece) { return false; }

  if ((!Array.isArray(phase.platforms))
    || (!phase.platforms.forEach)
  ) { return false; }

  phase.platforms.forEach((piece) => {
    if (!isStagePiece(piece)) {
      isPiece = false;
    }
  });
  if (!isPiece) { return false; }

  if (!isStageBoundaries(phase.blast_zones)) { return false; }

  if (!isStageBoundaries(phase.camera)) { return false; }

  if (!isStagePosition(phase.center)) { return false; }

  if (!hasStagePositions(phase.spawns)) { return false; }

  if (!hasStagePositions(phase.respawns)) { return false; }

  return true;
}
