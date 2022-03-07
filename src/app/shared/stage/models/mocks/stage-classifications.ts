import { StageClassifications } from '../stage-classifications.model';
import { SsbuApiStageClassificationsSetResponse } from 'src/app/data/ssbu-api/models';
import { StageInfo } from '../stage-info.model';

export const INIT: {res: SsbuApiStageClassificationsSetResponse} = {
  res: {
    _links: {
      "self": "https://api.ssbutools.com/v1/stages/classification-sets/all",
    },
    id: "all",
    classifications: {
      "federal_": {
        "gameName": "federal_",
        "name": "Federal Land",
        "abbr": "FL",
        "series": "Miscellaneous",
        "tourneyPresence": -1,
      },
      "temporal_": {
        "gameName": "temporal_",
        "name": "Temporal Time",
        "abbr": "TT",
        "series": "Timewasters",
        "tourneyPresence": 2,
      },
      "corrale_": {
        "gameName": "corrale_",
        "name": "Corrale Camp",
        "abbr": "CC",
        "series": "Cowfolks",
        "tourneyPresence": 3,
      },
    },
  },
}

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

export const GAME_NAME_ONLY: { input: StageInfo[], res: SsbuApiStageClassificationsSetResponse } = {
  input: [{
    gameName: 'federal_',
    name: 'A Federal Place',
  }],
  res: {
    _links: {
      "self": "https://api.ssbutools.com/v1/stages/classification-sets/all",
    },
    id: "all",
    classifications: {
      "federal_": {
        "gameName": "federal_",
        "name": "Federal Land",
        "abbr": "FL",
        "series": "Miscellaneous",
        "tourneyPresence": -1,
      },
      "temporal_": {
        "gameName": "temporal_",
        "name": "Temporal Time",
        "abbr": "TT",
        "series": "Timewasters",
        "tourneyPresence": 2,
      },
      "corrale_": {
        "gameName": "corrale_",
        "name": "Corrale Camp",
        "abbr": "CC",
        "series": "Cowfolks",
        "tourneyPresence": 3,
      },
    },
  },
};

export const MATCH_GAME_NAME: { input: StageInfo[], res: SsbuApiStageClassificationsSetResponse, output: StageClassifications[] } = {
  input: [
    {
      name: "Pokémon Stadium",
      gameName: "xstadium_"
    },
    {
      name: "Plateau Tower",
      gameName: "zelda_tower"
    },
    {
      name: "Wuhu",
      gameName: "wufu_"
    }
  ],
  res: {
    "_links": {},
    "classifications": {
      "xstadium_": {
        "name": "Pokémon Stadium 2",
        "abbr": "PS2",
        "gameName": "xstadium_",
        "series": "Pokémon",
        "tourneyPresence": 0
      },
      "zelda_tower": {
        "name": "Great Plateau Tower",
        "abbr": "GPT",
        "gameName": "zelda_tower",
        "series": "The Legend of Zelda",
        "tourneyPresence": -1
      },
      "wufu_": {
        "name": "Wuhu Island",
        "abbr": "WI",
        "gameName": "wufu_",
        "series": "Miscellaneous",
        "tourneyPresence": -1
      },
      "somekindofplace_": {
        "name": "Some Kind of Place",
        "abbr": "SKoP",
        "gameName": "somekindofplace_",
        "series": "Miscellaneous",
        "tourneyPresence": 2,
      }
    },
  },
  output: [
    {
      name: "Pokémon Stadium 2",
      abbr: "PS2",
      gameName: "xstadium_",
      series: "Pokémon",
      tourneyPresence: 0
    },
    {
      name: "Great Plateau Tower",
      abbr: "GPT",
      gameName: "zelda_tower",
      series: "The Legend of Zelda",
      tourneyPresence: -1
    },
    {
      name: "Wuhu Island",
      abbr: "WI",
      gameName: "wufu_",
      series: "Miscellaneous",
      tourneyPresence: -1
    }
  ],
};


export const UNKNOWN_GAME_NAMES: {input: StageInfo[], res: SsbuApiStageClassificationsSetResponse,  output: StageClassifications[]} = {
  input: [
    {
      name: "What a Noun",
      gameName: "whatanoun"
    },
    {
      name: "Extraordinary",
      gameName: "extraordinary"
    },
    {
      name: "Duck Hunt",
      gameName: "duckhunt_",
    },
    {
      name: "summit",
      gameName: "xice_",
    },
  ],
  res: {
    "_links": {},
    "classifications": {
      "xice_": {
        name: "Summit",
        abbr: "SMT",
        gameName: "xice_",
        series: "Ice Climber",
        tourneyPresence: -1
      },
      "sclub_": {
        name: "Squalid Club",
        abbr: "SC",
        gameName: "sclub_",
        series: "Lively Lettuce",
        tourneyPresence: 0
      },
      "duckhunt_": {
        name: "Duck Hunt",
        abbr: "DH",
        gameName: "duckhunt_",
        series: "Duck Hunt",
        tourneyPresence: -1
      },
    }
  },
  output: [
    {
      name: "What a Noun",
      abbr: null,
      gameName: "whatanoun",
      series: null,
      tourneyPresence: null
    },
    {
      name: "Extraordinary",
      abbr: null,
      gameName: "extraordinary",
      series: null,
      tourneyPresence: null
    },
    {
      name: "Duck Hunt",
      abbr: "DH",
      gameName: "duckhunt_",
      series: "Duck Hunt",
      tourneyPresence: -1
    },
    {
      name: "Summit",
      abbr: "SMT",
      gameName: "xice_",
      series: "Ice Climber",
      tourneyPresence: -1
    }
  ]
};
