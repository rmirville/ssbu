import { BinnedStageDimensions } from '../binned-stage-dimensions.model';
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

export const DIMENSIONS_INCLUDE: string[] = [
  "jack_mementoes_",
  "duckhunt_",
  "end_l_common",
  "plasma_",
  "poke_stadium_",
  "xstadium_",
  "xice_"
];

export const DIMENSIONS_EXCLUDE: { [set: string]: string[] } = {
  inputGameNames: [
    "xvillage",
    "poke_stadium_",
    "mario_castledx_",
    "battle_common",
    "mario_rainbow_",
    "xfzero_",
    "windyhill_",
    "tomodachi_",
    "xmadein_",
    "dk_waterfall_",
    "xstarfox_",
    "plasma_",
    "hyrule64_f",
    "yoshi_cartboard_",
    "wily_",
    "bossstage_final1_",
    "xemblem",
    "mariou_",
    "xstadium_",
    "xcrayon_",
    "village2_"
  ],

  targetGameNames: [
    "end_l_common",
    "wrecking_",
    "jack_mementoes_",
    "poke_tengam_",
    "battlefield_",
    "duckhunt_",
    "battlefield_l_",
    "skyward",
    "xice_",
    "gamer_",
    "kirby_fountain_",
    "zelda_tower",
    "64jungle_",
    "kalos_",
    "umbra_f",
    "pupupuland64_f",
    "pictchat_",
    "yoshi_story_",
    "colloseum_",
    "xmansion_"
  ]
};

export const DIMENSIONS_UNKNOWN: {inputGameNames: string[], unknownGameNames: string[]} = {
  inputGameNames: [
    "colloseum_",
    "u6VJSjkjo7",
    "xmansion_",
    "A5hwlOzj9p",
    "kEQlhSu3gC",
    "skyward",
    "xstadium_"
  ],
  unknownGameNames: [
    "u6VJSjkjo7",
    "A5hwlOzj9p",
    "kEQlhSu3gC",
  ]
};

export const DIMENSIONS_SIZE: {inputGameNames: string[], expectedSize: number} = {
  inputGameNames: [
    "bossstage_final1_",
    "skyward",
    "wily_",
    "windyhill_",
    "umbra_f",
    "poke_stadium_",
    "xstadium_",
    "xstarfox_",
    "plasma_",
    "hyrule64_f",
    "yoshi_cartboard_"
  ],
  expectedSize: 11
};

export const DIMENSIONS_BIN_SIZE: string[] = [
  "yoshi_cartboard_",
  "kirby_fountain_",
  "yoshi_story_",
  "mario_rainbow_",
  "pictchat_",
  "village2_",
  "xstarfox_",
  "dk_waterfall_",
  "pupupuland64_f",
  "poke_stadium_",
  "poke_tengam_",
  "plasma_",
  "wily_",
  "64jungle_",
  "skyward",
  "kalos_",
  "xcrayon_",
  "battlefield_",
  "gamer_",
  "jack_mementoes_",
  "xemblem",
  "mariou_",
  "bossstage_final1_",
  "tomodachi_",
  "xvillage",
  "battlefield_l_",
  "xfzero_",
  "end_l_common",
  "wrecking_",
  "battle_common",
  "windyhill_",
  "colloseum_",
  "xstadium_",
  "hyrule64_f",
  "mario_castledx_",
  "duckhunt_"
];

export const DIMENSIONS_VALUES: string[] = [
  "skyward",
  "xcrayon_",
  "xemblem",
  "xfzero_",
  "hyrule64_f",
  "kirby_fountain_",
  "xmansion_",
  "mariou_",
  "battle_common",
  "mario_rainbow_",
  "poke_tengam_",
  "plasma_",
  "wrecking_",
  "gamer_",
  "jack_mementoes_",
  "64jungle_",
  "kalos_",
  "yoshi_story_",
  "village2_",
  "xstadium_",
  "end_l_common",
  "battlefield_l_",
  "xvillage",
  "tomodachi_",
  "pictchat_",
  "zelda_tower",
];

