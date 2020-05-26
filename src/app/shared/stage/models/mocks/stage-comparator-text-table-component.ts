import { BinnedStageDimensionsSet } from '../binned-stage-dimensions-set.model';
import { StageDimensionsRange } from '../stage-dimensions-range.model';

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
        name: "Yoshi Island",
        gameName: "xcrayon_",
        blastzoneWidth: {
          value: 220,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 69.94353795,
          bin:   1,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 150.0564621,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 185.1518941,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "Kalos Pokemon League",
        gameName: "kalos_",
        blastzoneWidth: {
          value: 245,
          bin:   5,
          min:   false,
          max:   false
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
          value: 192,
          bin:   4,
          min:   false,
          max:   false
        }
      },
      {
        name: "Duck Hunt",
        gameName: "duckhunt_",
        blastzoneWidth: {
          value: 250,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 95.1552,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 154.8448,
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
        name: "Yoshi's Story",
        gameName: "yoshi_cartboard_",
        blastzoneWidth: {
          value: 227.106766,
          bin:   2,
          min:   false,
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
          bin:   4,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 184.25,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "BattleField (Common)",
        gameName: "battle_common",
        blastzoneWidth: {
          value: 240,
          bin:   4,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 79.98745,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160.01255,
          bin:   4,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 191.9998325,
          bin:   4,
          min:   false,
          max:   false
        }
      },
      {
        name: "Town & City",
        gameName: "village2_",
        blastzoneWidth: {
          value: 230,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 82.5,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 147.5,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 195,
          bin:   5,
          min:   false,
          max:   true
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min:   220,
        max:   250,
        range: 30
      },
      stageLength: {
        min:   68,
        max:   95.1552,
        range: 27.1552
      },
      offStageDistance: {
        min:   147.5,
        max:   165,
        range: 17.5
      },
      ceilingHeight: {
        min:   180,
        max:   195,
        range: 15
      }
    }
  },
  expectedClasses: [
    "texttable_xcrayon_",
    "texttable_kalos_",
    "texttable_duckhunt_",
    "texttable_yoshi_cartboard_",
    "texttable_battle_common",
    "texttable_village2_",
  ]
};

export const DISPLAY_NAME: { inputSet: BinnedStageDimensionsSet, expectedValues: {stage: string, value: string}[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
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
          bin:   4,
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
          value: 200.999985,
          bin:   3,
          min:   false,
          max:   false
        }
      },
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
          value: 87.0689725,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 160.9310275,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 212.1908383,
          bin:   5,
          min:   false,
          max:   false
        }
      },
      {
        name: "Super Happy Tree",
        gameName: "yoshi_story_",
        blastzoneWidth: {
          value: 294.875,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 4.986002205,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 289.8889978,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 212.5432136,
          bin:   5,
          min:   false,
          max:   true
        }
      },
      {
        name: "Smashville",
        gameName: "xvillage",
        blastzoneWidth: {
          value: 229.5,
          bin:   1,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 69.6488304,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 159.8511696,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 189.9000115,
          bin:   1,
          min:   true,
          max:   false
        }
      },
      {
        name: "Fountain of Dreams",
        gameName: "kirby_fountain_",
        blastzoneWidth: {
          value: 240.0000075,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 76.59685235,
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 163.4031551,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 191.1096737,
          bin:   1,
          min:   false,
          max:   false
        }
      },
      {
        name: "Dream Land (64)",
        gameName: "pupupuland64_f",
        blastzoneWidth: {
          value: 250,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 77.2737,
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 172.7263,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 192.1027776,
          bin:   1,
          min:   false,
          max:   false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min:   225,
        max:   294.875,
        range: 69.875
      },
      stageLength: {
        min:   4.986002205,
        max:   87.0689725,
        range: 82.0829703
      },
      offStageDistance: {
        min:   155,
        max:   289.8889978,
        range: 134.8889978
      },
      ceilingHeight: {
        min:   189.9000115,
        max:   212.5432136,
        range: 22.64320215
      }
    }
  },
  expectedValues: [
    {
      stage: "texttable_tomodachi_",
      value: "Tomodachi Life"
    },
    {
      stage: "texttable_wily_",
      value: "Wily Castle"
    },
    {
      stage: "texttable_yoshi_story_",
      value: "Super Happy Tree"
    },
    {
      stage: "texttable_xvillage",
      value: "Smashville"
    },
    {
      stage: "texttable_kirby_fountain_",
      value: "Fountain of Dreams"
    },
    {
      stage: "texttable_pupupuland64_f",
      value: "Dream Land (64)"
    }
  ]
};

