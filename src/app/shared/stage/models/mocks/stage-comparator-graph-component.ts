import { BinnedStageDimensionsSet } from '../binned-stage-dimensions-set.model';

/* gameNames:
size: 41
"battlefield_l_",
"battlefield_",
"xvillage",
"village2_",
"umbra_f",
"bossstage_final1_",
"battle_common",
"end_l_common",
"64jungle_",
"dk_waterfall_",
"duckhunt_",
"colloseum_",
"xemblem",
"xstarfox_",
"xfzero_",
"xice_",
"jack_mementoes_",
"kirby_fountain_",
"pupupuland64_f",
"mario_castledx_",
"xmansion_",
"mario_rainbow_",
"mariou_",
"pictchat_",
"kalos_",
"poke_stadium_",
"xstadium_",
"plasma_",
"poke_tengam_",
"wily_",
"windyhill_",
"xmadein_",
"gamer_",
"tomodachi_",
"wrecking_",
"xcrayon_",
"yoshi_cartboard_",
"yoshi_story_",
"hyrule64_f",
"skyward",
"zelda_tower",
*/

export const CLASS: { inputSet: BinnedStageDimensionsSet, expectedClasses: string[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Yoshi's Story",
        gameName: "yoshi_cartboard_",
        blastzoneWidth: {
          value: 227.106766,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 68,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 159.106766,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 184.25,
          bin:   1,
          min:   false,
          max:   false
        }
      },
      {
        name: "Princess Peach's Castle",
        gameName: "mario_castledx_",
        blastzoneWidth: {
          value: 275,
          bin:   4,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 121.0748405,
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 153.9251595,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 208.70288,
          bin:   5,
          min:   false,
          max:   false
        }
      },
      {
        name: "Big Battlefield",
        gameName: "battlefield_l_",
        blastzoneWidth: {
          value: 290.332306,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 122.183903,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 168.148403,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 215.6688772,
          bin:   5,
          min:   false,
          max:   true
        }
      },
      {
        name: "BattleField (Common)",
        gameName: "battle_common",
        blastzoneWidth: {
          value: 240,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 79.98745,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160.01255,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 191.9998325,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "Pokemon Stadium",
        gameName: "poke_stadium_",
        blastzoneWidth: {
          value: 250.0000075,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 88.14794765,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 161.8520599,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 179.947372,
          bin:   1,
          min:   true,
          max:   false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   227.106766,
        max:   290.332306,
        range: 63.22554
      },
      stageLength: {
        min:   68,
        max:   122.183903,
        range: 54.183903
      },
      offStageDistance: {
        min:   153.9251595,
        max:   168.148403,
        range: 14.2232435
      },
      ceilingHeight: {
        min:   179.947372,
        max:   215.6688772,
        range: 35.72150516
      }
    }
  },
  expectedClasses: [
    "graph_yoshi_cartboard_",
    "graph_mario_castledx_",
    "graph_battlefield_l_",
    "graph_battle_common",
    "graph_poke_stadium_",
  ]
};

export const DISPLAY_NAME: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Mementos",
        gameName: "jack_mementoes_",
        blastzoneWidth: {
          value: 260,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 100,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 160,
          bin:   5,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 185,
          bin:   4,
          min:   false,
          max:   false
        }
      },
      {
        name: "Kalos Pokemon League",
        gameName: "kalos_",
        blastzoneWidth: {
          value: 245,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 80,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 165,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 192,
          bin:   5,
          min:   false,
          max:   false
        }
      },
      {
        name: "Final Destination",
        gameName: "bossstage_final1_",
        blastzoneWidth: {
          value: 240.0000155,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 79.99465,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160.0053655,
          bin:   5,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 179.995085,
          bin:   4,
          min:   false,
          max:   false
        }
      },
      {
        name: "Lylat Cruise",
        gameName: "xstarfox_",
        blastzoneWidth: {
          value: 230,
          bin:   1,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 80.0000329,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 149.9999671,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 187.99999,
          bin:   4,
          min:   false,
          max:   false
        }
      },
      {
        name: "Tomodachi Life",
        gameName: "tomodachi_",
        blastzoneWidth: {
          value: 225,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 70,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 155,
          bin:   4,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 200.999985,
          bin:   5,
          min:   false,
          max:   true
        }
      },
      {
        name: "Rainbow Cruise",
        gameName: "mario_rainbow_",
        blastzoneWidth: {
          value: 227.777771,
          bin:   1,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 95.717309,
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 132.060462,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 138.5789305,
          bin:   1,
          min:   true,
          max:   false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   225,
        max:   260,
        range: 35
      },
      stageLength: {
        min:   70,
        max:   100,
        range: 30
      },
      offStageDistance: {
        min:   132.060462,
        max:   165,
        range: 32.939538
      },
      ceilingHeight: {
        min:   138.5789305,
        max:   200.999985,
        range: 62.4210545
      }
    }
  },
  expectedValues: [
    {
      stage: "graph_jack_mementoes_",
      value: "Mementos"
    },
    {
      stage: "graph_kalos_",
      value: "Kalos Pokemon League"
    },
    {
      stage: "graph_bossstage_final1_",
      value: "Final Destination"
    },
    {
      stage: "graph_xstarfox_",
      value: "Lylat Cruise"
    },
    {
      stage: "graph_tomodachi_",
      value: "Tomodachi Life"
    },
    {
      stage: "graph_mario_rainbow_",
      value: "Rainbow Cruise"
    },
  ]
};