export const DIMENSIONS_BLASTZONE_BINS: {
  inputStages: string[],
  expectedBins: { [gameName: string]: number }
  } = {
  inputStages: [
    "xfzero_",
    "battlefield_l_",
    "gamer_",
    "xstadium_",
    "battle_common",
    "dk_waterfall_",
    "wrecking_",
    "wily_",
    "mariou_",
    "xmansion_",
    "tomodachi_",
    "poke_stadium_",
    "mario_castledx_"
  ],
  expectedBins: {
    "xfzero_": 2,
    "battlefield_l_": 5,
    "gamer_": 2,
    "xstadium_": 3,
    "battle_common": 3,
    "dk_waterfall_": 1,
    "wrecking_": 3,
    "wily_": 3,
    "mariou_": 3,
    "xmansion_": 3,
    "tomodachi_": 2,
    "poke_stadium_": 3,
    "mario_castledx_": 5
  }
};

export const DIMENSIONS_BLASTZONE_BINS_EDGES: { inputStages: string[], expectedBins: { [gameName: string]: number } } = {
  inputStages: [
    "min_",
    "bin1_",
    "bin12_",
    "bin2_",
    "bin23_",
    "bin3_",
    "bin34_",
    "bin4_",
    "bin45_",
    "bin5_",
    "max_",
  ],
  expectedBins: {
    "min_": 1,
    "bin1_": 1,
    "bin12_": 2,
    "bin2_": 2,
    "bin23_": 3,
    "bin3_": 3,
    "bin34_": 3,
    "bin4_": 4,
    "bin45_": 4,
    "bin5_": 5,
    "max_": 5,
  }
};

export const DIMENSIONS_BLASTZONE_MAX_POSITIVE: {inputStages: string[], targetGameName: string} = {
  inputStages: [
    "tomodachi_",
    "xmansion_",
    "kalos_",
    "xice_",
    "wily_",
    "hyrule64_f",
    "battlefield_",
    "xmadein_",
    "skyward",
    "64jungle_"
  ],
  targetGameName: "hyrule64_f"
};

export const DIMENSIONS_BLASTZONE_MAX_NEGATIVE: {inputStages: string[], targetGameNames: string[]} = {
  inputStages: [
    "xice_",
    "duckhunt_",
    "xmadein_",
    "zelda_tower",
    "jack_mementoes_",
    "xcrayon_",
    "mario_rainbow_",
    "umbra_f",
    "battlefield_"
  ],
  targetGameNames: [
    "xice_",
    "duckhunt_",
    "xmadein_",
    "jack_mementoes_",
    "xcrayon_",
    "mario_rainbow_",
    "umbra_f",
    "battlefield_"
  ]
};

export const DIMENSIONS_BLASTZONE_MIN_POSITIVE: {inputStages: string[], targetGameName: string} = {
  inputStages: [
    "xstarfox_",
    "xfzero_",
    "kirby_fountain_",
    "pupupuland64_f",
    "mario_castledx_",
    "mario_rainbow_",
    "pictchat_",
    "poke_stadium_",
    "poke_tengam_",
    "windyhill_"
  ],
  targetGameName: "windyhill_"
};

export const DIMENSIONS_BLASTZONE_MIN_NEGATIVE: {inputStages: string[], targetGameNames: string[]} = {
  inputStages: [
    "64jungle_",
    "xice_",
    "xstadium_",
    "end_l_common",
    "xemblem",
    "skyward",
    "kalos_",
    "mario_castledx_"
  ],
  targetGameNames: [
    "64jungle_",
    "xice_",
    "xstadium_",
    "end_l_common",
    "skyward",
    "kalos_",
    "mario_castledx_"
  ]
};

export const DIMENSIONS_BLASTZONE_MINMAX: string[] = ["village2_"];

export const DIMENSIONS_BLASTZONE_SAME: string[] = [
  "bz_1",
  "bz_2",
  "bz_3",
];

export const DIMENSIONS_STAGE_BINS: {inputStages: string[], expectedBins: {[gameName: string]: number}} = {
  inputStages: [
    "wily_",
    "mariou_",
    "xstadium_",
    "xmadein_",
    "pupupuland64_f",
    "xvillage",
    "xstarfox_",
    "colloseum_",
    "battle_common",
    "yoshi_story_",
    "village2_",
    "hyrule64_f",
    "gamer_",
    "xmansion_",
    "xfzero_",
    "mario_castledx_",
    "plasma_",
    "battlefield_",
    "poke_stadium_",
    "bossstage_final1_",
    "poke_tengam_",
    "mario_rainbow_",
    "dk_waterfall_",
    "end_l_common",
    "yoshi_cartboard_",
    "kirby_fountain_"
  ],
  expectedBins: {
    "wily_": 3,
    "mariou_": 3,
    "xstadium_": 4,
    "xmadein_": 2,
    "pupupuland64_f": 3,
    "xvillage": 3,
    "xstarfox_": 3,
    "colloseum_": 4,
    "battle_common": 3,
    "yoshi_story_": 1,
    "village2_": 3,
    "hyrule64_f": 5,
    "gamer_": 3,
    "xmansion_": 4,
    "xfzero_": 3,
    "mario_castledx_": 4,
    "plasma_": 3,
    "battlefield_": 3,
    "poke_stadium_": 3,
    "bossstage_final1_": 3,
    "poke_tengam_": 3,
    "mario_rainbow_": 4,
    "dk_waterfall_": 2,
    "end_l_common": 4,
    "yoshi_cartboard_": 3,
    "kirby_fountain_": 3
  }
};

