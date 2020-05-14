import { BinnedStageDimensions } from '../binned-stage-dimensions.model';
import { BinnedStageDimensionsSet } from '../binned-stage-dimensions-set.model';
import { StageMiscInfo } from '../stage-misc-info.model';
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

export const DIMENSIONS_INCLUDE: StageMiscInfo[] = [
  { gameName: "jack_mementoes_" },
  { gameName: "duckhunt_" },
  { gameName: "end_l_common" },
  { gameName: "plasma_" },
  { gameName: "poke_stadium_" },
  { gameName: "xstadium_" },
  { gameName: "xice_" }
];

export const DIMENSIONS_EXCLUDE: { inputStages: StageMiscInfo[], targetGameNames: string[] } = {
  inputStages: [
    { gameName: "xvillage" },
    { gameName: "poke_stadium_" },
    { gameName: "mario_castledx_" },
    { gameName: "battle_common" },
    { gameName: "mario_rainbow_" },
    { gameName: "xfzero_" },
    { gameName: "windyhill_" },
    { gameName: "tomodachi_" },
    { gameName: "xmadein_" },
    { gameName: "dk_waterfall_" },
    { gameName: "xstarfox_" },
    { gameName: "plasma_" },
    { gameName: "hyrule64_f" },
    { gameName: "yoshi_cartboard_" },
    { gameName: "wily_" },
    { gameName: "bossstage_final1_" },
    { gameName: "xemblem" },
    { gameName: "mariou_" },
    { gameName: "xstadium_" },
    { gameName: "xcrayon_" },
    { gameName: "village2_" },
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

export const DIMENSIONS_UNKNOWN: {inputStages: StageMiscInfo[], unknownGameNames: string[]} = {
  inputStages: [
    { gameName: "colloseum_" },
    { gameName: "u6VJSjkjo7" },
    { gameName: "xmansion_" },
    { gameName: "A5hwlOzj9p" },
    { gameName: "kEQlhSu3gC" },
    { gameName: "skyward" },
    { gameName: "xstadium_" }
  ],
  unknownGameNames: [
    "u6VJSjkjo7",
    "A5hwlOzj9p",
    "kEQlhSu3gC",
  ]
};

export const DIMENSIONS_SIZE: {inputStages: StageMiscInfo[], expectedSize: number} = {
  inputStages: [
    { gameName: "bossstage_final1_" },
    { gameName: "skyward" },
    { gameName: "wily_" },
    { gameName: "windyhill_" },
    { gameName: "umbra_f" },
    { gameName: "poke_stadium_" },
    { gameName: "xstadium_" },
    { gameName: "xstarfox_" },
    { gameName: "plasma_" },
    { gameName: "hyrule64_f" },
    { gameName: "yoshi_cartboard_" }
  ],
  expectedSize: 11
};

export const DIMENSIONS_BIN_SIZE: StageMiscInfo[] = [
  { gameName: "yoshi_cartboard_" },
  { gameName: "kirby_fountain_" },
  { gameName: "yoshi_story_" },
  { gameName: "mario_rainbow_" },
  { gameName: "pictchat_" },
  { gameName: "village2_" },
  { gameName: "xstarfox_" },
  { gameName: "dk_waterfall_" },
  { gameName: "pupupuland64_f" },
  { gameName: "poke_stadium_" },
  { gameName: "poke_tengam_" },
  { gameName: "plasma_" },
  { gameName: "wily_" },
  { gameName: "64jungle_" },
  { gameName: "skyward" },
  { gameName: "kalos_" },
  { gameName: "xcrayon_" },
  { gameName: "battlefield_" },
  { gameName: "gamer_" },
  { gameName: "jack_mementoes_" },
  { gameName: "xemblem" },
  { gameName: "mariou_" },
  { gameName: "bossstage_final1_" },
  { gameName: "tomodachi_" },
  { gameName: "xvillage" },
  { gameName: "battlefield_l_" },
  { gameName: "xfzero_" },
  { gameName: "end_l_common" },
  { gameName: "wrecking_" },
  { gameName: "battle_common" },
  { gameName: "windyhill_" },
  { gameName: "colloseum_" },
  { gameName: "xstadium_" },
  { gameName: "hyrule64_f" },
  { gameName: "mario_castledx_" },
  { gameName: "duckhunt_" }
];

export const DIMENSIONS_VALUES: StageMiscInfo[] = [
  { gameName: "skyward" },
  { gameName: "xcrayon_" },
  { gameName: "xemblem" },
  { gameName: "xfzero_" },
  { gameName: "hyrule64_f" },
  { gameName: "kirby_fountain_" },
  { gameName: "xmansion_" },
  { gameName: "mariou_" },
  { gameName: "battle_common" },
  { gameName: "mario_rainbow_" },
  { gameName: "poke_tengam_" },
  { gameName: "plasma_" },
  { gameName: "wrecking_" },
  { gameName: "gamer_" },
  { gameName: "jack_mementoes_" },
  { gameName: "64jungle_" },
  { gameName: "kalos_" },
  { gameName: "yoshi_story_" },
  { gameName: "village2_" },
  { gameName: "xstadium_" },
  { gameName: "end_l_common" },
  { gameName: "battlefield_l_" },
  { gameName: "xvillage" },
  { gameName: "tomodachi_" },
  { gameName: "pictchat_" },
  { gameName: "zelda_tower" }
];

export const DIMENSIONS_BLASTZONE_BINS: {
  inputStages: StageMiscInfo[],
  expectedBins: { [gameName: string]: number }
  } = {
  inputStages: [
    { gameName: "xfzero_" },
    { gameName: "battlefield_l_" },
    { gameName: "gamer_" },
    { gameName: "xstadium_" },
    { gameName: "battle_common" },
    { gameName: "dk_waterfall_" },
    { gameName: "wrecking_" },
    { gameName: "wily_" },
    { gameName: "mariou_" },
    { gameName: "xmansion_" },
    { gameName: "tomodachi_" },
    { gameName: "poke_stadium_" },
    { gameName: "mario_castledx_" }
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

export const DIMENSIONS_BLASTZONE_BINS_EDGES: { inputStages: StageMiscInfo[], expectedBins: { [gameName: string]: number } } = {
  inputStages: [
    { gameName: "min_" },
    { gameName: "bin1_" },
    { gameName: "bin12_" },
    { gameName: "bin2_" },
    { gameName: "bin23_" },
    { gameName: "bin3_" },
    { gameName: "bin34_" },
    { gameName: "bin4_" },
    { gameName: "bin45_" },
    { gameName: "bin5_" },
    { gameName: "max_" },
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

export const DIMENSIONS_BLASTZONE_MAX_POSITIVE: {inputStages: StageMiscInfo[], targetGameName: string} = {
  inputStages: [
    { gameName: "tomodachi_" },
    { gameName: "xmansion_" },
    { gameName: "kalos_" },
    { gameName: "xice_" },
    { gameName: "wily_" },
    { gameName: "hyrule64_f" },
    { gameName: "battlefield_" },
    { gameName: "xmadein_" },
    { gameName: "skyward" },
    { gameName: "64jungle_" },
  ],
  targetGameName: "hyrule64_f"
};

export const DIMENSIONS_BLASTZONE_MAX_NEGATIVE: {inputStages: StageMiscInfo[], targetGameNames: string[]} = {
  inputStages: [
    { gameName: "xice_" },
    { gameName: "duckhunt_" },
    { gameName: "xmadein_" },
    { gameName: "zelda_tower" },
    { gameName: "jack_mementoes_" },
    { gameName: "xcrayon_" },
    { gameName: "mario_rainbow_" },
    { gameName: "umbra_f" },
    { gameName: "battlefield_" },
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

export const DIMENSIONS_BLASTZONE_MIN_POSITIVE: {inputStages: StageMiscInfo[], targetGameName: string} = {
  inputStages: [
    { gameName: "xstarfox_" },
    { gameName: "xfzero_" },
    { gameName: "kirby_fountain_" },
    { gameName: "pupupuland64_f" },
    { gameName: "mario_castledx_" },
    { gameName: "mario_rainbow_" },
    { gameName: "pictchat_" },
    { gameName: "poke_stadium_" },
    { gameName: "poke_tengam_" },
    { gameName: "windyhill_" }
  ],
  targetGameName: "windyhill_"
};

export const DIMENSIONS_BLASTZONE_MIN_NEGATIVE: {inputStages: StageMiscInfo[], targetGameNames: string[]} = {
  inputStages: [
    { gameName: "64jungle_" },
    { gameName: "xice_" },
    { gameName: "xstadium_" },
    { gameName: "end_l_common" },
    { gameName: "xemblem" },
    { gameName: "skyward" },
    { gameName: "kalos_" },
    { gameName: "mario_castledx_" },
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

export const DIMENSIONS_BLASTZONE_MINMAX: StageMiscInfo[] = [{ gameName: "village2_" }];

export const DIMENSIONS_BLASTZONE_SAME: StageMiscInfo[] = [
  { gameName: "bz_1" },
  { gameName: "bz_2" },
  { gameName: "bz_3" },
];

export const DIMENSIONS_STAGE_BINS: {inputStages: StageMiscInfo[], expectedBins: {[gameName: string]: number}} = {
  inputStages: [
    { gameName: "wily_" },
    { gameName: "mariou_" },
    { gameName: "xstadium_" },
    { gameName: "xmadein_" },
    { gameName: "pupupuland64_f" },
    { gameName: "xvillage" },
    { gameName: "xstarfox_" },
    { gameName: "colloseum_" },
    { gameName: "battle_common" },
    { gameName: "yoshi_story_" },
    { gameName: "village2_" },
    { gameName: "hyrule64_f" },
    { gameName: "gamer_" },
    { gameName: "xmansion_" },
    { gameName: "xfzero_" },
    { gameName: "mario_castledx_" },
    { gameName: "plasma_" },
    { gameName: "battlefield_" },
    { gameName: "poke_stadium_" },
    { gameName: "bossstage_final1_" },
    { gameName: "poke_tengam_" },
    { gameName: "mario_rainbow_" },
    { gameName: "dk_waterfall_" },
    { gameName: "end_l_common" },
    { gameName: "yoshi_cartboard_" },
    { gameName: "kirby_fountain_" }
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

export const DIMENSIONS_STAGE_BINS_EDGES: { inputStages: StageMiscInfo[], expectedBins: { [gameName: string]: number } } = {
  inputStages: [
    { gameName: "min_" },
    { gameName: "bin1_" },
    { gameName: "bin12_" },
    { gameName: "bin2_" },
    { gameName: "bin23_" },
    { gameName: "bin3_" },
    { gameName: "bin34_" },
    { gameName: "bin4_" },
    { gameName: "bin45_" },
    { gameName: "bin5_" },
    { gameName: "max_" }
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

export const DIMENSIONS_STAGE_MAX_POSITIVE: {inputStages: StageMiscInfo[], targetGameName: string} = {
  inputStages: [
    { gameName: "dk_waterfall_" },
    { gameName: "colloseum_" },
    { gameName: "duckhunt_" },
    { gameName: "kirby_fountain_" },
    { gameName: "battlefield_l_" },
    { gameName: "end_l_common" },
    { gameName: "xmansion_" },
    { gameName: "yoshi_cartboard_" },
    { gameName: "mario_castledx_" },
    { gameName: "kalos_" },
  ],
  targetGameName: "battlefield_l_"
};

export const DIMENSIONS_STAGE_MAX_NEGATIVE: {inputStages: StageMiscInfo[], targetGameNames: string[]} = {
  inputStages: [
    { gameName: "battlefield_" },
    { gameName: "xfzero_" },
    { gameName: "battlefield_l_" },
    { gameName: "xstadium_" },
    { gameName: "wily_" }
  ],
  targetGameNames: [
    "battlefield_",
    "xfzero_",
    "xstadium_",
    "wily_",
  ]
};

export const DIMENSIONS_STAGE_MIN_POSITIVE: { inputStages: StageMiscInfo[], targetGameName: string } = {
  inputStages: [
    { gameName: "xmansion_" },
    { gameName: "jack_mementoes_" },
    { gameName: "yoshi_cartboard_" },
    { gameName: "64jungle_" },
    { gameName: "kalos_" },
    { gameName: "xmadein_" },
    { gameName: "bossstage_final1_" },
    { gameName: "skyward" }
  ],
  targetGameName: "xmadein_"
};

export const DIMENSIONS_STAGE_MIN_NEGATIVE: { inputStages: StageMiscInfo[], targetGameNames: string[] } = {
  inputStages: [
    { gameName: "plasma_" },
    { gameName: "mario_castledx_" },
    { gameName: "poke_stadium_" },
    { gameName: "hyrule64_f" },
    { gameName: "umbra_f" },
    { gameName: "mariou_" },
  ],
  targetGameNames: [
    "plasma_",
    "mario_castledx_",
    "poke_stadium_",
    "hyrule64_f",
    "mariou_",
  ]
};

export const DIMENSIONS_STAGE_MINMAX: StageMiscInfo[] = [{ gameName: "zelda_tower" }];

export const DIMENSIONS_STAGE_SAME: StageMiscInfo[] = [
  { gameName: "sl_1" },
  { gameName: "sl_2" },
  { gameName: "sl_3" },
];

export const DIMENSIONS_OFFSTAGE_BINS: { inputStages: StageMiscInfo[], expectedBins: { [gameName: string]: number } } = {
  inputStages: [
    { gameName: "tomodachi_" },
    { gameName: "pictchat_" },
    { gameName: "colloseum_" },
    { gameName: "yoshi_cartboard_" },
    { gameName: "xstadium_" },
    { gameName: "xvillage" },
    { gameName: "xcrayon_" },
    { gameName: "battlefield_l_" },
    { gameName: "skyward" },
    { gameName: "umbra_f" },
    { gameName: "gamer_" },
    { gameName: "battlefield_" },
    { gameName: "wily_" },
    { gameName: "xfzero_" },
    { gameName: "bossstage_final1_" },
    { gameName: "kirby_fountain_" },
    { gameName: "dk_waterfall_" },
    { gameName: "battle_common" }
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

export const DIMENSIONS_OFFSTAGE_BINS_EDGES: { inputStages: StageMiscInfo[], expectedBins: { [gameName: string]: number } } = {
  inputStages: [
    { gameName: "min_" },
    { gameName: "bin1_" },
    { gameName: "bin12_" },
    { gameName: "bin2_" },
    { gameName: "bin23_" },
    { gameName: "bin3_" },
    { gameName: "bin34_" },
    { gameName: "bin4_" },
    { gameName: "bin45_" },
    { gameName: "bin5_" },
    { gameName: "max_" },
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

export const DIMENSIONS_OFFSTAGE_MAX_POSITIVE: { inputStages: StageMiscInfo[], targetGameName: string } = {
  inputStages: [
    { gameName: "xice_" },
    { gameName: "pupupuland64_f" },
    { gameName: "xemblem" },
    { gameName: "jack_mementoes_" },
    { gameName: "kalos_" },
    { gameName: "plasma_" },
    { gameName: "poke_tengam_" },
    { gameName: "xmadein_" },
    { gameName: "xstarfox_" },
    { gameName: "hyrule64_f" },
  ],
  targetGameName: "hyrule64_f"
};

export const DIMENSIONS_OFFSTAGE_MAX_NEGATIVE: { inputStages: StageMiscInfo[], targetGameNames: string[] } = {
  inputStages: [
    { gameName: "64jungle_" },
    { gameName: "mario_castledx_" },
    { gameName: "village2_" },
    { gameName: "mariou_" },
    { gameName: "mario_rainbow_" }
  ],
  targetGameNames: [
    "64jungle_",
    "mario_castledx_",
    "village2_",
    "mario_rainbow_",
  ]
};

export const DIMENSIONS_OFFSTAGE_MIN_POSITIVE: { inputStages: StageMiscInfo[], targetGameName: string } = {
  inputStages: [
    { gameName: "end_l_common" },
    { gameName: "wrecking_" },
    { gameName: "duckhunt_" },
    { gameName: "xmansion_" },
    { gameName: "poke_stadium_" },
  ],
  targetGameName: "wrecking_"
};

export const DIMENSIONS_OFFSTAGE_MIN_NEGATIVE: { inputStages: StageMiscInfo[], targetGameNames: string[] } = {
  inputStages: [
    { gameName: "yoshi_story_" },
    { gameName: "poke_tengam_" },
    { gameName: "kirby_fountain_" },
    { gameName: "64jungle_" },
    { gameName: "mario_rainbow_" }
  ],
  targetGameNames: [
    "yoshi_story_",
    "poke_tengam_",
    "kirby_fountain_",
    "64jungle_",
  ]
};

export const DIMENSIONS_OFFSTAGE_MINMAX: StageMiscInfo[] = [{ gameName: "xstadium_" }];

export const DIMENSIONS_OFFSTAGE_SAME: StageMiscInfo[] = [
  { gameName: "os_1" },
  { gameName: "os_2" },
  { gameName: "os_3" },
];

export const DIMENSIONS_CEILING_BINS: { inputStages: StageMiscInfo[], expectedBins: { [gameName: string]: number } } = {
  inputStages: [
    { gameName: "zelda_tower" },
    { gameName: "xice_" },
    { gameName: "xmadein_" },
    { gameName: "wrecking_" },
    { gameName: "xemblem" },
    { gameName: "jack_mementoes_" },
    { gameName: "battle_common" },
    { gameName: "plasma_" },
    { gameName: "battlefield_l_" },
    { gameName: "mariou_" },
    { gameName: "mario_castledx_" },
    { gameName: "64jungle_" },
    { gameName: "xcrayon_" },
    { gameName: "colloseum_" },
    { gameName: "mario_rainbow_" },
    { gameName: "hyrule64_f" },
    { gameName: "dk_waterfall_" },
    { gameName: "xfzero_" },
    { gameName: "kirby_fountain_" },
    { gameName: "tomodachi_" },
    { gameName: "kalos_" },
    { gameName: "wily_" }
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

export const DIMENSIONS_CEILING_BINS_EDGES: { inputStages: StageMiscInfo[], expectedBins: { [gameName: string]: number } } = {
  inputStages: [
    { gameName: "min_" },
    { gameName: "bin1_" },
    { gameName: "bin12_" },
    { gameName: "bin2_" },
    { gameName: "bin23_" },
    { gameName: "bin3_" },
    { gameName: "bin34_" },
    { gameName: "bin4_" },
    { gameName: "bin45_" },
    { gameName: "bin5_" },
    { gameName: "max_" }
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

export const DIMENSIONS_CEILING_MAX_POSITIVE: { inputStages: StageMiscInfo[], targetGameName: string } = {
  inputStages: [
    { gameName: "pupupuland64_f" },
    { gameName: "battlefield_" },
    { gameName: "yoshi_cartboard_" },
    { gameName: "xvillage" },
    { gameName: "village2_" },
    { gameName: "poke_stadium_" },
    { gameName: "duckhunt_" },
    { gameName: "end_l_common" },
    { gameName: "bossstage_final1_" },
  ],
  targetGameName: "village2_"
};

export const DIMENSIONS_CEILING_MAX_NEGATIVE: { inputStages: StageMiscInfo[], targetGameNames: string[] } = {
  inputStages: [
    { gameName: "umbra_f" },
    { gameName: "pictchat_" },
    { gameName: "poke_tengam_" },
    { gameName: "xmansion_" },
    { gameName: "xstarfox_" },
    { gameName: "xstadium_" },
    { gameName: "gamer_" },
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

export const DIMENSIONS_CEILING_MIN_POSITIVE: { inputStages: StageMiscInfo[], targetGameName: string } = {
  inputStages: [
    { gameName: "xvillage" },
    { gameName: "wrecking_" },
    { gameName: "windyhill_" },
    { gameName: "poke_stadium_" },
    { gameName: "village2_" },
    { gameName: "tomodachi_" },
    { gameName: "xice_" },
    { gameName: "skyward" },
    { gameName: "jack_mementoes_" },
  ],
  targetGameName: "poke_stadium_"
};

export const DIMENSIONS_CEILING_MIN_NEGATIVE: { inputStages: StageMiscInfo[], targetGameNames: string[] } = {
  inputStages: [
    { gameName: "yoshi_story_" },
    { gameName: "xemblem" },
    { gameName: "xmadein_" },
    { gameName: "battle_common" },
    { gameName: "battlefield_" },
    { gameName: "dk_waterfall_" },
    { gameName: "kalos_" },
    { gameName: "wrecking_" },
    { gameName: "gamer_" },
    { gameName: "poke_tengam_" },
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

export const DIMENSIONS_CEILING_MINMAX: StageMiscInfo[] = [{ gameName: "end_l_common" }];

export const DIMENSIONS_CEILING_SAME: StageMiscInfo[] = [
  { gameName: "ch_1" },
  { gameName: "ch_2" },
  { gameName: "ch_3" },
];

export const RANGES_BLASTZONE_MAX: { inputStages: StageMiscInfo[], expectedMax: number} = {
  inputStages: [
    { gameName: "xcrayon_" },
    { gameName: "xfzero_" },
    { gameName: "battlefield_l_" },
    { gameName: "bossstage_final1_" },
    { gameName: "village2_" },
  ],
  expectedMax: 290.332306
};

export const RANGES_STAGE_MAX: { inputStages: StageMiscInfo[], expectedMax: number } = {
  inputStages: [
    { gameName: "end_l_common" },
    { gameName: "tomodachi_" },
    { gameName: "yoshi_story_" },
    { gameName: "battle_common" },
    { gameName: "hyrule64_f" },
    { gameName: "kalos_" },
    { gameName: "pictchat_" },
    { gameName: "poke_tengam_" },
    { gameName: "umbra_f" },
  ],
  expectedMax: 151.129
};

export const RANGES_OFFSTAGE_MAX: { inputStages: StageMiscInfo[], expectedMax: number } = {
  inputStages: [
    { gameName: "64jungle_" },
    { gameName: "xice_" },
    { gameName: "xstarfox_" },
    { gameName: "skyward" },
    { gameName: "mario_castledx_" },
    { gameName: "dk_waterfall_" },
    { gameName: "pupupuland64_f" },
    { gameName: "kirby_fountain_" },
    { gameName: "wily_" },
    { gameName: "xvillage" },
    { gameName: "xmadein_" },
    { gameName: "mario_rainbow_" },
    { gameName: "gamer_" },
    { gameName: "colloseum_" },
  ],
  expectedMax: 172.7263
};

export const RANGES_CEILING_MAX: { inputStages: StageMiscInfo[], expectedMax: number } = {
  inputStages: [
    { gameName: "jack_mementoes_" },
    { gameName: "mariou_" },
    { gameName: "battlefield_" },
    { gameName: "poke_stadium_" },
    { gameName: "xemblem" },
    { gameName: "xstadium_" },
    { gameName: "yoshi_cartboard_" },
    { gameName: "wrecking_" },
    { gameName: "zelda_tower" },
    { gameName: "duckhunt_" },
    { gameName: "xmansion_" },
    { gameName: "plasma_" },
    { gameName: "windyhill_" },
  ],
  expectedMax: 243.8
};

export const RANGES_BLASTZONE_MAX_ONE: { inputStages: StageMiscInfo[], expectedMax: number } = {
  inputStages: [{ gameName: "xvillage" }],
  expectedMax: 229.5
};

export const RANGES_STAGE_MAX_ONE: { inputStages: StageMiscInfo[], expectedMax: number } = {
  inputStages: [{ gameName: "pictchat_" }],
  expectedMax: 80
};

export const RANGES_OFFSTAGE_MAX_ONE: { inputStages: StageMiscInfo[], expectedMax: number } = {
  inputStages: [{ gameName: "end_l_common" }],
  expectedMax: 160.0080225
};

export const RANGES_CEILING_MAX_ONE: { inputStages: StageMiscInfo[], expectedMax: number } = {
  inputStages: [{ gameName: "kirby_fountain_" }],
  expectedMax: 191.1096737
};


export const RANGES_BLASTZONE_MIN: { inputStages: StageMiscInfo[], expectedMin: number } = {
  inputStages: [
    { gameName: "plasma_" },
    { gameName: "end_l_common" },
    { gameName: "xmadein_" },
    { gameName: "xvillage" },
    { gameName: "gamer_" },
    { gameName: "wily_" },
    { gameName: "yoshi_cartboard_" },
  ],
  expectedMin: 180
};

export const RANGES_STAGE_MIN: { inputStages: StageMiscInfo[], expectedMin: number } = {
  inputStages: [
    { gameName: "mariou_" },
    { gameName: "skyward" },
    { gameName: "windyhill_" },
    { gameName: "xfzero_" },
    { gameName: "xmansion_" },
    { gameName: "battlefield_" },
    { gameName: "xmadein_" },
    { gameName: "zelda_tower" },
    { gameName: "duckhunt_" },
    { gameName: "pupupuland64_f" },
    { gameName: "bossstage_final1_" },
    { gameName: "poke_stadium_" },
    { gameName: "wily_" },
    { gameName: "village2_" },
    { gameName: "tomodachi_" },
    { gameName: "pictchat_" },
    { gameName: "poke_tengam_" },
    { gameName: "battlefield_l_" },
    { gameName: "jack_mementoes_" },
    { gameName: "colloseum_" },
    { gameName: "mario_castledx_" },
    { gameName: "64jungle_" },
    { gameName: "xstadium_" },
    { gameName: "yoshi_cartboard_" },
    { gameName: "gamer_" },
    { gameName: "wrecking_" },
    { gameName: "dk_waterfall_" },
    { gameName: "plasma_" },
  ],
  expectedMin: 45.53241
};

export const RANGES_OFFSTAGE_MIN: { inputStages: StageMiscInfo[], expectedMin: number } = {
  inputStages: [
    { gameName: "xcrayon_" },
    { gameName: "umbra_f" },
    { gameName: "mariou_" },
    { gameName: "wrecking_" },
    { gameName: "xfzero_" },
    { gameName: "hyrule64_f" },
    { gameName: "dk_waterfall_" },
    { gameName: "colloseum_" },
    { gameName: "poke_tengam_" },
    { gameName: "kalos_" },
    { gameName: "xice_" },
    { gameName: "village2_" },
  ],
  expectedMin: 147.5
};

export const RANGES_CEILING_MIN: { inputStages: StageMiscInfo[], expectedMin: number } = {
  inputStages: [
    { gameName: "village2_" },
    { gameName: "jack_mementoes_" },
    { gameName: "battlefield_" },
    { gameName: "64jungle_" },
    { gameName: "xstarfox_" },
    { gameName: "poke_tengam_" },
    { gameName: "xice_" },
    { gameName: "xmansion_" },
    { gameName: "zelda_tower" },
    { gameName: "kalos_" },
    { gameName: "dk_waterfall_" },
    { gameName: "duckhunt_" },
    { gameName: "xemblem" },
    { gameName: "xfzero_" },
    { gameName: "hyrule64_f" },
    { gameName: "gamer_" },
    { gameName: "yoshi_story_" },
    { gameName: "xvillage" },
    { gameName: "kirby_fountain_" },
    { gameName: "colloseum_" },
    { gameName: "bossstage_final1_" },
    { gameName: "end_l_common" },
  ],
  expectedMin: 159.9231
};

export const RANGES_BLASTZONE_MIN_ONE: { inputStages: StageMiscInfo[], expectedMin: number } = {
  inputStages: [{ gameName: "mario_castledx_" }],
  expectedMin: 275
};

export const RANGES_STAGE_MIN_ONE: { inputStages: StageMiscInfo[], expectedMin: number } = {
  inputStages: [{ gameName: "poke_stadium_" }],
  expectedMin: 88.14794765
};

export const RANGES_OFFSTAGE_MIN_ONE: { inputStages: StageMiscInfo[], expectedMin: number } = {
  inputStages: [{ gameName: "xcrayon_" }],
  expectedMin: 150.0564621
};

export const RANGES_CEILING_MIN_ONE: { inputStages: StageMiscInfo[], expectedMin: number } = {
  inputStages: [{ gameName: "pupupuland64_f" }],
  expectedMin: 192.1027776
};

export const RANGES_BLASTZONE_RANGE: { inputStages: StageMiscInfo[], expectedRange: number } = {
  inputStages: [
    { gameName: "tomodachi_" },
    { gameName: "gamer_" },
    { gameName: "pupupuland64_f" },
    { gameName: "xcrayon_" },
    { gameName: "colloseum_" },
    { gameName: "xstarfox_" },
    { gameName: "duckhunt_" },
    { gameName: "bossstage_final1_" },
    { gameName: "wily_" },
    { gameName: "xmadein_" },
    { gameName: "poke_stadium_" },
    { gameName: "windyhill_" },
    { gameName: "zelda_tower" },
    { gameName: "hyrule64_f" },
    { gameName: "poke_tengam_" },
    { gameName: "battlefield_l_" },
    { gameName: "mario_castledx_" },
    { gameName: "xemblem" },
    { gameName: "yoshi_cartboard_" },
    { gameName: "plasma_" },
    { gameName: "xfzero_" },
    { gameName: "mariou_" },
    { gameName: "xmansion_" },
    { gameName: "skyward" },
    { gameName: "end_l_common" },
  ],
  expectedRange: 145.055213
};

export const RANGES_STAGE_RANGE: { inputStages: StageMiscInfo[], expectedRange: number } = {
  inputStages: [
    { gameName: "xice_" },
    { gameName: "mario_rainbow_" },
    { gameName: "village2_" },
    { gameName: "kalos_" },
    { gameName: "mariou_" },
    { gameName: "64jungle_" },
    { gameName: "end_l_common" },
    { gameName: "battlefield_" },
    { gameName: "jack_mementoes_" },
    { gameName: "wrecking_" },
    { gameName: "xvillage" },
    { gameName: "xcrayon_" },
    { gameName: "duckhunt_" },
    { gameName: "pupupuland64_f" },
    { gameName: "mario_castledx_" },
    { gameName: "xmansion_" },
    { gameName: "pictchat_" },
    { gameName: "gamer_" },
    { gameName: "poke_stadium_" },
    { gameName: "poke_tengam_" },
    { gameName: "xstarfox_" },
    { gameName: "dk_waterfall_" },
    { gameName: "zelda_tower" },
    { gameName: "xemblem" },
  ],
  expectedRange: 75.5424305
};

export const RANGES_OFFSTAGE_RANGE: { inputStages: StageMiscInfo[], expectedRange: number } = {
  inputStages: [
    { gameName: "pupupuland64_f" },
    { gameName: "mariou_" },
    { gameName: "pictchat_" },
    { gameName: "jack_mementoes_" },
    { gameName: "kalos_" },
    { gameName: "umbra_f" },
    { gameName: "end_l_common" },
    { gameName: "hyrule64_f" },
    { gameName: "gamer_" },
    { gameName: "xemblem" },
    { gameName: "duckhunt_" },
    { gameName: "yoshi_cartboard_" },
    { gameName: "battlefield_" },
    { gameName: "mario_rainbow_" },
    { gameName: "64jungle_" },
    { gameName: "xmadein_" },
    { gameName: "zelda_tower" },
    { gameName: "xice_" },
    { gameName: "bossstage_final1_" },
    { gameName: "xstarfox_" },
    { gameName: "plasma_" },
    { gameName: "yoshi_story_" },
    { gameName: "dk_waterfall_" },
    { gameName: "wily_" },
    { gameName: "village2_" },
    { gameName: "windyhill_" },
  ],
  expectedRange: 183.3329693
};

export const RANGES_CEILING_RANGE: { inputStages: StageMiscInfo[], expectedRange: number } = {
  inputStages: [
    { gameName: "umbra_f" },
    { gameName: "wily_" },
    { gameName: "poke_tengam_" },
    { gameName: "xvillage" },
    { gameName: "dk_waterfall_" },
    { gameName: "wrecking_" },
    { gameName: "jack_mementoes_" },
    { gameName: "xmansion_" },
    { gameName: "xstadium_" },
    { gameName: "colloseum_" },
    { gameName: "duckhunt_" },
    { gameName: "plasma_" },
    { gameName: "skyward" },
    { gameName: "kalos_" },
    { gameName: "kirby_fountain_" },
    { gameName: "xcrayon_" },
    { gameName: "mariou_" },
    { gameName: "xemblem" },
    { gameName: "hyrule64_f" },
    { gameName: "end_l_common" },
    { gameName: "xmadein_" },
    { gameName: "bossstage_final1_" },
    { gameName: "xstarfox_" },
    { gameName: "pictchat_" },
    { gameName: "64jungle_" },
    { gameName: "mario_rainbow_" },
    { gameName: "battle_common" },
    { gameName: "zelda_tower" },
  ],
  expectedRange: 138.0885841
};

export const RANGES_BLASTZONE_RANGE_ONE: StageMiscInfo[] = [{ gameName: "pupupuland64_f" }];

export const RANGES_STAGE_RANGE_ONE: StageMiscInfo[] = [{ gameName: "tomodachi_" }];

export const RANGES_OFFSTAGE_RANGE_ONE: StageMiscInfo[] = [{ gameName: "windyhill_" }];

export const RANGES_CEILING_RANGE_ONE: StageMiscInfo[] = [{ gameName: "battlefield_l_" }];

export const INVALID_NO_DB: StageMiscInfo[] = [
  { gameName: "gamer_" },
  { gameName: "battlefield_" },
  { gameName: "xmansion_" },
  { gameName: "xstadium_" },
  { gameName: "dk_waterfall_" },
  { gameName: "kirby_fountain_" },
  { gameName: "hyrule64_f" },
];

export const INVALID_UNKNOWN_STAGES: StageMiscInfo[] = [
  { gameName: "nPcZgZXShW" },
  { gameName: "1GXmKy2Qii" },
  { gameName: "WT93arlW8e" },
  { gameName: "a82YwRgo2O" },
  { gameName: "HBy6bokM0C" },
  { gameName: "m994stwtGs" },
  { gameName: "vSskwA0AVo" },
  { gameName: "rEGT06B6Qc" },
  { gameName: "TJ1BCWPLQJ" },
  { gameName: "dYj8r2Hxkc" },
];

///
export const INTEGER_VALUES: { inputStages: StageMiscInfo[], expectedSet: BinnedStageDimensionsSet } = {
  inputStages: [
    { gameName: "battlefield_l_" },
    { gameName: "kalos_" },
    { gameName: "xmadein_" },
    { gameName: "xvillage" },
    { gameName: "mario_rainbow_" },
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

export const INTEGER_MIN: { inputStages: StageMiscInfo[], expectedDimensions: BinnedStageDimensions[] } = {
  inputStages: [
    { gameName: "duckhunt_" },
    { gameName: "end_l_common" },
    { gameName: "xice_" },
    { gameName: "zelda_tower" },
    { gameName: "wily_" },
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

export const INTEGER_MAX: { inputStages: StageMiscInfo[], expectedDimensions: BinnedStageDimensions[] } = {
  inputStages: [
    { gameName: "colloseum_" },
    { gameName: "xmansion_" },
    { gameName: "gamer_" },
    { gameName: "mario_rainbow_" },
    { gameName: "skyward" },
    { gameName: "xmadein_" },
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

export const INTEGER_MINMAX: { inputStages: StageMiscInfo[], expectedDimensions: BinnedStageDimensions[] } = {
  inputStages: [
    { gameName: "battlefield_" },
    { gameName: "bossstage_final1_" },
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