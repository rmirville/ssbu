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
  if ( (typeof material.leftLedge !== 'boolean')
    || (typeof material.rightLedge !== 'boolean')
    || (typeof material.noWallJump !== 'boolean')
    || (typeof material.passthroughAngle !== 'number')
    || (typeof material.length !== 'number')
    || (typeof material.ceiling !== 'boolean')
    || (typeof material.wall !== 'boolean')
    || ((typeof material.material !== 'string') && (material.material !== null))
    ) {
    /**/
    /*if (typeof material.leftLedge !== 'boolean') {
      console.log(`    * material.leftLedge type: ${typeof material.leftLedge}`);
      console.log(`    * material.leftLedge: ${JSON.stringify(material.leftLedge)}`);
    }
    if (typeof material.rightLedge !== 'boolean') {
      console.log(`    * material.rightLedge type: ${typeof material.rightLedge}`);
      console.log(`    * material.rightLedge: ${JSON.stringify(material.rightLedge)}`);
    }
    if (typeof material.noWallJump !== 'boolean') {
      console.log(`    * material.noWallJump type: ${typeof material.noWallJump}`);
      console.log(`    * material.noWallJump: ${JSON.stringify(material.noWallJump)}`);
    }
    if (typeof material.passthroughAngle !== 'number') {
      console.log(`    * material.passthroughAngle type: ${typeof material.passthroughAngle}`);
      console.log(`    * material.passthroughAngle: ${JSON.stringify(material.passthroughAngle)}`);
    }
    if (typeof material.length !== 'number') {
      console.log(`    * material.length type: ${typeof material.length}`);
      console.log(`    * material.length: ${JSON.stringify(material.length)}`);
    }
    if (typeof material.ceiling !== 'boolean') {
      console.log(`    * material.ceiling type: ${typeof material.ceiling}`);
      console.log(`    * material.ceiling: ${JSON.stringify(material.ceiling)}`);
    }
    if (typeof material.wall !== 'boolean') {
      console.log(`    * material.wall type: ${typeof material.wall}`);
      console.log(`    * material.wall: ${JSON.stringify(material.wall)}`);
    }
    if ((typeof material.material !== 'string') && (material.material !== null)) {
      console.log(`    * material.material type: ${typeof material.material}`);
      console.log(`    * material.material: ${JSON.stringify(material.material)}`);
    }*/
    return false;
  }
  return true;
}