export const DIMENSIONS_STAGE_BINS_EDGES: { inputStages: string[], expectedBins: { [gameName: string]: number } } = {
  inputStages: [
    "min_",
    "bin1_",
    "bin12_",
    "bin2_",
    "bin23_",
    "bin3_",
    "bin34_",
    "bin4_",
    "bin45_",
    "bin5_",
    "max_",
  ],
  expectedBins: {
    "min_": 1,
    "bin1_": 1,
    "bin12_": 2,
    "bin2_": 2,
    "bin23_": 3,
    "bin3_": 3,
    "bin34_": 3,
    "bin4_": 4,
    "bin45_": 4,
    "bin5_": 5,
    "max_": 5,
  }
};

export const DIMENSIONS_STAGE_MAX_POSITIVE: {inputStages: string[], targetGameName: string} = {
  inputStages: [
    "dk_waterfall_",
    "colloseum_",
    "duckhunt_",
    "kirby_fountain_",
    "battlefield_l_",
    "end_l_common",
    "xmansion_",
    "yoshi_cartboard_",
    "mario_castledx_",
    "kalos_",
  ],
  targetGameName: "battlefield_l_"
};

export const DIMENSIONS_STAGE_MAX_NEGATIVE: {inputStages: string[], targetGameNames: string[]} = {
  inputStages: [
    "battlefield_",
    "xfzero_",
    "battlefield_l_",
    "xstadium_",
    "wily_",
  ],
  targetGameNames: [
    "battlefield_",
    "xfzero_",
    "xstadium_",
    "wily_",
  ]
};

export const DIMENSIONS_STAGE_MIN_POSITIVE: { inputStages: string[], targetGameName: string } = {
  inputStages: [
    "xmansion_",
    "jack_mementoes_",
    "yoshi_cartboard_",
    "64jungle_",
    "kalos_",
    "xmadein_",
    "bossstage_final1_",
    "skyward",
  ],
  targetGameName: "xmadein_"
};

export const DIMENSIONS_STAGE_MIN_NEGATIVE: { inputStages: string[], targetGameNames: string[] } = {
  inputStages: [
    "plasma_",
    "mario_castledx_",
    "poke_stadium_",
    "hyrule64_f",
    "umbra_f",
    "mariou_",
  ],
  targetGameNames: [
    "plasma_",
    "mario_castledx_",
    "poke_stadium_",
    "hyrule64_f",
    "mariou_",
  ]
};

export const DIMENSIONS_STAGE_MINMAX: string[] = ["zelda_tower"];

export const DIMENSIONS_STAGE_SAME: string[] = [
  "sl_1",
  "sl_2",
  "sl_3",
];

export const DIMENSIONS_OFFSTAGE_BINS: { inputStages: string[], expectedBins: { [gameName: string]: number } } = {
  inputStages: [
    "tomodachi_",
    "pictchat_",
    "colloseum_",
    "yoshi_cartboard_",
    "xstadium_",
    "xvillage",
    "xcrayon_",
    "battlefield_l_",
    "skyward",
    "umbra_f",
    "gamer_",
    "battlefield_",
    "wily_",
    "xfzero_",
    "bossstage_final1_",
    "kirby_fountain_",
    "dk_waterfall_",
    "battle_common"
  ],
  expectedBins: {
    "tomodachi_": 3,
    "pictchat_": 1,
    "colloseum_": 4,
    "yoshi_cartboard_": 4,
    "xstadium_": 3,
    "xvillage": 4,
    "xcrayon_": 2,
    "battlefield_l_": 5,
    "skyward": 1,
    "umbra_f": 5,
    "gamer_": 1,
    "battlefield_": 4,
    "wily_": 4,
    "xfzero_": 5,
    "bossstage_final1_": 4,
    "kirby_fountain_": 4,
    "dk_waterfall_": 3,
    "battle_common": 4
  }
};

