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
        name: "Umbra Clock Tower",
        gameName: "umbra_f",
        blastzoneWidth: {
          value: 250,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 80,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 170,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 192.1316034,
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
          bin: 3,
          min: false,
          max: false
        },
        stageLength: {
          value: 69.94353795,
          bin: 3,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 150.0564621,
          bin: 3,
          min: false,
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
        name: "BattleField (Common)",
        gameName: "battle_common",
        blastzoneWidth: {
          value: 240,
          bin: 5,
          min: false,
          max: false
        },
        stageLength: {
          value: 79.98745,
          bin: 5,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 160.01255,
          bin: 4,
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
        name: "Spear Pillar",
        gameName: "poke_tengam_",
        blastzoneWidth: {
          value: 245,
          bin: 5,
          min: false,
          max: false
        },
        stageLength: {
          value: 80,
          bin: 5,
          min: false,
          max: true
        },
        offStageDistance: {
          value: 165,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 259.999985,
          bin: 5,
          min: false,
          max: true
        }
      },
      {
        name: "Tomodachi Life",
        gameName: "tomodachi_",
        blastzoneWidth: {
          value: 225,
          bin: 4,
          min: false,
          max: false
        },
        stageLength: {
          value: 70,
          bin: 3,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 155,
          bin: 4,
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
          bin: 1,
          min: false,
          max: false
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
        max: 80,
        range: 21.768015
      },
      offStageDistance: {
        min: 121.768015,
        max: 170,
        range: 48.231985
      },
      ceilingHeight: {
        min: 185.1518941,
        max: 259.999985,
        range: 74.84809091
      }
    }
  },
  expectedClasses: [
    "numtable_umbra_f",
    "numtable_xcrayon_",
    "numtable_battle_common",
    "numtable_poke_tengam_",
    "numtable_tomodachi_",
    "numtable_xmadein_",
  ]
};

export const DISPLAY_NAME: { inputSet: BinnedStageDimensionsSet, expectedValues: {stage: string, value: string}[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Gamer",
        gameName: "gamer_",
        blastzoneWidth: {
          value: 229.9999925,
          bin: 1,
          min: true,
          max: false
        },
        stageLength: {
          value: 91,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 138.9999925,
          bin: 1,
          min: true,
          max: false
        },
        ceilingHeight: {
          value: 192,
          bin: 2,
          min: false,
          max: false
        }
      },
      {
        name: "Lylat Cruise",
        gameName: "xstarfox_",
        blastzoneWidth: {
          value: 230,
          bin: 1,
          min: false,
          max: false
        },
        stageLength: {
          value: 80.0000329,
          bin: 1,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 149.9999671,
          bin: 2,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 187.99999,
          bin: 2,
          min: false,
          max: false
        }
      },
      {
        name: "Port Town Aero Dive",
        gameName: "xfzero_",
        blastzoneWidth: {
          value: 230,
          bin: 1,
          min: false,
          max: false
        },
        stageLength: {
          value: 64.78974,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 165.21026,
          bin: 4,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 159.9231,
          bin: 1,
          min: true,
          max: false
        }
      },
      {
        name: "Town & City",
        gameName: "village2_",
        blastzoneWidth: {
          value: 230,
          bin: 1,
          min: false,
          max: false
        },
        stageLength: {
          value: 82.5,
          bin: 2,
          min: false,
          max: false
        },
        offStageDistance: {
          value: 147.5,
          bin: 2,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 195,
          bin: 2,
          min: false,
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
        min: 229.9999925,
        max: 325.055213,
        range: 95.0552205
      },
      stageLength: {
        min: 64.78974,
        max: 151.129,
        range: 86.33926
      },
      offStageDistance: {
        min: 138.9999925,
        max: 173.926213,
        range: 34.9262205
      },
      ceilingHeight: {
        min: 159.9231,
        max: 276.6675146,
        range: 116.7444146
      }
    }
  },
  expectedValues: [
    {
      stage: "numtable_gamer_",
      value: "Gamer"
    },
    {
      stage: "numtable_xstarfox_",
      value: "Lylat Cruise"
    },
    {
      stage: "numtable_xfzero_",
      value: "Port Town Aero Dive"
    },
    {
      stage: "numtable_village2_",
      value: "Town & City"
    },
    {
      stage: "numtable_hyrule64_f",
      value: "Hyrule Castle"
    }
  ]
};

