import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Stage } from '../models/stage.model';


/**
 * Service class providing summary dimensions stage data
 *
 * @export
 * @class StageDimensionsService
 */
@Injectable({
  providedIn: 'root'
})
export class StageDimensionsService {

  /**
   * Creates an instance of StageFormatterService.
   *
   * @memberof StageDimensionsService
   */
  constructor() {
  }

  getDimensionsFull(stages: Stage[]): Observable<Object[]> {
    /**/
    console.log('StageDimensionsService::getDimensionsFull()');
    let stageDimensions = stages.map((stage) => {
      let name = stage.name;
      let gameName = stage.gameName;
      let phase = stage.details[0];
      let piece = phase.collisions.find((piece) => piece.name == 'COL_00_Floor01');
      let blastzones = phase.blast_zones;
      let blastzoneWidth = (blastzones[1] - blastzones[0]) / 2;
      let leftIndex = piece.materials.findIndex((material) => material.leftLedge === true);
      let rightIndex = piece.materials.findIndex((material) => material.rightLedge === true) + 1;
      let leftLedgePosition = piece.vertex[leftIndex];
      let rightLedgePosition = piece.vertex[rightIndex];
      let stageLength = (rightLedgePosition[0] - leftLedgePosition[0]) / 2;
      let offStageDistance = blastzoneWidth - stageLength;
      let ceilingHeight = blastzones[2] - ((rightLedgePosition[1] + leftLedgePosition[1]) / 2);
      /**/
      /*console.log(
        `name: ${name}\n\n`
        + `gameName: ${gameName}\n\n`
        + `phase: ${phase.lvd}\n\n`
        + `blastzones: ${blastzones}\n\n`
        + `blastzoneWidth: ${blastzoneWidth}\n\n`
        + `materials: ${JSON.stringify(piece.materials)}\n\n`
        + `vertices: ${JSON.stringify(piece.vertex)}\n\n`
        
        + `leftIndex: ${leftIndex}\n\n`
        + `leftLedge: ${JSON.stringify(piece.materials[leftIndex])}\n\n`
        + `leftVertex: ${JSON.stringify(piece.vertex[leftIndex])}\n\n`
        + `leftLedgeX: ${leftLedgePosition[0]}\n\n`

        + `rightIndex: ${rightIndex}\n\n`
        + `rightLedge: ${JSON.stringify(piece.materials[rightIndex])}\n\n`
        + `rightVertex: ${JSON.stringify(piece.vertex[rightIndex])}\n\n`
        + `rightLedgeX: ${rightLedgePosition[0]}\n\n`
        
        + `stageLength: ${stageLength}\n\n`
        + `offStageDistance: ${offStageDistance}\n\n`
        + `ceilingHeight: ${ceilingHeight}\n\n`
      );*/
      return {
        name: name,
        gameName: gameName,
        blastzoneWidth: blastzoneWidth,
        stageLength: stageLength,
        offStageDistance: offStageDistance,
        ceilingHeight: ceilingHeight
      };
    });
    return of(stageDimensions);
  }

}
