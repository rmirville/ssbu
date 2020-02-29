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
