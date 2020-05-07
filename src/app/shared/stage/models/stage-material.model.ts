/**
 * Represents the material properties of a StagePiece
 *
 * @interface StageMaterial
 */
export interface StageMaterial {
  leftLedge: boolean;
  rightLedge: boolean;
  noWallJump: boolean;
  passthroughAngle: number;
  length: number;
  ceiling: boolean;
  wall: boolean;
  material: string;
}

/**
  * Type guard for the StageMaterial interface
  *
  * @param {*} material the variable to validate
  * @returns {this is StageMaterial}
  */
export function isStageMaterial(material): material is StageMaterial {
  return ((material !== undefined)
    && (material !== null)
    && (typeof material.leftLedge === 'boolean')
    && (typeof material.rightLedge === 'boolean')
    && (typeof material.noWallJump === 'boolean')
    && (typeof material.passthroughAngle === 'number')
    && (typeof material.length === 'number')
    && (typeof material.ceiling === 'boolean')
    && (typeof material.wall === 'boolean')
    && ((typeof material.material === 'string') || (material.material === null))
  );
}
