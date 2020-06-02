import { isStageBoundaries } from './stage-boundaries.model';
import { isStagePosition, isStagePositionArray } from './stage-position.model';
import { StagePiece, isStagePiece } from './stage-piece.model';

/**
 * Represents detailed data about a stage's dimensions and properties
 *
 * @interface StageDetails
 */
export interface StageDetails {
  stage: string;
  name: string;
  lvd: string;
  collisions: StagePiece[];
  platforms: StagePiece[];
  blast_zones: number[];
  camera: number[];
  spawns: number[][];
  respawns: number[][];
  center?: number[];
  items?: any[];
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
  if ((phase === undefined)
    || (phase === null)
    || (typeof phase.stage !== 'string')
    || (typeof phase.name !== 'string')
    || (typeof phase.lvd !== 'string')
    || (!isStageBoundaries(phase.blast_zones))
    || (!isStageBoundaries(phase.camera))
    || (!isStagePosition(phase.center))
    || (!isStagePositionArray(phase.spawns))
    || (!isStagePositionArray(phase.respawns))
    || (!Array.isArray(phase.collisions))
    || (!Array.isArray(phase.platforms))
  ) { 
    /**/
    // console.log(`    * phase.stage type: ${typeof phase.stage}`);
    // console.log(`    * phase.stage: ${JSON.stringify(phase.stage)}`);
    // console.log(`    * phase.name type: ${typeof phase.name}`);
    // console.log(`    * phase.name: ${JSON.stringify(phase.name)}`);
    // console.log(`    * phase.lvd type: ${typeof phase.lvd}`);
    // console.log(`    * phase.lvd: ${JSON.stringify(phase.lvd)}`);
    return false;
  }
  /**/
  // console.log(`    * phase.collisions type: ${typeof phase.collisions}`);
  // console.log(`    * phase.collisions: ${JSON.stringify(phase.collisions)}`);

  for (const piece of phase.collisions) {
    if (!isStagePiece(piece)) { return false; }
  }

  for (const piece of phase.platforms) {
    if (!isStagePiece(piece)) { return false; }
  }

  return true;
}