export const DISPLAY_BLASTZONE: { inputSet: BinnedStageDimensionsSet, expectedValues: {stage: string, value: number}[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
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
          max: true
        },
        offStageDistance: {
          value: 169,
          bin: 5,
          min: false,
          max: false
        },
        ceilingHeight: {
          value: 192.000015,
          bin: 5,
          min: false,
          max: false
        }
      },
      {
        name: "Battlefield",
        gameName: "battlefield_",
        blastzoneWidth: {
          value: 240,
          bin: 3,
          min: false,
          max: false
        },
        stageLength: {
          value: 79.98745,
          bin: 4,
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
          bin: 5,
          min: false,
          max: false
        }
      },
      {
        name: "Dream Land (64)",
        gameName: "pupupuland64_f",
        blastzoneWidth: {
          value: 250,
          bin: 5,
          min: false,
          max: true
        },
        stageLength: {
          value: 77.2737,
          bin: 1,
          min: true,
          max: false
        },
        offStageDistance: {
          value: 172.7263,
          bin: 5,
          min: false,
          max: true
        },
        ceilingHeight: {
          value: 192.1027776,
          bin: 5,
          min: false,
          max: true
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
          value: 80.0000329,
          bin:   4,
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
          bin:   4,
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
          bin:   4,
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
      }
    ],
    ranges: {
      blastzoneWidth: {
        min:   230,
        max:   250,
        range: 20
      },
      stageLength: {
        min:   77.2737,
        max:   81,
        range: 3.7263
      },
      offStageDistance: {
        min:   149.9999671,
        max:   172.7263,
        range: 22.7263329
      },
      ceilingHeight: {
        min:   179.995085,
        max:   192.1027776,
        range: 12.10769266
      }
    }
  },
  expectedValues: [
    {
      stage: "numtable_mariou_",
      value: 250
    },
    {
      stage: "numtable_battlefield_",
      value: 240
    },
    {
      stage: "numtable_pupupuland64_f",
      value: 250
    },
    {
      stage: "numtable_xstarfox_",
      value: 230
    },
    {
      stage: "numtable_bossstage_final1_",
      value: 240
    }
  ]
};

export const DISPLAY_STAGELENGTH: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: number }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Pokemon Stadium 2",
        gameName: "xstadium_",
        blastzoneWidth: {
          value: 250,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 93.7759552,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 156.2240448,
          bin:   5,
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
        name: "Gamer",
        gameName: "gamer_",
        blastzoneWidth: {
          value: 229.9999925,
          bin:   1,
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
          value: 138.9999925,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 192,
          bin:   5,
          min:   false,
          max:   true
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
          bin:   5,
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
          bin:   1,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 159.8511696,
          bin:   5,
          min:   false,
          max:   true
        },
        ceilingHeight: {
          value: 189.9000115,
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
          bin:   5,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 189.9999995,
          bin:   5,
          min:   false,
          max:   false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min:   227.106766,
        max:   250,
        range: 22.893234
      },
      stageLength: {
        min:   68,
        max:   93.7759552,
        range: 25.7759552
      },
      offStageDistance: {
        min:   138.9999925,
        max:   159.8511696,
        range: 20.8511771
      },
      ceilingHeight: {
        min:   179.9998002,
        max:   192,
        range: 12.00019983
      }
    }
  },
  expectedValues: [
    {
      stage: "numtable_xstadium_",
      value: 94
    },
    {
      stage: "numtable_gamer_",
      value: 91
    },
    {
      stage: "numtable_yoshi_cartboard_",
      value: 68
    },
    {
      stage: "numtable_xvillage",
      value: 70
    },
    {
      stage: "numtable_64jungle_",
      value: 71
    }
  ]
};

