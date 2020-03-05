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

