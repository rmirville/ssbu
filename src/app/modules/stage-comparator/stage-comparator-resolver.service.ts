import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { StageLoaderService } from '../../shared/stage/services/stage-loader.service';
import { Stage } from '../../shared/stage/models/stage.model';

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
export class StageComparatorResolverService implements Resolve<Stage[]> {

  constructor(private sls: StageLoaderService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stage[]> {
    /**/
    // console.log('StageComparatorResolverService::resolve()');
    const stages$ = this.sls.loadStages('include', COMPARATOR_STAGES);
    /**/
    // console.log(`  * stages$ type: ${typeof stages$}`);
    // console.log(`  * stages$: ${JSON.stringify(stages$)}`);
    return stages$;
  }
}
