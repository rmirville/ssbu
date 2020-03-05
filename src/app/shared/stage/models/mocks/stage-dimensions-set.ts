import { StageDimensionsSet } from '../stage-dimensions-set.model';

const TOWN = {
  name: "Town & City",
  gameName: "village2_",
  blastzoneWidth: 230,
  stageLength: 82.5,
  offStageDistance: 147.5,
  ceilingHeight: 195
};

const SMASHVILLE = {
  name: "Smashville",
  gameName: "xvillage",
  blastzoneWidth: 229.5,
  stageLength: 69.6488304,
  offStageDistance: 159.8511696,
  ceilingHeight: 189.90001145
};

const SAMPLE_STAGE_ONE = {
  name: "Sample Stage",
  gameName: "sample1_",
  blastzoneWidth: 210,
  stageLength: 70,
  offStageDistance: 150,
  ceilingHeight: 190
};

const SAMPLE_STAGE_TWO = {
  name: "Example Stage",
  gameName: "example2_",
  blastzoneWidth: 330,
  stageLength: 25,
  offStageDistance: 95,
  ceilingHeight: 425.3
};

const SAMPLE_STAGE_THREE = {
  name: "Made-up Placeville",
  gameName: "madeup3_",
  blastzoneWidth: 840,
  stageLength: 29,
  offStageDistance: 103,
  ceilingHeight: 83
};

const SAMPLE_STAGE_FOUR = {
  name: "Over There",
  gameName: "overthere4_",
  blastzoneWidth: 203,
  stageLength: 85,
  offStageDistance: 49,
  ceilingHeight: 7524
};

const VALID_STAGES = [TOWN, SMASHVILLE];

const VALID_WIDTH = {
  min: 38,
  max: 75,
  range: 42
};

const VALID_LENGTH = {
  min: -32,
  max: -3,
  range: 83
};

const VALID_DISTANCE = {
  min: -1,
  max: 3894,
  range: 8
}

const VALID_HEIGHT = {
  min: 43,
  max: 49,
  range: 6
};

const VALID_RANGES = {
  blastzoneWidth: VALID_WIDTH,
  stageLength: VALID_LENGTH,
  offStageDistance: VALID_DISTANCE,
  ceilingHeight: VALID_HEIGHT
};

export const VALID = {
  dimensions: VALID_STAGES,
  ranges: VALID_RANGES
};

export const BAD_DATA = {
  dimensionsNotArray: {
    dimensions: TOWN,
    ranges: VALID_RANGES
  },

  dimensionsNotStageDimensions: {
    dimensions: [2,3],
    ranges: VALID_RANGES
  },

  blastzoneWidthNotRange: {
    dimensions: VALID_STAGES,
    ranges: {
      blastzoneWidth: 2,
      stageLength: VALID_LENGTH,
      offStageDistance: VALID_DISTANCE,
      ceilingHeight: VALID_HEIGHT
    }
  },

  stageLengthNotRange: {
    dimensions: VALID_STAGES,
    ranges: {
      blastzoneWidth: VALID_WIDTH,
      stageLength: "length",
      offStageDistance: VALID_DISTANCE,
      ceilingHeight: VALID_HEIGHT
    }
  },

  offStageDistanceNotRange: {
    dimensions: VALID_STAGES,
    ranges: {
      blastzoneWidth: VALID_WIDTH,
      stageLength: VALID_LENGTH,
      offStageDistance: TOWN,
      ceilingHeight: VALID_HEIGHT
    }
  },

  ceilingHeighthNotRange: {
    dimensions: VALID_STAGES,
    ranges: {
      blastzoneWidth: VALID_WIDTH,
      stageLength: VALID_LENGTH,
      offStageDistance: VALID_DISTANCE,
      ceilingHeight: {
        invalidProperty: ["sometext", "moretext"]
      }
    }
  },
};