export const DIMENSIONS_OFFSTAGE_BINS_EDGES: { inputStages: string[], expectedBins: { [gameName: string]: number } } = {
  inputStages: [
    "min_",
    "bin1_",
    "bin12_",
    "bin2_",
    "bin23_",
    "bin3_",
    "bin34_",
    "bin4_",
    "bin45_",
    "bin5_",
    "max_",
  ],
  expectedBins: {
    "min_": 1,
    "bin1_": 1,
    "bin12_": 2,
    "bin2_": 2,
    "bin23_": 3,
    "bin3_": 3,
    "bin34_": 3,
    "bin4_": 4,
    "bin45_": 4,
    "bin5_": 5,
    "max_": 5,
  }
};

export const DIMENSIONS_OFFSTAGE_MAX_POSITIVE: { inputStages: string[], targetGameName: string } = {
  inputStages: [
    "xice_",
    "pupupuland64_f",
    "xemblem",
    "jack_mementoes_",
    "kalos_",
    "plasma_",
    "poke_tengam_",
    "xmadein_",
    "xstarfox_",
    "hyrule64_f",
  ],
  targetGameName: "hyrule64_f"
};

export const DIMENSIONS_OFFSTAGE_MAX_NEGATIVE: { inputStages: string[], targetGameNames: string[] } = {
  inputStages: [
    "64jungle_",
    "mario_castledx_",
    "village2_",
    "mariou_",
    "mario_rainbow_",
  ],
  targetGameNames: [
    "64jungle_",
    "mario_castledx_",
    "village2_",
    "mario_rainbow_",
  ]
};

export const DIMENSIONS_OFFSTAGE_MIN_POSITIVE: { inputStages: string[], targetGameName: string } = {
  inputStages: [
    "end_l_common",
    "wrecking_",
    "duckhunt_",
    "xmansion_",
    "poke_stadium_",
  ],
  targetGameName: "wrecking_"
};

export const DIMENSIONS_OFFSTAGE_MIN_NEGATIVE: { inputStages: string[], targetGameNames: string[] } = {
  inputStages: [
    "yoshi_story_",
    "poke_tengam_",
    "kirby_fountain_",
    "64jungle_",
    "mario_rainbow_",
  ],
  targetGameNames: [
    "yoshi_story_",
    "poke_tengam_",
    "kirby_fountain_",
    "64jungle_",
  ]
};

export const DIMENSIONS_OFFSTAGE_MINMAX: string[] = ["xstadium_"];

export const DIMENSIONS_OFFSTAGE_SAME: string[] = [
  "os_1",
  "os_2",
  "os_3",
];

export const DIMENSIONS_CEILING_BINS: { inputStages: string[], expectedBins: { [gameName: string]: number } } = {
  inputStages: [
    "zelda_tower",
    "xice_",
    "xmadein_",
    "wrecking_",
    "xemblem",
    "jack_mementoes_",
    "battle_common",
    "plasma_",
    "battlefield_l_",
    "mariou_",
    "mario_castledx_",
    "64jungle_",
    "xcrayon_",
    "colloseum_",
    "mario_rainbow_",
    "hyrule64_f",
    "dk_waterfall_",
    "xfzero_",
    "kirby_fountain_",
    "tomodachi_",
    "kalos_",
    "wily_",
  ],
  expectedBins: {
    "zelda_tower": 2,
    "xice_": 3,
    "xmadein_": 3,
    "wrecking_": 4,
    "xemblem": 2,
    "jack_mementoes_": 2,
    "battle_common": 2,
    "plasma_": 2,
    "battlefield_l_": 3,
    "mariou_": 2,
    "mario_castledx_": 3,
    "64jungle_": 2,
    "xcrayon_": 2,
    "colloseum_": 2,
    "mario_rainbow_": 1,
    "hyrule64_f": 5,
    "dk_waterfall_": 2,
    "xfzero_": 1,
    "kirby_fountain_": 2,
    "tomodachi_": 3,
    "kalos_": 2,
    "wily_": 3,
  }
};