export const DISPLAY_BLASTZONE: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
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
          max: true
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
      },
      {
        name: "Pokemon Stadium",
        gameName: "poke_stadium_",
        blastzoneWidth: {
          value: 250.0000075,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 88.14794765,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 161.8520599,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 179.947372,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "PictoChat 2",
        gameName: "pictchat_",
        blastzoneWidth: {
          value: 225,
          bin: 1,
          min: false,
          max: false
        },
        stageLength: {
          value: 80,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 145,
          bin: 4,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 196,
          bin: 3,
          min: false,
          max: false
        }
      },
      {
        name: "Kongo Jungle",
        gameName: "64jungle_",
        blastzoneWidth: {
          value: 230,
          bin: 2,
          min: false,
          max: false
        },
        stageLength: {
          value: 71,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 159,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 189.9999995,
          bin: 2,
          min: false,
          max: false
        }
      },
      {
        name: "Battlefield",
        gameName: "battlefield_",
        blastzoneWidth: {
          value: 240,
          bin: 4,
          min: false,
          max: false
        },
        stageLength: {
          value: 79.98745,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 160.01255,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 191.9998325,
          bin: 2,
          min: false,
          max: false
        }
      },
      {
        name: "Wily Castle",
        gameName: "wily_",
        blastzoneWidth: {
          value: 248,
          bin: 5,
          min: false,
          max: false
        },
        stageLength: {
          value: 87.0689725,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 160.9310275,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 212.1908383,
          bin: 5,
          min: false,
          max: true
        }
      },
      {
        name: "Unova Pokemon League",
        gameName: "plasma_",
        blastzoneWidth: {
          value: 237,
          bin: 3,
          min: false,
          max: false
        },
        stageLength: {
          value: 81.75,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 155.25,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 190,
          bin: 2,
          min: false,
          max: false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min: 221.5,
        max: 250.0000075,
        range: 28.5000075
      },
      stageLength: {
        min: 71,
        max: 114.9439715,
        range: 43.9439715
      },
      offStageDistance: {
        min: 106.5560285,
        max: 161.8520599,
        range: 55.29603135
      },
      ceilingHeight: {
        min: 179.947372,
        max: 212.1908383,
        range: 32.24346628
      }
    }
  },
  expectedValues: [
    {
      stage: "texttable_windyhill_",
      value: "Smallest"
    },
    {
      stage: "texttable_poke_stadium_",
      value: "Largest"
    },
    {
      stage: "texttable_pictchat_",
      value: "Smaller"
    },
    {
      stage: "texttable_64jungle_",
      value: "Small"
    },
    {
      stage: "texttable_battlefield_",
      value: "Large"
    },
    {
      stage: "texttable_wily_",
      value: "Larger"
    },
    {
      stage: "texttable_plasma_",
      value: "Medium"
    }
  ]
};

export const DISPLAY_STAGELENGTH: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
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
          value: 77.2737,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 172.7263,
          bin:   5,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 192.1027776,
          bin:   5,
          min:   false,
          max:   true
        }
      },
      {
        name: "Unova Pokemon League",
        gameName: "plasma_",
        blastzoneWidth: {
          value: 237,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 81.75,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 155.25,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 190,
          bin:   5,
          min:   false,
          max:   false
        }
      },
      {
        name: "Great Plateau Tower",
        gameName: "zelda_tower",
        blastzoneWidth: {
          value: 266.8463185,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 90.702955,
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 176.1433635,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 191.9790375,
          bin:   5,
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
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 159,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 189.9999995,
          bin:   5,
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
          value: 95.1552,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 154.8448,
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
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 184.25,
          bin:   2,
          min:   false,
          max:   false
        }
      },
      {
        name: "Skyloft",
        gameName: "skyward",
        blastzoneWidth: {
          value: 230,
          bin:   1,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 85.56019725,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 144.4398028,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 192,
          bin:   5,
          min:   false,
          max:   false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   227.106766,
        max:   266.8463185,
        range: 39.7395525
      },
      stageLength: {
        min:   68,
        max:   95.1552,
        range: 27.1552
      },
      offStageDistance: {
        min:   144.4398028,
        max:   176.1433635,
        range: 31.70356075
      },
      ceilingHeight: {
        min:   180,
        max:   192.1027776,
        range: 12.10277764
      }
    }
  },
  expectedValues: [
    {
      stage: "texttable_pupupuland64_f",
      value: "Short"
    },
    {
      stage: "texttable_plasma_",
      value: "Medium"
    },
    {
      stage: "texttable_zelda_tower",
      value: "Longer"
    },
    {
      stage: "texttable_64jungle_",
      value: "Shorter"
    },
    {
      stage: "texttable_duckhunt_",
      value: "Longest"
    },
    {
      stage: "texttable_yoshi_cartboard_",
      value: "Shortest"
    },
    {
      stage: "texttable_skyward",
      value: "Long"
    }
  ]
};