export const TWO_STAGE_SET = {
  dimensions: [TOWN, SMASHVILLE],
  ranges: {
    blastzoneWidth: {
      min: 229.5,
      max: 230,
      range: 0.5
    },
    stageLength: {
      min: 69.6488304,
      max: 82.5,
      range: 12.8511696
    },
    offStageDistance: {
      min: 147.5,
      max: 159.8511696,
      range: 12.3511696
    },
    ceilingHeight: {
      min: 189.90001145,
      max: 195,
      range: 5.09998855
    }
  }
};

export const DIMENSIONS_SET_ONE = {
  dimensions: [TOWN, SMASHVILLE],
  ranges: {
    blastzoneWidth: {
      min: 229.5,
      max: 230,
      range: 0.5
    },
    stageLength: {
      min: 69.6488304,
      max: 82.5,
      range: 12.8511696
    },
    offStageDistance: {
      min: 147.5,
      max: 159.8511696,
      range: 12.3511696
    },
    ceilingHeight: {
      min: 189.90001145,
      max: 195,
      range: 5.09998855
    }
  }
};

export const DIMENSIONS_SET_TWO = {
  dimensions: [SAMPLE_STAGE_ONE, SAMPLE_STAGE_TWO, TOWN],
  ranges: {
    blastzoneWidth: {
      min: 290,
      max: 530,
      range: 20
    },
    stageLength: {
      min: 437,
      max: 629,
      range: 120
    },
    offStageDistance: {
      min: 20,
      max: 43,
      range: 2
    },
    ceilingHeight: {
      min: 195,
      max: 222,
      range: 4.359
    }
  }
};

export const DIMENSIONS_SET_THREE = {
  dimensions: [SAMPLE_STAGE_THREE, SAMPLE_STAGE_FOUR],
  ranges: {
    blastzoneWidth: {
      min: 852,
      max: 949,
      range: 241
    },
    stageLength: {
      min: 72,
      max: 596,
      range: 718
    },
    offStageDistance: {
      min: 715,
      max: 759,
      range: 963
    },
    ceilingHeight: {
      min: 22,
      max: 289,
      range: 279
    }
  }
};