/*
"kalos_",
"xice_",
"xfzero_",
"battle_common",
"jack_mementoes_",
*/
export const DISPLAY_ABBR: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Kalos Pokemon League",
        gameName: "kalos_",
        abbr: "KPL",
        blastzoneWidth: {
          value: 245,
          bin: 4,
          min: false,
          max: false
        },
        stageLength: {
          value: 80,
          bin: 3,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 165,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 192,
          bin: 3,
          min: false,
          max: false
        }
      },
      {
        name: "Summit",
        gameName: "xice_",
        abbr: "SMT",
        blastzoneWidth: {
          value: 220,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 60,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 160,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 220,
          bin: 5,
          min: false,
          max: true
        }
      },
      {
        name: "Port Town Aero Dive",
        gameName: "xfzero_",
        abbr: "PTAD",
        blastzoneWidth: {
          value: 230,
          bin: 2,
          min: false,
          max: false
        },
        stageLength: {
          value: 65,
          bin: 1,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 165,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 160,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "BattleField (Common)",
        gameName: "battle_common",
        abbr: "BF(C)",
        blastzoneWidth: {
          value: 240,
          bin: 3,
          min: false,
          max: false
        },
        stageLength: {
          value: 80,
          bin: 3,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 160,
          bin: 1,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 192,
          bin: 3,
          min: false,
          max: false
        }
      },
      {
        name: "Mementos",
        gameName: "jack_mementoes_",
        abbr: "MM",
        blastzoneWidth: {
          value: 260,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 100,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 160,
          bin: 1,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 185,
          bin: 3,  
          min: false,
          max: false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min:   220,
        max:   260,
        range: 40
      },
      stageLength: {
        min:   60,
        max:   100,
        range: 40
      },
      offStageDistance: {
        min:   160,
        max:   165,
        range: 6
      },
      ceilingHeight: {
        min:   160,
        max:   220,
        range: 60
      }
    }
  },
  expectedValues: [
    {
      stage: "graph_kalos_",
      value: "KPL"
    },
    {
      stage: "graph_xice_",
      value: "SMT"
    },
    {
      stage: "graph_xfzero_",
      value: "PTAD"
    },
    {
      stage: "graph_battle_common",
      value: "BF(C)"
    },
    {
      stage: "graph_jack_mementoes_",
      value: "MM"
    }
  ]
};

