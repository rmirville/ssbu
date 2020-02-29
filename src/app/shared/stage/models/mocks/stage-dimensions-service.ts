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
