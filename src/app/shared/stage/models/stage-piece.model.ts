import { isStagePositionArray } from './stage-position.model';
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
  if ((piece === undefined)
    || (piece === null)
    || (typeof piece.name !== 'string')
    || (!isStagePositionArray(piece.vertex))
    || (!isStagePositionArray(piece.boundingBox))
    || (!Array.isArray(piece.materials))
    ) {
      return false;
  }

  for (const material of piece.materials) {
    if (!isStageMaterial(material)) { return false; }
  }

  return true;
}
