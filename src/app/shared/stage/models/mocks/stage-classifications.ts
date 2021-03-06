import { StageClassifications } from '../stage-classifications.model';

export const VALID = {
  gameName: "something",
  name: "Laughable Monkey",
  abbr: "LM",
  series: "Super World Prime",
  tourneyPresence: 9
};

export const BAD_DATA = {
  gameNameNotString: {
    gameName: false,
    name: "Dusty Potato",
    abbr: "DP",
    series: "Absolute Serious Omega",
    tourneyPresence: 29
  },

  nameNotString: {
    gameName: "Mammoth Burst",
    name: -12378.68901235,
    abbr: "N1",
    series: "Murky Approval",
    tourneyPresence: 93
  },

  abbrNotString: {
    gameName: "tempprob_",
    name: "Bridge of Probability",
    abbr: false,
    series: "Temporary Setback Brigade",
    tourneyPresence: 8310
  },
  
  seriesNotString: {
    gameName: "placeword_",
    name: "Warm Eggnog",
    abbr: "WE",
    series: [39, 28],
    tourneyPresence: 100
  },
  
  tourneyPresenceNotNumber: {
    gameName: "foodfighter_",
    name: "Phobic Meeting",
    abbr: "PM",
    series: "Food Fighter Supreme",
    tourneyPresence: "Ultimate Chicken Force 25"
  }
};

export const SIMPLE_LIST = [
  {
    gameName: "village2_",
    series: "Animal Crossing",
    tourneyPresence: 0
  },
  {
    gameName: "xvillage",
    series: "Animal Crossing",
    tourneyPresence: 0
  },
  {
    gameName: "battlefield_",
    series: "Super Smash Bros.",
    tourneyPresence: 0
  },
  {
    gameName: "battlefield_l_",
    series: "Super Smash Bros.",
    tourneyPresence: -1
  },
  {
    gameName: "umbra_f",
    series: "Bayonetta",
    tourneyPresence: -1
  },
  {
    gameName: "bossstage_final1_",
    series: "Super Smash Bros.",
    tourneyPresence: 0
  },
  {
    gameName: "end_l_common",
    series: "Super Smash Bros.",
    tourneyPresence: -1
  },
  {
    gameName: "64jungle_",
    series: "Donkey Kong",
    tourneyPresence: -1
  },
  {
    gameName: "dk_waterfall_",
    series: "Donkey Kong",
    tourneyPresence: -1
  },
  {
    gameName: "duckhunt_",
    series: "Duck Hunt",
    tourneyPresence: -1
  },
  {
    gameName: "colloseum_",
    series: "Fire Emblem",
    tourneyPresence: -1
  },
  {
    gameName: "xemblem",
    series: "Fire Emblem",
    tourneyPresence: -1
  },
  {
    gameName: "xstarfox_",
    series: "Star Fox",
    tourneyPresence: 0
  },
  {
    gameName: "xfzero_",
    series: "F-Zero",
    tourneyPresence: -1
  },
  {
    gameName: "xice_",
    series: "Ice Climber",
    tourneyPresence: -1
  },
  {
    gameName: "jack_mementoes_",
    series: "Persona",
    tourneyPresence: -1
  },
  {
    gameName: "kirby_fountain_",
    series: "Kirby",
    tourneyPresence: -1
  },
  {
    gameName: "pupupuland64_f",
    series: "Kirby",
    tourneyPresence: -1
  },
  {
    gameName: "xmansion_",
    series: "Super Mario",
    tourneyPresence: -1
  },
  {
    gameName: "mario_castledx_",
    series: "Super Mario",
    tourneyPresence: -1
  },
  {
    gameName: "mario_rainbow_",
    series: "Super Mario",
    tourneyPresence: -1
  },
  {
    gameName: "mariou_",
    series: "Super Mario",
    tourneyPresence: -1
  },
  {
    gameName: "pictchat_",
    series: "Miscellaneous",
    tourneyPresence: -1
  },
  {
    gameName: "kalos_",
    series: "Pokémon",
    tourneyPresence: 0
  },
  {
    gameName: "poke_stadium_",
    series: "Pokémon",
    tourneyPresence: 2
  },
  {
    gameName: "xstadium_",
    series: "Pokémon",
    tourneyPresence: 0
  },
  {
    gameName: "poke_tengam_",
    series: "Pokémon",
    tourneyPresence: -1
  },
  {
    gameName: "plasma_",
    series: "Pokémon",
    tourneyPresence: 2
  },
  {
    gameName: "wily_",
    series: "Mega Man",
    tourneyPresence: -1
  },
  {
    gameName: "windyhill_",
    series: "Sonic the Hedgehog",
    tourneyPresence: -1
  },
  {
    gameName: "tomodachi_",
    series: "Miscellaneous",
    tourneyPresence: -1
  },
  {
    gameName: "gamer_",
    series: "Wario Ware",
    tourneyPresence: -1
  },
  {
    gameName: "xmadein_",
    series: "Wario Ware",
    tourneyPresence: -1
  },
  {
    gameName: "wrecking_",
    series: "Miscellaneous",
    tourneyPresence: -1
  },
  {
    gameName: "wufu_",
    series: "Miscellaneous",
    tourneyPresence: -1
  },
  {
    gameName: "yoshi_cartboard_",
    series: "Yoshi",
    tourneyPresence: 0
  },
  {
    gameName: "xcrayon_",
    series: "Yoshi",
    tourneyPresence: 2
  },
  {
    gameName: "yoshi_story_",
    series: "Yoshi",
    tourneyPresence: -1
  },
  {
    gameName: "hyrule64_f",
    series: "The Legend of Zelda",
    tourneyPresence: -1
  },
  {
    gameName: "skyward",
    series: "The Legend of Zelda",
    tourneyPresence: -1
  },
  {
    gameName: "zelda_tower",
    series: "The Legend of Zelda",
    tourneyPresence: -1
  }
];



export const ONE: StageClassifications[] = [
  {
    name: "Princess Peach's Castle",
    abbr: "PPC",
    gameName: "mario_castledx_",
    series: "Super Mario",
    tourneyPresence: -1
  },
  {
    name: "Yoshi's Story",
    abbr: "YS",
    gameName: "yoshi_cartboard_",
    series: "Yoshi",
    tourneyPresence: 0
  },
  {
    name: "Great Plateau Tower",
    abbr: "GPT",
    gameName: "zelda_tower",
    series: "The Legend of Zelda",
    tourneyPresence: -1
  }
];

export const TWO: StageClassifications[] = [
  {
    name: "Arena Ferox",
    abbr: "AF",
    gameName: "colloseum_",
    series: "Fire Emblem",
    tourneyPresence: -1
  },
  {
    gameName: "duckhunt_",
    name: "Duck Hunt",
    abbr: "DH",
    series: "Duck Hunt",
    tourneyPresence: -1
  },
  {
    name: "Pokémon Stadium",
    abbr: "PS1",
    gameName: "poke_stadium_",
    series: "Pokémon",
    tourneyPresence: 2
  }
];

export const THREE: StageClassifications[] = [
  {
    name: "Wily Castle",
    abbr: "WC",
    gameName: "wily_",
    series: "Mega Man",
    tourneyPresence: -1
  },
  {
    name: "Gamer",
    abbr: "GMR",
    gameName: "gamer_",
    series: "Wario Ware",
    tourneyPresence: -1
  },
  {
    name: "PictoChat 2",
    abbr: "PC",
    gameName: "pictchat_",
    series: "Miscellaneous",
    tourneyPresence: -1
  }
];