export const DISPLAY_BLASTZONE_VALUE: { inputSet: BinnedStageDimensionsSet, expectedValues: {stage: string, value: number}[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Gamer",
        gameName: "gamer_",
        blastzoneWidth: {
          value: 230,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 91,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 139,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 192,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "Wily Castle",
        gameName: "wily_",
        blastzoneWidth: {
          value: 248,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 87,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 161,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 212,
          bin:   5,
          min:   false,
          max:   true
        }
      },
      {
        name: "Umbra Clock Tower",
        gameName: "umbra_f",
        blastzoneWidth: {
          value: 250,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 80,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 170,
          bin:   5,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 192,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "Unova Pokemon League",
        gameName: "plasma_",
        blastzoneWidth: {
          value: 237,
          bin:   1,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 82,
          bin:   1,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 155,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 190,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "Duck Hunt",
        gameName: "duckhunt_",
        blastzoneWidth: {
          value: 250,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 95,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 155,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 180,
          bin:   1,
          min:   true,
          max:   false
        }
      },
      {
        name: "Great Plateau Tower",
        gameName: "zelda_tower",
        blastzoneWidth: {
          value: 267,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 91,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 176,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 192,
          bin:   2,
          min:   false,
          max:   false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   230,
        max:   267,
        range: 37
      },
      stageLength: {
        min:   80,
        max:   95,
        range: 15
      },
      offStageDistance: {
        min:   139,
        max:   176,
        range: 37
      },
      ceilingHeight: {
        min:   180,
        max:   212,
        range: 32
      }
    }
  },
  expectedValues: [
    {
      stage: "graph_gamer_",
      value: 230
    },
    {
      stage: "graph_wily_",
      value: 248
    },
    {
      stage: "graph_umbra_f",
      value: 250
    },
    {
      stage: "graph_plasma_",
      value: 237
    },
    {
      stage: "graph_duckhunt_",
      value: 250
    },
    {
      stage: "graph_zelda_tower",
      value: 267
    },
  ]
};

export const DISPLAY_BLASTZONE_BIN: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[]} = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Arena Ferox",
        gameName: "colloseum_",
        blastzoneWidth: {
          value: 253,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 93,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160,
          bin:   4,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 190,
          bin:   1,
          min:   false,
          max:   false
        }
      },
      {
        name: "Smashville",
        gameName: "xvillage",
        blastzoneWidth: {
          value: 230,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 70,
          bin:   1,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160,
          bin:   4,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 190,
          bin:   1,
          min:   false,
          max:   false
        }
      },
      {
        name: "WarioWare",
        gameName: "xmadein_",
        blastzoneWidth: {
          value: 180,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 58,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 122,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 198,
          bin:   1,
          min:   false,
          max:   false
        }
      },
      {
        name: "Hyrule Castle",
        gameName: "hyrule64_f",
        blastzoneWidth: {
          value: 325,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 151,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 174,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 277,
          bin:   5,
          min:   false,
          max:   true
        }
      },
      {
        name: "Final Destination (Large)",
        gameName: "end_l_common",
        blastzoneWidth: {
          value: 280,
          bin:   4,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 120,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160,
          bin:   4,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 180,
          bin:   1,
          min:   true,
          max:   false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   180,
        max:   325,
        range: 145
      },
      stageLength: {
        min:   58,
        max:   151,
        range: 93
      },
      offStageDistance: {
        min:   122,
        max:   174,
        range: 52
      },
      ceilingHeight: {
        min:   180,
        max:   277,
        range: 97
      }
    }
  },
  expectedValues: [
    {
      stage: "graph_colloseum_",
      value: "bin-3"
    },
    {
      stage: "graph_xvillage",
      value: "bin-2"
    },
    {
      stage: "graph_xmadein_",
      value: "bin-1"
    },
    {
      stage: "graph_hyrule64_f",
      value: "bin-5"
    },
    {
      stage: "graph_end_l_common",
      value: "bin-4"
    },
  ]
};

export const DISPLAY_STAGELENGTH_VALUE: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: number }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Wily Castle",
        gameName: "wily_",
        blastzoneWidth: {
          value: 248,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 87,
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 161,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 212,
          bin:   5,
          min:   false,
          max:   false
        }
      },
      {
        name: "Lylat Cruise",
        gameName: "xstarfox_",
        blastzoneWidth: {
          value: 230,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 80,
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 150,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 188,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "Super Happy Tree",
        gameName: "yoshi_story_",
        blastzoneWidth: {
          value: 295,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 5,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 290,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 213,
          bin:   5,
          min:   false,
          max:   true
        }
      },
      {
        name: "Final Destination",
        gameName: "bossstage_final1_",
        blastzoneWidth: {
          value: 240,
          bin:   1,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 80,
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 180,
          bin:   1,
          min:   true,
          max:   false
        }
      },
      {
        name: "Mushroom Kingdom U",
        gameName: "mariou_",
        blastzoneWidth: {
          value: 250,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 81,
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 169,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 192,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "Duck Hunt",
        gameName: "duckhunt_",
        blastzoneWidth: {
          value: 250,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 95,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 155,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 180,
          bin:   1,
          min:   false,
          max:   false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   230,
        max:   294.875,
        range: 64.875
      },
      stageLength: {
        min:   5,
        max:   95,
        range: 90
      },
      offStageDistance: {
        min:   150,
        max:   290,
        range: 140
      },
      ceilingHeight: {
        min:   180,
        max:   213,
        range: 33
      }
    }
  },
  expectedValues: [
    {
      stage: "graph_wily_",
      value: 87
    },
    {
      stage: "graph_xstarfox_",
      value: 80
    },
    {
      stage: "graph_yoshi_story_",
      value: 5
    },
    {
      stage: "graph_bossstage_final1_",
      value: 80
    },
    {
      stage: "graph_mariou_",
      value: 81
    },
    {
      stage: "graph_duckhunt_",
      value: 95
    },
  ]
};

