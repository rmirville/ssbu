import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { StageLoaderService } from '../../shared/stage/services/stage-loader.service';
import { StageClassificationsService } from '../../shared/stage/services/stage-classifications.service';
import { StageDimensionsService } from '../../shared/stage/services/stage-dimensions.service';
import { Stage } from '../../shared/stage/models/stage.model';
import { StageDimensionsSet } from '../../shared/stage/models/stage-dimensions-set.model';
import { StagePieceMap } from '../../shared/stage/models/stage-piece-map.model';
import { StageSelectInfo } from '../../shared/stage/models/stage-select-info.model';

interface StageComparatorRouteData {
  stages: Stage[],
  dimensionsFull: StageDimensionsSet,
  stageSelections: StageSelectInfo[]
};

const COMPARATOR_STAGES: StagePieceMap[] = [
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
    lvd: "umbra_f00",
    pieceName: "COL_00_Floor01"
  },
  {
    lvd: "bossstage_final1_00",
    pieceName: "COL_00_Floor"
  },
  {
    lvd: "battle_common",
    pieceName: "COL_00_Ring01"
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
    lvd: "yoshi_story_00",
    pieceName: "COL_Ground"
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
];

@Injectable({
  providedIn: 'root'
})
export class StageComparatorResolverService implements Resolve<StageComparatorRouteData> {

  constructor(private sls: StageLoaderService, private sds: StageDimensionsService, private scs: StageClassificationsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StageComparatorRouteData> {
    /**/
    // console.log('StageComparatorResolverService::resolve()');
    const stageData$ = new Observable<StageComparatorRouteData>(observer => {
      /**/
      // console.log(`  * observer at start: ${JSON.stringify(Object.keys(observer))}`);
      let stageData: StageComparatorRouteData = {stages: null, dimensionsFull: null, stageSelections: null};

      const stages$ = this.sls.loadStages('include', COMPARATOR_STAGES.map(stage => stage.lvd));
      stages$.subscribe(stages => {
        /**/
        // console.log('  * received stages');
        // console.log(`  * stages.length: ${JSON.stringify(stages.length)}`);
        // console.log(`  * stageData: ${JSON.stringify(stageData)}`);
        stageData.stages = stages;
        // console.log(`  * stageData: ${JSON.stringify(stageData)}`);

        /**/
        // console.log('  * calling getDimensionsFull()');
        const stagesBasic = stages.map( stage => { return {name: stage.name, gameName: stage.gameName}; } );
        const stageCalculations$ = forkJoin(
          this.sds.getDimensionsFull(stages, COMPARATOR_STAGES),
          this.scs.classifyStages(stagesBasic)
        ).pipe(
          map( ([dimensionsFull, stageSelections]) => {
            return { dimensionsFull, stageSelections };
          })
        );
        stageCalculations$.subscribe(stageCalculations => {
          stageData.dimensionsFull = stageCalculations.dimensionsFull;
          stageData.stageSelections = stageCalculations.stageSelections;
          observer.next(stageData);
          observer.complete();
        });
        //// const dimensionsFull$ = this.sds.getDimensionsFull(stages, COMPARATOR_STAGES);
        //// dimensionsFull$.subscribe((dimensionsFull) => {
          /**/
          // console.log('  * received dimensionsFull');
          // console.log(`  * dimensionsFull: ${JSON.stringify(dimensionsFull)}`);
        ////   stageData.dimensionsFull = dimensionsFull;
          // console.log(`  * stageData before sending: ${JSON.stringify(stageData)}`);
          // console.log(`  * observer right before sending: ${JSON.stringify(Object.keys(observer))}`);
        ///   observer.next(stageData);
        ///   observer.complete();
        /// });
      });
    });

    return stageData$;
  }
}