export const FULL_SIMPLE: StageDimensionsSet = { "dimensions": [{ "name": "Big Battlefield", "gameName": "battlefield_l_", "blastzoneWidth": 290.332306, "stageLength": 122.183903, "offStageDistance": 168.14840300000003, "ceilingHeight": 215.668877160052 }, { "name": "Battlefield", "gameName": "battlefield_", "blastzoneWidth": 240, "stageLength": 79.98745, "offStageDistance": 160.01255, "ceilingHeight": 191.999832492058 }, { "name": "Smashville", "gameName": "xvillage", "blastzoneWidth": 229.5, "stageLength": 69.64883040000001, "offStageDistance": 159.8511696, "ceilingHeight": 189.90001145 }, { "name": "Town & City", "gameName": "village2_", "blastzoneWidth": 230, "stageLength": 82.5, "offStageDistance": 147.5, "ceilingHeight": 195 }, { "name": "Umbra Clock Tower", "gameName": "umbra_f", "blastzoneWidth": 250, "stageLength": 80, "offStageDistance": 170, "ceilingHeight": 192.131603368 }, { "name": "Final Destination", "gameName": "bossstage_final1_", "blastzoneWidth": 240.00001550000002, "stageLength": 79.99465000000001, "offStageDistance": 160.0053655, "ceilingHeight": 179.99508497864 }, { "name": "BattleField (Common)", "gameName": "battle_common", "blastzoneWidth": 240, "stageLength": 79.98745, "offStageDistance": 160.01255, "ceilingHeight": 191.999832492058 }, { "name": "Final Destination (Large)", "gameName": "end_l_common", "blastzoneWidth": 280, "stageLength": 119.99197749999999, "offStageDistance": 160.0080225, "ceilingHeight": 179.99508497864 }, { "name": "Kongo Jungle", "gameName": "64jungle_", "blastzoneWidth": 230, "stageLength": 71, "offStageDistance": 159, "ceilingHeight": 189.99999952316284 }, { "name": "Kongo Falls", "gameName": "dk_waterfall_", "blastzoneWidth": 202.5, "stageLength": 45.53241, "offStageDistance": 156.96759, "ceilingHeight": 193.0210655 }, { "name": "Duck Hunt", "gameName": "duckhunt_", "blastzoneWidth": 250, "stageLength": 95.1552, "offStageDistance": 154.84480000000002, "ceilingHeight": 180 }, { "name": "Arena Ferox", "gameName": "colloseum_", "blastzoneWidth": 252.982597, "stageLength": 92.8398674, "offStageDistance": 160.1427296, "ceilingHeight": 189.991974 }, { "name": "Castle Siege", "gameName": "xemblem", "blastzoneWidth": 210, "stageLength": 65.49999, "offStageDistance": 144.50001, "ceilingHeight": 175 }, { "name": "Lylat Cruise", "gameName": "xstarfox_", "blastzoneWidth": 230, "stageLength": 80.00003290000001, "offStageDistance": 149.9999671, "ceilingHeight": 187.99999 }, { "name": "Port Town Aero Dive", "gameName": "xfzero_", "blastzoneWidth": 230, "stageLength": 64.78974, "offStageDistance": 165.21026, "ceilingHeight": 159.9230999947 }, { "name": "Summit", "gameName": "xice_", "blastzoneWidth": 220, "stageLength": 60.2998327, "offStageDistance": 159.7001673, "ceilingHeight": 220.08113293805002 }, { "name": "Mementos", "gameName": "jack_mementoes_", "blastzoneWidth": 260, "stageLength": 100, "offStageDistance": 160, "ceilingHeight": 185 }, { "name": "Fountain of Dreams", "gameName": "kirby_fountain_", "blastzoneWidth": 240.00000749999998, "stageLength": 76.59685235, "offStageDistance": 163.40315514999998, "ceilingHeight": 191.1096737 }, { "name": "Dream Land (64)", "gameName": "pupupuland64_f", "blastzoneWidth": 250, "stageLength": 77.2737, "offStageDistance": 172.72629999999998, "ceilingHeight": 192.1027776435 }, { "name": "Princess Peach's Castle", "gameName": "mario_castledx_", "blastzoneWidth": 275, "stageLength": 121.0748405, "offStageDistance": 153.9251595, "ceilingHeight": 208.70288 }, { "name": "Luigi's Mansion", "gameName": "xmansion_", "blastzoneWidth": 255, "stageLength": 94.871992, "offStageDistance": 160.128008, "ceilingHeight": 199.99999993756302 }, { "name": "Rainbow Cruise", "gameName": "mario_rainbow_", "blastzoneWidth": 227.777771, "stageLength": 95.717309, "offStageDistance": 132.060462, "ceilingHeight": 138.57893049999998 }, { "name": "Mushroom Kingdom U", "gameName": "mariou_", "blastzoneWidth": 250, "stageLength": 81, "offStageDistance": 169, "ceilingHeight": 192.000015 }, { "name": "PictoChat 2", "gameName": "pictchat_", "blastzoneWidth": 225, "stageLength": 80, "offStageDistance": 145, "ceilingHeight": 196 }, { "name": "Kalos Pokémon League", "gameName": "kalos_", "blastzoneWidth": 245, "stageLength": 80, "offStageDistance": 165, "ceilingHeight": 192 }, { "name": "Pokémon Stadium", "gameName": "poke_stadium_", "blastzoneWidth": 250.00000749999998, "stageLength": 88.14794764999999, "offStageDistance": 161.85205985, "ceilingHeight": 179.947372 }, { "name": "Pokémon Stadium 2", "gameName": "xstadium_", "blastzoneWidth": 250, "stageLength": 93.7759552, "offStageDistance": 156.2240448, "ceilingHeight": 179.999800169 }, { "name": "Unova Pokémon League", "gameName": "plasma_", "blastzoneWidth": 237, "stageLength": 81.75, "offStageDistance": 155.25, "ceilingHeight": 190 }, { "name": "Spear Pillar", "gameName": "poke_tengam_", "blastzoneWidth": 245, "stageLength": 80, "offStageDistance": 165, "ceilingHeight": 259.99998500000004 }, { "name": "Wily Castle", "gameName": "wily_", "blastzoneWidth": 248, "stageLength": 87.0689725, "offStageDistance": 160.9310275, "ceilingHeight": 212.190838277 }, { "name": "Windy Hill Zone", "gameName": "windyhill_", "blastzoneWidth": 221.5, "stageLength": 114.9439715, "offStageDistance": 106.5560285, "ceilingHeight": 193.429111265 }, { "name": "WarioWare", "gameName": "xmadein_", "blastzoneWidth": 180, "stageLength": 58.231984999999995, "offStageDistance": 121.768015, "ceilingHeight": 198.41806355 }, { "name": "Gamer", "gameName": "gamer_", "blastzoneWidth": 229.99999250000002, "stageLength": 91, "offStageDistance": 138.99999250000002, "ceilingHeight": 192 }, { "name": "Tomodachi Life", "gameName": "tomodachi_", "blastzoneWidth": 225, "stageLength": 70, "offStageDistance": 155, "ceilingHeight": 200.999985 }, { "name": "Wrecking Crew", "gameName": "wrecking_", "blastzoneWidth": 252, "stageLength": 97.2, "offStageDistance": 154.8, "ceilingHeight": 243.8 }, { "name": "Yoshi Island", "gameName": "xcrayon_", "blastzoneWidth": 220, "stageLength": 69.94353795, "offStageDistance": 150.05646205, "ceilingHeight": 185.15189409 }, { "name": "Yoshi's Story", "gameName": "yoshi_cartboard_", "blastzoneWidth": 227.106766, "stageLength": 68, "offStageDistance": 159.106766, "ceilingHeight": 184.25 }, { "name": "Super Happy Tree", "gameName": "yoshi_story_", "blastzoneWidth": 294.875, "stageLength": 4.986002205, "offStageDistance": 289.888997795, "ceilingHeight": 212.5432136 }, { "name": "Hyrule Castle", "gameName": "hyrule64_f", "blastzoneWidth": 325.055213, "stageLength": 151.12900000000002, "offStageDistance": 173.92621299999996, "ceilingHeight": 276.6675146 }, { "name": "Skyloft", "gameName": "skyward", "blastzoneWidth": 230, "stageLength": 85.56019724999999, "offStageDistance": 144.43980275, "ceilingHeight": 192 }, { "name": "Great Plateau Tower", "gameName": "zelda_tower", "blastzoneWidth": 266.8463185, "stageLength": 90.702955, "offStageDistance": 176.1433635, "ceilingHeight": 191.9790375 }], "ranges": { "blastzoneWidth": { "min": 180, "max": 325.055213, "range": 145.05521299999998 }, "stageLength": { "min": 4.986002205, "max": 151.12900000000002, "range": 146.142997795 }, "offStageDistance": { "min": 106.5560285, "max": 289.888997795, "range": 183.33296929500003 }, "ceilingHeight": { "min": 138.57893049999998, "max": 276.6675146, "range": 138.08858410000002 } } };