export const DISPLAY_STAGELENGTH_BIN: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Fountain of Dreams",
        gameName: "kirby_fountain_",
        blastzoneWidth: {
          value: 240,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 77,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 163,
          bin:   5,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 191,
          bin:   3,
          min:   false,
          max:   false
        }
      },
      {
        name: "Unova Pokemon League",
        gameName: "plasma_",
        blastzoneWidth: {
          value: 237,
          bin:   5,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 82,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 155,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 190,
          bin:   3,
          min:   false,
          max:   false
        }
      },
      {
        name: "Tomodachi Life",
        gameName: "tomodachi_",
        blastzoneWidth: {
          value: 225,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 70,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 155,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 201,
          bin:   4,
          min:   false,
          max:   false
        }
      },
      {
        name: "Castle Siege",
        gameName: "xemblem",
        blastzoneWidth: {
          value: 210,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 65,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 145,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 175,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "Yoshi Island",
        gameName: "xcrayon_",
        blastzoneWidth: {
          value: 220,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 70,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 150,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 185,
          bin:   3,
          min:   false,
          max:   false
        }
      },
      {
        name: "Summit",
        gameName: "xice_",
        blastzoneWidth: {
          value: 220,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 60,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 160,
          bin:   4,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 220,
          bin:   5,
          min:   false,
          max:   true
        }
      },
      {
        name: "Yoshi's Story",
        gameName: "yoshi_cartboard_",
        blastzoneWidth: {
          value: 227,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 68,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 159,
          bin:   4,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 184,
          bin:   3,
          min:   false,
          max:   false
        }
      },
      {
        name: "Port Town Aero Dive",
        gameName: "xfzero_",
        blastzoneWidth: {
          value: 230,
          bin:   4,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 65,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 165,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 160,
          bin:   1,
          min:   true,
          max:   false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   210,
        max:   240,
        range: 30
      },
      stageLength: {
        min:   60,
        max:   82,
        range: 21
      },
      offStageDistance: {
        min:   145,
        max:   165,
        range: 21
      },
      ceilingHeight: {
        min:   160,
        max:   220,
        range: 60
      }
    }
  },
  expectedValues: [
    {
      stage: "graph_kirby_fountain_",
      value: "bin-4"
    },
    {
      stage: "graph_plasma_",
      value: "bin-5"
    },
    {
      stage: "graph_tomodachi_",
      value: "bin-3"
    },
    {
      stage: "graph_xemblem",
      value: "bin-2"
    },
    {
      stage: "graph_xcrayon_",
      value: "bin-3"
    },
    {
      stage: "graph_xice_",
      value: "bin-1"
    },
    {
      stage: "graph_yoshi_cartboard_",
      value: "bin-2"
    },
    {
      stage: "graph_xfzero_",
      value: "bin-2"
    },
  ]
};