export const DIMENSIONS_CEILING_BINS_EDGES: { inputStages: string[], expectedBins: { [gameName: string]: number } } = {
  inputStages: [
    "min_",
    "bin1_",
    "bin12_",
    "bin2_",
    "bin23_",
    "bin3_",
    "bin34_",
    "bin4_",
    "bin45_",
    "bin5_",
    "max_",
  ],
  expectedBins: {
    "min_": 1,
    "bin1_": 1,
    "bin12_": 2,
    "bin2_": 2,
    "bin23_": 3,
    "bin3_": 3,
    "bin34_": 3,
    "bin4_": 4,
    "bin45_": 4,
    "bin5_": 5,
    "max_": 5,
  }
};

export const DIMENSIONS_CEILING_MAX_POSITIVE: { inputStages: string[], targetGameName: string } = {
  inputStages: [
    "pupupuland64_f",
    "battlefield_",
    "yoshi_cartboard_",
    "xvillage",
    "village2_",
    "poke_stadium_",
    "duckhunt_",
    "end_l_common",
    "bossstage_final1_",
  ],
  targetGameName: "village2_"
};

export const DIMENSIONS_CEILING_MAX_NEGATIVE: { inputStages: string[], targetGameNames: string[] } = {
  inputStages: [
    "umbra_f",
    "pictchat_",
    "poke_tengam_",
    "xmansion_",
    "xstarfox_",
    "xstadium_",
    "gamer_",
  ],
  targetGameNames: [
    "umbra_f",
    "pictchat_",
    "xmansion_",
    "xstarfox_",
    "xstadium_",
    "gamer_",
  ]
};

export const DIMENSIONS_CEILING_MIN_POSITIVE: { inputStages: string[], targetGameName: string } = {
  inputStages: [
    "xvillage",
    "wrecking_",
    "windyhill_",
    "poke_stadium_",
    "village2_",
    "tomodachi_",
    "xice_",
    "skyward",
    "jack_mementoes_",
  ],
  targetGameName: "poke_stadium_"
};

export const DIMENSIONS_CEILING_MIN_NEGATIVE: { inputStages: string[], targetGameNames: string[] } = {
  inputStages: [
    "yoshi_story_",
    "xemblem",
    "xmadein_",
    "battle_common",
    "battlefield_",
    "dk_waterfall_",
    "kalos_",
    "wrecking_",
    "gamer_",
    "poke_tengam_",
  ],
  targetGameNames: [
    "yoshi_story_",
    "xmadein_",
    "battle_common",
    "battlefield_",
    "dk_waterfall_",
    "kalos_",
    "wrecking_",
    "gamer_",
    "poke_tengam_",
  ]
};

export const DIMENSIONS_CEILING_MINMAX: string[] = ["end_l_common",];

export const DIMENSIONS_CEILING_SAME: string[] = [
  "ch_1",
  "ch_2",
  "ch_3",
];

export const RANGES_BLASTZONE_MAX: {inputGameNames: string[], expectedMax: number} = {
  inputGameNames: [
    "xcrayon_",
    "xfzero_",
    "battlefield_l_",
    "bossstage_final1_",
    "village2_",
  ],
  expectedMax: 290.332306
};

export const RANGES_STAGE_MAX: { inputGameNames: string[], expectedMax: number } = {
  inputGameNames: [
    "end_l_common",
    "tomodachi_",
    "yoshi_story_",
    "battle_common",
    "hyrule64_f",
    "kalos_",
    "pictchat_",
    "poke_tengam_",
    "umbra_f",
  ],
  expectedMax: 151.129
};

export const RANGES_OFFSTAGE_MAX: { inputGameNames: string[], expectedMax: number } = {
  inputGameNames: [
    "64jungle_",
    "xice_",
    "xstarfox_",
    "skyward",
    "mario_castledx_",
    "dk_waterfall_",
    "pupupuland64_f",
    "kirby_fountain_",
    "wily_",
    "xvillage",
    "xmadein_",
    "mario_rainbow_",
    "gamer_",
    "colloseum_",
  ],
  expectedMax: 172.7263
};

export const RANGES_CEILING_MAX: { inputGameNames: string[], expectedMax: number } = {
  inputGameNames: [
    "jack_mementoes_",
    "mariou_",
    "battlefield_",
    "poke_stadium_",
    "xemblem",
    "xstadium_",
    "yoshi_cartboard_",
    "wrecking_",
    "zelda_tower",
    "duckhunt_",
    "xmansion_",
    "plasma_",
    "windyhill_",
  ],
  expectedMax: 243.8
};

