import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { StagePieceMap } from '../models/stage-piece-map.model';

import { DataNotFoundError } from '../../errors/data-not-found-error.model';
import { EmptyArgumentError } from '../../errors/empty-argument-error.model';

/**
 * Service class providing StagePiece selection data for each Stage
 *
 * @export
 * @class StagePieceMapService
 */
@Injectable({
  providedIn: 'root'
})
export class StagePieceMapService {

  mapSets: {[mapSetName: string]: StagePieceMap[]} = {
    stageComparator: [
      {
        lvd: "village2_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "xvillage00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "battlefield_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "battlefield_l_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "battlefield_s_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "umbra_f00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "bossstage_final1_00",
        pieceName: "COL_00_Floor"
      },
      {
        lvd: "end_l_common",
        pieceName: "COL_00_Floor"
      },
      {
        lvd: "64jungle_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "dk_waterfall_00",
        pieceName: "COL_curve1"
      },
      {
        lvd: "duckhunt_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "colloseum_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "xemblem00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "xstarfox_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "xfzero_00",
        pieceName: "COL_00_MainPlatform01"
      },
      {
        lvd: "xice_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "jack_mementoes_00",
        pieceName: "COL_main"
      },
      {
        lvd: "kirby_fountain_00",
        pieceName: "COL_curve1"
      },
      {
        lvd: "pupupuland64_f00",
        pieceName: "COL_curve1"
      },
      {
        lvd: "xmansion_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "mario_castledx_00",
        pieceName: "COL_Ground"
      },
      {
        lvd: "mario_rainbow_00",
        pieceName: "COL_ship_1"
      },
      {
        lvd: "mariou_00",
        pieceName: "COL_00_GimmickFloor01A"
      },
      {
        lvd: "pictchat_00",
        pieceName: "COL_00_Floor"
      },
      {
        lvd: "kalos_00",
        pieceName: "COL_00_Hall_Floor01"
      },
      {
        lvd: "poke_stadium_00",
        pieceName: "COL_curve1"
      },
      {
        lvd: "xstadium_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "poke_tengam_00",
        pieceName: "COL_curve1"
      },
      {
        lvd: "plasma_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "wily_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "windyhill_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "tomodachi_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "gamer_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "xmadein_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "wrecking_00",
        pieceName: "COL_00_1F_Floor01"
      },
      {
        lvd: "wufu_00",
        pieceName: "COL_00_Platform01"
      },
      {
        lvd: "yoshi_cartboard_00",
        pieceName: "COL_curve1"
      },
      {
        lvd: "xcrayon_00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "hyrule64_f00",
        pieceName: "COL_curve1"
      },
      {
        lvd: "skyward00",
        pieceName: "COL_00_Floor01"
      },
      {
        lvd: "zelda_tower",
        pieceName: "COL_curve1"
      }
    ],
    omitted: [
      {
        lvd: "battle_common",
        pieceName: "COL_00_Ring01"
      },
    ]
  };

  constructor() { }

  getMaps(mapSetName: string): Observable<StagePieceMap[]> {
    if (typeof mapSetName !== 'string') {
      throw new TypeError();
    }
    if (mapSetName.trim().length === 0) {
      throw new EmptyArgumentError();
    }
    const maps$ = new Observable<StagePieceMap[]>((observer) => {
      if ( Object.keys(this.mapSets).includes(mapSetName) ) {
        observer.next(this.mapSets[mapSetName]);
      }
      else {
        observer.error(new DataNotFoundError());
      }
      observer.complete();
    });
    return maps$;
  }

}