export const BLASTZONE_EDGE: StageDimensionsSet = {
  dimensions: [
    {
      name: "smallest",
      gameName: "min_",
      blastzoneWidth: 200,
      stageLength: 49.1101562616,
      offStageDistance: 65.1497398381,
      ceilingHeight: 56.9801849329
    },
    {
      name: "smaller",
      gameName: "bin1_",
      blastzoneWidth: 205,
      stageLength: 94.0894596192,
      offStageDistance: 82.6862772171,
      ceilingHeight: 56.8313981414
    },
    {
      name: "smallersmall",
      gameName: "bin12_",
      blastzoneWidth: 210,
      stageLength: 39.2875299596,
      offStageDistance: 94.7979832477,
      ceilingHeight: 84.9752058485
    },
    {
      name: "small",
      gameName: "bin2_",
      blastzoneWidth: 215,
      stageLength: 20.7465236509,
      offStageDistance: 42.7165582245,
      ceilingHeight: 84.3310435706
    },
    {
      name: "smallmid",
      gameName: "bin23_",
      blastzoneWidth: 220,
      stageLength: 99.2156356459,
      offStageDistance: 61.9626045642,
      ceilingHeight: 60.1132297663
    },
    {
      name: "mid",
      gameName: "bin3_",
      blastzoneWidth: 225,
      stageLength: 66.6293697518,
      offStageDistance: 79.5694051552,
      ceilingHeight: 96.3883457540
    },
    {
      name: "midlarge",
      gameName: "bin34_",
      blastzoneWidth: 230,
      stageLength: 97.9170938845,
      offStageDistance: 61.3826809632,
      ceilingHeight: 21.7776237767
    },
    {
      name: "large",
      gameName: "bin4_",
      blastzoneWidth: 235,
      stageLength: 4.8392347504,
      offStageDistance: 51.8450961141,
      ceilingHeight: 11.5140155722
    },
    {
      name: "largelarger",
      gameName: "bin45_",
      blastzoneWidth: 240,
      stageLength: 43.6307290077,
      offStageDistance: 53.2574791417,
      ceilingHeight: 23.2120319424
    },
    {
      name: "larger",
      gameName: "bin5_",
      blastzoneWidth: 245,
      stageLength: 68.8733918293,
      offStageDistance: 81.5451027908,
      ceilingHeight: 32.5353285124
    },
    {
      name: "largest",
      gameName: "max_",
      blastzoneWidth: 250,
      stageLength: 38.9012251474,
      offStageDistance: 12.0204226524,
      ceilingHeight: 17.7474007130
    }
  ],
  ranges: {
    blastzoneWidth: {
      min: 200,
      max: 250,
      range: 50
    },
    stageLength: {
      min: 4.83923475,
      max: 99.21563565,
      range: 94.3764009
    },
    offStageDistance: {
      min: 12.02042265,
      max: 94.79798325,
      range: 82.7775606
    },
    ceilingHeight: {
      min: 11.51401557,
      max: 96.38834575,
      range: 84.87433018
    }
  }
};