export const DISPLAY_OFFSTAGE_VALUE: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: number }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "WarioWare",
        gameName: "xmadein_",
        blastzoneWidth: {
          value: 180,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 58,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 122,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 198,
          bin:   3,
          min:   false,
          max:   false
        }
      },
      {
        name: "Spear Pillar",
        gameName: "poke_tengam_",
        blastzoneWidth: {
          value: 245,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 80,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 165,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 260,
          bin:   5,
          min:   false,
          max:   true
        }
      },
      {
        name: "Gamer",
        gameName: "gamer_",
        blastzoneWidth: {
          value: 230,
          bin:   4,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 91,
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 139,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 192,
          bin:   3,
          min:   false,
          max:   false
        }
      },
      {
        name: "Rainbow Cruise",
        gameName: "mario_rainbow_",
        blastzoneWidth: {
          value: 228,
          bin:   4,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 96,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 132,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 139,
          bin:   1,
          min:   true,
          max:   false
        }
      },
      {
        name: "Town & City",
        gameName: "village2_",
        blastzoneWidth: {
          value: 230,
          bin:   4,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 83,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 148,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 195,
          bin:   3,
          min:   false,
          max:   false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   180,
        max:   245,
        range: 65
      },
      stageLength: {
        min:   58,
        max:   96,
        range: 37
      },
      offStageDistance: {
        min:   122,
        max:   165,
        range: 43
      },
      ceilingHeight: {
        min:   139,
        max:   260,
        range: 121
      }
    }
  },
  expectedValues: [
    {
      stage: "graph_xmadein_",
      value: 122
    },
    {
      stage: "graph_poke_tengam_",
      value: 165
    },
    {
      stage: "graph_gamer_",
      value: 139
    },
    {
      stage: "graph_mario_rainbow_",
      value: 132
    },
    {
      stage: "graph_village2_",
      value: 148
    },
  ]
};

export const DISPLAY_OFFSTAGE_BIN: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Luigi's Mansion",
        gameName: "xmansion_",
        blastzoneWidth: {
          value: 255,
          bin:   4,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 95,
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 200,
          bin:   5,
          min:   false,
          max:   true
        }
      },
      {
        name: "Mementos",
        gameName: "jack_mementoes_",
        blastzoneWidth: {
          value: 260,
          bin:   5,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 100,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 160,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 185,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "Dream Land (64)",
        gameName: "pupupuland64_f",
        blastzoneWidth: {
          value: 250,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 77,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 173,
          bin:   5,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 192,
          bin:   4,
          min:   false,
          max:   false
        }
      },
      {
        name: "Kongo Jungle",
        gameName: "64jungle_",
        blastzoneWidth: {
          value: 230,
          bin:   1,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 71,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 159,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 190,
          bin:   3,
          min:   false,
          max:   false
        }
      },
      {
        name: "PictoChat 2",
        gameName: "pictchat_",
        blastzoneWidth: {
          value: 225,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 80,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 145,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 196,
          bin:   5,
          min:   false,
          max:   false
        }
      },
      {
        name: "Kalos Pokemon League",
        gameName: "kalos_",
        blastzoneWidth: {
          value: 245,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 80,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 165,
          bin:   4,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 192,
          bin:   4,
          min:   false,
          max:   false
        }
      },
      {
        name: "Pokemon Stadium 2",
        gameName: "xstadium_",
        blastzoneWidth: {
          value: 250,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 94,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 156,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 180,
          bin:   1,
          min:   true,
          max:   false
        }
      },
      {
        name: "Great Plateau Tower",
        gameName: "zelda_tower",
        blastzoneWidth: {
          value: 267,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 91,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 176,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 192,
          bin:   3,
          min:   false,
          max:   false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   225,
        max:   267,
        range: 42
      },
      stageLength: {
        min:   71,
        max:   100,
        range: 29
      },
      offStageDistance: {
        min:   145,
        max:   176,
        range: 31
      },
      ceilingHeight: {
        min:   180,
        max:   200,
        range: 20
      }
    }
  },
  expectedValues: [
    {
      stage: "graph_xmansion_",
      value: "bin-3"
    },
    {
      stage: "graph_jack_mementoes_",
      value: "bin-3"
    },
    {
      stage: "graph_pupupuland64_f",
      value: "bin-5"
    },
    {
      stage: "graph_64jungle_",
      value: "bin-3"
    },
    {
      stage: "graph_pictchat_",
      value: "bin-1"
    },
    {
      stage: "graph_kalos_",
      value: "bin-4"
    },
    {
      stage: "graph_xstadium_",
      value: "bin-2"
    },
    {
      stage: "graph_zelda_tower",
      value: "bin-5"
    },
  ]
};

