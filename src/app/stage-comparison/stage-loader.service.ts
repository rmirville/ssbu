import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface StageSummary {
  name: string;
  gameName: string;
  Type: number;
}

interface Stage extends StageSummary {
  details: StageDetails[];
}

interface StageDetails {
  stage: string;
  name: string;
  collisions: StagePiece[];
  platforms: StagePiece[];
  blast_zones: number[];
  camera: number[];
  spawns: number[][];
  respawns: number[][];
}

interface StagePiece {
  name: string;
  vertex: number[][];
  materials: StageMaterial[];
  boundingBox: number[][];
}

interface StageMaterial {
  leftLedge: boolean;
  rightLedge: boolean;
  noWallJump: boolean;
  passthroughAngle: number;
  length: number;
  ceiling: boolean;
  wall: boolean;
  material: string;
}

const API_URL: string = 'https://rubendal.github.io/ssbu/data/patch/3.1.0';
const API_STAGE_LIST_PATH: string = '/stages.json';
const API_STAGE_DETAILS_PATH: string = '/data.json';
const API_STAGE_DETAILS_PREFIX: string = '/stages/';

@Injectable({
  providedIn: 'root'
})
export class StageLoaderService {

  constructor( private _http: HttpClient ) {
  }

  loadStages(): Observable<Stage[]> {
    /**///console.log('  StageLoaderService::loadStages()');
    let stages$: Observable<Stage[]> = new Observable((observer) => {

      let stages: Stage[] = [];

      const { next, error } = observer;

      // get stage summary data
      let stagesHttp$: Observable<StageSummary[]> = this._http.get<StageSummary[]>(API_URL + API_STAGE_LIST_PATH);
      /**///console.log(`    * created stagesHttp$: ${stagesHttp$}`);

      stagesHttp$.subscribe((summaries) => {
        /**///console.log(`    * stagesHttp$ emitted: ${JSON.stringify(summaries)}`);
        /**///console.log('    * stagesHttp$ emitted');
        /**///console.log(`stages: ${JSON.stringify(stages)}`);

        // subscribe to _getStageDetails, providing summaries
        let stage$: Observable<Stage> = this._getStageDetails(summaries);
        stage$.subscribe({
          next(stage) {
            /**///console.log(`      + stagesHttp$.subscribe - stage$ emitted: ${JSON.stringify(stage)}`);
            /**///console.log('      + stagesHttp$.subscribe - stage$ emitted');
            stages.push(stage);
          },

          error(e) {
            /**///console.log('      + stagesHttp$.subscribe - error occurred');
            observer.error(e);
          },
          complete() {
            /**///console.log('      + stagesHttp$.subscribe - stage$ complete');
            observer.next(stages);
          }
        });
      });
      /**///console.log('    * subscribed to stagesHttp$');
    });

    /**///console.log('    * returning stages$');
    return stages$;
  }

  _getStageDetails(summaries: StageSummary[]): Observable<Stage> {
    /**///console.log('  StageLoaderService::_getStageDetails()');
    /**///console.log(`    * summaries passed in: ${JSON.stringify(summaries)}`);

    let details$ = new Observable<Stage>((observer) => {
      /**///console.log('    * details$ executing');
      let stages: Stage[] = [];
      
      /**///console.log(`    * summaries isArray: ${Array.isArray(summaries)}`);
      if (!Array.isArray(summaries)) {
        throw new TypeError('The stage summary data fetched was not an array');
      }
      /**///console.log(`      + summaries.length: ${summaries.length}`);
      // for each summary in summaries
      for (let i = 0; i < summaries.length; i++) {
        /**///console.log(`      + details$ - summary: ${JSON.stringify(summaries[i])}`);
        /**///console.log('      + checking summary type');
        if (!this._isStageSummary(summaries[i])) {
          /**///console.log('      = throwing TypeError');
          throw new TypeError('The stage summary data fetched was not of type StageSummary[]');
        }
        let url = API_URL + API_STAGE_DETAILS_PREFIX + summaries[i].name + API_STAGE_DETAILS_PATH;

        /**///console.log(`      + retrieving details from url: ${url}`);
        // retrieve json
        let stageDetailsHttp$ = this._http.get<StageDetails[]>(url);
        /**///console.log('      + stageDetailsHttp$: ' + stageDetailsHttp$);
        stageDetailsHttp$.subscribe((details) => {
          /**///console.log(`      + details$ - retrieved details: ${JSON.stringify(details)}`);
          /**///console.log('      + details$ - retrieved details');
          if (!Array.isArray(details)) {
            /**///console.log('      + throwing array TypeError');
            observer.error(new TypeError(`The ${summaries[i].name} stage details data fetched was not an array`));
            return;
          }
          details.forEach((phase) => {
            if (!this._isStageDetails(phase)) {
              /**///console.log('      + throwing property TypeError');
              observer.error(new TypeError(`The ${summaries[i].name} stage details data fetched was not of type StageDetails[]`));
              return;
            }
          });
          stages[i] = {
            "name": summaries[i].name,
            "gameName": summaries[i].gameName,
            "Type": summaries[i].Type,
            "details": details
          };
          observer.next(stages[i]);
          if (i === summaries.length - 1) {
            observer.complete();
          }
        });
      }

    });

    return details$;
  }