export const STAGE_EDGE: StageDimensionsSet = {
  dimensions: [
    {
      name: "shortest",
      gameName: "min_",
      blastzoneWidth: 84.7122879853,
      stageLength: 120,
      offStageDistance: 28.1803819000,
      ceilingHeight: 4.8336029932
    },
    {
      name: "shorter",
      gameName: "bin1_",
      blastzoneWidth: 23.2094777813,
      stageLength: 122,
      offStageDistance: 60.3645685868,
      ceilingHeight: 13.8504055148
    },
    {
      name: "shortershort",
      gameName: "bin12_",
      blastzoneWidth: 14.7426237889,
      stageLength: 124,
      offStageDistance: 69.2900111027,
      ceilingHeight: 12.6818134587
    },
    {
      name: "short",
      gameName: "bin2_",
      blastzoneWidth: 82.5230720482,
      stageLength: 126,
      offStageDistance: 48.1325253691,
      ceilingHeight: 6.7023185621
    },
    {
      name: "shortmid",
      gameName: "bin23_",
      blastzoneWidth: 23.6495989672,
      stageLength: 128,
      offStageDistance: 32.4801396525,
      ceilingHeight: 39.2442572830
    },
    {
      name: "mid",
      gameName: "bin3_",
      blastzoneWidth: 51.4391293196,
      stageLength: 130,
      offStageDistance: 42.8337655575,
      ceilingHeight: 99.4190411830
    },
    {
      name: "midlong",
      gameName: "bin34_",
      blastzoneWidth: 90.8449210776,
      stageLength: 132,
      offStageDistance: 65.6976671346,
      ceilingHeight: 44.3715484108
    },
    {
      name: "long",
      gameName: "bin4_",
      blastzoneWidth: 12.4397546685,
      stageLength: 134,
      offStageDistance: 97.7148772800,
      ceilingHeight: 41.0516589198
    },
    {
      name: "longlonger",
      gameName: "bin45_",
      blastzoneWidth: 50.8152186963,
      stageLength: 136,
      offStageDistance: 45.8095165037,
      ceilingHeight: 52.1882727564
    },
    {
      name: "longer",
      gameName: "bin5_",
      blastzoneWidth: 31.1801421486,
      stageLength: 138,
      offStageDistance: 36.4303709685,
      ceilingHeight: 21.1970704264
    },
    {
      name: "longest",
      gameName: "max_",
      blastzoneWidth: 7.1267752554,
      stageLength: 140,
      offStageDistance: 58.1102567456,
      ceilingHeight: 32.9869823497
    }
  ],
  ranges: {
    blastzoneWidth: {
      min: 7.126775255,
      max: 90.84492108,
      range: 83.71814582
    },
    stageLength: {
      min: 120,
      max: 140,
      range: 20
    },
    offStageDistance: {
      min: 28.1803819,
      max: 97.71487728,
      range: 69.53449538
    },
    ceilingHeight: {
      min: 4.833602993,
      max: 99.41904118,
      range: 94.58543819
    }
  }
};

