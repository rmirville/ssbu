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

import { BinnedStageDimensionsSet } from '../binned-stage-dimensions-set.model';

export const GETSTATS_CALLBINNED: { inputGameNames: string[], expectedData: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "battlefield_l_",
    "hyrule64_f",
  ],
  expectedData: {
    bins: 5,
    dimensions: [
      {
        name: "Big Battlefield",
        gameName: "battlefield_l_",
        blastzoneWidth: {
          value: 290.332306,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 122.183903,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 168.148403,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 215.6688772,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "Hyrule Castle",
        gameName: "hyrule64_f",
        blastzoneWidth: {
          value: 325.055213,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 151.129,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 173.926213,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 276.6675146,
          bin: 5,
          min: false,
          max: true
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: 290.332306,
        max: 325.055213,
        range: 34.722907
      },
      stageLength: {
        min: 122.183903,
        max: 151.129,
        range: 28.945097
      },
      offStageDistance: {
        min: 168.148403,
        max: 173.926213,
        range: 5.77781
      },
      ceilingHeight: {
        min: 215.6688772,
        max: 276.6675146,
        range: 60.99863744
      }
    }
  }
}

export const GETSTATS_NUMBER: { inputGameNames: string[], expectedData: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "kirby_fountain_",
    "xemblem",
    "end_l_common",
  ],
  expectedData: {
    bins: 5,
    dimensions: [
      {
        name: "Fountain of Dreams",
        gameName: "kirby_fountain_",
        blastzoneWidth: {
          value: 240.0000075,
          bin: 3,
          min: false,
          max: false
        },
        stageLength: {
          value: 76.59685235,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 163.4031551,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 191.1096737,
          bin: 5,
          min: false,
          max: true
        }
      },
      {
        name: "Castle Siege",
        gameName: "xemblem",
        blastzoneWidth: {
          value: 210,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 65.49999,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 144.50001,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 175,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "Final Destination (Large)",
        gameName: "end_l_common",
        blastzoneWidth: {
          value: 280,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 119.9919775,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 160.0080225,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 179.995085,
          bin: 2,
          min: false,
          max: false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: 210,
        max: 280,
        range: 70
      },
      stageLength: {
        min: 65.49999,
        max: 119.9919775,
        range: 54.4919875
      },
      offStageDistance: {
        min: 144.50001,
        max: 163.4031551,
        range: 18.90314515
      },
      ceilingHeight: {
        min: 175,
        max: 191.1096737,
        range: 16.1096737
      }
    }
  }
};

export const GETSTATS_TEXT: { inputGameNames: string[], expectedData: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "village2_",
    "mariou_",
    "64jungle_",
    "xmadein_",
  ], expectedData: {
    bins: 5,
    dimensions: [
      {
        name: "Town & City",
        gameName: "village2_",
        blastzoneWidth: {
          value: 230,
          bin: 4,
          min: false,
          max: false
        },
        stageLength: {
          value: 82.5,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 147.5,
          bin: 3,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 195,
          bin: 3,
          min: false,
          max: false
        }
      },
      {
        name: "Mushroom Kingdom U",
        gameName: "mariou_",
        blastzoneWidth: {
          value: 250,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 81,
          bin: 5,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 169,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 192.000015,
          bin: 2,
          min: false,
          max: false
        }
      },
      {
        name: "Kongo Jungle",
        gameName: "64jungle_",
        blastzoneWidth: {
          value: 230,
          bin: 4,
          min: false,
          max: false
        },
        stageLength: {
          value: 71,
          bin: 3,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 159,
          bin: 4,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 189.9999995,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "WarioWare",
        gameName: "xmadein_",
        blastzoneWidth: {
          value: 180,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 58.231985,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 121.768015,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 198.4180636,
          bin: 5,
          min: false,
          max: true
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: 180,
        max: 250,
        range: 70
      },
      stageLength: {
        min: 58.231985,
        max: 82.5,
        range: 24.268015
      },
      offStageDistance: {
        min: 121.768015,
        max: 169,
        range: 47.231985
      },
      ceilingHeight: {
        min: 189.9999995,
        max: 198.4180636,
        range: 8.418064027
      }
    }
  }
};

export const GETSTATS_GRAPH: { inputGameNames: string[], expectedData: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "zelda_tower",
    "tomodachi_",
    "wrecking_",
    "poke_stadium_",
    "pupupuland64_f",
  ],
  expectedData: {
    bins: 5,
    dimensions: [
      {
        name: "Great Plateau Tower",
        gameName: "zelda_tower",
        blastzoneWidth: {
          value: 266.8463185,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 90.702955,
          bin: 4,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 176.1433635,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 191.9790375,
          bin: 1,
          min: false,
          max: false
        }
      },
      {
        name: "Tomodachi Life",
        gameName: "tomodachi_",
        blastzoneWidth: {
          value: 225,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 70,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 155,
          bin: 1,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 200.999985,
          bin: 2,
          min: false,
          max: false
        }
      },
      {
        name: "Wrecking Crew",
        gameName: "wrecking_",
        blastzoneWidth: {
          value: 252,
          bin: 4,
          min: false,
          max: false
        },
        stageLength: {
          value: 97.2,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 154.8,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 243.8,
          bin: 5,
          min: false,
          max: true
        }
      },
      {
        name: "Pokemon Stadium",
        gameName: "poke_stadium_",
        blastzoneWidth: {
          value: 250.0000075,
          bin: 3,
          min: false,
          max: false
        },
        stageLength: {
          value: 88.14794765,
          bin: 4,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 161.8520599,
          bin: 2,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 179.947372,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "Dream Land (64)",
        gameName: "pupupuland64_f",
        blastzoneWidth: {
          value: 250,
          bin: 3,
          min: false,
          max: false
        },
        stageLength: {
          value: 77.2737,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 172.7263,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 192.1027776,
          bin: 1,
          min: false,
          max: false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: 225,
        max: 266.8463185,
        range: 41.8463185
      },
      stageLength: {
        min: 70,
        max: 97.2,
        range: 27.2
      },
      offStageDistance: {
        min: 154.8,
        max: 176.1433635,
        range: 21.3433635
      },
      ceilingHeight: {
        min: 179.947372,
        max: 243.8,
        range: 63.852628
      }
    }
  }
};

export const GETSTATS_EMPTY: { inputGameNames: string[], expectedData: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "colloseum_",
    "end_l_common",
    "kirby_fountain_",
    "mario_castledx_",
    "windyhill_",
  ],
  expectedData: {
    bins: 5,
    dimensions: [
      {
        name: "Arena Ferox",
        gameName: "colloseum_",
        blastzoneWidth: {
          value: 252.982597,
          bin: 3,
          min: false,
          max: false
        },
        stageLength: {
          value: 92.8398674,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 160.1427296,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 189.991974,
          bin: 2,
          min: false,
          max: false
        }
      },
      {
        name: "Final Destination (Large)",
        gameName: "end_l_common",
        blastzoneWidth: {
          value: 280,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 119.9919775,
          bin: 5,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 160.0080225,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 179.995085,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "Fountain of Dreams",
        gameName: "kirby_fountain_",
        blastzoneWidth: {
          value: 240.0000075,
          bin: 2,
          min: false,
          max: false
        },
        stageLength: {
          value: 76.59685235,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 163.4031551,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 191.1096737,
          bin: 2,
          min: false,
          max: false
        }
      },
      {
        name: "Princess Peach's Castle",
        gameName: "mario_castledx_",
        blastzoneWidth: {
          value: 275,
          bin: 5,
          min: false,
          max: false
        },
        stageLength: {
          value: 121.0748405,
          bin: null,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 153.9251595,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 208.70288,
          bin: 5,
          min: false,
          max: true
        }
      },
      {
        name: "Windy Hill Zone",
        gameName: "windyhill_",
        blastzoneWidth: {
          value: 221.5,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 114.9439715,
          bin: 5,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 106.5560285,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 193.4291113,
          bin: 3,
          min: false,
          max: false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: 221.5,
        max: 280,
        range: 58.5
      },
      stageLength: {
        min: 76.59685235,
        max: 121.0748405,
        range: 44.47798815
      },
      offStageDistance: {
        min: 106.5560285,
        max: 163.4031551,
        range: 56.84712665
      },
      ceilingHeight: {
        min: 179.995085,
        max: 208.70288,
        range: 28.70779502
      }
    }
  }
};

export const GETSTATS_SETNOTFOUND: {inputGameNames: string[], binnedData: BinnedStageDimensionsSet} = {
  inputGameNames: [
    "battle_common",
    "xcrayon_",
    "hyrule64_f",
  ],
  binnedData: {
    bins: 5,
    dimensions: [
      {
        name: "BattleField (Common)",
        gameName: "battle_common",
        blastzoneWidth: {
          value: 240,
          bin: 1,
          min: false,
          max: false
        },
        stageLength: {
          value: 79.98745,
          bin: 1,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 160.01255,
          bin: 3,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 191.9998325,
          bin: 1,
          min: false,
          max: false
        }
      },
      {
        name: "Yoshi Island",
        gameName: "xcrayon_",
        blastzoneWidth: {
          value: 220,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 69.94353795,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 150.0564621,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 185.1518941,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "Hyrule Castle",
        gameName: "hyrule64_f",
        blastzoneWidth: {
          value: 325.055213,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 151.129,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 173.926213,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 276.6675146,
          bin: 5,
          min: false,
          max: true
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: 220,
        max: 325.055213,
        range: 105.055213
      },
      stageLength: {
        min: 69.94353795,
        max: 151.129,
        range: 81.18546205
      },
      offStageDistance: {
        min: 150.0564621,
        max: 173.926213,
        range: 23.86975095
      },
      ceilingHeight: {
        min: 185.1518941,
        max: 276.6675146,
        range: 91.51562051
      }
    }
  }
};

/*
  expectedData: {
    bins: 5,
    dimensions: [
      {
        name: "",
        gameName: "",
        blastzoneWidth: {
          value: null,
          bin: null,
          min: false,
          max: false
        },
        stageLength: {
          value: null,
          bin: null,
          min: false,
          max: false
        },
        offStageDistance: {
          value: null,
          bin: null,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: null,
          bin: null,
          min: false,
          max: false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min: null,
        max: null,
        range: null
      },
      stageLength: {
        min: null,
        max: null,
        range: null
      },
      offStageDistance: {
        min: null,
        max: null,
        range: null
      },
      ceilingHeight: {
        min: null,
        max: null,
        range: null
      }
    }
  }
*/