export const DISPLAY_OFFSTAGE: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Wrecking Crew",
        gameName: "wrecking_",
        blastzoneWidth: {
          value: 252,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 97.2,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 154.8,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 243.8,
          bin:   5,
          min:   false,
          max:   true
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
          bin:   3,
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
          bin:   1,
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
          max:   false
        },
        ceilingHeight: {
          value: 215.6688772,
          bin:   3,
          min:   false,
          max:   false
        }
      },
      {
        name: "Smashville",
        gameName: "xvillage",
        blastzoneWidth: {
          value: 229.5,
          bin:   2,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 69.6488304,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 159.8511696,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 189.9000115,
          bin:   1,
          min:   false,
          max:   false
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
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 170,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 192.1316034,
          bin:   1,
          min:   false,
          max:   false
        }
      },
      {
        name: "Fountain of Dreams",
        gameName: "kirby_fountain_",
        blastzoneWidth: {
          value: 240.0000075,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 76.59685235,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 163.4031551,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 191.1096737,
          bin:   1,
          min:   false,
          max:   false
        }
      },
      {
        name: "Mementos",
        gameName: "jack_mementoes_",
        blastzoneWidth: {
          value: 260,
          bin:   4,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 100,
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
          value: 185,
          bin:   1,
          min:   true,
          max:   false
        }
      },
      {
        name: "Kongo Falls",
        gameName: "dk_waterfall_",
        blastzoneWidth: {
          value: 202.5,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 45.53241,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 156.96759,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 193.0210655,
          bin:   1,
          min:   false,
          max:   false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min:   202.5,
        max:   290.332306,
        range: 87.832306
      },
      stageLength: {
        min:   45.53241,
        max:   122.183903,
        range: 76.651493
      },
      offStageDistance: {
        min:   154.8,
        max:   170,
        range: 15.2
      },
      ceilingHeight: {
        min:   185,
        max:   243.8,
        range: 58.8
      }
    }
  },
  expectedValues: [
    {
      stage: "texttable_wrecking_",
      value: "Closest"
    },
    {
      stage: "texttable_kalos_",
      value: "Far"
    },
    {
      stage: "texttable_battlefield_l_",
      value: "Farther"
    },
    {
      stage: "texttable_xvillage",
      value: "Close"
    },
    {
      stage: "texttable_umbra_f",
      value: "Farthest"
    },
    {
      stage: "texttable_kirby_fountain_",
      value: "Medium"
    },
    {
      stage: "texttable_jack_mementoes_",
      value: "Close"
    },
    {
      stage: "texttable_dk_waterfall_",
      value: "Closer"
    }
  ]
};

export const DISPLAY_CEILING: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
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
          value: 60.2998327,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 159.7001673,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 220.0811329,
          bin:   5,
          min:   false,
          max:   true
        }
      },
      {
        name: "Mushroom Kingdom U",
        gameName: "mariou_",
        blastzoneWidth: {
          value: 250,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 81,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 169,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 192.000015,
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
          value: 87.0689725,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160.9310275,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 212.1908383,
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
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 187.99999,
          bin:   1,
          min:   false,
          max:   false
        }
      },
      {
        name: "Battlefield",
        gameName: "battlefield_",
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
        name: "Final Destination",
        gameName: "bossstage_final1_",
        blastzoneWidth: {
          value: 240.0000155,
          bin:   2,
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
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 179.995085,
          bin:   1,
          min:   true,
          max:   false
        }
      },
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
          value: 94.871992,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160.128008,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 199.9999999,
          bin:   3,
          min:   false,
          max:   false
        }
      },
      {
        name: "Princess Peach's Castle",
        gameName: "mario_castledx_",
        blastzoneWidth: {
          value: 275,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 121.0748405,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 153.9251595,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 208.70288,
          bin:   4,
          min:   false,
          max:   false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   220,
        max:   275,
        range: 55
      },
      stageLength: {
        min:   60.2998327,
        max:   121.0748405,
        range: 60.7750078
      },
      offStageDistance: {
        min:   149.9999671,
        max:   169,
        range: 19.0000329
      },
      ceilingHeight: {
        min:   179.995085,
        max:   220.0811329,
        range: 40.08604796
      }
    }
  },
  expectedValues: [
    {
      stage: "texttable_xice_",
      value: "Highest"
    },
    {
      stage: "texttable_mariou_",
      value: "Low"
    },
    {
      stage: "texttable_wily_",
      value: "Higher"
    },
    {
      stage: "texttable_xstarfox_",
      value: "Lower"
    },
    {
      stage: "texttable_battlefield_",
      value: "Low"
    },
    {
      stage: "texttable_bossstage_final1_",
      value: "Lowest"
    },
    {
      stage: "texttable_xmansion_",
      value: "Medium"
    },
    {
      stage: "texttable_mario_castledx_",
      value: "High"
    }
  ]
};

