import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { StageClassifications } from '../models/stage-classifications.model';

/**
 * Service class providing stage categorical data
 *
 * @export
 * @class StageClassificationsService
 */
@Injectable({
  providedIn: 'root'
})
export class StageClassificationsService {

  classificationsStore: StageClassifications[] = [
    {
      gameName: "village2_",
      series: "Animal Crossing",
      tourneyPresence: 0
    },
    {
      gameName: "xvillage",
      series: "Animal Crossing",
      tourneyPresence: 0
    },
    {
      gameName: "battlefield_",
      series: "Super Smash Bros.",
      tourneyPresence: 0
    },
    {
      gameName: "battlefield_l_",
      series: "Super Smash Bros.",
      tourneyPresence: -1
    },
    {
      gameName: "umbra_f",
      series: "Bayonetta",
      tourneyPresence: -1
    },
    {
      gameName: "bossstage_final1_",
      series: "Super Smash Bros.",
      tourneyPresence: 0
    },
    {
      gameName: "end_l_common",
      series: "Super Smash Bros.",
      tourneyPresence: -1
    },
    {
      gameName: "64jungle_",
      series: "Donkey Kong",
      tourneyPresence: -1
    },
    {
      gameName: "dk_waterfall_",
      series: "Donkey Kong",
      tourneyPresence: -1
    },
    {
      gameName: "duckhunt_",
      series: "Duck Hunt",
      tourneyPresence: -1
    },
    {
      gameName: "colloseum_",
      series: "Fire Emblem",
      tourneyPresence: -1
    },
    {
      gameName: "xemblem",
      series: "Fire Emblem",
      tourneyPresence: -1
    },
    {
      gameName: "xstarfox_",
      series: "Star Fox",
      tourneyPresence: 0
    },
    {
      gameName: "xfzero_",
      series: "F-Zero",
      tourneyPresence: -1
    },
    {
      gameName: "xice_",
      series: "Ice Climber",
      tourneyPresence: -1
    },
    {
      gameName: "jack_mementoes_",
      series: "Persona",
      tourneyPresence: -1
    },
    {
      gameName: "kirby_fountain_",
      series: "Kirby",
      tourneyPresence: -1
    },
    {
      gameName: "pupupuland64_f",
      series: "Kirby",
      tourneyPresence: -1
    },
    {
      gameName: "xmansion_",
      series: "Super Mario",
      tourneyPresence: -1
    },
    {
      gameName: "mario_castledx_",
      series: "Super Mario",
      tourneyPresence: -1
    },
    {
      gameName: "mario_rainbow_",
      series: "Super Mario",
      tourneyPresence: -1
    },
    {
      gameName: "mariou_",
      series: "Super Mario",
      tourneyPresence: -1
    },
    {
      gameName: "pictchat_",
      series: "Miscellaneous",
      tourneyPresence: -1
    },
    {
      gameName: "kalos_",
      series: "Pokemon",
      tourneyPresence: 0
    },
    {
      gameName: "poke_stadium_",
      series: "Pokemon",
      tourneyPresence: 2
    },
    {
      gameName: "xstadium_",
      series: "Pokemon",
      tourneyPresence: 0
    },
    {
      gameName: "poke_tengam_",
      series: "Pokemon",
      tourneyPresence: -1
    },
    {
      gameName: "plasma_",
      series: "Pokemon",
      tourneyPresence: 2
    },
    {
      gameName: "wily_",
      series: "Mega Man",
      tourneyPresence: -1
    },
    {
      gameName: "windyhill_",
      series: "Sonic the Hedgehog",
      tourneyPresence: -1
    },
    {
      gameName: "tomodachi_",
      series: "Miscellaneous",
      tourneyPresence: -1
    },
    {
      gameName: "gamer_",
      series: "Wario Ware",
      tourneyPresence: -1
    },
    {
      gameName: "xmadein_",
      series: "Wario Ware",
      tourneyPresence: -1
    },
    {
      gameName: "wrecking_",
      series: "Miscellaneous",
      tourneyPresence: -1
    },
    {
      gameName: "wufu_",
      series: "Miscellaneous",
      tourneyPresence: -1
    },
    {
      gameName: "yoshi_cartboard_",
      series: "Yoshi",
      tourneyPresence: 0
    },
    {
      gameName: "xcrayon_",
      series: "Yoshi",
      tourneyPresence: 2
    },
    {
      gameName: "yoshi_story_",
      series: "Yoshi",
      tourneyPresence: -1
    },
    {
      gameName: "hyrule64_f",
      series: "The Legend of Zelda",
      tourneyPresence: -1
    },
    {
      gameName: "skyward",
      series: "The Legend of Zelda",
      tourneyPresence: -1
    },
    {
      gameName: "zelda_tower",
      series: "The Legend of Zelda",
      tourneyPresence: -1
    }
  ];

  constructor() { }

  /**
   * Binds loaded StageClassifications to an array
   *
   * @param {any[]} stages the array of stages to classify
   * @returns {Observable<any[]>}
   * @memberof StageClassificationsService
   */
  classifyStages(stages: any[]): Observable<any[]> {

    const stages$ = new Observable<any[]>((observer) => {

      let classifiedStages = [];
      stages.forEach(stage => {

        let classifiedStage = stage;
        let attributes = this.classificationsStore.find(classifications => classifications.gameName === stage.gameName);
        
        classifiedStage.series = attributes.series;
        classifiedStage.tourneyPresence = attributes.tourneyPresence;
        
        classifiedStages.push(classifiedStage);

      });

      observer.next(classifiedStages);
      observer.complete();

    });
    
    return stages$;
  }
}
