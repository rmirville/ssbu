import { TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';

import { Stage, isStage } from './stage.model';

import { PRINCESS_PEACH_CASTLE, BAD_DATA } from './mocks/stages';

describe('StageModel', () => {

  beforeEach(() => {
  });

  describe('isStage()', () => {

    function _testBadData(problem) {
      /**/
      // console.log(`=== SPEC - CHECK STAGE DETAILS DATA TYPE (${problem}) ===`);
      expect(isStage(BAD_DATA[problem])).toBe(false);
    }

    beforeEach(() => {
    });

    it('should treat a valid stage as a stage', () => {
      expect(isStage(PRINCESS_PEACH_CASTLE)).toBe(true);
    });

    describe('stage summary validation', () => {

      it('should reject a stage with a non-string name', () => {
        _testBadData('nameNotString');
      });

      it('should reject a stage with a non-string gameName', () => {
        _testBadData('gameNameNotString');
      });

      it('should reject a stage with a non-numerical Type property', () => {
        _testBadData('typeNotNumber');
      });
    });

    describe('stage details validation', () => {

      it(`should reject stage details that is not an array`, fakeAsync(() => {
        _testBadData('detailsNotArray');
      }));

      it(`should reject stage details with a non-string stage property`, fakeAsync(() => {
        _testBadData('detailsStageNotString');
      }));

      it(`should reject stage details with a non-string name property`, fakeAsync(() => {
        _testBadData('detailsNameNotString');
      }));

      it(`should reject stage details with a non-string lvd property`, fakeAsync(() => {
        _testBadData('detailsLvdNotString');
      }));

      it(`should reject stage details with a non-array collisions property`, fakeAsync(() => {
        _testBadData('detailsCollisionsNotArray');
      }));

      it(`should reject stage details with a non-string collisions.name property`, fakeAsync(() => {
        _testBadData('detailsCollisionsNameNotString');
      }));

      it(`should reject stage details with a non-array collisions.vertex property`, fakeAsync(() => {
        _testBadData('detailsCollisionsVertexNotArray');
      }));

      it(`should reject stage details with a non-array collisions.vertex item`, fakeAsync(() => {
        _testBadData('detailsCollisionsVertexItemsNotArray');
      }));

      it(`should reject stage details with a collisions.vertex item that isn't length 2`, fakeAsync(() => {
        _testBadData('detailsCollisionVertexItemsNotLength2');
      }));

      it(`should reject stage details with a non-number collisions.vertex item's item`, fakeAsync(() => {
        _testBadData('detailsCollisionsVertexItemItemsNotNumbers');
      }));

      it(`should reject stage details with a non-array collisions.materials property`, fakeAsync(() => {
        _testBadData('detailsCollisionsMaterialsNotArray');
      }));

      it(`should reject stage details with a non-boolean collisions.materials.leftLedge property`, fakeAsync(() => {
        _testBadData('detailsCollisionsMaterialLeftLedgeNotBoolean');
      }));

      it(`should reject stage details with a non-boolean collisions.materials.rightLedge property`, fakeAsync(() => {
        _testBadData('detailsCollisionsMaterialsRightLedgeNotBoolean');
      }));

      it(`should reject stage details with a non-boolean collisions.materials.noWallJump property`, fakeAsync(() => {
        _testBadData('detailsCollisionsMaterialsNoWallJumpNotBoolean');
      }));

      it(`should reject stage details with a non-number collisions.materials.passthroughAngle property`, fakeAsync(() => {
        _testBadData('detailsCollisionsMaterialsPassthroughAngleNotNumber');
      }));

      it(`should reject stage details with a non-number collisions.materials.length property`, fakeAsync(() => {
        _testBadData('detailsCollisionsMaterialsLengthNotNumber');
      }));

      it(`should reject stage details with a non-boolean collisions.materials.ceiling property`, fakeAsync(() => {
        _testBadData('detailsCollisionsMaterialsCeilingNotBoolean');
      }));

      it(`should reject stage details with a non-boolean collisions.materials.wall property`, fakeAsync(() => {
        _testBadData('detailsCollisionsMaterialsWallNotBoolean');
      }));

      it(`should reject stage details with a non-string collisions.materials.material property`, fakeAsync(() => {
        _testBadData('detailsCollisionsMaterialsMaterialNotString');
      }));

      it(`should reject stage details with a non-array collisions.boundingBox property`, fakeAsync(() => {
        _testBadData('detailsCollisionsBoundingBoxNotArray');
      }));

      it(`should reject stage details with a non-array collisions.boundingBox item`, fakeAsync(() => {
        _testBadData('detailsCollisionsBoundingBoxItemNotArray');
      }));

      it(`should reject stage details with a collisions.boundingBox item that isn't length 2`, fakeAsync(() => {
        _testBadData('detailsCollisionsBoundingBoxItemNotLength2');
      }));

      it(`should reject stage details with a non-number collisions.boundingBox item's item`, fakeAsync(() => {
        _testBadData('detailsCollisionsBoundingBoxItemItemNotNumber');
      }));

      it(`should reject stage details with a non-array platforms property`, fakeAsync(() => {
        _testBadData('detailsPlatformsNotArray');
      }));

      it(`should reject stage details with a non-string platforms.name property`, fakeAsync(() => {
        _testBadData('detailsPlatformsNameNotString');
      }));

      it(`should reject stage details with a non-array platforms.vertex property`, fakeAsync(() => {
        _testBadData('detailsPlatformsVertexNotArray');
      }));

      it(`should reject stage details with a non-array platforms.vertex item`, fakeAsync(() => {
        _testBadData('detailsPlatformsVertexItemsNotArray');
      }));

      it(`should reject stage details with a platforms.vertex item that isn't length 2`, fakeAsync(() => {
        _testBadData('detailsPlatformsVertexItemsNotLength2');
      }));

      it(`should reject stage details with a non-number platforms.vertex item's item`, fakeAsync(() => {
        _testBadData('detailsPlatformsVertexItemItemsNotNumbers');
      }));

      it(`should reject stage details with a non-array platforms.materials property`, fakeAsync(() => {
        _testBadData('detailsPlatformsMaterialsNotArray');
      }));

      it(`should reject stage details with a non-boolean platforms.materials.leftLedge property`, fakeAsync(() => {
        _testBadData('detailsPlatformsMaterialLeftLedgeNotBoolean');
      }));

      it(`should reject stage details with a non-boolean platforms.materials.rightLedge property`, fakeAsync(() => {
        _testBadData('detailsPlatformsMaterialsRightLedgeNotBoolean');
      }));

      it(`should reject stage details with a non-boolean platforms.materials.noWallJump property`, fakeAsync(() => {
        _testBadData('detailsPlatformsMaterialsNoWallJumpNotBoolean');
      }));

      it(`should reject stage details with a non-number platforms.materials.passthroughAngle property`, fakeAsync(() => {
        _testBadData('detailsPlatformsMaterialsPassthroughAngleNotNumber');
      }));

      it(`should reject stage details with a non-number platforms.materials.length property`, fakeAsync(() => {
        _testBadData('detailsPlatformsMaterialsLengthNotNumber');
      }));

      it(`should reject stage details with a non-boolean platforms.materials.ceiling property`, fakeAsync(() => {
        _testBadData('detailsPlatformsMaterialsCeilingNotBoolean');
      }));

      it(`should reject stage details with a non-boolean platforms.materials.wall property`, fakeAsync(() => {
        _testBadData('detailsPlatformsMaterialsWallNotBoolean');
      }));

      it(`should reject stage details with a non-string platforms.materials.material property`, fakeAsync(() => {
        _testBadData('detailsPlatformsMaterialsMaterialNotString');
      }));

      it(`should reject stage details with a non-array platforms.boundingBox property`, fakeAsync(() => {
        _testBadData('detailsPlatformsBoundingBoxNotArray');
      }));

      it(`should reject stage details with a non-array platforms.boundingBox item`, fakeAsync(() => {
        _testBadData('detailsPlatformsBoundingBoxItemNotArray');
      }));

      it(`should reject stage details with a platforms.boundingBox item that isn't length 2`, fakeAsync(() => {
        _testBadData('detailsPlatformsBoundingBoxItemNotLength2');
      }));

      it(`should reject stage details with a non-number platforms.boundingBox item's item`, fakeAsync(() => {
        _testBadData('detailsPlatformsBoundingBoxItemItemNotNumber');
      }));

      it(`should reject stage details with a non-array blast_zones property`, fakeAsync(() => {
        _testBadData('detailsBlast_zonesNotArray');
      }));

      it(`should reject stage details with a blast_zones array that isn't length 4`, fakeAsync(() => {
        _testBadData('detailsBlast_zonesNotLength4');
      }));

      it(`should reject stage details with a non-number blast_zones item`, fakeAsync(() => {
        _testBadData('detailsBlast_zonesItemNotNumber');
      }));

      it(`should reject stage details with a non-array camera property`, fakeAsync(() => {
        _testBadData('detailsCameraNotArray');
      }));

      it(`should reject stage details with a camera array that isn't length 4`, fakeAsync(() => {
        _testBadData('detailsCameraNotLength4');
      }));

      it(`should reject stage details with a non-number camera item`, fakeAsync(() => {
        _testBadData('detailsCameraItemNotNumber');
      }));

      it(`should reject stage details with a non-array center property`, fakeAsync(() => {
        _testBadData('detailsCenterNotArray');
      }));

      it(`should reject stage details with a center array that isn't length 2`, fakeAsync(() => {
        _testBadData('detailsCenterNotLength2');
      }));

      it(`should reject stage details with a non-number center item`, fakeAsync(() => {
        _testBadData('detailsCenterItemNotNumber');
      }));

      it(`should reject stage details with a non-array spawns property`, fakeAsync(() => {
        _testBadData('detailsSpawnsNotArray');
      }));

      it(`should reject stage details with a non-array spawns item`, fakeAsync(() => {
        _testBadData('detailsSpawnsItemsNotArray');
      }));

      it(`should reject stage details with a spawns item that isn't length 2`, fakeAsync(() => {
        _testBadData('detailsSpawnsItemsNotLength2');
      }));

      it(`should reject stage details with a non-number spawns item's item`, fakeAsync(() => {
        _testBadData('detailsSpawnsItemItemsNotNumbers');
      }));

      it(`should reject stage details with a non-array respawns property`, fakeAsync(() => {
        _testBadData('detailsRespawnsNotArray');
      }));

      it(`should reject stage details with a non-array respawns item`, fakeAsync(() => {
        _testBadData('detailsRespawnsItemsNotArray');
      }));

      it(`should reject stage details with a respawns item that isn't length 2`, fakeAsync(() => {
        _testBadData('detailsRespawnsItemsNotLength2');
      }));

      it(`should reject stage details with a non-number respawns item's item`, fakeAsync(() => {
        _testBadData('detailsRespawnsItemItemsNotNumbers');
      }));

    });

  });
});
