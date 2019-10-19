import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { StageLoaderService } from '../../shared/stage/services/stage-loader.service';
import { StageDimensionsService } from '../../shared/stage/services/stage-dimensions.service';
import { Stage } from '../../shared/stage/models/stage.model';
import { StageDimensionsSet } from '../../shared/stage/models/stage-dimensions-set.model';

const COMPARATOR_STAGES = [
  "village2_",
  "xvillage",
  "battlefield_",
  "battlefield_l_",
  "umbra_f",
  "bossstage_final1_",
  "bossstage_final2_",
  "bossstage_final3_",
  "battle_common",
  "end_l_common",
  "64jungle_",
  "dk_waterfall_",
  "dracula_castle_",
  "duckhunt_",
  "colloseum_",
  "xemblem",
  "midgar_f",
  "dxcormeia_",
  "xstarfox_",
  "fox_venom_",
  "xfzero_",
  "xice_",
  "jack_mementoes_",
  "kirby_fountain_",
  "pupupuland64_f",
  "xmansion_",
  "mario_castledx_",
  "mario_rainbow_",
  "mariou_",
  "pictchat_",
  "pilotwings_",
  "kalos_",
  "poke_stadium_",
  "xstadium_",
  "poke_tengam_",
  "plasma_",
  "wily_",
  "windyhill_",
  "spla_parking",
  "tomodachi_",
  "gamer_",
  "xmadein_",
  "wrecking_",
  "wufu_",
  "yoshi_cartboard_",
  "xcrayon_",
  "yoshi_story_",
  "hyrule64_f",
  "skyward",
  "zelda_tower"
];

@Injectable({
  providedIn: 'root'
})
export class StageComparatorResolverService implements Resolve<Object> {

  constructor(private sls: StageLoaderService, private sds: StageDimensionsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Object> {
    /**/
    // console..log('StageComparatorResolverService::resolve()');
    const stageData$ = new Observable((observer) => {
      /**/
      // console..log(`  * observer at start: ${JSON.stringify(Object.keys(observer))}`);
      let stageData: {
        stages: Stage[],
        dimensionsFull: StageDimensionsSet
      } = {stages: null, dimensionsFull: null};

      const stages$ = this.sls.loadStages('include', COMPARATOR_STAGES);
      stages$.subscribe((stages) => {
        /**/
        // console.log('  * received stages');
        // console..log(`  * stages.length: ${JSON.stringify(stages.length)}`);
        // console.log(`  * stageData: ${JSON.stringify(stageData)}`);
        stageData.stages = stages;
        // console.log(`  * stageData: ${JSON.stringify(stageData)}`);

        /**/
        // console..log('  * calling getDimensionsFull()');
        const dimensionsFull$ = this.sds.getDimensionsFull(stages);
        dimensionsFull$.subscribe((dimensionsFull) => {
          /**/
          // console..log('  * received dimensionsFull');
          // console..log(`  * dimensionsFull: ${JSON.stringify(dimensionsFull)}`);
          stageData.dimensionsFull = dimensionsFull;
          // console.log(`  * stageData before sending: ${JSON.stringify(stageData)}`);
          // console.log(`  * observer right before sending: ${JSON.stringify(Object.keys(observer))}`);
          observer.next(stageData);
          observer.complete();
        });
      });
    });

    return stageData$;
    // const stages$ = this.sls.loadStages('include', COMPARATOR_STAGES);
    /**/
    // console.log(`  * stages$ type: ${typeof stages$}`);
    // console.log(`  * stages$: ${JSON.stringify(stages$)}`);
    // return stages$;
  }
}