export const DISPLAY_CEILING_VALUE: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: number }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Kongo Falls",
        gameName: "dk_waterfall_",
        blastzoneWidth: {
          value: 203,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 46,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 157,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 193,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "Pokemon Stadium",
        gameName: "poke_stadium_",
        blastzoneWidth: {
          value: 250,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 88,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 162,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 180,
          bin:   1,
          min:   true,
          max:   false
        }
      },
      {
        name: "Final Destination (Large)",
        gameName: "end_l_common",
        blastzoneWidth: {
          value: 280,
          bin:   5,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 120,
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 180,
          bin:   1,
          min:   false,
          max:   false
        }
      },
      {
        name: "Big Battlefield",
        gameName: "battlefield_l_",
        blastzoneWidth: {
          value: 290,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 122,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 168,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 216,
          bin:   5,
          min:   false,
          max:   true
        }
      },
      {
        name: "Arena Ferox",
        gameName: "colloseum_",
        blastzoneWidth: {
          value: 253,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 93,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 190,
          bin:   2,
          min:   false,
          max:   false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   203,
        max:   290,
        range: 88
      },
      stageLength: {
        min:   46,
        max:   122,
        range: 77
      },
      offStageDistance: {
        min:   157,
        max:   168,
        range: 11
      },
      ceilingHeight: {
        min:   180,
        max:   216,
        range: 36
      }
    }
  },
  expectedValues: [
    {
      stage: "graph_dk_waterfall_",
      value: 193
    },
    {
      stage: "graph_poke_stadium_",
      value: 180
    },
    {
      stage: "graph_end_l_common",
      value: 180
    },
    {
      stage: "graph_battlefield_l_",
      value: 216
    },
    {
      stage: "graph_colloseum_",
      value: 190
    },
  ]
};

export const DISPLAY_CEILING_BIN: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Port Town Aero Dive",
        gameName: "xfzero_",
        blastzoneWidth: {
          value: 230,
          bin:   1,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 65,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 165,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 160,
          bin:   1,
          min:   true,
          max:   false
        }
      },
      {
        name: "Summit",
        gameName: "xice_",
        blastzoneWidth: {
          value: 220,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 60,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 220,
          bin:   4,
          min:   false,
          max:   false
        }
      },
      {
        name: "Final Destination (Large)",
        gameName: "end_l_common",
        blastzoneWidth: {
          value: 280,
          bin:   5,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 120,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 160,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 180,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "Super Happy Tree",
        gameName: "yoshi_story_",
        blastzoneWidth: {
          value: 295,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 5,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 290,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 213,
          bin:   3,
          min:   false,
          max:   false
        }
      },
      {
        name: "Kalos Pokemon League",
        gameName: "kalos_",
        blastzoneWidth: {
          value: 245,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 80,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 165,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 192,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "Tomodachi Life",
        gameName: "tomodachi_",
        blastzoneWidth: {
          value: 225,
          bin:   1,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 70,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 155,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 201,
          bin:   3,
          min:   false,
          max:   false
        }
      },
      {
        name: "Spear Pillar",
        gameName: "poke_tengam_",
        blastzoneWidth: {
          value: 245,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 80,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 165,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 260,
          bin:   5,
          min:   false,
          max:   true
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   220,
        max:   295,
        range: 75
      },
      stageLength: {
        min:   5,
        max:   120,
        range: 115
      },
      offStageDistance: {
        min:   155,
        max:   290,
        range: 135
      },
      ceilingHeight: {
        min:   160,
        max:   260,
        range: 100
      }
    }
  },
  expectedValues: [
    {
      stage: "graph_xfzero_",
      value: "bin-1"
    },
    {
      stage: "graph_xice_",
      value: "bin-4"
    },
    {
      stage: "graph_end_l_common",
      value: "bin-2"
    },
    {
      stage: "graph_yoshi_story_",
      value: "bin-3"
    },
    {
      stage: "graph_kalos_",
      value: "bin-2"
    },
    {
      stage: "graph_tomodachi_",
      value: "bin-3"
    },
    {
      stage: "graph_poke_tengam_",
      value: "bin-5"
    },
  ]
};

/*
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "",
        gameName: "",
        blastzoneWidth: {
          value: null,
          bin:   null,
          min:   false,
          max:   false
        },
        stageLength: {
          value: null,
          bin:   null,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: null,
          bin:   null,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: null,
          bin:   null,
          min:   false,
          max:   false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   null,
        max:   null,
        range: null
      },
      stageLength: {
        min:   null,
        max:   null,
        range: null
      },
      offStageDistance: {
        min:   null,
        max:   null,
        range: null
      },
      ceilingHeight: {
        min:   null,
        max:   null,
        range: null
      }
    }
  },
  expectedValues: [
    {
      stage: null,
      value: null
    },
  ]
*/