export const RANGES_BLASTZONE_MAX_ONE: { inputGameNames: string[], expectedMax: number } = {
  inputGameNames: ["xvillage"],
  expectedMax: 229.5
};

export const RANGES_STAGE_MAX_ONE: { inputGameNames: string[], expectedMax: number } = {
  inputGameNames: ["pictchat_"],
  expectedMax: 80
};

export const RANGES_OFFSTAGE_MAX_ONE: { inputGameNames: string[], expectedMax: number } = {
  inputGameNames: ["end_l_common"],
  expectedMax: 160.0080225
};

export const RANGES_CEILING_MAX_ONE: { inputGameNames: string[], expectedMax: number } = {
  inputGameNames: ["kirby_fountain_"],
  expectedMax: 191.1096737
};


export const RANGES_BLASTZONE_MIN: { inputGameNames: string[], expectedMin: number } = {
  inputGameNames: [
    "plasma_",
    "end_l_common",
    "xmadein_",
    "xvillage",
    "gamer_",
    "wily_",
    "yoshi_cartboard_"
  ],
  expectedMin: 180
};

export const RANGES_STAGE_MIN: { inputGameNames: string[], expectedMin: number } = {
  inputGameNames: [
    "mariou_",
    "skyward",
    "windyhill_",
    "xfzero_",
    "xmansion_",
    "battlefield_",
    "xmadein_",
    "zelda_tower",
    "duckhunt_",
    "pupupuland64_f",
    "bossstage_final1_",
    "poke_stadium_",
    "wily_",
    "village2_",
    "tomodachi_",
    "pictchat_",
    "poke_tengam_",
    "battlefield_l_",
    "jack_mementoes_",
    "colloseum_",
    "mario_castledx_",
    "64jungle_",
    "xstadium_",
    "yoshi_cartboard_",
    "gamer_",
    "wrecking_",
    "dk_waterfall_",
    "plasma_"
  ],
  expectedMin: 45.53241
};

export const RANGES_OFFSTAGE_MIN: { inputGameNames: string[], expectedMin: number } = {
  inputGameNames: [
    "xcrayon_",
    "umbra_f",
    "mariou_",
    "wrecking_",
    "xfzero_",
    "hyrule64_f",
    "dk_waterfall_",
    "colloseum_",
    "poke_tengam_",
    "kalos_",
    "xice_",
    "village2_"
  ],
  expectedMin: 147.5
};

export const RANGES_CEILING_MIN: { inputGameNames: string[], expectedMin: number } = {
  inputGameNames: [
    "village2_",
    "jack_mementoes_",
    "battlefield_",
    "64jungle_",
    "xstarfox_",
    "poke_tengam_",
    "xice_",
    "xmansion_",
    "zelda_tower",
    "kalos_",
    "dk_waterfall_",
    "duckhunt_",
    "xemblem",
    "xfzero_",
    "hyrule64_f",
    "gamer_",
    "yoshi_story_",
    "xvillage",
    "kirby_fountain_",
    "colloseum_",
    "bossstage_final1_",
    "end_l_common"
  ],
  expectedMin: 159.9231
};

export const RANGES_BLASTZONE_MIN_ONE: { inputGameNames: string[], expectedMin: number } = {
  inputGameNames: ["mario_castledx_"],
  expectedMin: 275
};

export const RANGES_STAGE_MIN_ONE: { inputGameNames: string[], expectedMin: number } = {
  inputGameNames: ["poke_stadium_"],
  expectedMin: 88.14794765
};

export const RANGES_OFFSTAGE_MIN_ONE: { inputGameNames: string[], expectedMin: number } = {
  inputGameNames: ["xcrayon_"],
  expectedMin: 150.0564621
};

export const RANGES_CEILING_MIN_ONE: { inputGameNames: string[], expectedMin: number } = {
  inputGameNames: ["pupupuland64_f"],
  expectedMin: 192.1027776
};

export const RANGES_BLASTZONE_RANGE: { inputGameNames: string[], expectedRange: number } = {
  inputGameNames: [
    "tomodachi_",
    "gamer_",
    "pupupuland64_f",
    "xcrayon_",
    "colloseum_",
    "xstarfox_",
    "duckhunt_",
    "bossstage_final1_",
    "wily_",
    "xmadein_",
    "poke_stadium_",
    "windyhill_",
    "zelda_tower",
    "hyrule64_f",
    "poke_tengam_",
    "battlefield_l_",
    "mario_castledx_",
    "xemblem",
    "yoshi_cartboard_",
    "plasma_",
    "xfzero_",
    "mariou_",
    "xmansion_",
    "skyward",
    "end_l_common"
  ],
  expectedRange: 145.055213
};