export const OFFSTAGE_EDGE: StageDimensionsSet = {
  dimensions: [
    {
      name: "closest",
      gameName: "min_",
      blastzoneWidth: -1,
      stageLength: -1,
      offStageDistance: 90,
      ceilingHeight: -1
    },
    {
      name: "closer",
      gameName: "bin1_",
      blastzoneWidth: -1,
      stageLength: -1,
      offStageDistance: 91,
      ceilingHeight: -1
    },
    {
      name: "smallersmall",
      gameName: "bin12_",
      blastzoneWidth: -1,
      stageLength: -1,
      offStageDistance: 92,
      ceilingHeight: -1
    },
    {
      name: "small",
      gameName: "bin2_",
      blastzoneWidth: -1,
      stageLength: -1,
      offStageDistance: 93,
      ceilingHeight: -1
    },
    {
      name: "smallmid",
      gameName: "bin23_",
      blastzoneWidth: -1,
      stageLength: -1,
      offStageDistance: 94,
      ceilingHeight: -1
    },
    {
      name: "mid",
      gameName: "bin3_",
      blastzoneWidth: -1,
      stageLength: -1,
      offStageDistance: 95,
      ceilingHeight: -1
    },
    {
      name: "midlarge",
      gameName: "bin34_",
      blastzoneWidth: -1,
      stageLength: -1,
      offStageDistance: 96,
      ceilingHeight: -1
    },
    {
      name: "large",
      gameName: "bin4_",
      blastzoneWidth: -1,
      stageLength: -1,
      offStageDistance: 97,
      ceilingHeight: -1
    },
    {
      name: "largelarger",
      gameName: "bin45_",
      blastzoneWidth: -1,
      stageLength: -1,
      offStageDistance: 98,
      ceilingHeight: -1
    },
    {
      name: "larger",
      gameName: "bin5_",
      blastzoneWidth: -1,
      stageLength: -1,
      offStageDistance: 99,
      ceilingHeight: -1
    },
    {
      name: "largest",
      gameName: "max_",
      blastzoneWidth: -1,
      stageLength: -1,
      offStageDistance: 100,
      ceilingHeight: -1
    }
  ],
  ranges: {
    blastzoneWidth: {
      min: -1,
      max: -1,
      range: -1
    },
    stageLength: {
      min: -1,
      max: -1,
      range: -1
    },
    offStageDistance: {
      min: 90,
      max: 100,
      range: 10
    },
    ceilingHeight: {
      min: -1,
      max: -1,
      range: -1
    }
  }
};

