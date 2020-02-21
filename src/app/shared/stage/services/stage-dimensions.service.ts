import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Stage } from '../models/stage.model';
import { StageDimensions } from '../models/stage-dimensions.model';
import { StageDimensionsSet } from '../models/stage-dimensions-set.model';
import { StageDimensionsRange } from '../models/stage-dimensions-range.model';
import { StagePiece } from '../models/stage-piece.model';
import { StagePieceMap } from '../models/stage-piece-map.model';

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

  getDimensionsFull(stages: Stage[], pieceMaps?: StagePieceMap[]): Observable<StageDimensionsSet> {
    /**/
    // console.log('StageDimensionsService::getDimensionsFull()');
    // console.log(`  * number of stages: ${stages.length}`);
    // console.log(`  * pieceMaps: ${JSON.stringify(pieceMaps)}`);
    let fullDimensionsSet$: Observable<StageDimensionsSet> = new Observable<StageDimensionsSet>(observer => {
      let stageDimensions: StageDimensions[] = stages.map((stage) => {
        let name = stage.name;
        let gameName = stage.gameName;
        // most stages have hazardless lvd's ending in "00", but many also don't (e.g. battlefield_common),
        // so we use index 0 instead
        let phase = stage.details[0];

        let blastzones = phase.blast_zones;
        let blastzoneWidth = (blastzones[1] - blastzones[0]) / 2;
        let piece: StagePiece = null;
        let pieceMap: StagePieceMap = null;

        if (pieceMaps) {
          pieceMap = pieceMaps.find((map) => map.lvd == phase.lvd);
          /**/
          // console.log(`  * pieceMap: ${JSON.stringify(pieceMap)}`);
          // console.log(`  * phaseLvd: ${phase.lvd}`);
          if (pieceMap) {
            piece = phase.collisions.find((piece) => piece.name == pieceMap.pieceName);
          }
        }

        if (!piece) {
          piece = phase.collisions[0];
        }

        /**/
        // console.log(`  * stage: ${name}`);
        // console.log(`  * gameName: ${gameName}`);
        // console.log(`  * piece: ${piece.name}`);
        // console.log(`---`);
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
      const stageDimensionsRanges = this._getRanges(stageDimensions);
    /**/
    // console.log(`  * ranges: ${stageDimensionsRanges}`);
      observer.next( {dimensions: stageDimensions, ranges: stageDimensionsRanges} );
      observer.complete();
    });

    return fullDimensionsSet$;
  }

  _getRange(values: number[]): StageDimensionsRange {
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min;
    return {
      min: min,
      max: max,
      range: range
    };
  }

  _getRanges(dimensionsArr: StageDimensions[]) {
    /**/
    // console.log('StageDimensionsService::_getRanges()');
    const blastzoneWidths = dimensionsArr.map((dimensionsArr) => dimensionsArr.blastzoneWidth);
    const stageLengths = dimensionsArr.map((dimensionsArr) => dimensionsArr.stageLength);
    const offStageDistances = dimensionsArr.map((dimensionsArr) => dimensionsArr.offStageDistance);
    const ceilingHeights = dimensionsArr.map((dimensionsArr) => dimensionsArr.ceilingHeight);

    return {
      blastzoneWidth: this._getRange(blastzoneWidths),
      stageLength: this._getRange(stageLengths),
      offStageDistance: this._getRange(offStageDistances),
      ceilingHeight: this._getRange(ceilingHeights)
    };
  }
}
