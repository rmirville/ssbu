import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { StageClassifications } from '../models/stage-classifications.model';

import { StageMiscInfo } from '../models/stage-misc-info.model';

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

  classificationsSet: StageClassifications[] = [
    {
      gameName: "village2_",
      name: "Town and City",
      abbr: "T&C",
      series: "Animal Crossing",
      tourneyPresence: 0
    },
    {
      gameName: "xvillage",
      name: "Smashville",
      abbr: "SV",
      series: "Animal Crossing",
      tourneyPresence: 0
    },
    {
      gameName: "battlefield_",
      name: "Battlefield",
      abbr: "BF",
      series: "Super Smash Bros.",
      tourneyPresence: 0
    },
    {
      gameName: "battle_common",
      name: "Battlefield (Common)",
      abbr: "BF(C)",
      series: "Super Smash Bros.",
      tourneyPresence: 0
    },
    {
      gameName: "battlefield_l_",
      name: "Big Battlefield",
      abbr: "BBF",
      series: "Super Smash Bros.",
      tourneyPresence: -1
    },
    {
      gameName: "umbra_f",
      name: "Umbra Clock Tower",
      abbr: "UCT",
      series: "Bayonetta",
      tourneyPresence: -1
    },
    {
      gameName: "bossstage_final1_",
      name: "Final Destination",
      abbr: "FD",
      series: "Super Smash Bros.",
      tourneyPresence: 0
    },
    {
      gameName: "end_l_common",
      name: "Final Destination (Large)",
      abbr: "FD(L)",
      series: "Super Smash Bros.",
      tourneyPresence: -1
    },
    {
      gameName: "64jungle_",
      name: "Kongo Jungle",
      abbr: "KJ",
      series: "Donkey Kong",
      tourneyPresence: -1
    },
    {
      gameName: "dk_waterfall_",
      name: "Kongo Falls",
      abbr: "KF",
      series: "Donkey Kong",
      tourneyPresence: -1
    },
    {
      gameName: "duckhunt_",
      name: "Duck Hunt",
      abbr: "DH",
      series: "Duck Hunt",
      tourneyPresence: -1
    },
    {
      gameName: "colloseum_",
      name: "Arena Ferox",
      abbr: "AF",
      series: "Fire Emblem",
      tourneyPresence: -1
    },
    {
      gameName: "xemblem",
      name: "Castle Siege",
      abbr: "CS",
      series: "Fire Emblem",
      tourneyPresence: -1
    },
    {
      gameName: "xstarfox_",
      name: "Lylat Cruise",
      abbr: "LC",
      series: "Star Fox",
      tourneyPresence: 0
    },
    {
      gameName: "xfzero_",
      name: "Port Town Aero Dive",
      abbr: "PTAD",
      series: "F-Zero",
      tourneyPresence: -1
    },
    {
      gameName: "xice_",
      name: "Summit",
      abbr: "SMT",
      series: "Ice Climber",
      tourneyPresence: -1
    },
    {
      gameName: "jack_mementoes_",
      name: "Mementos",
      abbr: "MM",
      series: "Persona",
      tourneyPresence: -1
    },
    {
      gameName: "kirby_fountain_",
      name: "Fountain of Dreams",
      abbr: "FoD",
      series: "Kirby",
      tourneyPresence: -1
    },
    {
      gameName: "pupupuland64_f",
      name: "Dream Land (64)",
      abbr: "DL(64)",
      series: "Kirby",
      tourneyPresence: -1
    },
    {
      gameName: "xmansion_",
      name: "Luigi's Mansion",
      abbr: "LM",
      series: "Super Mario",
      tourneyPresence: -1
    },
    {
      gameName: "mario_castledx_",
      name: "Princess Peach's Castle",
      abbr: "PPC",
      series: "Super Mario",
      tourneyPresence: -1
    },
    {
      gameName: "mario_rainbow_",
      name: "Rainbow Cruise",
      abbr: "RC",
      series: "Super Mario",
      tourneyPresence: -1
    },
    {
      gameName: "mariou_",
      name: "Mushroom Kingdom U",
      abbr: "MKU",
      series: "Super Mario",
      tourneyPresence: -1
    },
    {
      gameName: "pictchat_",
      name: "PictoChat 2",
      abbr: "PC2",
      series: "Miscellaneous",
      tourneyPresence: -1
    },
    {
      gameName: "kalos_",
      name: "Kalos Pokémon League",
      abbr: "KPL",
      series: "Pokémon",
      tourneyPresence: 0
    },
    {
      gameName: "poke_stadium_",
      name: "Pokémon Stadium",
      abbr: "PS1",
      series: "Pokémon",
      tourneyPresence: 2
    },
    {
      gameName: "xstadium_",
      name: "Pokémon Stadium 2",
      abbr: "PS2",
      series: "Pokémon",
      tourneyPresence: 0
    },
    {
      gameName: "poke_tengam_",
      name: "Spear Pillar",
      abbr: "SP",
      series: "Pokémon",
      tourneyPresence: -1
    },
    {
      gameName: "plasma_",
      name: "Unova Pokémon League",
      abbr: "UPL",
      series: "Pokémon",
      tourneyPresence: -1
    },
    {
      gameName: "wily_",
      name: "Wily Castle",
      abbr: "WC",
      series: "Mega Man",
      tourneyPresence: -1
    },
    {
      gameName: "windyhill_",
      name: "Windy Hill Zone",
      abbr: "WHZ",
      series: "Sonic the Hedgehog",
      tourneyPresence: -1
    },
    {
      gameName: "tomodachi_",
      name: "Tomodachi Life",
      abbr: "TL",
      series: "Miscellaneous",
      tourneyPresence: -1
    },
    {
      gameName: "gamer_",
      name: "Gamer",
      abbr: "GM",
      series: "WarioWare, Inc.",
      tourneyPresence: -1
    },
    {
      gameName: "xmadein_",
      name: "WarioWare, Inc.",
      abbr: "WW",
      series: "WarioWare, Inc.",
      tourneyPresence: -1
    },
    {
      gameName: "wrecking_",
      name: "Wrecking Crew",
      abbr: "WC",
      series: "Super Mario",
      tourneyPresence: -1
    },
    {
      gameName: "wufu_",
      name: "Wuhu Island",
      abbr: "WI",
      series: "Miscellaneous",
      tourneyPresence: -1
    },
    {
      gameName: "yoshi_cartboard_",
      name: "Yoshi's Story",
      abbr: "YS",
      series: "Yoshi",
      tourneyPresence: 0
    },
    {
      gameName: "xcrayon_",
      name: "Yoshi's Island (Brawl)",
      abbr: "YI(B)",
      series: "Yoshi",
      tourneyPresence: 2
    },
    {
      gameName: "yoshi_story_",
      name: "Super Happy Tree",
      abbr: "HT",
      series: "Yoshi",
      tourneyPresence: -1
    },
    {
      gameName: "hyrule64_f",
      name: "Hyrule Castle",
      abbr: "HC",
      series: "The Legend of Zelda",
      tourneyPresence: -1
    },
    {
      gameName: "skyward",
      name: "Skyloft",
      abbr: "SL",
      series: "The Legend of Zelda",
      tourneyPresence: -1
    },
    {
      gameName: "zelda_tower",
      name: "Great Plateau Tower",
      abbr: "GPT",
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
  classifyStages(stages: StageMiscInfo[]): Observable<any[]> {
    /**/
    // console.log('StageClassificationsService::classifyStages()')
    // console.log(`  * stages: ${JSON.stringify(stages)}`);

    if ( !Array.isArray(stages) ) {
      throw new TypeError('The list of stages to classify was not an array.');
    }

    let containsObjects: boolean = true;
    let containsGameName: boolean = true;
    let stringGameName: boolean = true;

    for (const stage of stages) {
      if (!(stage instanceof Object)) {
        containsObjects = false;
        break;
      }
      else if (!stage.hasOwnProperty('gameName')) {
        containsGameName = false;
        break;
      }

      else if (typeof stage.gameName !== 'string') {
        /**/
        // console.log(`  * typeof stage.gameName: ${typeof stage.gameName} - ${JSON.stringify(stage.gameName)}`);
        stringGameName = false;
        break;
      }
    }

    if (!containsObjects) {
      throw new TypeError('The list of stages to classify did not contain objects.');
    }

    if (!containsGameName) {
      throw new TypeError('The list of stages to classify did not contain a gameName property.');
    }

    if (!stringGameName) {
      throw new TypeError('The list of stages to classify contained a non-string gameName.');
    }
    
    const stages$ = new Observable<any[]>((observer) => {

      let classifiedStages = [];
      stages.forEach(stage => {

        let classifiedStage = stage;
        let attributes = this.classificationsSet.find(classifications => classifications.gameName === stage.gameName);

        if (attributes === undefined) {
          classifiedStage.abbr = null;
          classifiedStage.series = null;
          classifiedStage.tourneyPresence = null;
        }
        else {
          classifiedStage.name = attributes.name;
          classifiedStage.abbr = attributes.abbr;
          classifiedStage.series = attributes.series;
          classifiedStage.tourneyPresence = attributes.tourneyPresence;
        }
        
        classifiedStages.push(classifiedStage);
      });

      observer.next(classifiedStages);
      observer.complete();

    });
    
    return stages$;
  }
}