export const CEILING_EDGE: StageDimensionsSet = {
  dimensions: [
    {
      name: "lowest",
      gameName: "min_",
      blastzoneWidth: 73.9159336544,
      stageLength: 3.7384491134,
      offStageDistance: 88.2080418103,
      ceilingHeight: 160
    },
    {
      name: "lower",
      gameName: "bin1_",
      blastzoneWidth: 69.9099946288,
      stageLength: 39.3505691286,
      offStageDistance: 45.0417880543,
      ceilingHeight: 161
    },
    {
      name: "lowerlow",
      gameName: "bin12_",
      blastzoneWidth: 30.6552925003,
      stageLength: 46.6383329266,
      offStageDistance: 57.5485259912,
      ceilingHeight: 165
    },
    {
      name: "low",
      gameName: "bin2_",
      blastzoneWidth: 53.2101473286,
      stageLength: 28.8815794810,
      offStageDistance: 83.0599108069,
      ceilingHeight: 168
    },
    {
      name: "lowmid",
      gameName: "bin23_",
      blastzoneWidth: 66.7646981029,
      stageLength: 74.4063782212,
      offStageDistance: 97.3436494869,
      ceilingHeight: 170
    },
    {
      name: "mid",
      gameName: "bin3_",
      blastzoneWidth: 48.0431162190,
      stageLength: 2.1438086880,
      offStageDistance: 97.7333918851,
      ceilingHeight: 173
    },
    {
      name: "midhigh",
      gameName: "bin34_",
      blastzoneWidth: 55.1696457113,
      stageLength: 32.6818898683,
      offStageDistance: 12.7893670770,
      ceilingHeight: 175
    },
    {
      name: "high",
      gameName: "bin4_",
      blastzoneWidth: 99.0876046717,
      stageLength: 41.3460394992,
      offStageDistance: 57.6824596248,
      ceilingHeight: 176
    },
    {
      name: "highhigher",
      gameName: "bin45_",
      blastzoneWidth: 29.1656116723,
      stageLength: 78.0999328357,
      offStageDistance: 31.3714310928,
      ceilingHeight: 180
    },
    {
      name: "higher",
      gameName: "bin5_",
      blastzoneWidth: 92.1823215411,
      stageLength: 67.7031907540,
      offStageDistance: 90.7571049202,
      ceilingHeight: 184
    },
    {
      name: "highest",
      gameName: "max_",
      blastzoneWidth: 71.3325161942,
      stageLength: 42.6271372485,
      offStageDistance: 75.0547616708,
      ceilingHeight: 185
    }
  ],
  ranges: {
    blastzoneWidth: {
      min: 29.16561167,
      max: 99.08760467,
      range: 69.921993
    },
    stageLength: {
      min: 2.143808688,
      max: 78.09993284,
      range: 75.95612415
    },
    offStageDistance: {
      min: 12.78936708,
      max: 97.73339189,
      range: 84.94402481
    },
    ceilingHeight: {
      min: 160,
      max: 185,
      range: 25
    }
  }
};

export const BLASTZONE_SAME: StageDimensionsSet = {
  dimensions: [
    {
      name: "Same Blastzone 1",
      gameName: "bz_1",
      blastzoneWidth: 12,
      stageLength: 27.6809089258,
      offStageDistance: 88.6446881408,
      ceilingHeight: 35.0959474641
    },
    {
      name: "Same Blastzone 2",
      gameName: "bz_2",
      blastzoneWidth: 12,
      stageLength: 7.0850437231,
      offStageDistance: 98.8804184376,
      ceilingHeight: 57.4418054943
    },
    {
      name: "Same Blastzone 3",
      gameName: "bz_3",
      blastzoneWidth: 12,
      stageLength: 89.9517611790,
      offStageDistance: 35.3291567776,
      ceilingHeight: 64.2494695266
    },
  ],
  ranges: {
    blastzoneWidth: {
      min: 12,
      max: 12,
      range: 0
    },
    stageLength: {
      min: 27.68090893,
      max: 88.64468814,
      range: 60.96377922
    },
    offStageDistance: {
      min: 7.085043723,
      max: 98.88041844,
      range: 91.79537471
    },
    ceilingHeight: {
      min: 35.32915678,
      max: 89.95176118,
      range: 54.6226044
    }
  }
};