export const DISPLAY_OFFSTAGE: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: number }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
      {
        name: "Pokemon Stadium",
        gameName: "poke_stadium_",
        blastzoneWidth: {
          value: 250.0000075,
          bin:   5,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 88.14794765,
          bin:   4,
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
      {
        name: "Arena Ferox",
        gameName: "colloseum_",
        blastzoneWidth: {
          value: 252.982597,
          bin:   5,
          min:   false,
          max:   true
        },
        stageLength: {
          value: 92.8398674,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 160.1427296,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 189.991974,
          bin:   5,
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
          min:   true,
          max:   false
        },
        stageLength: {
          value: 81.75,
          bin:   1,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 155.25,
          bin:   1,
          min:   true,
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
        name: "Umbra Clock Tower",
        gameName: "umbra_f",
        blastzoneWidth: {
          value: 250,
          bin:   5,
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
          max:   true
        },
        ceilingHeight: {
          value: 192.1316034,
          bin:   5,
          min:   false,
          max:   true
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min:   237,
        max:   252.982597,
        range: 15.982597
      },
      stageLength: {
        min:   80,
        max:   92.8398674,
        range: 12.8398674
      },
      offStageDistance: {
        min:   155.25,
        max:   170,
        range: 14.75
      },
      ceilingHeight: {
        min:   179.947372,
        max:   192.1316034,
        range: 12.18423137
      }
    }
  },
  expectedValues: [
    {
      stage: "numtable_poke_stadium_",
      value: 162
    },
    {
      stage: "numtable_colloseum_",
      value: 160
    },
    {
      stage: "numtable_plasma_",
      value: 155
    },
    {
      stage: "numtable_umbra_f",
      value: 170
    }
  ]
};

export const DISPLAY_CEILING: { inputSet: BinnedStageDimensionsSet, expectedValues: { stage: string, value: number }[] } = {
  inputSet: {
    bins: 5,
    dimensions: [
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
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 160.9310275,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 212.1908383,
          bin:   3,
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
          max:   false
        },
        stageLength: {
          value: 90.702955,
          bin:   3,
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
          bin:   2,
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
          bin:   2,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 165,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 259.999985,
          bin:   5,
          min:   false,
          max:   true
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
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 154.8448,
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
        name: "Port Town Aero Dive",
        gameName: "xfzero_",
        blastzoneWidth: {
          value: 230,
          bin:   1,
          min:   true,
          max:   false
        },
        stageLength: {
          value: 64.78974,
          bin:   1,
          min:   true,
          max:   false
        },
        offStageDistance: {
          value: 165.21026,
          bin:   3,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 159.9231,
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
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 208.70288,
          bin:   3,
          min:   false,
          max:   false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min:   230,
        max:   275,
        range: 45
      },
      stageLength: {
        min:   64.78974,
        max:   121.0748405,
        range: 56.2851005
      },
      offStageDistance: {
        min:   153.9251595,
        max:   176.1433635,
        range: 22.218204
      },
      ceilingHeight: {
        min:   159.9231,
        max:   259.999985,
        range: 100.076885
      }
    }
  },
  expectedValues: [
    {
      stage: "numtable_wily_",
      value: 212
    },
    {
      stage: "numtable_zelda_tower",
      value: 192
    },
    {
      stage: "numtable_poke_tengam_",
      value: 260
    },
    {
      stage: "numtable_duckhunt_",
      value: 180
    },
    {
      stage: "numtable_xfzero_",
      value: 160
    },
    {
      stage: "numtable_mario_castledx_",
      value: 209
    }
  ]
};

export const DISPLAY_RANGES: {   inputSet: BinnedStageDimensionsSet, expectedRanges: { [dimension: string]: StageDimensionsRange }   } = {
  inputSet: {
    bins: 5,
    dimensions: [
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
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 165,
          bin:   2,
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
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 163.4031551,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 191.1096737,
          bin:   4,
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
          max:   false
        },
        stageLength: {
          value: 122.183903,
          bin:   5,
          min:   false,
          max:   true
        },
        offStageDistance: {
          value: 168.148403,
          bin:   2,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 215.6688772,
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
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 95.717309,
          bin:   4,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 132.060462,
          bin:   1,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 138.5789305,
          bin:   1,
          min:   true,
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
          value: 58.231985,
          bin:   3,
          min:   false,
          max:   false
        },
        offStageDistance: {
          value: 121.768015,
          bin:   1,
          min:   true,
          max:   false
        },
        ceilingHeight: {
          value: 198.4180636,
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
          value: 185,
          bin:   4,
          min:   false,
          max:   false
        }
      },
      {
        name: "Skyloft",
        gameName: "skyward",
        blastzoneWidth: {
          value: 230,
          bin:   3,
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
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 192,
          bin:   4,
          min:   false,
          max:   false
        }
      }
    ],
    ranges: {
      blastzoneWidth: {
        min:   180,
        max:   294.875,
        range: 114.875
      },
      stageLength: {
        min:   4.986002205,
        max:   122.183903,
        range: 117.1979008
      },
      offStageDistance: {
        min:   121.768015,
        max:   289.8889978,
        range: 168.1209828
      },
      ceilingHeight: {
        min:   138.5789305,
        max:   215.6688772,
        range: 77.08994666
      }
    }
  },

  expectedRanges: {
      blastzoneWidth: {
        min:   180,
        max:   295,
        range: 115
      },
      stageLength: {
        min:   5,
        max:   122,
        range: 117
      },
      offStageDistance: {
        min:   122,
        max:   290,
        range: 168
      },
      ceilingHeight: {
        min:   139,
        max:   216,
        range: 77
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
      }
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
  }
*/