export const RANGES_STAGE_RANGE: { inputGameNames: string[], expectedRange: number } = {
  inputGameNames: [
    "xice_",
    "mario_rainbow_",
    "village2_",
    "kalos_",
    "mariou_",
    "64jungle_",
    "end_l_common",
    "battlefield_",
    "jack_mementoes_",
    "wrecking_",
    "xvillage",
    "xcrayon_",
    "duckhunt_",
    "pupupuland64_f",
    "mario_castledx_",
    "xmansion_",
    "pictchat_",
    "gamer_",
    "poke_stadium_",
    "poke_tengam_",
    "xstarfox_",
    "dk_waterfall_",
    "zelda_tower",
    "xemblem"
  ],
  expectedRange: 75.5424305
};

export const RANGES_OFFSTAGE_RANGE: { inputGameNames: string[], expectedRange: number } = {
  inputGameNames: [
    "pupupuland64_f",
    "mariou_",
    "pictchat_",
    "jack_mementoes_",
    "kalos_",
    "umbra_f",
    "end_l_common",
    "hyrule64_f",
    "gamer_",
    "xemblem",
    "duckhunt_",
    "yoshi_cartboard_",
    "battlefield_",
    "mario_rainbow_",
    "64jungle_",
    "xmadein_",
    "zelda_tower",
    "xice_",
    "bossstage_final1_",
    "xstarfox_",
    "plasma_",
    "yoshi_story_",
    "dk_waterfall_",
    "wily_",
    "village2_",
    "windyhill_",
  ],
  expectedRange: 183.3329693
};

export const RANGES_CEILING_RANGE: { inputGameNames: string[], expectedRange: number } = {
  inputGameNames: [
    "umbra_f",
    "wily_",
    "poke_tengam_",
    "xvillage",
    "dk_waterfall_",
    "wrecking_",
    "jack_mementoes_",
    "xmansion_",
    "xstadium_",
    "colloseum_",
    "duckhunt_",
    "plasma_",
    "skyward",
    "kalos_",
    "kirby_fountain_",
    "xcrayon_",
    "mariou_",
    "xemblem",
    "hyrule64_f",
    "end_l_common",
    "xmadein_",
    "bossstage_final1_",
    "xstarfox_",
    "pictchat_",
    "64jungle_",
    "mario_rainbow_",
    "battle_common",
    "zelda_tower",
  ],
  expectedRange: 138.0885841
};

export const RANGES_BLASTZONE_RANGE_ONE: string[] = ["pupupuland64_f"];

export const RANGES_STAGE_RANGE_ONE: string[] = ["tomodachi_"];

export const RANGES_OFFSTAGE_RANGE_ONE: string[] = ["windyhill_"];

export const RANGES_CEILING_RANGE_ONE: string[] = ["battlefield_l_"];

export const INVALID_NO_DB: string[] = [
  "gamer_",
  "battlefield_",
  "xmansion_",
  "xstadium_",
  "dk_waterfall_",
  "kirby_fountain_",
  "hyrule64_f"
];

export const INVALID_UNKNOWN_GAMENAMES: string[] = [
  "nPcZgZXShW",
  "1GXmKy2Qii",
  "WT93arlW8e",
  "a82YwRgo2O",
  "HBy6bokM0C",
  "m994stwtGs",
  "vSskwA0AVo",
  "rEGT06B6Qc",
  "TJ1BCWPLQJ",
  "dYj8r2Hxkc"
];

///
export const INTEGER_VALUES: { inputGameNames: string[], expectedSet: BinnedStageDimensionsSet } = {
  inputGameNames: [
    "battlefield_l_",
    "kalos_",
    "xmadein_",
    "xvillage",
    "mario_rainbow_"
  ],
  expectedSet: {
    bins: 5,
    dimensions: [
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
          bin:   4,
          min:   false,
          max:   false
        }
      },
      {
        name: "Smashville",
        gameName: "xvillage",
        blastzoneWidth: {
          value: 230,
          bin:   3,
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
          bin:   5,
          min:   false,
          max:   false
        },
        ceilingHeight: {
          value: 190,
          bin:   4,
          min:   false,
          max:   false
        }
      },
      {
        name: "Rainbow Cruise",
        gameName: "mario_rainbow_",
        blastzoneWidth: {
          value: 228,
          bin:   3,
          min:   false,
          max:   false
        },
        stageLength: {
          value: 96,
          bin:   3,
          min:   false,
          max:   false
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
    ],
    ranges: {
      blastzoneWidth: {
        min:   180,
        max:   290,
        range: 110
      },
      stageLength: {
        min:   58,
        max:   122,
        range: 64
      },
      offStageDistance: {
        min:   122,
        max:   168,
        range: 46
      },
      ceilingHeight: {
        min:   139,
        max:   216,
        range: 77
      }
    }
  }
};