export const STAGE_SAME: StageDimensionsSet = {
  dimensions: [
    {
      name: "Same Stage 1",
      gameName: "sl_1",
      blastzoneWidth: 82.5038324458,
      stageLength: 55,
      offStageDistance: 43.4805543375,
      ceilingHeight: 90.2028512286
    },
    {
      name: "Same Stage 2",
      gameName: "sl_2",
      blastzoneWidth: 61.6946239645,
      stageLength: 55,
      offStageDistance: 57.7296569876,
      ceilingHeight: 89.9376221984
    },
    {
      name: "Same Stage 3",
      gameName: "sl_3",
      blastzoneWidth: 12.8212811700,
      stageLength: 55,
      offStageDistance: 2.1687856760,
      ceilingHeight: 83.5353350092
    },
  ],
  ranges: {
    blastzoneWidth: {
      min: 12.82128117,
      max: 82.50383245,
      range: 69.68255128
    },
    stageLength: {
      min: 55,
      max: 55,
      range: 0
    },
    offStageDistance: {
      min: 2.168785676,
      max: 57.72965699,
      range: 55.56087131
    },
    ceilingHeight: {
      min: 83.53533501,
      max: 90.20285123,
      range: 6.667516219
    }
  }
};

export const OFFSTAGE_SAME: StageDimensionsSet = {
  dimensions: [
    {
      name: "Same OffStage 1",
      gameName: "os_1",
      blastzoneWidth: 7.6279488758,
      stageLength: 86.2732758405,
      offStageDistance: 39,
      ceilingHeight: 72.1615741628
    },
    {
      name: "Same OffStage 2",
      gameName: "os_2",
      blastzoneWidth: 25.2526789972,
      stageLength: 51.7460083582,
      offStageDistance: 39,
      ceilingHeight: 24.2052520147
    },
    {
      name: "Same OffStage 3",
      gameName: "os_3",
      blastzoneWidth: 92.6907907967,
      stageLength: 75.3822431555,
      offStageDistance: 39,
      ceilingHeight: 99.0227646615
    },
  ],
  ranges: {
    blastzoneWidth: {
      min: 7.627948876,
      max: 92.6907908,
      range: 85.06284192
    },
    stageLength: {
      min: 51.74600836,
      max: 86.27327584,
      range: 34.52726748
    },
    offStageDistance: {
      min: 39,
      max: 39,
      range: 0
    },
    ceilingHeight: {
      min: 24.20525201,
      max: 99.02276466,
      range: 74.81751265
    }
  }
};

export const CEILING_SAME: StageDimensionsSet = {
  dimensions: [
    {
      name: "Same Ceiling 1",
      gameName: "ch_1",
      blastzoneWidth: 62.7238796335,
      stageLength: 75.8237804774,
      offStageDistance: 61.5550784652,
      ceilingHeight: 25
    },
    {
      name: "Same Ceiling 2",
      gameName: "ch_2",
      blastzoneWidth: 11.5237508663,
      stageLength: 69.1730931300,
      offStageDistance: 7.6497230683,
      ceilingHeight: 25
    },
    {
      name: "Same Ceiling 3",
      gameName: "ch_3",
      blastzoneWidth: 21.8783343131,
      stageLength: 25.7461165323,
      offStageDistance: 3.6960618690,
      ceilingHeight: 25
    },
  ],
  ranges: {
    blastzoneWidth: {
      min: 11.52375087,
      max: 62.72387963,
      range: 51.20012877
    },
    stageLength: {
      min: 25.74611653,
      max: 75.82378048,
      range: 50.07766395
    },
    offStageDistance: {
      min: 3.696061869,
      max: 61.55507847,
      range: 57.8590166
    },
    ceilingHeight: {
      min: 25,
      max: 25,
      range: 0
    }
  }
};
