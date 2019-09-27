import { hasStagePositions } from './stage-position.model';
import { StageMaterial, isStageMaterial } from './stage-material.model';

/**
 * Represents a component of the stage
 *
 * @interface StagePiece
 */
export interface StagePiece {
  name: string;
  vertex: number[][];
  materials: StageMaterial[];
  boundingBox: number[][];
}

/**
 * Type guard for the StagePiece interface
 *
 * @param {*} piece the variable to validate
 * @returns {this is StagePiece}
 */
export function isStagePiece(piece): piece is StagePiece {
  /**/
  // console.log('  isStagePiece()');
  if (typeof piece.name !== 'string') { return false; }

  if (!hasStagePositions(piece.vertex)) { return false; }

  if ((!Array.isArray(piece.materials))
    || (!piece.materials.forEach)
  ) { return false; }
  let hasMaterials = true;
  piece.materials.forEach((material) => {
    if (!isStageMaterial(material)) {
      hasMaterials = false;
    }
  });
  if (!hasMaterials) { return false; }

  if (!hasStagePositions(piece.boundingBox)) { return false; }

  return true;
}