  _isStageSummary(stage): stage is StageSummary {
    /**///console.log('  StageLoaderService::_isStageSummary()');
    /**///console.log(`    * stage: ${JSON.stringify(stage)}`);
    if (typeof stage.name !== "string") {
      return false;
    } else if (typeof stage.gameName !== "string") {
      return false;
    } else if (typeof stage.Type !== "number") {
      return false;
    }
    /**///console.log('    * returning true');
    return true;
  }

  _isStageDetails(phase): phase is StageDetails {
    /**///console.log('  StageLoaderService::_isStageDetails()');
    /**///console.log(`    * details: ${JSON.stringify(phase)}`);
    if ( (typeof phase.stage !== "string")
      || (typeof phase.name !== "string")
      || (typeof phase.lvd !== "string")
      || (!Array.isArray(phase.collisions))
      ) return false;
    /**///console.log(`    * phase.collisions type: ${typeof phase.collisions}`);
    /**///console.log(`    * phase.collisions: ${JSON.stringify(phase.collisions)}`);
    let isPiece = true;
    phase.collisions.forEach((piece) => {
      if (!this._isStagePiece(piece)) {
        isPiece = false;
      }
    });
    if (!isPiece) return false;

    if ( (!Array.isArray(phase.platforms))
      || (!phase.platforms.forEach)
      ) return false;

    phase.platforms.forEach((piece) => {
      if (!this._isStagePiecePlatforms(piece)) {
        isPiece = false;
      }
    });
    if (!isPiece) return false;

    if (!this._hasBoundaries(phase.blast_zones)) return false;

    if (!this._hasBoundaries(phase.camera)) return false;

    if (!this._isLocation(phase.center)) return false;

    if (!this._hasLocations(phase.spawns)) return false;

    if (!this._hasLocations(phase.respawns)) return false;

    return true;
  }

  _isStagePiece(piece): piece is StagePiece {
    /**///console.log('  StageLoaderService::_isStagePiece()');
    if (typeof piece.name !== "string") return false;

    if (!this._hasLocations(piece.vertex)) return false;

    if ( (!Array.isArray(piece.materials))
      || (!piece.materials.forEach)
    ) return false;
    let hasMaterials = true;
    piece.materials.forEach((material) => {
      if (!this._isStageMaterial(material)) {
        hasMaterials = false;
      }
    });
    if (!hasMaterials) return false;

    if (!this._hasLocations(piece.boundingBox)) return false;

    return true;
  }

  _isStagePiecePlatforms(piece): piece is StagePiece {
    if (typeof piece.name !== "string") return false;

    if (!this._hasLocations(piece.vertex)) return false;

    if ( (!Array.isArray(piece.materials))
      || (!piece.materials.forEach)
    ) return false;
    let hasMaterials = true;
    piece.materials.forEach((material) => {
      if (!this._isStageMaterial(material)) {
        hasMaterials = false;
      }
    });
    if (!hasMaterials) return false;

    if (!this._hasLocations(piece.boundingBox)) return false;

    return true;
  }

  _isStageMaterial(material): material is StageMaterial {
    if ( (typeof material.leftLedge !== "boolean")
      || (typeof material.rightLedge !== "boolean")
      || (typeof material.noWallJump !== "boolean")
      || (typeof material.passthroughAngle !== "number")
      || (typeof material.length !== "number")
      || (typeof material.ceiling !== "boolean")
      || (typeof material.wall !== "boolean")
      || (typeof material.material !== "string")
      ) return false;
    return true;
  }

  _hasLocations(locations): boolean {
    if ((!Array.isArray(locations))
      || (!locations.forEach)
    ) return false;

    let hasLocations = true;
    locations.forEach((location) => {
      if (!this._isLocation(location))
        hasLocations = false;
    });
    return hasLocations;
  }

  _isLocation(location): boolean {
    let isLocation = true;
    if ((!Array.isArray(location))
      || (!location.forEach)
      || (location.length !== 2)
    ) {
      isLocation = false;
      return;
    }

    location.forEach((coordinate) => {
      /**///console.log(`    * coordinate: ${coordinate}`)
      if (typeof coordinate !== "number") {
        isLocation = false;
        return;
      }
    });
    return isLocation;
  }

  _hasBoundaries(dimensions): boolean {
    if ((!Array.isArray(dimensions))
      || (!dimensions.forEach)
      || (dimensions.length !== 4)
    ) return false;
    let isBoundaries = true;
    dimensions.forEach((dimension) => {
      if (typeof dimension !== "number")
        isBoundaries = false;
    });
    return isBoundaries;
  }

  _hasLocationsPlatforms(locations): boolean {
    ////console.log(`StageLoaderService::_hasLocationsPlatforms()`);
    let hasLocations = true;

    locations.forEach((location) => {
      ////console.log(`    * location: ${location}`);
      
      if ( (!Array.isArray(location))
        || (!location.forEach)
        || (location.length !== 2)
      ) {
        hasLocations = false;
        return;
      }
      location.forEach((coordinate) => {
        ////console.log(`    * coordinate: ${coordinate}`)
        if (typeof coordinate !== "number") {
          hasLocations = false;
          return;
        }
      });
    });
    return hasLocations;
  }
}