export const DISPLAY_SORT_DEFAULT: { inputSet: BinnedStageDimensionsSet, expectedClasses: string[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Hyrule Castle",
        gameName: "hyrule64_f",
        blastzoneWidth: {
          value: 325.055213,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 151.129,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 173.926213,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 276.6675146,
          bin:   5,
          min:   false,
          max:   true
        }
      },
      {
        name: "Fountain of Dreams",
        gameName: "kirby_fountain_",
        blastzoneWidth: {
          value: 240.0000075,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 76.59685235,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 163.4031551,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 191.1096737,
          bin:   1,
          min:   false,
          max:   false
        }
      },
      {
        name: "Arena Ferox",
        gameName: "colloseum_",
        blastzoneWidth: {
          value: 252.982597,
          bin:   1,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 92.8398674,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160.1427296,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 189.991974,
          bin:   1,
          min:   false,
          max:   false
        }
      },
      {
        name: "Pokemon Stadium 2",
        gameName: "xstadium_",
        blastzoneWidth: {
          value: 250,
          bin:   1,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 93.7759552,
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 156.2240448,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 179.9998002,
          bin:   1,
          min:   true,
          max:   false
        }
      },
      {
        name: "Princess Peach's Castle",
        gameName: "mario_castledx_",
        blastzoneWidth: {
          value: 275,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 121.0748405,
          bin:   3,
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
          bin:   2,
          min:   false,
          max:   false
        }
      },
    ],
    ranges: {
      blastzoneWidth: {
        min:   240.0000075,
        max:   325.055213,
        range: 85.0552055
      },
      stageLength: {
        min:   76.59685235,
        max:   151.129,
        range: 74.53214765
      },
      offStageDistance: {
        min:   153.9251595,
        max:   173.926213,
        range: 20.0010535
      },
      ceilingHeight: {
        min:   179.9998002,
        max:   276.6675146,
        range: 96.66771443
      }
    }
  },
  expectedClasses: [
    "texttable_hyrule64_f",
    "texttable_mario_castledx_",
    "texttable_colloseum_",
    "texttable_xstadium_",
    "texttable_kirby_fountain_",
  ]
}

/*
colloseum_
xmansion_
*/
// Add stages with offStageDistance below 160
export const CLOSE_MAX: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: null,
  expectedValues: null
};

/*
duckhunt_
end_l_common
*/
// Add stages with height above 180
export const CLOSE_MIN: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: null,
  expectedValues: null
};

export const ONE_ITEM: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: null,
  expectedValues: null
};

/*
battle_common
battlefield_
*/
// BF + BF Common (should all be "Same Width/Length/Distance/Height")
export const MIN_MAX: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: null,
  expectedValues: null
};

/*
battlefield_
bossstage_final1_
*/
// BF + FD width, length, distance
export const MIN_MAX_CLOSE: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: string }[] } = {
  inputSet: null,
  expectedValues: null
};

export const DISPLAY_RANGES: {   inputSet: BinnedStageDimensionsSet, expectedRanges: { [dimension: string]: StageDimensionsRange }   } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Luigi's Mansion",
        gameName: "xmansion_",
        blastzoneWidth: {
          value: 255,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 94.871992,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 160.128008,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 199.9999999,
          bin:   4,
          min:   false,
          max:   false
        }
      },
      {
        name: "Super Happy Tree",
        gameName: "yoshi_story_",
        blastzoneWidth: {
          value: 294.875,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 4.986002205,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 289.8889978,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 212.5432136,
          bin:   5,
          min:   false,
          max:   true
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
          value: 93.7759552,
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 156.2240448,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 179.9998002,
          bin:   1,
          min:   false,
          max:   false
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
          bin:   5,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160.01255,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 191.9998325,
          bin:   3,
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
          value: 65.49999,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 144.50001,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 175,
          bin:   1,
          min:   true,
          max:   false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min:   210,
        max:   294.875,
        range: 84.875
      },
      stageLength: {
        min:   4.986002205,
        max:   94.871992,
        range: 89.8859898
      },
      offStageDistance: {
        min:   144.50001,
        max:   289.8889978,
        range: 145.3889878
      },
      ceilingHeight: {
        min:   175,
        max:   212.5432136,
        range: 37.5432136
      }
    }
  },
  expectedRanges: {
      blastzoneWidth: {
        min:   210,
        max:   295,
        range: 85
      },
      stageLength: {
        min:   5,
        max:   95,
        range: 90
      },
      offStageDistance: {
        min:   145,
        max:   290,
        range: 145
      },
      ceilingHeight: {
        min:   175,
        max:   213,
        range: 38
      }
  }
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
*/