export const INTEGER_MIN: { inputGameNames: string[], expectedDimensions: BinnedStageDimensions[] } = {
  inputGameNames: [
    "duckhunt_",
    "end_l_common",
    "xice_",
    "zelda_tower",
    "wily_"
  ],
  expectedDimensions: [
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
        max:   true
      },
      stageLength: {
        value: 120,
        bin:   5,
        min:   false,
        max:   true
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
        bin:   1,
        min:   true,
        max:   false
      },
      offStageDistance: {
        value: 160,
        bin:   2,
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
      name: "Great Plateau Tower",
      gameName: "zelda_tower",
      blastzoneWidth: {
        value: 267,
        bin:   4,
        min:   false,
        max:   false
      },
      stageLength: {
        value: 91,
        bin:   3,
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
        bin:   2,
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
  ]
};

export const INTEGER_MAX: { inputGameNames: string[], expectedDimensions: BinnedStageDimensions[] } = {
  inputGameNames: [
    "colloseum_",
    "xmansion_",
    "gamer_",
    "mario_rainbow_",
    "skyward",
    "xmadein_"
  ],
  expectedDimensions: [
    {
      name: "Arena Ferox",
      gameName: "colloseum_",
      blastzoneWidth: {
        value: 253,
        bin:   5,
        min:   false,
        max:   false
      },
      stageLength: {
        value: 93,
        bin:   5,
        min:   false,
        max:   false
      },
      offStageDistance: {
        value: 160,
        bin:   5,
        min:   false,
        max:   true
      },
      ceilingHeight: {
        value: 190,
        bin:   5,
        min:   false,
        max:   false
      }
    },
    {
      name: "Luigi's Mansion",
      gameName: "xmansion_",
      blastzoneWidth: {
        value: 255,
        bin:   5,
        min:   false,
        max:   true
      },
      stageLength: {
        value: 95,
        bin:   5,
        min:   false,
        max:   false
      },
      offStageDistance: {
        value: 160,
        bin:   5,
        min:   false,
        max:   true
      },
      ceilingHeight: {
        value: 200,
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
        bin:   3,
        min:   false,
        max:   false
      },
      ceilingHeight: {
        value: 192,
        bin:   5,
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
      name: "Skyloft",
      gameName: "skyward",
      blastzoneWidth: {
        value: 230,
        bin:   4,
        min:   false,
        max:   false
      },
      stageLength: {
        value: 86,
        bin:   4,
        min:   false,
        max:   false
      },
      offStageDistance: {
        value: 144,
        bin:   3,
        min:   false,
        max:   false
      },
      ceilingHeight: {
        value: 192,
        bin:   5,
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
        bin:   5,
        min:   false,
        max:   false
      }
    }
  ],
};

export const INTEGER_MINMAX: { inputGameNames: string[], expectedDimensions: BinnedStageDimensions[] } = {
  inputGameNames: [
    "battlefield_",
    "bossstage_final1_"
  ],
  expectedDimensions: [
    {
      name: "Battlefield",
      gameName: "battlefield_",
      blastzoneWidth: {
        value: 240,
        bin:   0,
        min:   true,
        max:   true
      },
      stageLength: {
        value: 80,
        bin:   0,
        min:   true,
        max:   true
      },
      offStageDistance: {
        value: 160,
        bin:   0,
        min:   true,
        max:   true
      },
      ceilingHeight: {
        value: 192,
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
        bin:   0,
        min:   true,
        max:   true
      },
      stageLength: {
        value: 80,
        bin:   0,
        min:   true,
        max:   true
      },
      offStageDistance: {
        value: 160,
        bin:   0,
        min:   true,
        max:   true
      },
      ceilingHeight: {
        value: 180,
        bin:   1,
        min:   true,
        max:   false
      }
    },
  ]
};
/*
  inputGameNames: [

  ],
  expectedSet: {
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
  }
*/