import { StageClassifications } from '../stage-classifications.model';

const MESSAGES: {[type: string]: string} = {
  noStagesLoaded: "Stages could not be loaded. Try refreshing the page.",
  noStagesSelected: "Please select at least one stage.",
  unknownError: "Something went wrong. Try refreshing the page."
}

export const VALID = {
  name: "Princess Peach's Castle",
  abbr: "XL",
  gameName: "foodfighterz",
  series: "Super Mario",
  tourneyPresence: 8
};

export const BAD_DATA = {
  nameNotString: {
    name: 392,
    gameName: "interesting",
    series: "what a name",
    tourneyPresence: -93
  },

  gameNameNotString: {
    name: "Each",
    abbr: "ZC",
    gameName: -82,
    series: "Super Hedgehog Wars",
    tourneyPresence: 2.9
  },

  seriesNotString: {
    name: "Whatnot",
    abbr: "OA",
    gameName: "shatseveral_",
    series: false,
    tourneyPresence: 7
  },

  tourneyPresenceNotNumber: {
    name: "Do it",
    abbr: "KI",
    gameName: "justkiddingdongdoit",
    series: "Seriously, don't do it.",
    tourneyPresence: "It's a trap"
  }
};

export const ONE = [
  {
    name: "Princess Peach's Castle",
    abbr: "QT",
    gameName: "mario_castledx_",
    series: "Super Mario",
    tourneyPresence: -1
  },
  {
    name: "Yoshi's Story",
    abbr: "RI",
    gameName: "yoshi_cartboard_",
    series: "Yoshi",
    tourneyPresence: 0
  },
  {
    name: "Great Plateau Tower",
    abbr: "AG",
    gameName: "zelda_tower",
    series: "The Legend of Zelda",
    tourneyPresence: -1
  }
];

export const TWO = [
  {
    name: "Arena Ferox",
    abbr: "KP",
    gameName: "colloseum_",
    series: "Fire Emblem",
    tourneyPresence: -1
  },
  {
    gameName: "duckhunt_",
    name: "Duck Hunt",
    series: "Duck Hunt",
    tourneyPresence: -1
  },
  {
    name: "Pokémon Stadium",
    abbr: "YS",
    gameName: "poke_stadium_",
    series: "Pokémon",
    tourneyPresence: 2
  }
];

export const THREE = [
  {
    name: "Wily Castle",
    abbr: "AQ",
    gameName: "wily_",
    series: "Mega Man",
    tourneyPresence: -1
  },
  {
    name: "Gamer",
    abbr: "TK",
    gameName: "gamer_",
    series: "Wario Ware",
    tourneyPresence: -1
  },
  {
    name: "PictoChat 2",
    abbr: "CK",
    gameName: "pictchat_",
    series: "Miscellaneous",
    tourneyPresence: -1
  }
];

export const LEGAL_COMMON_PRESENT: StageClassifications[] = [
  {
    name: "Extreme Place",
    abbr: "EP",
    gameName: "extremeplace_",
    series: "Extremities",
    tourneyPresence: 0
  },
  {
    name: "Foreign Oddity",
    abbr: "FO",
    gameName: "foreignoddity_",
    series: "Oddworld",
    tourneyPresence: 0
  },
  {
    name: "Unknown Realm",
    abbr: "UR",
    gameName: "mariounknown_",
    series: "Super Mario",
    tourneyPresence: 0
  },
  {
    name: "Optical Illusion",
    abbr: "OI",
    gameName: "illusion_",
    series: "Space Age",
    tourneyPresence: -1
  },
  {
    name: "Present Time",
    abbr: "PT",
    gameName: "timepresent_",
    series: "Time",
    tourneyPresence: 2
  },
  {
    name: "Future's Past",
    abbr: "FP",
    gameName: "timefuturepast_",
    series: "Time",
    tourneyPresence: 1
  }
];

export const LEGAL_COMMON_ABSENT: StageClassifications[] = [
  {
    name: "Whereabouts",
    abbr: "WA",
    gameName: "whereabouts_",
    series: "Vague",
    tourneyPresence: 1
  },
  {
    name: "Thereabouts",
    abbr: "TA",
    gameName: "thereabouts_",
    series: "Vague",
    tourneyPresence: 2
  },
  {
    name: "Wherever",
    abbr: "WE",
    gameName: "wherever_",
    series: "Vague",
    tourneyPresence: -1
  },
  {
    name: "Off in the Distance",
    abbr: "OitD",
    gameName: "vaguedistance_",
    series: "Slibhtly Vague",
    tourneyPresence: -1
  }
];

export const LEGAL_COMMON_INCLUDE: { [property: string]: StageClassifications[] } = {
  allStages: [
    {
      name: "Place of Destiny",
      abbr: "PoD",
      gameName: "battledestiny_",
      series: "Battle",
      tourneyPresence: 2
    },
    {
      name: "Offroad",
      abbr: "OR",
      gameName: "raceroffroad_",
      series: "Racer",
      tourneyPresence: 0
    },
    {
      name: "Inside Brain",
      abbr: "IB",
      gameName: "surgerybrain_",
      series: "Surgery",
      tourneyPresence: -1
    },
    {
      name: "Inside Heart",
      abbr: "IH",
      gameName: "surgeryheart_",
      series: "Surgery",
      tourneyPresence: 1
    },
    {
      name: "Onroad",
      abbr: "OnR",
      gameName: "raceronroad_",
      series: "Racer",
      tourneyPresence: -1
    },
    {
      name: "Bank",
      abbr: "BNK",
      gameName: "tycoonBank_",
      series: "Tycoon",
      tourneyPresence: 0
    },
    {
      name: "Temple of Prayer",
      abbr: "ToP",
      gameName: "religiontemple_",
      series: "Religion",
      tourneyPresence: 1
    },
    {
      name: "Gate of Odin",
      abbr: "GoO",
      gameName: "mythologygate_",
      series: "Mythology",
      tourneyPresence: 0
    },
    {
      name: "Office",
      abbr: "OFF",
      gameName: "tycoonoffice_",
      series: "Tycoon",
      tourneyPresence: -1
    }

  ],
  includedStages: [
    {
      name: "Offroad",
      abbr: "OFF",
      gameName: "raceroffroad_",
      series: "Racer",
      tourneyPresence: 0
    },
    {
      name: "Bank",
      abbr: "BNK",
      gameName: "tycoonBank_",
      series: "Tycoon",
      tourneyPresence: 0
    },
    {
      name: "Gate of Odin",
      abbr: "GoO",
      gameName: "mythologygate_",
      series: "Mythology",
      tourneyPresence: 0
    }
  ]
};

export const LEGAL_COMMON_EXCLUDE: { [property: string]: StageClassifications[] } = {
  allStages: [
    {
      name: "Haystack",
      abbr: "HS",
      gameName: "farmhaystack_",
      series: "Animal Farm",
      tourneyPresence: 1
    },
    {
      name: "Stable",
      abbr: "STB",
      gameName: "farmstable_",
      series: "Animal Farm",
      tourneyPresence: 0
    },
    {
      name: "Living Room",
      abbr: "LR",
      gameName: "dogsroom_",
      series: "Nintendogs",
      tourneyPresence: -1
    },
    {
      name: "Cartesian Graph",
      abbr: "CG",
      gameName: "mathcartesian_",
      series: "Mathemagics",
      tourneyPresence: 2
    },
    {
      name: "Apple Tree",
      abbr: "AT",
      gameName: "scienceapple_",
      series: "Science History",
      tourneyPresence: -1
    },
    {
      name: "Farmer's Market",
      abbr: "FM",
      gameName: "slicefarmers",
      series: "Slice of Life",
      tourneyPresence: 1,
    },
    {
      name: "Disco",
      abbr: "DSC",
      gameName: "dancedisco_",
      series: "Better Dance Better",
      tourneyPresence: 0,
    },
    {
      name: "High School",
      abbr: "HS",
      gameName: "sliceschool_",
      series: "Slice of Life",
      tourneyPresence: 1
    },
    {
      name: "Park",
      abbr: "PRK",
      gameName: "slicepark_",
      series: "Slice of Life",
      tourneyPresence: 0
    }
  ],
  excludedStages: [
    {
      name: "Haystack",
      abbr: "HST",
      gameName: "farmhaystack_",
      series: "Animal Farm",
      tourneyPresence: 1
    },

    {
      name: "Living Room",
      abbr: "LR",
      gameName: "dogsroom_",
      series: "Nintendogs",
      tourneyPresence: -1
    },
    {
      name: "Cartesian Graph",
      abbr: "CG",
      gameName: "mathcartesian_",
      series: "Mathemagics",
      tourneyPresence: 2
    },
    {
      name: "Apple Tree",
      abbr: "AT",
      gameName: "scienceapple_",
      series: "Science History",
      tourneyPresence: -1
    },
    {
      name: "Farmer's Market",
      abbr: "FM",
      gameName: "slicefarmers_",
      series: "Slice of Life",
      tourneyPresence: 1,
    },
    {
      name: "High School",
      abbr: "HS",
      gameName: "sliceschool_",
      series: "Slice of Life",
      tourneyPresence: 1
    }
  ]
};

export const LEGAL_UNCOMMON_PRESENT: StageClassifications[] = [
  {
    name: "World of Light",
    abbr: "WoL",
    gameName: "smashultlight_",
    series: "Super Smash Bros.",
    tourneyPresence: -1
  },
  {
    name: "World of Shadow",
    abbr: "WoS",
    gameName: "smashultdark_",
    series: "Super Smash Bros.",
    tourneyPresence: 1
  },
  {
    name: "Coffee Table",
    abbr: "CT",
    gameName: "toytable_",
    series: "Toy Tale",
    tourneyPresence: 2
  },
  {
    name: "Countryside",
    abbr: "CTS",
    gameName: "farmcountry_",
    series: "Farm Story",
    tourneyPresence: 0
  },
  {
    name: "Realm of Mediocrity",
    abbr: "RoM",
    gameName: "underwhelmmediocrity_",
    series: "Underwhelm",
    tourneyPresence: 1
  },
  {
    name: "ImpossiBrain's Lair",
    abbr: "IBL",
    gameName: "mindimpossibrain_",
    series: "Captain Mind Man",
    tourneyPresence: 1
  }
];

export const LEGAL_UNCOMMON_ABSENT: StageClassifications[] = [
  {
    name: "UN Embassy",
    abbr: "UNE",
    gameName: "historyembassy_",
    series: "History",
    tourneyPresence: 2
  },
  {
    name: "Field",
    abbr: "FLD",
    gameName: "farmfield_",
    series: "Farm Story",
    tourneyPresence: 0
  },
  {
    name: "Classroom",
    abbr: "CR",
    gameName: "sliceclass_",
    series: "Slice of Life",
    tourneyPresence: -1
  },
  {
    name: "Domain of Destiny",
    abbr: "DoD",
    gameName: "knightsdestiny_",
    series: "Knights",
    tourneyPresence: 2
  }
];

export const LEGAL_UNCOMMON_INCLUDE: { [property: string]: StageClassifications[] } = {
  allStages: [
    {
      name: "Cafeteria",
      abbr: "CFT",
      gameName: "foodcafe_",
      series: "Food Fighters",
      tourneyPresence: 2
    },
    {
      name: "Puerto Rico",
      abbr: "PR",
      gameName: "geopr_",
      series: "Geography",
      tourneyPresence: 1
    },
    {
      name: "Panama",
      abbr: "PNM",
      gameName: "geopa_",
      series: "Geography",
      tourneyPresence: -1
    },
    {
      name: "1955 Paris",
      abbr: "1955",
      gameName: "hist1955paris_",
      series: "History",
      tourneyPresence: 0
    },
    {
      name: "Golden Gate Bridge",
      abbr: "GGB",
      gameName: "geoggb_",
      series: "Geography",
      tourneyPresence: -1
    },
    {
      name: "Pacific Ocean",
      abbr: "PO",
      gameName: "geopacocean_",
      series: "Geography",
      tourneyPresence: -1
    },
    {
      name: "Desk",
      abbr: "DSK",
      gameName: "officedesk_",
      series: "Office Simulator",
      tourneyPresence: 1
    }
  ],
  includedStages: [
    {
      name: "Puerto Rico",
      abbr: "PR",
      gameName: "geopr_",
      series: "Geography",
      tourneyPresence: 1
    },
    {
      name: "Desk",
      abbr: "DSK",
      gameName: "officedesk_",
      series: "Office Simulator",
      tourneyPresence: 1
    }
  ]
};

export const LEGAL_UNCOMMON_EXCLUDE: { [property: string]: StageClassifications[] } = {
  allStages: [
    {
      name: "Ancient Pyramid",
      abbr: "AP",
      gameName: "histpyramid_",
      series: "History",
      tourneyPresence: -1
    },
    {
      name: "Under the Sea",
      abbr: "UtS",
      gameName: "mermaidsea_",
      series: "A Small Mermaid",
      tourneyPresence: 2
    },
    {
      name: "On Land",
      abbr: "OL",
      gameName: "mermaidland_",
      series: "A Small Mermaid",
      tourneyPresence: 1
    },
    {
      name: "Buffet Land",
      abbr: "BL",
      gameName: "johnbuffet_",
      series: "Hyper John Time",
      tourneyPresence: 0
    },
    {
      name: "Lava Land",
      abbr: "LL",
      gameName: "johnlava_",
      series: "Hyper John Time",
      tourneyPresence: 2
    }
  ],
  excludedStages: [
    {
      name: "Ancient Pyramid",
      abbr: "AP",
      gameName: "histpyramid_",
      series: "History",
      tourneyPresence: -1
    },
    {
      name: "Under the Sea",
      abbr: "UtS",
      gameName: "mermaidsea_",
      series: "A Small Mermaid",
      tourneyPresence: 2
    },
    {
      name: "Buffet Land",
      abbr: "BL",
      gameName: "johnbuffet_",
      series: "Hyper John Time",
      tourneyPresence: 0
    },
    {
      name: "Lava Land",
      abbr: "LL",
      gameName: "johnlava_",
      series: "Hyper John Time",
      tourneyPresence: 2
    }
  ]
};

export const LEGAL_RARE_PRESENT: StageClassifications[] = [
  {
    name: "Ancient Forest",
    abbr: "AF",
    gameName: "monsterwforest_",
    series: "Monster Hunter",
    tourneyPresence: 1
  },
  {
    name: "Deserted Island",
    abbr: "DI",
    gameName: "monstertriisland_",
    series: "Monster Hunter",
    tourneyPresence: 2
  },
  {
    name: "Family Room",
    abbr: "FR",
    gameName: "slicefamily_",
    series: "Slice of Life",
    tourneyPresence: -1
  },
  {
    name: "Dire Dire Docks",
    abbr: "DDD",
    gameName: "mariodocks_",
    series: "Super Mario",
    tourneyPresence: 2
  },
  {
    name: "Les Vagas",
    abbr: "LV",
    gameName: "tvcvgas_",
    series: "Tatsunoko vs Capcom",
    tourneyPresence: 0
  },
  {
    name: "Zen Monastery",
    abbr: "ZM",
    gameName: "religionzen_",
    series: "Religion",
    tourneyPresence: 2
  },
  {
    name: "Local Bar",
    abbr: "LB",
    gameName: "slicebar_",
    series: "Slice of Life",
    tourneyPresence: 2
  }
];

export const LEGAL_RARE_ABSENT: StageClassifications[] = [
  {
    name: "Metropolis",
    abbr: "MTR",
    gameName: "supermanmetro_",
    series: "DC Universe",
    tourneyPresence: -1
  },
  {
    name: "Mysterious Portal",
    abbr: "MP",
    gameName: "fantasyportal_",
    series: "Fantasy Land",
    tourneyPresence: 1
  },
  {
    name: "Elven Village",
    abbr: "EV",
    gameName: "fantasyelven_",
    series: "Fantasy Land",
    tourneyPresence: 1
  },
  {
    name: "Convenience Store",
    abbr: "CS",
    gameName: "sliceconvenience_",
    series: "Slice of Life",
    tourneyPresence: 0
  }
];

export const LEGAL_RARE_INCLUDE: { [property: string]: StageClassifications[] } = {
  allStages: [
    {
      name: "Pizza Time Palace",
      abbr: "PTP",
      gameName: "spidermanpizza_",
      series: "Spider-man",
      tourneyPresence: 1
    },
    {
      name: "Easy Street",
      abbr: "ES",
      gameName: "monopolyeasy_",
      series: "Monopoly",
      tourneyPresence: 2
    },
    {
      name: "Daily Bugle",
      abbr: "DB",
      gameName: "spidermanbugle_",
      series: "Spider-man",
      tourneyPresence: -1
    },
    {
      name: "Supermarket",
      abbr: "SMKT",
      gameName: "slicegrocery_",
      series: "Slice of Life",
      tourneyPresence: 1
    },
    {
      name: "Strideville Stadium",
      abbr: "SS",
      gameName: "sportsstride_",
      series: "Sports",
      tourneyPresence: 2
    },
    {
      name: "Playground",
      abbr: "PG",
      gameName: "schoolplayground_",
      series: "School",
      tourneyPresence: 0
    },
    {
      name: "Park Place",
      abbr: "PP",
      gameName: "monopolypark_",
      series: "Monopoly",
      tourneyPresence: 0
    }
  ],
  includedStages: [
    {
      name: "Easy Street",
      abbr: "ES",
      gameName: "monopolyeasy_",
      series: "Monopoly",
      tourneyPresence: 2
    },
    {
      name: "Strideville Stadium",
      abbr: "SS",
      gameName: "sportsstride_",
      series: "Sports",
      tourneyPresence: 2
    },
  ]
};

export const LEGAL_RARE_EXCLUDE: { [property: string]: StageClassifications[] } = {
  allStages: [
    {
      name: "Goodshop Laboratory",
      abbr: "GL",
      gameName: "goodlab_",
      series: "Goodshop",
      tourneyPresence: 1
    },
    {
      name: "Vanilla Villa",
      abbr: "VV",
      gameName: "johnvanilla_",
      series: "Hyper John Time",
      tourneyPresence: 2
    },
    {
      name: "Serenity",
      abbr: "SRN",
      gameName: "fireflyserenity_",
      series: "Firefly",
      tourneyPresence: -1
    },
    {
      name: "Circuit Country",
      abbr: "DD",
      gameName: "johncircuit_",
      series: "Hyper John Time",
      tourneyPresence: 0
    },
    {
      name: "New Kansas Jail",
      abbr: "NKJ",
      gameName: "brawlerjail_",
      series: "Broody Brawlers",
      tourneyPresence: 1
    },
    {
      name: "Ferris Wheel",
      abbr: "FW",
      gameName: "sliceferris_",
      series: "Slice of Life",
      tourneyPresence: 2
    },
    {
      name: "Amazon Forest",
      abbr: "AF",
      gameName: "geoamazon_",
      series: "Geography",
      tourneyPresence: 2
    },
    {
      name: "Destructionland",
      abbr: "DL",
      gameName: "blocksdestroy_",
      series: "Block Party",
      tourneyPresence: -1
    },
    {
      name: "Federal City",
      abbr: "FC",
      gameName: "supermanfed_",
      series: "Superman",
      tourneyPresence: 0
    },
  ],
  excludedStages: [
    {
      name: "Goodshop Laboratory",
      abbr: "GL",
      gameName: "goodlab_",
      series: "Goodshop",
      tourneyPresence: 1
    },
    {
      name: "Serenity",
      abbr: "SRN",
      gameName: "fireflyserenity_",
      series: "Firefly",
      tourneyPresence: -1
    },
    {
      name: "Circuit Country",
      abbr: "CC",
      gameName: "johncircuit_",
      series: "Hyper John Time",
      tourneyPresence: 0
    },
    {
      name: "New Kansas Jail",
      abbr: "NKJ",
      gameName: "brawlerjail_",
      series: "Broody Brawlers",
      tourneyPresence: 1
    },
    {
      name: "Destructionland",
      abbr: "DL",
      gameName: "blocksdestroy_",
      series: "Block Party",
      tourneyPresence: -1
    },
    {
      name: "Federal City",
      abbr: "FC",
      gameName: "supermanfed_",
      series: "Superman",
      tourneyPresence: 0
    },
  ]
};

export const TOURNEY: { input: StageClassifications[], output: {[propName: string]: StageClassifications[]} } = {
  input: [
    {
      name: "Battle Screen",
      abbr: "BS",
      gameName: "motherbattle_",
      series: "Mother",
      tourneyPresence: -1
    },
    {
      name: "Office",
      abbr: "OFF",
      gameName: "rainbowoffice_",
      series: "Captain Rainbow",
      tourneyPresence: 2
    },
    {
      name: "Place Station",
      abbr: "PS",
      gameName: "placestation_",
      series: "Miscellaneous",
      tourneyPresence: 0
    },
    {
      name: "Backyard",
      abbr: "BY",
      gameName: "nintendogsyard_",
      series: "Nintendogs",
      tourneyPresence: 1
    },
    {
      name: "Rooftop",
      abbr: "RT",
      gameName: "bondroof_",
      series: "James Bond",
      tourneyPresence: -1
    },
    {
      name: "Villestown",
      abbr: "VT",
      gameName: "villestown_",
      series: "Animal Crossing",
      tourneyPresence: 0
    },
    {
      name: "Bathtub",
      abbr: "BT",
      gameName: "nintendogsbath_",
      series: "Nintendogs",
      tourneyPresence: 2
    },
    {
      name: "Kitchen",
      abbr: "KT",
      gameName: "kitchen_",
      series: "Cooking Mama",
      tourneyPresence: 1
    }
  ],
  output: {
    legalCommon: [
      {
        name: "Place Station",
        abbr: "PS",
        gameName: "placestation_",
        series: "Miscellaneous",
        tourneyPresence: 0
      },
      {
        name: "Villestown",
        abbr: "VT",
        gameName: "villestown_",
        series: "Animal Crossing",
        tourneyPresence: 0
      },
    ],
    legalUncommon: [
      {
        name: "Kitchen",
        abbr: "KT",
        gameName: "kitchen_",
        series: "Cooking Mama",
        tourneyPresence: 1
      },
      {
        name: "Backyard",
        abbr: "BY",
        gameName: "nintendogsyard_",
        series: "Nintendogs",
        tourneyPresence: 1
      },
    ],
    legalRare: [
      {
        name: "Bathtub",
        abbr: "BT",
        gameName: "nintendogsbath_",
        series: "Nintendogs",
        tourneyPresence: 2
      },
      {
        name: "Office",
        abbr: "OFF",
        gameName: "rainbowoffice_",
        series: "Captain Rainbow",
        tourneyPresence: 2
      },
    ]
  }
};

export const TOURNEY_STAGE_ID: StageClassifications[] = [
  {
    name: "Vale of Vacuums",
    abbr: "SF",
    gameName: "dirtyvacuum_",
    series: "Dirtymancing",
    tourneyPresence: 1
  },
  {
    name: "Ashley Farm",
    abbr: "GF",
    gameName: "baconashley_",
    series: "Iterative Bacon Hero",
    tourneyPresence: 1
  },
  {
    name: "Double-Door Foyer",
    abbr: "IQ",
    gameName: "homefoyer_",
    series: "Welcome Home",
    tourneyPresence: 0
  },
  {
    name: "Galactic Microscope Lab",
    abbr: "EB",
    gameName: "lessonmicro_",
    series: "Lesson Learned",
    tourneyPresence: 1
  },
  {
    name: "Jerry Arctic's Life Insurance Office",
    abbr: "NJ",
    gameName: "unimaginablejerry_",
    series: "Quest of the Unimaginable",
    tourneyPresence: 1
  },
  {
    name: "Karl's Place",
    abbr: "KQ",
    gameName: "neverkarl_",
    series: "Neverwhere",
    tourneyPresence: 1
  },
  {
    name: "HRT Bank",
    abbr: "LD",
    gameName: "opulencebank_",
    series: "Opulence",
    tourneyPresence: 2
  },
  {
    name: "Questionland",
    abbr: "BM",
    gameName: "truthquestion_",
    series: "Truthfinder",
    tourneyPresence: 2
  }
];

export const TOURNEY_STAGE_LABEL_FOR: StageClassifications[] = [
  {
    name: "Iciclipse Dungeon",
    abbr: "EL",
    gameName: "ventureice_",
    series: "Venture World",
    tourneyPresence: 0
  },
  {
    name: "Verdent Pyramid",
    abbr: "AN",
    gameName: "zealpyramid_",
    series: "Zeal",
    tourneyPresence: 2
  },
  {
    name: "Oddball Temple",
    abbr: "ES",
    gameName: "presenceodd_",
    series: "Presence",
    tourneyPresence: 1
  },
  {
    name: "Basketball Court",
    abbr: "VP",
    gameName: "youthcourt_",
    series: "Youth of the Ancients",
    tourneyPresence: 2
  },
  {
    name: "Pepper's Playground",
    abbr: "QF",
    gameName: "edpepper_",
    series: "Edward Island",
    tourneyPresence: 1
  },
  {
    name: "Zedd Dredd's Canopy",
    abbr: "UV",
    gameName: "deathcanopy_",
    series: "Deathfarm",
    tourneyPresence: 0
  },
  {
    name: "Zephyr Ring Drawer",
    abbr: "YT",
    gameName: "dearestdrawer_",
    series: "Hello Dearest",
    tourneyPresence: 1
  },
  {
    name: "Frank's Discussion Table",
    abbr: "JG",
    gameName: "jefffrank_",
    series: "Jeff Jameson",
    tourneyPresence: 0
  }
];

export const TOURNEY_SHOW_LEGAL_COMMON: StageClassifications[] = [
  {
    name: "Murky Swamp",
    abbr: "BZ",
    gameName: "farswamp_",
    series: "Farawayland",
    tourneyPresence: 0
  },
  {
    name: "Abandoned Castle",
    abbr: "LA",
    gameName: "explorercastle_",
    series: "Explorer",
    tourneyPresence: 0
  },
  {
    name: "Fairless Mills",
    abbr: "ID",
    gameName: "farmmills_",
    series: "Fantasy Farmer",
    tourneyPresence: 0
  }
];

export const TOURNEY_SHOW_LEGAL_COMMON_BANNED: StageClassifications[] = [
  {
    name: "Turkey Factory",
    abbr: "PN",
    gameName: "farmturkey_",
    series: "Fantasy Farmer",
    tourneyPresence: -1
  },
  {
    name: "Mound of Ashes",
    abbr: "TI",
    gameName: "fireashes_",
    series: "World of Fire",
    tourneyPresence: -1
  },
  {
    name: "Aphid Farms",
    abbr: "RV",
    gameName: "farmaphid_",
    series: "Fantasy Farmer",
    tourneyPresence: 0
  }
];


export const TOURNEY_SHOW_LEGAL_UNCOMMON = [
  {
    name: "Atrophy Island",
    abbr: "CB",
    gameName: "moroseatrophy_",
    series: "Morose Man",
    tourneyPresence: 1
  },
  {
    name: "Tutor Palace",
    abbr: "ZS",
    gameName: "schooltutor_",
    series: "School",
    tourneyPresence: 1
  },
  {
    name: "Forgiveness Forest",
    abbr: "FP",
    gameName: "virtueforest",
    series: "Virtue Reality",
    tourneyPresence: 1
  }
];

export const TOURNEY_SHOW_LEGAL_UNCOMMON_BANNED = [
  {
    name: "Entropical Island",
    abbr: "LG",
    gameName: "thermoisland_",
    series: "The Thermodynamic Duo",
    tourneyPresence: 1
  },
  {
    name: "Interrogation Room",
    abbr: "EC",
    gameName: "policequestion_",
    series: "Police Force Prime",
    tourneyPresence: 1
  },
  {
    name: "Ginormous Jenga Jungle",
    abbr: "UP",
    gameName: "fairlyjenga_",
    series: "A Fairly Large Adventure Game",
    tourneyPresence: -1
  }
];

export const TOURNEY_SHOW_LEGAL_RARE = [
  {
    name: "Break Room",
    abbr: "XU",
    gameName: "janitorbreak_",
    series: "Super Janitor",
    tourneyPresence: 2
  },
  {
    name: "Hotel Lobby",
    abbr: "YR",
    gameName: "managehotel_",
    series: "Ultra Manager",
    tourneyPresence: 2
  }
];

export const TOURNEY_SHOW_LEGAL_RARE_BANNED = [
  {
    name: "Bully Beach",
    abbr: "RO",
    gameName: "racebeach_",
    series: "Raceway Inferno",
    tourneyPresence: 2
  },
  {
    name: "Federal Alliance Headquarters",
    abbr: "PO",
    gameName: "superhq_",
    series: "Super Group Alpha",
    tourneyPresence: -1
  },
  {
    name: "Easter Bunny's Hideout",
    abbr: "FI",
    gameName: "holidayeaster_",
    series: "World of Holidays",
    tourneyPresence: 2
  }
];

export const TOURNEY_SHOW_LEGAL_COMMON_UNCOMMON = [
  {
    name: "Ferretable Wasteland",
    abbr: "UW",
    gameName: "animalferret_",
    series: "Animalice",
    tourneyPresence: 0
  },
  {
    name: "Frantic Freezer",
    abbr: "VI",
    gameName: "cookfreezer_",
    series: "Chaos Cook",
    tourneyPresence: 0
  },
  {
    name: "Acrid Acid Antfarm",
    abbr: "EO",
    gameName: "petsacrid_",
    series: "Pets: The Musical",
    tourneyPresence: 1
  },
  {
    name: "Acorn Tree of Actual Treasure",
    abbr: "JP",
    gameName: "flantasytree_",
    series: "Flantastic Flantasy",
    tourneyPresence: 0
  },
  {
    name: "Shia Shire",
    abbr: "EY",
    gameName: "celebrityshire_",
    series: "Celebrity Fighters",
    tourneyPresence: 1
  }
];

export const TOURNEY_SHOW_LEGAL_COMMON_UNCOMMON_BANNED = [
  {
    name: "Chris's Christening Cruise",
    abbr: "JF",
    gameName: "fortuneboat_",
    series: "Fortune Universe",
    tourneyPresence: 1
  },
  {
    name: "Goldland",
    abbr: "AV",
    gameName: "periodicgold_",
    series: "The Periodic Table That Could",
    tourneyPresence: -1
  },
  {
    name: "Foul Fowl Farm",
    abbr: "EX",
    gameName: "animalfarm_",
    series: "Animalice",
    tourneyPresence: 0
  },
  {
    name: "Fancy Fortune Frontier",
    abbr: "BE",
    gameName: "fortunefrontier_",
    series: "Fortune Universe",
    tourneyPresence: 0
  },
  {
    name: "Inflatable Interdimensional Portal",
    abbr: "QQ",
    gameName: "inventorportal_",
    series: "Inventor Adventures",
    tourneyPresence: 1
  }
];

export const TOURNEY_SHOW_LEGAL_COMMON_RARE = [
  {
    name: "Fantasy Flan Land",
    abbr: "MC",
    gameName: "courageflan_",
    series: "Courage the Cowardly Game",
    tourneyPresence: 2
  },
  {
    name: "French Fry Temple",
    abbr: "YQ",
    gameName: "megasfry_",
    series: "Megas Deluxe",
    tourneyPresence: 2
  },
  {
    name: "Dog Tower",
    abbr: "LS",
    gameName: "petsdog_",
    series: "Pets",
    tourneyPresence: 0
  },
  {
    name: "Ferris Windmill",
    abbr: "ZE",
    gameName: "moviemill_",
    series: "Movie Mash",
    tourneyPresence: 2
  },
  {
    name: "Introspective Pizza Oven",
    abbr: "KE",
    gameName: "furnitureoven_",
    series: "Absurd Furniture",
    tourneyPresence: 0
  },
  {
    name: "Widened Barricade",
    abbr: "WS",
    gameName: "armybarricade_",
    series: "Army Time Zero",
    tourneyPresence: 2
  }
];

export const TOURNEY_SHOW_LEGAL_COMMON_RARE_BANNED = [
  {
    name: "Frere Praire",
    abbr: "JE",
    gameName: "folkfrere_",
    series: "Folk Fair",
    tourneyPresence: -1
  },
  {
    name: "Tremendously Towering Tom's Pizza",
    abbr: "VE",
    gameName: "judytom_",
    series: "The EJudycator",
    tourneyPresence: -1
  },
  {
    name: "Flower World",
    abbr: "IR",
    gameName: "johnflower_",
    series: "Super John Time",
    tourneyPresence: 2
  },
  {
    name: "Destructible Dance Party",
    abbr: "LZ",
    gameName: "destroyparty_",
    series: "Destroy Things Now",
    tourneyPresence: 0
  },
  {
    name: "Actual Archetype Archway",
    abbr: "PS",
    gameName: "literacerarch_",
    series: "Literacers",
    tourneyPresence: 2
  }
];

export const TOURNEY_SHOW_LEGAL_UNCOMMON_RARE = [
  {
    name: "Howdy-Doody Howie Land",
    abbr: "OD",
    gameName: "greethowdy_",
    series: "Greetinator Beta",
    tourneyPresence: 1
  },
  {
    name: "Fair Enough Fairy Town",
    abbr: "TE",
    gameName: "johnfairy_",
    series: "Super John Time",
    tourneyPresence: 2
  },
  {
    name: "Manger Manager's Office",
    abbr: "XB",
    gameName: "historymanager_",
    series: "History Team",
    tourneyPresence: 2
  },
  {
    name: "Picnic",
    abbr: "AL",
    gameName: "foodpicnic_",
    series: "Food Fighters",
    tourneyPresence: 2
  },
  {
    name: "The Unquestionable Quentin's Quarry",
    abbr: "GK",
    gameName: "alliteratequentin_",
    series: "Alliteration Island",
    tourneyPresence: 1
  }
];

export const TOURNEY_SHOW_LEGAL_UNCOMMON_RARE_BANNED = [
  {
    name: "Forcefield Fence",
    abbr: "VZ",
    gameName: "alliteratefence_",
    series: "Alliteration Island",
    tourneyPresence: 2
  },
  {
    name: "Creator's Crater",
    abbr: "LC",
    gameName: "buildercrater_",
    series: "Builder Squad",
    tourneyPresence: -1
  },
  {
    name: "Fort 49",
    abbr: "JD",
    gameName: "armyfort_",
    series: "Army Team Squad",
    tourneyPresence: 1
  },
  {
    name: "Trevor Town",
    abbr: "UO",
    gameName: "alliteratetrevor_",
    series: "Alliteration Island",
    tourneyPresence: 1
  },
  {
    name: "Picture Perfect Patio",
    abbr: "QX",
    gameName: "paintpatio_",
    series: "It's Painting Time!",
    tourneyPresence: -1
  }
];

export const TOURNEY_HIDE_LEGAL_BANNED = [
  {
    name: "True Love Island",
    abbr: "SL",
    gameName: "romanceisland_",
    series: "Romance Journey",
    tourneyPresence: -1
  },
  {
    name: "Board Room",
    abbr: "LU",
    gameName: "workboard_",
    series: "Workplace Adventure",
    tourneyPresence: -1
  },
  {
    name: "Fordy River",
    abbr: "OO",
    gameName: "passengerfordy_",
    series: "Passenger Road",
    tourneyPresence: -1
  }
];

export const TOURNEY_STAGE_SORT: {
  inputStages: StageClassifications[],
  sortedStages: { [property: string]: StageClassifications[] }
} = {

  inputStages: [
    {
      name: "Extra Credit Round",
      abbr: "TM",
      gameName: "schoolextra_",
      series: "School-Time Hustle",
      tourneyPresence: 2
    },
    {
      name: "Dunes of Nurfesque",
      abbr: "TN",
      gameName: "johndunes_",
      series: "Super John Time",
      tourneyPresence: 0
    },
    {
      name: "Questionable Workshop",
      abbr: "GU",
      gameName: "ceramicquestionable_",
      series: "Ceramic Maker",
      tourneyPresence: 1
    },
    {
      name: "House of Horrors",
      abbr: "XT",
      gameName: "jeffhorror_",
      series: "Jeffrey's Revenge",
      tourneyPresence: 1
    },
    {
      name: "Roadway",
      abbr: "WJ",
      gameName: "condescendroad_",
      series: "Condescension Man",
      tourneyPresence: 1
    },
    {
      name: "Igloo",
      abbr: "MF",
      gameName: "quailigloo_",
      series: "Quailentino",
      tourneyPresence: 0
    },
    {
      name: "Sentinel Station",
      abbr: "UB",
      gameName: "olveriasentinel_",
      series: "Acts of Olveria",
      tourneyPresence: 1
    },
    {
      name: "Cargo Hold",
      abbr: "ZG",
      gameName: "prodigycargo_",
      series: "Prodigy",
      tourneyPresence: 1
    },
    {
      name: "Island Port",
      abbr: "WI",
      gameName: "antelopeport_",
      series: "Antelope Escape",
      tourneyPresence: 2
    },
    {
      name: "Graph Paper",
      abbr: "ZO",
      gameName: "leveragegraph_",
      series: "Leverage",
      tourneyPresence: 2
    },
    {
      name: "Friendship City",
      abbr: "CN",
      gameName: "friendcity_",
      series: "King of Friendship",
      tourneyPresence: 2
    },
    {
      name: "Neverwind Castle",
      abbr: "KA",
      gameName: "duskcastle_",
      series: "Until Dusk",
      tourneyPresence: 1
    },
    {
      name: "Gerald's Bar",
      abbr: "TT",
      gameName: "youngbar_",
      series: "Young Jimmy",
      tourneyPresence: 2
    },
    {
      name: "Nigel's Cabin",
      abbr: "ZX",
      gameName: "evercabin_",
      series: "Everwilds",
      tourneyPresence: 0
    },
    {
      name: "Investigation Desk",
      abbr: "MI",
      gameName: "probabledesk_",
      series: "Probable Cause",
      tourneyPresence: 2
    }
  ],

  sortedStages: {
    legalCommon: [
      {
        name: "Dunes of Nurfesque",
        abbr: "UC",
        gameName: "johndunes_",
        series: "Super John Time",
        tourneyPresence: 0
      },
      {
        name: "Igloo",
        abbr: "JK",
        gameName: "quailigloo_",
        series: "Quailentino",
        tourneyPresence: 0
      },
      {
        name: "Nigel's Cabin",
        abbr: "AT",
        gameName: "evercabin_",
        series: "Everwilds",
        tourneyPresence: 0
      }
    ],
    legalUncommon: [
      {
        name: "Cargo Hold",
        abbr: "NK",
        gameName: "prodigycargo_",
        series: "Prodigy",
        tourneyPresence: 1
      },
      {
        name: "House of Horrors",
        abbr: "LJ",
        gameName: "jeffhorror_",
        series: "Jeffrey's Revenge",
        tourneyPresence: 1
      },
      {
        name: "Neverwind Castle",
        abbr: "XX",
        gameName: "duskcastle_",
        series: "Until Dusk",
        tourneyPresence: 1
      },
      {
        name: "Questionable Workshop",
        abbr: "RG",
        gameName: "ceramicquestionable_",
        series: "Ceramic Maker",
        tourneyPresence: 1
      },
      {
        name: "Roadway",
        abbr: "DA",
        gameName: "condescendroad_",
        series: "Condescension Man",
        tourneyPresence: 1
      },
      {
        name: "Sentinel Station",
        abbr: "EA",
        gameName: "olveriasentinel_",
        series: "Acts of Olveria",
        tourneyPresence: 1
      }
    ],
    legalRare: [
      {
        name: "Extra Credit Round",
        abbr: "MS",
        gameName: "schoolextra_",
        series: "School-Time Hustle",
        tourneyPresence: 2
      },
      {
        name: "Friendship City",
        abbr: "SH",
        gameName: "friendcity_",
        series: "King of Friendship",
        tourneyPresence: 2
      },
      {
        name: "Gerald's Bar",
        abbr: "PL",
        gameName: "youngbar_",
        series: "Young Jimmy",
        tourneyPresence: 2
      },
      {
        name: "Graph Paper",
        abbr: "UD",
        gameName: "leveragegraph_",
        series: "Leverage",
        tourneyPresence: 2
      },
      {
        name: "Investigation Desk",
        abbr: "DT",
        gameName: "probabledesk_",
        series: "Probable Cause",
        tourneyPresence: 2
      },
      {
        name: "Island Port",
        abbr: "HJ",
        gameName: "antelopeport_",
        series: "Antelope Escape",
        tourneyPresence: 2
      }
    ]
  }
};

export const SERIES_STAGE_ID: StageClassifications[] = [
  {
    name: "Scenterfuge",
    abbr: "WP",
    gameName: "umscent_",
    series: "Um What",
    tourneyPresence: 0
  },
  {
    name: "Meritable Wasteland",
    abbr: "TQ",
    gameName: "confusingmerit_",
    series: "Very Confusing Game",
    tourneyPresence: 2
  },
  {
    name: "Snack Den",
    abbr: "BQ",
    gameName: "flavorden_",
    series: "Fancy Flavor Forest",
    tourneyPresence: 0
  },
  {
    name: "Zen Center",
    abbr: "NY",
    gameName: "nextzen_",
    series: "Next Time",
    tourneyPresence: 2
  },
  {
    name: "Laurel Theater",
    abbr: "MP",
    gameName: "noxitheater_",
    series: "Noxiomometer",
    tourneyPresence: 2
  },
  {
    name: "Trobble's Trench",
    abbr: "JO",
    gameName: "ferrettrench_",
    series: "Ferret Kingdom",
    tourneyPresence: 1
  },
  {
    name: "Enterprise Office",
    abbr: "MO",
    gameName: "interestenterprise_",
    series: "Interest",
    tourneyPresence: 0
  },
  {
    name: "West Wing Section A",
    abbr: "AJ",
    gameName: "owwwa_",
    series: "Ow",
    tourneyPresence: 1
  }
];

export const SERIES_STAGE_LABEL_FOR: StageClassifications[] = [
  {
    name: "Separation Station",
    abbr: "MA",
    gameName: "arggghstation_",
    series: "Argggh!",
    tourneyPresence: 1
  },
  {
    name: "Z. Ablo's Tent",
    abbr: "ZF",
    gameName: "devilablo_",
    series: "Devil's Plateau",
    tourneyPresence: 0
  },
  {
    name: "Uptown",
    abbr: "SV",
    gameName: "trackup_",
    series: "Track Record",
    tourneyPresence: 1
  },
  {
    name: "Beto's Revenge Land",
    abbr: "JN",
    gameName: "yuibeto_",
    series: "Yui Monosuke",
    tourneyPresence: 1
  },
  {
    name: "Arid Arrowland",
    abbr: "TZ",
    gameName: "possiblearid_",
    series: "Possible Squad",
    tourneyPresence: 1
  },
  {
    name: "Barry's Basement",
    abbr: "UQ",
    gameName: "awrybasement_",
    series: "Ronald Awry",
    tourneyPresence: 1
  },
  {
    name: "Roger's Disco",
    abbr: "KT",
    gameName: "jrdisco_",
    series: "Jr. Jukebox",
    tourneyPresence: 2
  },
  {
    name: "Orange Bananaland",
    abbr: "RA",
    gameName: "orangeorange_",
    series: "Orange You Glad",
    tourneyPresence: 0
  }
];

export const SERIES_SHOW: StageClassifications[] = [
  {
    name: "Affordable Mortgage Land",
    abbr: "IW",
    gameName: "financemorgage_",
    series: "Finance Fanatic",
    tourneyPresence: 2
  },
  {
    name: "Power Palace",
    abbr: "NZ",
    gameName: "johnpalace_",
    series: "Super John Time",
    tourneyPresence: 5
  }
];

export const SERIES_SORT: { [property: string]: StageClassifications[] } = {
  inputStages: [
    {
      name: "Feral Food Forest",
      abbr: "IL",
      gameName: "johnferal_",
      series: "Super John Time",
      tourneyPresence: 3
    },
    {
      name: "Contestant's Chamber",
      abbr: "UY",
      gameName: "questionchamber_",
      series: "Question Quest",
      tourneyPresence: 13
    },
    {
      name: "Marie's Massage Parlor",
      abbr: "BB",
      gameName: "gentlemarie_",
      series: "Gentle Fighter",
      tourneyPresence: 25
    },
    {
      name: "Old Man's Cabin",
      abbr: "CE",
      gameName: "wherecabin_",
      series: "Wherewood",
      tourneyPresence: 0
    },
    {
      name: "Fandost Court",
      abbr: "OU",
      gameName: "judgefandost_",
      series: "Judgementron",
      tourneyPresence: 65
    },
    {
      name: "Axle Ottle's Castle",
      abbr: "OB",
      gameName: "ifritaxle_",
      series: "Ifrit",
      tourneyPresence: 81
    },
    {
      name: "Ludwig's Living Room",
      abbr: "OC",
      gameName: "nickludwig_",
      series: "Next Door Nick",
      tourneyPresence: -1
    },
    {
      name: "Trentshop Cave",
      abbr: "GE",
      gameName: "lesaolamoscave_",
      series: "Light of Lesolamos",
      tourneyPresence: 97
    },
    {
      name: "Very Berry Barry's Banana Boat Tour",
      abbr: "ZZ",
      gameName: "berryboat_",
      series: "Berry Barry",
      tourneyPresence: 84
    },
    {
      name: "Fairless Fareway",
      abbr: "ZB",
      gameName: "olliefairless_",
      series: "Ollie Alden",
      tourneyPresence: 20
    },
    {
      name: "Hypotenuse Hippo's Lagoon",
      abbr: "QB",
      gameName: "abacuslagoon_",
      series: "Abigail Abacus",
      tourneyPresence: -2
    },
    {
      name: "Farm",
      abbr: "CR",
      gameName: "hunterfarm_",
      series: "Hunter's Lagoon",
      tourneyPresence: 85
    },
    {
      name: "Sue's Bar",
      abbr: "CO",
      gameName: "detrimentalsue_",
      series: "Detrimental DJ",
      tourneyPresence: 14
    },
    {
      name: "Pop Shop",
      abbr: "DW",
      gameName: "citizenshop_",
      series: "Citizen O'Brian",
      tourneyPresence: -35
    },
    {
      name: "Miyamoto Temple",
      abbr: "ZV",
      gameName: "zenjamiyamoto_",
      series: "Zenja",
      tourneyPresence: 24
    },
    {
      name: "Potato Sack",
      abbr: "WN",
      gameName: "vealpotato_",
      series: "Veal of Legends",
      tourneyPresence: 59
    },
    {
      name: "Mariana's House",
      abbr: "NL",
      gameName: "trenchmariana_",
      series: "Trenchville",
      tourneyPresence: 2
    },
    {
      name: "Union Office",
      abbr: "JR",
      gameName: "unionsoffice_",
      series: "Unions of the Laboretum",
      tourneyPresence: 1
    },
    {
      name: "Museum",
      abbr: "YA",
      gameName: "krossmuseum_",
      series: "Krosspharoah's Grave",
      tourneyPresence: 57
    },
    {
      name: "Dream Tapestry Estate",
      abbr: "VC",
      gameName: "dphangestate_",
      series: "D'Phang Schwanheiser",
      tourneyPresence: 30
    },
    {
      name: "Barnyard Bananza",
      abbr: "LF",
      gameName: "roosterbananza_",
      series: "Radical Rooster",
      tourneyPresence: 17
    },
    {
      name: "Moonside Theater",
      abbr: "TU",
      gameName: "yoinkstheater_",
      series: "Yoinks McGee",
      tourneyPresence: 34
    },
    {
      name: "Phinderbust Leaf Cafe",
      abbr: "OJ",
      gameName: "acorncafe_",
      series: "Exit the Acorn",
      tourneyPresence: 97
    },
    {
      name: "Letterby Cron's Oasis",
      abbr: "IT",
      gameName: "onyaoasis_",
      series: "I. F. Onya",
      tourneyPresence: 61
    },
    {
      name: "Planet Matroon",
      abbr: "HL",
      gameName: "xcelmatroon_",
      series: "Xcel Squad",
      tourneyPresence: 29
    },
    {
      name: "Police Academy",
      abbr: "KH",
      gameName: "pheasantpol_",
      series: "Federal Pheasant Brigade",
      tourneyPresence: 0
    },
    {
      name: "Temporalamew High School",
      abbr: "GB",
      gameName: "philschool_",
      series: "Phil of the Present",
      tourneyPresence: 31
    },
    {
      name: "Vessel of Untrusted Fentelsaunds",
      abbr: "KX",
      gameName: "windsvessel_",
      series: "Nestled Winds",
      tourneyPresence: 34
    },
    {
      name: "Front Yard",
      abbr: "IG",
      gameName: "garageyard_",
      series: "Secrets of the Garage Sale",
      tourneyPresence: 17
    },
    {
      name: "Yggdrasil's Chamber",
      abbr: "NG",
      gameName: "templeyggdrasil_",
      series: "Temple Spirits",
      tourneyPresence: 32
    }
  ],
  sortedStages: [
    {
      name: "Hypotenuse Hippo's Lagoon",
      abbr: "MK",
      gameName: "abacuslagoon_",
      series: "Abigail Abacus",
      tourneyPresence: -2
    },
    {
      name: "Very Berry Barry's Banana Boat Tour",
      abbr: "PE",
      gameName: "berryboat_",
      series: "Berry Barry",
      tourneyPresence: 84
    },
    {
      name: "Pop Shop",
      abbr: "IS",
      gameName: "citizenshop_",
      series: "Citizen O'Brian",
      tourneyPresence: -35
    },
    {
      name: "Dream Tapestry Estate",
      abbr: "QK",
      gameName: "dphangestate_",
      series: "D'Phang Schwanheiser",
      tourneyPresence: 30
    },
    {
      name: "Sue's Bar",
      abbr: "XW",
      gameName: "detrimentalsue_",
      series: "Detrimental DJ",
      tourneyPresence: 14
    },
    {
      name: "Phinderbust Leaf Cafe",
      abbr: "AW",
      gameName: "acorncafe_",
      series: "Exit the Acorn",
      tourneyPresence: 97
    },
    {
      name: "Police Academy",
      abbr: "FF",
      gameName: "pheasantpol_",
      series: "Federal Pheasant Brigade",
      tourneyPresence: 0
    },
    {
      name: "Marie's Massage Parlor",
      abbr: "YJ",
      gameName: "gentlemarie_",
      series: "Gentle Fighter",
      tourneyPresence: 25
    },
    {
      name: "Farm",
      abbr: "RH",
      gameName: "hunterfarm_",
      series: "Hunter's Lagoon",
      tourneyPresence: 85
    },
    {
      name: "Letterby Cron's Oasis",
      abbr: "YG",
      gameName: "onyaoasis_",
      series: "I. F. Onya",
      tourneyPresence: 61
    },
    {
      name: "Axle Ottle's Castle",
      abbr: "DV",
      gameName: "ifritaxle_",
      series: "Ifrit",
      tourneyPresence: 81
    },
    {
      name: "Fandost Court",
      abbr: "DB",
      gameName: "judgefandost_",
      series: "Judgementron",
      tourneyPresence: 65
    },
    {
      name: "Museum",
      abbr: "CU",
      gameName: "krossmuseum_",
      series: "Krosspharoah's Grave",
      tourneyPresence: 57
    },
    {
      name: "Trentshop Cave",
      abbr: "CM",
      gameName: "lesaolamoscave_",
      series: "Light of Lesolamos",
      tourneyPresence: 97
    },
    {
      name: "Vessel of Untrusted Fentelsaunds",
      abbr: "TX",
      gameName: "windsvessel_",
      series: "Nestled Winds",
      tourneyPresence: 34
    },
    {
      name: "Ludwig's Living Room",
      abbr: "QG",
      gameName: "nickludwig_",
      series: "Next Door Nick",
      tourneyPresence: -1
    },
    {
      name: "Fairless Fareway",
      abbr: "ML",
      gameName: "olliefairless_",
      series: "Ollie Alden",
      tourneyPresence: 20
    },
    {
      name: "Temporalamew High School",
      abbr: "UZ",
      gameName: "philschool_",
      series: "Phil of the Present",
      tourneyPresence: 31
    },
    {
      name: "Contestant's Chamber",
      abbr: "TC",
      gameName: "questionchamber_",
      series: "Question Quest",
      tourneyPresence: 13
    },
    {
      name: "Barnyard Bananza",
      abbr: "OS",
      gameName: "roosterbananza_",
      series: "Radical Rooster",
      tourneyPresence: 17
    },
    {
      name: "Front Yard",
      abbr: "QH",
      gameName: "garageyard_",
      series: "Secrets of the Garage Sale",
      tourneyPresence: 17
    },
    {
      name: "Feral Food Forest",
      abbr: "YZ",
      gameName: "johnferal_",
      series: "Super John Time",
      tourneyPresence: 3
    },
    {
      name: "Yggdrasil's Chamber",
      abbr: "WA",
      gameName: "templeyggdrasil_",
      series: "Temple Spirits",
      tourneyPresence: 32
    },
    {
      name: "Mariana's House",
      abbr: "WC",
      gameName: "trenchmariana_",
      series: "Trenchville",
      tourneyPresence: 2
    },
    {
      name: "Union Office",
      abbr: "EG",
      gameName: "unionsoffice_",
      series: "Unions of the Laboretum",
      tourneyPresence: 1
    },
    {
      name: "Potato Sack",
      abbr: "RJ",
      gameName: "vealpotato_",
      series: "Veal of Legends",
      tourneyPresence: 59
    },
    {
      name: "Old Man's Cabin",
      abbr: "KB",
      gameName: "wherecabin_",
      series: "Wherewood",
      tourneyPresence: 0
    },
    {
      name: "Planet Matroon",
      abbr: "MY",
      gameName: "xcelmatroon_",
      series: "Xcel Squad",
      tourneyPresence: 29
    },
    {
      name: "Moonside Theater",
      abbr: "RU",
      gameName: "yoinkstheater_",
      series: "Yoinks McGee",
      tourneyPresence: 34
    },
    {
      name: "Miyamoto Temple",
      abbr: "ZD",
      gameName: "zenjamiyamoto_",
      series: "Zenja",
      tourneyPresence: 24
    }
  ]
};

export const SERIES_INDIVIDUAL_SHOW: { series: string, selections: StageClassifications[] } = {
  series: "Fun Physics Fair",
  selections: [
    {
      name: "Apple Tree",
      abbr: "UT",
      gameName: "physicsapple_",
      series: "Fun Physics Fair",
      tourneyPresence: 2
    },
    {
      name: "Tall Tower",
      abbr: "PA",
      gameName: "physicstower_",
      series: "Fun Physics Fair",
      tourneyPresence: 8
    }
  ]
};

export const SERIES_INDIVIDUAL_HIDE: { series: string, selections: StageClassifications[] } = {
  series: "Fenton Barrenceno",
  selections: [
    {
      name: "Barren Beach",
      abbr: "LK",
      gameName: "incrediblebarren_",
      series: "Incredible Islands",
      tourneyPresence: 8
    },
    {
      name: "Land of Several Snakes",
      abbr: "RN",
      gameName: "johnsnakes_",
      series: "Super John Time",
      tourneyPresence: -1
    },
    {
      name: "Italian Restaurant",
      abbr: "LE",
      gameName: "fooditalian_",
      series: "Food Fighters",
      tourneyPresence: 2
    },
    {
      name: "Aptitude Island",
      abbr: "RS",
      gameName: "brainsaptitude_",
      series: "Adventures in Brains",
      tourneyPresence: 1
    }
  ]
};

export const SERIES_INDIVIDUAL_INCLUDE: { series: string, allStages: StageClassifications[], includedStages: StageClassifications[] } = {
  series: "Super John Time",
  allStages: [
    {
      name: "Tall Tall Tower",
      abbr: "CL",
      gameName: "johntower_",
      series: "Super John Time",
      tourneyPresence: 3
    },
    {
      name: "Treble Tower",
      abbr: "JI",
      gameName: "minstreltreble_",
      series: "Magical Minstrel",
      tourneyPresence: 1
    },
    {
      name: "FanciFeast Diner",
      abbr: "DK",
      gameName: "foodfancifeast_",
      series: "Food Fighters",
      tourneyPresence: 1
    },
    {
      name: "Average Orange Orchid",
      abbr: "YN",
      gameName: "johnorchid_",
      series: "Super John Time",
      tourneyPresence: 5
    },
    {
      name: "Beat's Beet Beer Pub",
      abbr: "GY",
      gameName: "foodbeet_",
      series: "Food Fighters",
      tourneyPresence: 8
    },
    {
      name: "Powerful Purple Platter Place",
      abbr: "RW",
      gameName: "johnplatter_",
      series: "Super John Time",
      tourneyPresence: -1
    },
    {
      name: "Masterful Matriarch's Museum",
      abbr: "UK",
      gameName: "johnmuseum_",
      series: "Super John Time",
      tourneyPresence: 2
    }
  ],
  includedStages: [
    {
      name: "Tall Tall Tower",
      abbr: "LY",
      gameName: "johntower_",
      series: "Super John Time",
      tourneyPresence: 3
    },
    {
      name: "Average Orange Orchid",
      abbr: "AK",
      gameName: "johnorchid_",
      series: "Super John Time",
      tourneyPresence: 5
    },
    {
      name: "Powerful Purple Platter Place",
      abbr: "DL",
      gameName: "johnplatter_",
      series: "Super John Time",
      tourneyPresence: -1
    },
    {
      name: "Masterful Matriarch's Museum",
      abbr: "MN",
      gameName: "johnmuseum_",
      series: "Super John Time",
      tourneyPresence: 2
    }
  ]
};

export const SERIES_INDIVIDUAL_EXCLUDE: { series: string, allStages: StageClassifications[], excludedStages: StageClassifications[] } = {
  series: "Fate of Fairies",
  allStages: [
    {
      name: "Root of Yggdrasil",
      abbr: "RD",
      gameName: "fairiesroot_",
      series: "Fate of Fairies",
      tourneyPresence: 9
    },
    {
      name: "Back Room",
      abbr: "CA",
      gameName: "workback_",
      series: "Workplace",
      tourneyPresence: -2
    },
    {
      name: "Ferret Fountain",
      abbr: "HR",
      gameName: "fairiesroot_",
      series: "Fate of Fairies",
      tourneyPresence: 11
    },
    {
      name: "Trash Town",
      abbr: "SB",
      gameName: "johntrash_",
      series: "Super John Time",
      tourneyPresence: 2
    },
    {
      name: "An Abysmal Palace",
      abbr: "SU",
      gameName: "moodpalace_",
      series: "Mood Master",
      tourneyPresence: 3
    }
  ],
  excludedStages: [
    {
      name: "Back Room",
      abbr: "OH",
      gameName: "workback_",
      series: "Workplace",
      tourneyPresence: -2
    },
    {
      name: "Trash Town",
      abbr: "LH",
      gameName: "johntrash_",
      series: "Super John Time",
      tourneyPresence: 2
    },
    {
      name: "An Abysmal Palace",
      abbr: "XQ",
      gameName: "moodpalace_",
      series: "Mood Master",
      tourneyPresence: 3
    }
  ]
};

export const SERIES_INDIVIDUAL_EXCLUDE_BLANK: { series: string, allStages: StageClassifications[], excludedStages: StageClassifications[] } = {
  series: "",
  allStages: [
    {
      name: "Back at the Ranch",
      abbr: "AZ",
      gameName: "cowranch_",
      series: "Cowllege Credit Man",
      tourneyPresence: 3
    },
    {
      name: "Unknown World",
      abbr: "HV",
      gameName: "unknown_",
      series: "",
      tourneyPresence: -1
    },
    {
      name: "Fearsome Fighters Headquarters",
      abbr: "BT",
      gameName: "heroffhq_",
      series: "Hero Squad Alpha",
      tourneyPresence: 2
    },
    {
      name: "Troubador's Chamber",
      abbr: "DC",
      gameName: "misctroubador_",
      series: "",
      tourneyPresence: 5
    },
    {
      name: "South Dakota Marketplace",
      abbr: "IU",
      gameName: "sdmarket_",
      series: "",
      tourneyPresence: 29
    },
    {
      name: "Whiteout Wednesday Watchtower",
      abbr: "GL",
      gameName: "alliteratewhiteout_",
      series: "Alliteration Island",
      tourneyPresence: -5
    },
    {
      name: "Phantom Foodbasket",
      abbr: "KO",
      gameName: "alliteratephantom_",
      series: "Alliteration Island",
      tourneyPresence: 3
    },
    {
      name: "Trash Compactor",
      abbr: "JH",
      gameName: "trash_",
      series: "",
      tourneyPresence: 4
    }
  ],
  excludedStages: [
    {
      name: "Unknown World",
      abbr: "SC",
      gameName: "unknown_",
      series: "",
      tourneyPresence: -1
    },
    {
      name: "Troubador's Chamber",
      abbr: "KC",
      gameName: "misctroubador_",
      series: "",
      tourneyPresence: 5
    },
    {
      name: "South Dakota Marketplace",
      abbr: "EE",
      gameName: "sdmarket_",
      series: "",
      tourneyPresence: 29
    },
    {
      name: "Trash Compactor",
      abbr: "HK",
      gameName: "trash_",
      series: "",
      tourneyPresence: 4
    }
  ]
};

export const SERIES_STAGE_SORT: {
    inputStages: StageClassifications[],
    sortedStages: { series: string, stages: StageClassifications[] }[]
  } = {
  inputStages: [
    {
      name: "Canyon of Sorrows",
      abbr: "GV",
      gameName: "journeysorrow_",
      series: "The Grand Journey",
      tourneyPresence: 51
    },
    {
      name: "Geralt Boutique",
      abbr: "PP",
      gameName: "metrogeralt_",
      series: "Metro Mash",
      tourneyPresence: 24
    },
    {
      name: "Rascal Rathouse",
      abbr: "CC",
      gameName: "paulorats_",
      series: "Paulo",
      tourneyPresence: 33
    },
    {
      name: "Zedd Terminal",
      abbr: "XE",
      gameName: "metrozedd_",
      series: "Metro Mash",
      tourneyPresence: 69
    },
    {
      name: "International Airport",
      abbr: "LW",
      gameName: "pauloairport_",
      series: "Paulo",
      tourneyPresence: 74
    },
    {
      name: "Lucy's Legume Land",
      abbr: "CQ",
      gameName: "paulolucy_",
      series: "Paulo",
      tourneyPresence: 9
    },
    {
      name: "Sogtown",
      abbr: "GJ",
      gameName: "metrosog_",
      series: "Metro Mash",
      tourneyPresence: 75
    },
    {
      name: "Weepright Tomatoes",
      abbr: "GT",
      gameName: "metroweep_",
      series: "Metro Mash",
      tourneyPresence: 84
    },
    {
      name: "Uthulura",
      abbr: "HZ",
      gameName: "journeyuthu_",
      series: "The Grand Journey",
      tourneyPresence: 17
    },
    {
      name: "Bento Bakery",
      abbr: "AY",
      gameName: "paulobake_",
      series: "Paulo",
      tourneyPresence: 81
    },
    {
      name: "Leraldo Mansion",
      abbr: "BC",
      gameName: "journeymansion_",
      series: "The Grand Journey",
      tourneyPresence: 46
    },
    {
      name: "National Nesters, LLC",
      abbr: "GM",
      gameName: "metronesters_",
      series: "Metro Mash",
      tourneyPresence: 12
    },
    {
      name: "Quad Burgers",
      abbr: "RF",
      gameName: "metroquad_",
      series: "Metro Mash",
      tourneyPresence: 59
    },
    {
      name: "Kurifico",
      abbr: "SO",
      gameName: "metrokur_",
      series: "Metro Mash",
      tourneyPresence: 56
    },
    {
      name: "Yuci Plains",
      abbr: "QC",
      gameName: "journeyyuci_",
      series: "The Grand Journey",
      tourneyPresence: 55
    }
  ],

  sortedStages: [
    {
      series: "The Grand Journey",
      stages: [
        {
          name: "Canyon of Sorrows",
          abbr: "PT",
          gameName: "journeysorrow_",
          series: "The Grand Journey",
          tourneyPresence: 51
        },
        {
          name: "Leraldo Mansion",
          abbr: "HX",
          gameName: "journeymansion_",
          series: "The Grand Journey",
          tourneyPresence: 46
        },
        {
          name: "Uthulura",
          abbr: "CY",
          gameName: "journeyuthu_",
          series: "The Grand Journey",
          tourneyPresence: 17
        },
        {
          name: "Yuci Plains",
          abbr: "SD",
          gameName: "journeyyuci_",
          series: "The Grand Journey",
          tourneyPresence: 55
        }
      ]
    },
    {
      series: "Paulo",
      stages: [
        {
          name: "Bento Bakery",
          abbr: "HU",
          gameName: "paulobake_",
          series: "Paulo",
          tourneyPresence: 81
        },
        {
          name: "International Airport",
          abbr: "EQ",
          gameName: "pauloairport_",
          series: "Paulo",
          tourneyPresence: 74
        },
        {
          name: "Lucy's Legume Land",
          abbr: "TD",
          gameName: "paulolucy_",
          series: "Paulo",
          tourneyPresence: 9
        },
        {
          name: "Rascal Rathouse",
          abbr: "KK",
          gameName: "paulorats_",
          series: "Paulo",
          tourneyPresence: 33
        }
      ]
    },
    {
      series: "Metro Mash",
      stages: [
        {
          name: "Geralt Boutique",
          abbr: "FJ",
          gameName: "metrogeralt_",
          series: "Metro Mash",
          tourneyPresence: 24
        },
        {
          name: "Kurifico",
          abbr: "MU",
          gameName: "metrokur_",
          series: "Metro Mash",
          tourneyPresence: 56
        },
        {
          name: "National Nesters, LLC",
          abbr: "BY",
          gameName: "metronesters_",
          series: "Metro Mash",
          tourneyPresence: 12
        },
        {
          name: "Quad Burgers",
          abbr: "FG",
          gameName: "metroquad_",
          series: "Metro Mash",
          tourneyPresence: 59
        },
        {
          name: "Sogtown",
          abbr: "YX",
          gameName: "metrosog_",
          series: "Metro Mash",
          tourneyPresence: 75
        },
        {
          name: "Weepright Tomatoes",
          abbr: "PF",
          gameName: "metroweep_",
          series: "Metro Mash",
          tourneyPresence: 84
        },
        {
          name: "Zedd Terminal",
          abbr: "VX",
          gameName: "metrozedd_",
          series: "Metro Mash",
          tourneyPresence: 69
        }
      ]
    }
  ]
};

export const INIT_CHECKED: {inputStages: StageClassifications[], targetStages: string[]} = {
  inputStages: [
    {
      name: "Zesty Pipe",
      abbr: "ZP",
      gameName: "twigpipe_",
      series: "Aquatic Twig",
      tourneyPresence: 0
    },
    {
      name: "Berserk Seed",
      abbr: "BS",
      gameName: "needleseed_",
      series: "Disillusioned Needle",
      tourneyPresence: -1
    },
    {
      name: "Careless Cloth",
      abbr: "CC",
      gameName: "middlecloth_",
      series: "Hard Middle",
      tourneyPresence: 1
    },
    {
      name: "Cooing Finger",
      abbr: "CF",
      gameName: "seafinger_",
      series: "Malicious Sea",
      tourneyPresence: 2
    },
    {
      name: "Steep Wash",
      abbr: "SW",
      gameName: "copperwash_",
      series: "Tedious Copper",
      tourneyPresence: 0
    },
    {
      name: "Wrathful Grain",
      abbr: "WG",
      gameName: "acousticsgrain_",
      series: "Nice Acoustics",
      tourneyPresence: -1
    },
    {
      name: "Normal Bite",
      abbr: "NB",
      gameName: "profitbite_",
      series: "Defeated Profit",
      tourneyPresence: 2
    },
    {
      name: "Humorous Digestion",
      abbr: "HD",
      gameName: "moneydigestion_",
      series: "Flaky Money",
      tourneyPresence: 0
    }
  ],

  targetStages: [
    "twigpipe_",
    "copperwash_",
    "moneydigestion_"
  ]
};

export const INIT_UNCHECKED: { inputStages: StageClassifications[], targetStages: string[] } = {
  inputStages: [
    {
      name: "Witty Wool",
      abbr: "WW",
      gameName: "sackwool_",
      series: "Fortunate Sack",
      tourneyPresence: 2
    },
    {
      name: "Jumpy Partner",
      abbr: "JP",
      gameName: "shelfpartner_",
      series: "Defective Shelf",
      tourneyPresence: -1
    },
    {
      name: "Painful Horn",
      abbr: "PH",
      gameName: "educationhorn_",
      series: "Organic Education",
      tourneyPresence: 0
    },
    {
      name: "Ahead Wave",
      abbr: "AW",
      gameName: "dockwave_",
      series: "Pushy Dock",
      tourneyPresence: -1
    },
    {
      name: "Quick Argument",
      abbr: "QA",
      gameName: "offerargument_",
      series: "Mundane Offer",
      tourneyPresence: -1
    },
    {
      name: "Breakable Birthday",
      abbr: "BB",
      gameName: "paperbirthday_",
      series: "Crowded Paper",
      tourneyPresence: 0
    },
    {
      name: "Sophisticated Comparison",
      abbr: "SC",
      gameName: "bikecomparison_",
      series: "Square Bike",
      tourneyPresence: 1
    },
    {
      name: "Vivacious Discovery",
      abbr: "VD",
      gameName: "substancediscovery_",
      series: "Secret Substance",
      tourneyPresence: 0
    }
  ],

  targetStages: [
    "sackwool_",
    "shelfpartner_",
    "dockwave_",
    "offerargument_",
    "bikecomparison_"
  ]
};

export const INIT_SUBMITTED: { inputStages: StageClassifications[], expectedGameNames: string[], expectedLength: number } = {
  inputStages: [
    {
      name: "Torpid Quiet",
      abbr: "VH",
      gameName: "vesselquiet_",
      series: "Excellent Vessel",
      tourneyPresence: 0
    },
    {
      name: "Noisy Spiders",
      abbr: "VG",
      gameName: "boatspiders_",
      series: "Dusty Boat",
      tourneyPresence: 1
    },
    {
      name: "Unable Railway",
      abbr: "XC",
      gameName: "limitrail_",
      series: "Huge Limit",
      tourneyPresence: 0
    },
    {
      name: "Screeching Dad",
      abbr: "AD",
      gameName: "hilldad_",
      series: "Vacuous Hill",
      tourneyPresence: 0
    },
    {
      name: "Hypnotic Notebook",
      abbr: "PX",
      gameName: "weightbook_",
      series: "Whispering Weight",
      tourneyPresence: 2
    },
    {
      name: "Bad Birthday",
      abbr: "LN",
      gameName: "throatbirthday_",
      series: "Cheerful Throat",
      tourneyPresence: 2
    },
    {
      name: "Waggish Wren",
      abbr: "XP",
      gameName: "competitionwren_",
      series: "Adventurous Competition",
      tourneyPresence: 2
    },
    {
      name: "Discreet Crate",
      abbr: "II",
      gameName: "expcrate_",
      series: "Skinny Experience",
      tourneyPresence: -1
    }
  ],
  expectedGameNames: [
    "vesselquiet_",
    "limitrail_",
    "hilldad_",
  ],
  expectedLength: 3
};

export const MISC_SHOW_MISC: StageClassifications[] = [
  {
    name: "Howdy House",
    abbr: "HI",
    gameName: "howdy_",
    series: "Miscellaneous",
    tourneyPresence: 1
  },
  {
    name: "What in the Sam Hill",
    abbr: "GQ",
    gameName: "hill_",
    series: "Sayings Forever",
    tourneyPresence: -1
  },
  {
    name: "Foreign Forest",
    abbr: "XY",
    gameName: "forest_",
    series: "Miscellaneous",
    tourneyPresence: 2
  }
];

export const MISC_SHOW_BLANK: StageClassifications[] = [
  {
    name: "Doctor's Office",
    abbr: "YY",
    gameName: "office_",
    series: "The Land of the Mundane",
    tourneyPresence: -1
  },
  {
    name: "Blue Cheese Ranch",
    abbr: "QM",
    gameName: "ranch_",
    series: "",
    tourneyPresence: 0
  },
  {
    name: "Hotel Oklahoma",
    abbr: "BN",
    gameName: "musicok_",
    series: "Kind of Music",
    tourneyPresence: 2
  },
  {
    name: "The Forty-Five Paper Trail",
    abbr: "QA",
    gameName: "punpaper_",
    series: "Pun Amuk",
    tourneyPresence: 3
  }
];

export const MISC_HIDE: StageClassifications[] = [
  {
    name: "Western Spaghetti",
    abbr: "QW",
    gameName: "neverwestern_",
    series: "Never Forgetti",
    tourneyPresence: 5
  },
  {
    name: "Under the C",
    abbr: "GO",
    gameName: "punc_",
    series: "Pun Amuk",
    tourneyPresence: -1
  },
  {
    name: "Foundation",
    abbr: "WQ",
    gameName: "constructfound_",
    series: "Construction",
    tourneyPresence: 45
  },
  {
    name: "Actual Land",
    abbr: "UX",
    gameName: "millenland_",
    series: "Millienal Slang",
    tourneyPresence: 3
  }
];

export const MISC_STAGE_INCLUDE_BLANK: { [property: string]: StageClassifications[] } = {
  inputStages: [
    {
      name: "Input Island",
      abbr: "ZI",
      gameName: "boxinput_",
      series: "Black Box",
      tourneyPresence: 7
    },
    {
      name: "Somewhere",
      abbr: "IK",
      gameName: "somewhere_",
      series: "",
      tourneyPresence: 5
    },
    {
      name: "Out there",
      abbr: "VL",
      gameName: "out_",
      series: " ",
      tourneyPresence: 7
    },
    {
      name: "Under the Witch Wood",
      abbr: "NB",
      gameName: "fantasywitch_",
      series: "Fantasy Land",
      tourneyPresence: -3
    },
    {
      name: "Skill Plateau",
      abbr: "XM",
      gameName: "abstractplateau_",
      series: "Abstract Equivocation",
      tourneyPresence: 4
    },
    {
      name: "Water",
      abbr: "OI",
      gameName: "water_",
      series: "   ",
      tourneyPresence: 2
    }
  ],

  includedStages: [
    {
      name: "Somewhere",
      abbr: "ZM",
      gameName: "somewhere_",
      series: "",
      tourneyPresence: 5
    },
    {
      name: "Out there",
      abbr: "FU",
      gameName: "out_",
      series: " ",
      tourneyPresence: 7
    },
    {
      name: "Water",
      abbr: "XO",
      gameName: "water_",
      series: "   ",
      tourneyPresence: 2
    }
  ]
};

export const MISC_STAGE_INCLUDE_MISC: { [property: string]: StageClassifications[] } = {
  inputStages: [
    {
      name: "Dairy Isle",
      abbr: "PZ",
      gameName: "marketdairy_",
      series: "Marketopia",
      tourneyPresence: -5
    },
    {
      name: "Canterbury Parkway",
      abbr: "FN",
      gameName: "boardparkway_",
      series: "Board Games Collection",
      tourneyPresence: 4
    },
    {
      name: "Tower",
      abbr: "QU",
      gameName: "tower_",
      series: "Miscellaneous",
      tourneyPresence: 3
    },
    {
      name: "Frankfurt Hotel",
      abbr: "RM",
      gameName: "travelfrank_",
      series: "Travelogue Rogue",
      tourneyPresence: 29
    },
    {
      name: "Absolute Destruction Island",
      abbr: "BK",
      gameName: "breakisland_",
      series: "Break Freak",
      tourneyPresence: 17
    },
    {
      name: "Haven",
      abbr: "FH",
      gameName: "haven_",
      series: "Miscellaneous",
      tourneyPresence: 30
    },
    {
      name: "Countryside Road",
      abbr: "QP",
      gameName: "travelcountry_",
      series: "Travelogue Rogue",
      tourneyPresence: 1
    },
    {
      name: "Shop",
      abbr: "XK",
      gameName: "shop_",
      series: "Miscellaneous",
      tourneyPresence: 22
    },
    {
      name: "Studio",
      abbr: "WM",
      gameName: "studio_",
      series: "Miscellaneous",
      tourneyPresence: 5
    }
  ],
  includedStages: [
    {
      name: "Tower",
      abbr: "UG",
      gameName: "tower_",
      series: "Miscellaneous",
      tourneyPresence: 3
    },
    {
      name: "Haven",
      abbr: "JB",
      gameName: "haven_",
      series: "Miscellaneous",
      tourneyPresence: 30
    },
    {
      name: "Shop",
      abbr: "VJ",
      gameName: "shop_",
      series: "Miscellaneous",
      tourneyPresence: 22
    },
    {
      name: "Studio",
      abbr: "KJ",
      gameName: "studio_",
      series: "Miscellaneous",
      tourneyPresence: 5
    }
  ]
};

export const MISC_STAGE_EXCLUDE: { [property: string]: StageClassifications[] } = {
  inputStages: [
    {
      name: "Obstacle Course",
      abbr: "RX",
      gameName: "obstacle_",
      series: "Miscellaneous",
      tourneyPresence: 11
    },
    {
      name: "Outer Space Station",
      abbr: "AE",
      gameName: "space_",
      series: "Miscellaneous",
      tourneyPresence: 1
    },
    {
      name: "Introvert Paradise",
      abbr: "XZ",
      gameName: "socialintrovert_",
      series: "Socializing",
      tourneyPresence: 2
    },
    {
      name: "Canvas Campus",
      abbr: "DD",
      gameName: "johncanvas_",
      series: "Super John Time",
      tourneyPresence: 3
    },
    {
      name: "Snowglobe",
      abbr: "EZ",
      gameName: "snowglobe_",
      series: "Miscellaneous",
      tourneyPresence: -9
    },
    {
      name: "Minewoss Mountain",
      abbr: "FM",
      gameName: "johnminewoss_",
      series: "Super John Timme",
      tourneyPresence: 8
    },
    {
      name: "Cantakerous Tank",
      abbr: "UF",
      gameName: "wartank_",
      series: "War of Words",
      tourneyPresence: 7
    }
  ],
  excludedStages: [
    {
      name: "Introvert Paradise",
      abbr: "UM",
      gameName: "socialintrovert_",
      series: "Socializing",
      tourneyPresence: 2
    },
    {
      name: "Canvas Campus",
      abbr: "UU",
      gameName: "johncanvas_",
      series: "Super John Time",
      tourneyPresence: 3
    },
    {
      name: "Minewoss Mountain",
      abbr: "NO",
      gameName: "johnminewoss_",
      series: "Super John Timme",
      tourneyPresence: 8
    },
    {
      name: "Cantakerous Tank",
      abbr: "YW",
      gameName: "wartank_",
      series: "War of Words",
      tourneyPresence: 7
    }
  ]
};

export const MISC_SORT: { [property: string]: StageClassifications[] } = {
  inputStages: [
    {
      name: "Western Town",
      abbr: "WE",
      gameName: "western_",
      series: "Miscellaneous",
      tourneyPresence: 52
    },
    {
      name: "New World City",
      abbr: "TA",
      gameName: "city_",
      series: "Miscellaneous",
      tourneyPresence: 1
    },
    {
      name: "Painting",
      abbr: "EP",
      gameName: "paint_",
      series: "Miscellaneous",
      tourneyPresence: 35
    },
    {
      name: "French Village",
      abbr: "HG",
      gameName: "french_",
      series: "Miscellaneous",
      tourneyPresence: 35
    },
    {
      name: "Kaleidoscopic Realm",
      abbr: "MB",
      gameName: "kaleidoscope_",
      series: "Miscellaneous",
      tourneyPresence: 52
    },
    {
      name: "Hill",
      abbr: "EK",
      gameName: "hill_",
      series: "Miscellaneous",
      tourneyPresence: 96
    },
    {
      name: "Vintage Car Dealership",
      abbr: "OF",
      gameName: "salecarshop_",
      series: "Super Sale Sisters",
      tourneyPresence: 37
    },
    {
      name: "Crate Factory",
      abbr: "CZ",
      gameName: "factory_",
      series: "",
      tourneyPresence: 40
    },
    {
      name: "Medical School",
      abbr: "MH",
      gameName: "phdschool_",
      series: "PhD Land",
      tourneyPresence: 80
    },
    {
      name: "Twisting Tower",
      abbr: "SM",
      gameName: "johntwists_",
      series: "Super John Time",
      tourneyPresence: 80
    },
    {
      name: "Jade Caves",
      abbr: "YE",
      gameName: "monkeycave_",
      series: "Monkey Donk County",
      tourneyPresence: 99
    },
    {
      name: "United Negotiation Room",
      abbr: "WZ",
      gameName: "politicsunr_",
      series: "Politics World",
      tourneyPresence: 68
    }
  ]
};

// TODO: Finish MISC_STAGE_SORT data
export const MISC_STAGE_SORT: {
  inputStages: StageClassifications[],
  sortedStages: StageClassifications[]
} = {
  inputStages: [
    {
      name: "Weather World Tower",
      abbr: "OV",
      gameName: "weather_",
      series: "Miscellaneous",
      tourneyPresence: 0
    },
    {
      name: "Quiet Room",
      abbr: "BJ",
      gameName: "meditationquiet_",
      series: "",
      tourneyPresence: 20
    },
    {
      name: "Awkward Alex's Alley",
      abbr: "SP",
      gameName: "cityalex_",
      series: "",
      tourneyPresence: 55
    },
    {
      name: "Derrick Desert",
      abbr: "DP",
      gameName: "derrick_",
      series: "",
      tourneyPresence: 28
    },
    {
      name: "Veritable Wasteland",
      abbr: "PM",
      gameName: "veritable_",
      series: "Miscellaneous",
      tourneyPresence: 56
    },
    {
      name: "Rooster Roost",
      abbr: "NA",
      gameName: "roost_",
      series: "Miscellaneous",
      tourneyPresence: 91
    },
    {
      name: "Unaugmented Argyle",
      abbr: "FE",
      gameName: "argyledx_",
      series: "",
      tourneyPresence: 19
    },
    {
      name: "Xeno Pizza",
      abbr: "DH",
      gameName: "foodxeno_",
      series: "Miscellaneous",
      tourneyPresence: 83
    },
    {
      name: "Proverbial Prophet's Shrine",
      abbr: "GR",
      gameName: "fantasyshrine_",
      series: "",
      tourneyPresence: 16
    },
    {
      name: "Kissinger Lobby",
      abbr: "GP",
      gameName: "businesslobby_",
      series: "Miscellaneous",
      tourneyPresence: 80
    },
    {
      name: "Edward's Elemental Enchantments",
      abbr: "PK",
      gameName: "fantasyedward_",
      series: "",
      tourneyPresence: 11
    },
    {
      name: "Illustrious Isaac's Interstellar Interchange",
      abbr: "OW",
      gameName: "spaceisaac_",
      series: "Miscellaneous",
      tourneyPresence: 61
    },
    {
      name: "Medical Room",
      abbr: "DF",
      gameName: "doctormed_",
      series: "Miscellaneous",
      tourneyPresence: 61
    },
    {
      name: "Soup Server Station",
      abbr: "XI",
      gameName: "foodsoup_",
      series: "",
      tourneyPresence: 88
    },
    {
      name: "Luxury Land",
      abbr: "PB",
      gameName: "jewelluxury_",
      series: "Miscellaneous",
      tourneyPresence: 66
    }
  ],

  sortedStages: []
};

export const CROSS_SINGLE_CHECK_TOURNEY_SERIES: { stages: StageClassifications[], targetID: string } = {
  stages: [
    {
      name: "Tower of Babbling Brooks",
      abbr: "HW",
      gameName: "mixedtower_",
      series: "World of Mixed Metaphors",
      tourneyPresence: 1
    },
    {
      name: "Effervescent Paradise",
      abbr: "DZ",
      gameName: "fantasyeffer_",
      series: "Fantasy Land",
      tourneyPresence: -1
    }
  ],
  targetID: "mixedtower_"
};

export const CROSS_SINGLE_CHECK_SERIES_TOURNEY: { stages: StageClassifications[], targetID: string } = {
  stages: [
    {
      name: "Portland Post Office Headquarters",
      abbr: "WL",
      gameName: "oregonportlandhq_",
      series: "Oregon Mail",
      tourneyPresence: 2
    },
    {
      name: "Lucy Goose's Loose Moose Caboose",
      abbr: "EH",
      gameName: "elegantlucy_",
      series: "Elegent Lad",
      tourneyPresence: 0
    }
  ],
  targetID: "elegantlucy_"
};

export const CROSS_SINGLE_UNCHECK_TOURNEY_SERIES: { stages: StageClassifications[], targetID: string } = {
  stages: [
    {
      name: "Dawn Meadow Zone",
      abbr: "PH",
      gameName: "wistmeadow",
      series: "Wistwalker",
      tourneyPresence: 1
    },
    {
      name: "Dodo Shop Tower",
      abbr: "YI",
      gameName: "questdodo",
      series: "Questrunner",
      tourneyPresence: -1
    }
  ],
  targetID: "wistmeadow"
};

export const CROSS_SINGLE_UNCHECK_SERIES_TOURNEY: { stages: StageClassifications[], targetID: string } = {
  stages: [
    {
      name: "Fontaine Fountain",
      abbr: "BA",
      gameName: "stellarfountain_",
      series: "Super Secret Stellar Squad",
      tourneyPresence: 0
    },
    {
      name: "Olive Branch",
      abbr: "DQ",
      gameName: "zenolive_",
      series: "Zentlemen",
      tourneyPresence: 1
    }
  ],
  targetID: "zenolive_"
};

export const CROSS_SINGLE_CHECK_SERIES_TOURNEY_ISOLATE: { stages: StageClassifications[], targetID: string } = {
  stages: [
    {
      name: "Zone of French Horns",
      abbr: "DJ",
      gameName: "baritonfrench_",
      series: "Baritone Hero",
      tourneyPresence: 2
    },
    {
      name: "Neutral Paradise",
      abbr: "QD",
      gameName: "xtremeneutral_",
      series: "Xtreme Moderation",
      tourneyPresence: 0
    },
    {
      name: "Organ Room",
      abbr: "LQ",
      gameName: "proctorgan_",
      series: "Proctologists United",
      tourneyPresence: 1
    },
    {
      name: "Mesopotamia",
      abbr: "SJ",
      gameName: "garretmeso_",
      series: "Garrett Wise",
      tourneyPresence: 1
    },
    {
      name: "Uncertain Tea Shop",
      abbr: "MT",
      gameName: "juicytea_",
      series: "Juicy's Revenge",
      tourneyPresence: 1
    }
  ],
  targetID: "proctorgan_"
};

export const CROSS_SINGLE_CHECK_TOURNEY_SERIES_ISOLATE: { stages: StageClassifications[], targetID: string } = {
  stages: [
    {
      name: "Xephyr Bookstore",
      abbr: "RT",
      gameName: "unclexephyr",
      series: "Uncle Standing",
      tourneyPresence: 0
    },
    {
      name: "Quentin's Smithy",
      abbr: "MQ",
      gameName: "whencequent_",
      series: "Whence It Came",
      tourneyPresence: 2
    },
    {
      name: "Daffodil Studio",
      abbr: "UJ",
      gameName: "silverstudio",
      series: "Silverfish",
      tourneyPresence: 1
    },
    {
      name: "Canine Millenium Tower",
      abbr: "WT",
      gameName: "ondogtower_",
      series: "On Dog?",
      tourneyPresence: 0
    },
    {
      name: "Venice's Abuela",
      abbr: "HQ",
      gameName: "noodlevenice_",
      series: "The Noodler",
      tourneyPresence: 0
    }
  ],
  targetID: "unclexephyr"
};

export const CROSS_SINGLE_UNCHECK_SERIES_TOURNEY_ISOLATE: { stages: StageClassifications[], targetID: string } = {
  stages: [
    {
      name: "Damning Teeth Mountain",
      abbr: "TS",
      gameName: "dentaldamn_",
      series: "Dental Doom",
      tourneyPresence: 1
    },
    {
      name: "Abandoned Town",
      abbr: "RE",
      gameName: "xenoghosttown_",
      series: "Xenoghost",
      tourneyPresence: 0
    },
    {
      name: "Nassel Falls",
      abbr: "VB",
      gameName: "odiumfalls_",
      series: "Odium",
      tourneyPresence: 2
    },
    {
      name: "Roddle Hillside",
      abbr: "UE",
      gameName: "blunderhills_",
      series: "Alex in Blunderland",
      tourneyPresence: 1
    },
    {
      name: "Producer's Office",
      abbr: "BD",
      gameName: "frankoffice_",
      series: "Frank's in Opera",
      tourneyPresence: 1
    }
  ],
  targetID: "dentaldamn_"
};

export const CROSS_SINGLE_UNCHECK_TOURNEY_SERIES_ISOLATE: { stages: StageClassifications[], targetID: string } = {
  stages: [
    {
      name: "On-site",
      abbr: "MR",
      gameName: "entouragesite_",
      series: "Internet Entourage",
      tourneyPresence: 2
    },
    {
      name: "Caesar's Saladworks",
      abbr: "HO",
      gameName: "scenturiansalad_",
      series: "Scenturian",
      tourneyPresence: 1
    },
    {
      name: "Venture Capital Island",
      abbr: "ZY",
      gameName: "riddlingventure_",
      series: "Riddling",
      tourneyPresence: 1
    },
    {
      name: "Nesting Area",
      abbr: "DU",
      gameName: "awkwardnesting_",
      series: "Awkwardity",
      tourneyPresence: 0
    },
    {
      name: "Faux Swine Pen",
      abbr: "OM",
      gameName: "temporaripen_",
      series: "Temporarium",
      tourneyPresence: 1
    }
  ],
  targetID: "riddlingventure_"
};

export const CROSS_MULTIPLE_CHECK_TOURNEY_SERIES: { stages: StageClassifications[], targetIDs: string[] } = {
  stages: [
    {
      name: "Tasteful Prose",
      abbr: "AS",
      gameName: "earlyprose_",
      series: "Early Name",
      tourneyPresence: 0
    },
    {
      name: "Rampant Truth",
      abbr: "LR",
      gameName: "spelltruth_",
      series: "Spell Park",
      tourneyPresence: 1
    },
    {
      name: "Offer Jail",
      abbr: "WW",
      gameName: "wealthyjail_",
      series: "The Wealthy Stick",
      tourneyPresence: 0
    },
    {
      name: "Damaged Mine",
      abbr: "SR",
      gameName: "supplymine_",
      series: "Restful Supply",
      tourneyPresence: -1
    },
    {
      name: "Nifty Waggish",
      abbr: "FO",
      gameName: "warmwag_",
      series: "Warm Scarecrow",
      tourneyPresence: 1
    },
    {
      name: "Lip Unlock",
      abbr: "RC",
      gameName: "meatunlock_",
      series: "Meat Famous",
      tourneyPresence: 1
    },
    {
      name: "Scrawny Slope",
      abbr: "GG",
      gameName: "dryslope_",
      series: "Dry, Unwritten",
      tourneyPresence: 1
    }
  ],
  targetIDs: ["wealthyjail_", "warmwag_", "meatunlock_"]
};

export const CROSS_MULTIPLE_CHECK_SERIES_TOURNEY: { stages: StageClassifications[], targetIDs: string[] } = {
  stages: [
    {
      name: "Redundant Move",
      abbr: "XJ",
      gameName: "damagemove_",
      series: "Damage Harbor",
      tourneyPresence: 0
    },
    {
      name: "Apathetic Mystery",
      abbr: "RZ",
      gameName: "trademystery_",
      series: "The Marriage Trade",
      tourneyPresence: 1
    },
    {
      name: "Wait Coach",
      abbr: "OZ",
      gameName: "vastwait_",
      series: "Vast Money",
      tourneyPresence: 2
    },
    {
      name: "Pointless Growth",
      abbr: "OY",
      gameName: "stretchpointless_",
      series: "Stretch of Fog",
      tourneyPresence: -1
    },
    {
      name: "Subtract Shelf",
      abbr: "FZ",
      gameName: "tiresomeshelf_",
      series: "Tiresome Enthusiasm",
      tourneyPresence: -1
    },
    {
      name: "Dreary Cheat",
      abbr: "FQ",
      gameName: "elfincheat_",
      series: "Elfin Stitch",
      tourneyPresence: 0
    },
    {
      name: "Guttural Separation",
      abbr: "JQ",
      gameName: "pourseparation_",
      series: "Pour Vigorously",
      tourneyPresence: -1
    }
  ],
  targetIDs: ["elfincheat_", "vastwait_", "trademystery_"]
};

export const CROSS_MULTIPLE_UNCHECK_TOURNEY_SERIES: { stages: StageClassifications[], targetIDs: string[] } = {
  stages: [
    {
      name: "Meat War",
      abbr: "ZL",
      gameName: "wingrakemeat_",
      series: "WingRake",
      tourneyPresence: 0
    },
    {
      name: "Sincere Workplace",
      abbr: "KZ",
      gameName: "cleardogwork_",
      series: "Clear Dog",
      tourneyPresence: 0
    },
    {
      name: "Bashful Twig",
      abbr: "AX",
      gameName: "impresstwig_",
      series: "ImpressMan",
      tourneyPresence: 1
    },
    {
      name: "Encouraging Reaction",
      abbr: "MJ",
      gameName: "dirtfitreact_",
      series: "Dirtfit",
      tourneyPresence: 0
    },
    {
      name: "Confused Piquant",
      abbr: "IO",
      gameName: "pokepiquant_",
      series: "Poke Account",
      tourneyPresence: 1
    },
    {
      name: "Ashamed Root",
      abbr: "ND",
      gameName: "grotesqueroot_",
      series: "Grotesque Confusion",
      tourneyPresence: 2
    },
    {
      name: "Growth Heat",
      abbr: "OP",
      gameName: "oldheat_",
      series: "Festivities of Old",
      tourneyPresence: 0
    }
  ],
  targetIDs: ["wingrakemeat_", "dirtfitreact_", "grotesqueroot_"]
};

export const CROSS_MULTIPLE_UNCHECK_SERIES_TOURNEY: { stages: StageClassifications[], targetIDs: string[] } = {
  stages: [
    {
      name: "Tedious Tickle",
      abbr: "FY",
      gameName: "tensetickle_",
      series: "Tense Temper",
      tourneyPresence: -1
    },
    {
      name: "Grip Itch",
      abbr: "XH",
      gameName: "shelfitch_",
      series: "Juvenile Shelf",
      tourneyPresence: 0
    },
    {
      name: "Numberless Group",
      abbr: "DY",
      gameName: "crabgroup_",
      series: "Poised Crab",
      tourneyPresence: 1
    },
    {
      name: "Choc o' Brain",
      abbr: "JC",
      gameName: "observerchoc_",
      series: "Nimble Observer",
      tourneyPresence: 2
    },
    {
      name: "Late Preservatives",
      abbr: "DM",
      gameName: "bikelate_",
      series: "Imaginary Bike",
      tourneyPresence: 0
    },
    {
      name: "Open Attachment",
      abbr: "NR",
      gameName: "twistopen_",
      series: "Poor Twist",
      tourneyPresence: -1
    },
    {
      name: "Rural",
      abbr: "RL",
      gameName: "timesnewrural_",
      series: "New Time",
      tourneyPresence: 0
    }
  ],
  targetIDs: ["shelfitch_", "observerchoc_", "bikelate_"]
};

export const CROSS_MULTIPLE_CHECK_SERIES_TOURNEY_ISOLATE: { stages: StageClassifications[], targetIDs: string[] } = {
  stages: [
    {
      name: "Waste Spray",
      abbr: "IM",
      gameName: "daughterspray_",
      series: "Daughter of Pourage",
      tourneyPresence: 0
    },
    {
      name: "Spectacular Sin",
      abbr: "QJ",
      gameName: "petsin_",
      series: "Slip Pets",
      tourneyPresence: 0
    },
    {
      name: "Care Weather",
      abbr: "JW",
      gameName: "boundlesscare_",
      series: "Boundless Direction",
      tourneyPresence: 1
    },
    {
      name: "Second-Hand Life",
      abbr: "AO",
      gameName: "direlife_",
      series: "Dire Glory",
      tourneyPresence: 2
    },
    {
      name: "Kettlespace",
      abbr: "PR",
      gameName: "brakekettle_",
      series: "Overrated Brake",
      tourneyPresence: 2
    },
    {
      name: "Judge Queen",
      abbr: "CS",
      gameName: "clamjudge_",
      series: "Puny Clam",
      tourneyPresence: -1
    },
    {
      name: "Aloof Mix",
      abbr: "YD",
      gameName: "handsomemix_",
      series: "Handsome Appreciation",
      tourneyPresence: 2
    }
  ],
  targetIDs: ["daughterspray_", "petsin_", "boundlesscare_", "direlife_"]
};

export const CROSS_MULTIPLE_CHECK_TOURNEY_SERIES_ISOLATE: { stages: StageClassifications[], targetIDs: string[] } = {
  stages: [
    {
      name: "Lyrical Wonder",
      abbr: "SW",
      gameName: "joiniverselyric_",
      series: "Joiniverse",
      tourneyPresence: 0
    },
    {
      name: "Possible Discovery",
      abbr: "HE",
      gameName: "tenuouspossible_",
      series: "Tenuous Collar",
      tourneyPresence: 0
    },
    {
      name: "Damaging Breath",
      abbr: "UR",
      gameName: "sackdamage_",
      series: "Sack Sisters",
      tourneyPresence: 2
    },
    {
      name: "Front Things",
      abbr: "KW",
      gameName: "impulsefront_",
      series: "Lovely Impulse",
      tourneyPresence: 1
    },
    {
      name: "Sigh Match",
      abbr: "HM",
      gameName: "quirkysigh_",
      series: "Quirky Balance",
      tourneyPresence: -1
    },
    {
      name: "Malicious Authority",
      abbr: "CG",
      gameName: "snakeauthority_",
      series: "Unwritten Snake",
      tourneyPresence: 2
    },
    {
      name: "Dust Plane",
      abbr: "FB",
      gameName: "crowddust_",
      series: "Domineering Crowd",
      tourneyPresence: 0
    }
  ],
  targetIDs: ["joiniverselyric_", "sackdamage_", "snakeauthority_"]
};

export const CROSS_MULTIPLE_UNCHECK_SERIES_TOURNEY_ISOLATE: { stages: StageClassifications[], targetIDs: string[] } = {
  stages: [
    {
      name: "Magic Rhyme",
      abbr: "KL",
      gameName: "bearmagic_",
      series: "Vivacious Bear",
      tourneyPresence: 2
    },
    {
      name: "Certain Magic",
      abbr: "VK",
      gameName: "ordinarymagic_",
      series: "Ordinary Value",
      tourneyPresence: 0
    },
    {
      name: "Righteous Passenger",
      abbr: "VV",
      gameName: "legalpassenger_",
      series: "Legal Grieving",
      tourneyPresence: 0
    },
    {
      name: "Mystery Rate",
      abbr: "VR",
      gameName: "greasyrate_",
      series: "Greasy Quirk",
      tourneyPresence: 0
    },
    {
      name: "Awakened Preserve",
      abbr: "HP",
      gameName: "visitorpreserve_",
      series: "Highfalutin Visitor",
      tourneyPresence: 0
    },
    {
      name: "Chivalrous Hollow",
      abbr: "TY",
      gameName: "cloudhollow_",
      series: "Cloud Nasty",
      tourneyPresence: -1
    },
    {
      name: "Useful Grass",
      abbr: "TL",
      gameName: "signalgrass_",
      series: "Wiry Signal",
      tourneyPresence: 2
    }
  ],
  targetIDs: ["ordinarymagic_", "legalpassenger_", "signalgrass_"]
};

export const CROSS_MULTIPLE_UNCHECK_TOURNEY_SERIES_ISOLATE: { stages: StageClassifications[], targetIDs: string[] } = {
  stages: [
    {
      name: "Rhyme Bear",
      abbr: "VD",
      gameName: "clumsybear_",
      series: "Foregoing Clumsiness",
      tourneyPresence: 2
    },
    {
      name: "Waste Substance",
      abbr: "XR",
      gameName: "pansubstance_",
      series: "Righteous Pan",
      tourneyPresence: 0
    },
    {
      name: "Join Sound",
      abbr: "TH",
      gameName: "earningsjoin_",
      series: "Fearful Earnings",
      tourneyPresence: -1
    },
    {
      name: "Magically Jobless",
      abbr: "FA",
      gameName: "unsuitablemagic_",
      series: "Unsuitable Imperfections",
      tourneyPresence: 2
    },
    {
      name: "Erratic Support",
      abbr: "TO",
      gameName: "kneesupport_",
      series: "Enchanted Knee",
      tourneyPresence: 0
    },
    {
      name: "Dog Pot",
      abbr: "CW",
      gameName: "hollowdog_",
      series: "Untidy Hollow",
      tourneyPresence: 0
    },
    {
      name: "Shade Curtain",
      abbr: "XD",
      gameName: "increaseablecurtain_",
      series: "Increaseable",
      tourneyPresence: 1
    }
  ],
  targetIDs: ["clumsybear_", "pansubstance_", "kneesupport_", "hollowdog_"]
};

export const UPDATE_EXISTS: StageClassifications[] = [
  {
    name: "Wilderness",
    abbr: "BL",
    gameName: "foulwilds_",
    series: "Foul Beast",
    tourneyPresence: 5
  }
];

export const UPDATE_ENABLED: { inputStages: StageClassifications[], selectedStages: string[] } = {
  inputStages: [
    {
      name: "Unarmed Degree",
      abbr: "FR",
      gameName: "castdegree_",
      series: "Roomy Cast",
      tourneyPresence: 0
    },
    {
      name: "Ambiguous Eggs",
      abbr: "NN",
      gameName: "ticketeggs_",
      series: "Panoramic Ticket",
      tourneyPresence: 0
    },
    {
      name: "Fearful Order",
      abbr: "WH",
      gameName: "spicyorder_",
      series: "Spicy Action",
      tourneyPresence: 0
    },
    {
      name: "Brief Grandfather",
      abbr: "ST",
      gameName: "moneygrandfather_",
      series: "Capricious Money",
      tourneyPresence: -1
    },
    {
      name: "Brave History",
      abbr: "ZK",
      gameName: "scissorshistory_",
      series: "Painful Scissors",
      tourneyPresence: 2
    },
    {
      name: "Open Sneeze",
      abbr: "GZ",
      gameName: "grandmothersneeze_",
      series: "Assorted Grandmother",
      tourneyPresence: 1
    },
    {
      name: "Modern Tail",
      abbr: "VA",
      gameName: "designtail_",
      series: "Defective Design",
      tourneyPresence: 2
    },
    {
      name: "Lethal Health",
      abbr: "HY",
      gameName: "expansionhealth_",
      series: "Well-Made Expansion",
      tourneyPresence: -1
    }
  ],
  selectedStages: [
    "castdegree_",
    "spicyorder_",
    "scissorshistory_"
  ]
};

export const UPDATE_DISABLED: StageClassifications[] = [
  {
    name: "Comfortable Motion",
    abbr: "BH",
    gameName: "quicksandmotion_",
    series: "Heavy Quicksand",
    tourneyPresence: 1
  },
  {
    name: "Easy Distance",
    abbr: "WD",
    gameName: "signdistance_",
    series: "Clammy Sign",
    tourneyPresence: 0
  },
  {
    name: "Swift Back",
    abbr: "SQ",
    gameName: "pencilback_",
    series: "Real Pencil",
    tourneyPresence: -1
  },
  {
    name: "Gleaming Screw",
    abbr: "NS",
    gameName: "knotscres_",
    series: "Unwieldy Knot",
    tourneyPresence: 1
  },
  {
    name: "Stingy Color",
    abbr: "TV",
    gameName: "stomachcolor_",
    series: "Parsimonious Stomach",
    tourneyPresence: 2
  },
  {
    name: "Forgetful Cup",
    abbr: "LT",
    gameName: "crowdcup_",
    series: "Available Crowd",
    tourneyPresence: 2
  },
  {
    name: "Hard-to-Find Cake",
    abbr: "JU",
    gameName: "representativecake_",
    series: "Relieved Representative",
    tourneyPresence: 2
  },
  {
    name: "Dull Beds",
    abbr: "ER",
    gameName: "booksbeds_",
    series: "Astonishing Books",
    tourneyPresence: 2
  }
];

export const UPDATE_SELECTED: { inputStages: StageClassifications[], selectedStages: string[] } = {
  inputStages: [
    {
      name: "Chief Grain",
      abbr: "CF",
      gameName: "classgrain_",
      series: "Remarkable Class",
      tourneyPresence: -1
    },
    {
      name: "Waiting Silk",
      abbr: "PD",
      gameName: "questionsilk_",
      series: "Calm Question",
      tourneyPresence: -1
    },
    {
      name: "Nutritious Home",
      abbr: "FC",
      gameName: "cookhome_",
      series: "Average Cook",
      tourneyPresence: -1
    },
    {
      name: "Tense Rain",
      abbr: "TB",
      gameName: "temporaryrain_",
      series: "Temporary",
      tourneyPresence: -1
    },
    {
      name: "Flimsy Shelf",
      abbr: "QN",
      gameName: "nearshelf_",
      series: "Near Tendency",
      tourneyPresence: -1
    },
    {
      name: "Gentle Can",
      abbr: "QL",
      gameName: "giantscan_",
      series: "Crowded Giants",
      tourneyPresence: -1
    },
    {
      name: "Lacking Salt",
      abbr: "CT",
      gameName: "yamsalt_",
      series: "Righteous Yam",
      tourneyPresence: -1
    },
    {
      name: "Arrogant Grandfather",
      abbr: "WF",
      gameName: "sinkgrandfather_",
      series: "Colorful Sink",
      tourneyPresence: -1
    }
  ],
  selectedStages: [
    "classgrain_",
    "giantscan_",
    "yamsalt_",
    "nearshelf_",
  ]
};

export const UPDATE_UNSELECTED: {
  inputStages: StageClassifications[],
  selectedStages: string[],
  targetStages: string[]
} = {
  inputStages: [
    {
      name: "Tense Knife",
      abbr: "BG",
      gameName: "kettleknife_",
      series: "Glamorous Kettle",
      tourneyPresence: 0
    },
    {
      name: "Frequent Rabbits",
      abbr: "CV",
      gameName: "stingyrabbits_",
      series: "Stingy Dinosaurs",
      tourneyPresence: -1
    },
    {
      name: "Abusive Crown",
      abbr: "AM",
      gameName: "educationcrown_",
      series: "Calm Education",
      tourneyPresence: 1
    },
    {
      name: "Harmonious Face",
      abbr: "NW",
      gameName: "capharmony_",
      series: "Malicious Cap",
      tourneyPresence: 1
    },
    {
      name: "Normal Wind",
      abbr: "AF",
      gameName: "linenwind_",
      series: "Workable Linen",
      tourneyPresence: 2
    },
    {
      name: "Roomy Cave",
      abbr: "TJ",
      gameName: "bitecave_",
      series: "Crooked Bite",
      tourneyPresence: 2
    },
    {
      name: "Aback Aunt",
      abbr: "IB",
      gameName: "rangeaunt_",
      series: "Thoughtless Range",
      tourneyPresence: 2
    },
    {
      name: "Ad Hoc Meeting",
      abbr: "MX",
      gameName: "jewelmeeting_",
      series: "Towering Jewel",
      tourneyPresence: 1
    }
  ],
  selectedStages: [
    "kettleknife_",
    "linenwind_",
    "jewelmeeting_"
  ],
  targetStages: [
    "stingyrabbits_",
    "educationcrown_",
    "capharmony_",
    "bitecave_",
    "rangeaunt_"
  ]
};

export const UPDATE_NO_STAGES: StageClassifications[] = [
  {
    name: "Invincible Dress",
    abbr: "YU",
    gameName: "cavedress_",
    series: "Grateful Cave",
    tourneyPresence: -1
  },
  {
    name: "Plastic Camp",
    abbr: "PY",
    gameName: "iciclecamp_",
    series: "Glossy Icicle",
    tourneyPresence: 1
  },
  {
    name: "Spiffy Pen",
    abbr: "EV",
    gameName: "dinopen_",
    series: "Jumpy Dinosaurs",
    tourneyPresence: 2
  },
  {
    name: "Used Trousers",
    abbr: "NX",
    gameName: "horsetrousers_",
    series: "Disastrous Horse",
    tourneyPresence: -1
  },
  {
    name: "Puny Line",
    abbr: "IX",
    gameName: "bearline_",
    series: "Detailed Bear",
    tourneyPresence: 1
  },
  {
    name: "Ragged Flame",
    abbr: "DI",
    gameName: "birthflame_",
    series: "Tall Birth",
    tourneyPresence: 2
  },
  {
    name: "Callous Moon",
    abbr: "BF",
    gameName: "readingmoon_",
    series: "Thoughtless Reading",
    tourneyPresence: -1
  },
  {
    name: "Fluttering Slip",
    abbr: "MV",
    gameName: "zipperslip_",
    series: "Nebulous Zipper",
    tourneyPresence: 1
  }
];

export const UPDATE_NO_ERROR: { inputStages: StageClassifications[], targetStages: string[] } = {
  inputStages: [
    {
      name: "Waiting Smile",
      abbr: "KF",
      gameName: "bordersmile_",
      series: "Productive Border",
      tourneyPresence: -1
    },
    {
      name: "Quixotic Coast",
      abbr: "HF",
      gameName: "trainscoast_",
      series: "Enthusiastic Trains",
      tourneyPresence: -1
    },
    {
      name: "Glorious Day",
      abbr: "OQ",
      gameName: "whipday_",
      series: "Mundane Whip",
      tourneyPresence: 1
    },
    {
      name: "Voiceless Bat",
      abbr: "FL",
      gameName: "drawerbat_",
      series: "Abaft Drawer",
      tourneyPresence: 0
    },
    {
      name: "Puffy Suit",
      abbr: "JL",
      gameName: "wristsuit_",
      series: "Exotic Wrist",
      tourneyPresence: -1
    },
    {
      name: "Numberless Aftermath",
      abbr: "KU",
      gameName: "troublenumberless_",
      series: "Ripe Trouble",
      tourneyPresence: 0
    },
    {
      name: "Next Army",
      abbr: "ZQ",
      gameName: "potarmy_",
      series: "Silly Pot",
      tourneyPresence: 1
    },
    {
      name: "Upset Ants",
      abbr: "WK",
      gameName: "circleants_",
      series: "Faded Circle",
      tourneyPresence: 2
    }
  ],
  targetStages: [
    "bordersmile_",
    "trainscoast_",
    "drawerbat_"
  ]
};

export const ALL_EXISTS: StageClassifications[] = [
  {
    name: "Level Women",
    abbr: "HH",
    gameName: "carriagewomen_",
    series: "Disgusting Carriage",
    tourneyPresence: 2
  },
  {
    name: "Superficial Hands",
    abbr: "LB",
    gameName: "salthands_",
    series: "Axiomatic Salt",
    tourneyPresence: 2
  },
  {
    name: "Slim Nest",
    abbr: "YF",
    gameName: "maidnest_",
    series: "Panicky Maid",
    tourneyPresence: 0
  },
  {
    name: "Ashamed Food",
    abbr: "TW",
    gameName: "discussionfood_",
    series: "Confused Discussion",
    tourneyPresence: 1
  },
  {
    name: "Enchanted Crayon",
    abbr: "IZ",
    gameName: "pollutioncrayon_",
    series: "Snotty Pollution",
    tourneyPresence: 1
  },
  {
    name: "Silent Can",
    abbr: "VN",
    gameName: "partycan_",
    series: "Irritating Party",
    tourneyPresence: 0
  },
  {
    name: "Glossy Sofa",
    abbr: "BO",
    gameName: "fleshsofa_",
    series: "Volatile Flesh",
    tourneyPresence: 1
  },
  {
    name: "Unarmed Back",
    abbr: "TP",
    gameName: "firemanback_",
    series: "Old Fireman",
    tourneyPresence: -1
  }
];

export const ALL_LABEL: StageClassifications[] = [
  {
    name: "Separate Bell",
    abbr: "CI",
    gameName: "structurebell_",
    series: "Efficient Structure",
    tourneyPresence: 1
  },
  {
    name: "Wholesale Curtain",
    abbr: "GI",
    gameName: "effectcurtain_",
    series: "Tranquil Effect",
    tourneyPresence: -1
  },
  {
    name: "Plucky Church",
    abbr: "VT",
    gameName: "liquidchurch_",
    series: "Kindly Liquid",
    tourneyPresence: -1
  },
  {
    name: "Hungry Dog",
    abbr: "JY",
    gameName: "wavedog_",
    series: "Uncovered Wave",
    tourneyPresence: 1
  },
  {
    name: "Glistening Point",
    abbr: "UI",
    gameName: "discoverypoint_",
    series: "Toothsome Discovery",
    tourneyPresence: 0
  },
  {
    name: "Tenuous Sink",
    abbr: "UA",
    gameName: "crowdsink_",
    series: "Violent Crowd",
    tourneyPresence: 0
  },
  {
    name: "Plant Drawer",
    abbr: "JZ",
    gameName: "cherriesdrawer_",
    series: "Second-hand Cherries",
    tourneyPresence: 0
  },
  {
    name: "Careless Jump",
    abbr: "YL",
    gameName: "rodjump_",
    series: "Auspicious Rod",
    tourneyPresence: 2
  }
];

export const ALL_FIRST_SECTION: StageClassifications[] = [
  {
    name: "Delightful Dogs",
    abbr: "UH",
    gameName: "geesedogs_",
    series: "Accidental Geese",
    tourneyPresence: 0
  },
  {
    name: "Used Throne",
    abbr: "OX",
    gameName: "shoethrone_",
    series: "Reminiscent Shoe",
    tourneyPresence: -1
  },
  {
    name: "Simplistic Oven",
    abbr: "QY",
    gameName: "offeroven_",
    series: "Honorable Offer",
    tourneyPresence: 0
  },
  {
    name: "Tasteful Spark",
    abbr: "EU",
    gameName: "mouthspark_",
    series: "Square Mouth",
    tourneyPresence: 0
  },
  {
    name: "Ethereal Bait",
    abbr: "ET",
    gameName: "spotbait_",
    series: "Precious Spot",
    tourneyPresence: 2
  },
  {
    name: "Boundless Glove",
    abbr: "CJ",
    gameName: "trousersglove_",
    series: "Orange Trousers",
    tourneyPresence: 2
  },
  {
    name: "Round Mountain",
    abbr: "FD",
    gameName: "airplanemountain_",
    series: "Cooing Airplane",
    tourneyPresence: 0
  },
  {
    name: "Volatile Coal",
    abbr: "JA",
    gameName: "crimecoal_",
    series: "Well-off Crime",
    tourneyPresence: 0
  }
];

export const ALL_SELECT_POSITIVE_TOURNEY: StageClassifications[] = [
  {
    name: "Heavenly Growth",
    abbr: "OE",
    gameName: "bikesgrowth_",
    series: "Spectacular Bikes",
    tourneyPresence: 1
  },
  {
    name: "Wakeful Metal",
    abbr: "PV",
    gameName: "dogmetal_",
    series: "Guttural Dog",
    tourneyPresence: 0
  },
  {
    name: "Aggressive Rainstorm",
    abbr: "AA",
    gameName: "degreerain_",
    series: "Pushy Degree",
    tourneyPresence: 2
  },
  {
    name: "Tightfisted Sugar",
    abbr: "SY",
    gameName: "lavishsugar_",
    series: "Lavish Use",
    tourneyPresence: 2
  },
  {
    name: "Intelligent Hat",
    abbr: "IY",
    gameName: "gunhat_",
    series: "Rapid Gun",
    tourneyPresence: 0
  },
  {
    name: "Workable Grape",
    abbr: "PG",
    gameName: "earwork_",
    series: "Nasty Ear",
    tourneyPresence: -1
  },
  {
    name: "Bawdy Science",
    abbr: "KM",
    gameName: "ironscience_",
    series: "Helpful Iron",
    tourneyPresence: -1
  },
  {
    name: "Wrathful Discussion",
    abbr: "CD",
    gameName: "platediscussion_",
    series: "Next Plate",
    tourneyPresence: -1
  }
];

export const ALL_SELECT_POSITIVE_SERIES: StageClassifications[] = [
  {
    name: "Incandescent Point",
    abbr: "NT",
    gameName: "businesspoint_",
    series: "Pumped Business",
    tourneyPresence: 2
  },
  {
    name: "Majestic Zebra",
    abbr: "NC",
    gameName: "furniturezebra_",
    series: "Languid Furniture",
    tourneyPresence: -1
  },
  {
    name: "Charming Carpenter",
    abbr: "IC",
    gameName: "spooncarpenter_",
    series: "Bad Spoon",
    tourneyPresence: 1
  },
  {
    name: "Longing Crayon",
    abbr: "IP",
    gameName: "horsecrayon_",
    series: "Three Horses",
    tourneyPresence: 1
  },
  {
    name: "Subdued Edge",
    abbr: "QO",
    gameName: "rolledge_",
    series: "Pointless Roll",
    tourneyPresence: 1
  },
  {
    name: "Exultant Coil",
    abbr: "AP",
    gameName: "treecoil_",
    series: "Sick Trees",
    tourneyPresence: 1
  },
  {
    name: "Madly Tiger",
    abbr: "GN",
    gameName: "texturetiger_",
    series: "Succinct Texture",
    tourneyPresence: 2
  },
  {
    name: "Rustic Move",
    abbr: "YP",
    gameName: "baitmove_",
    series: "Plain Bait",
    tourneyPresence: -1
  }
];

export const ALL_SELECT_NEGATIVE_TOURNEY: {inputStages: StageClassifications[], targetStages: string[]} = {
  inputStages: [
    {
      name: "Disgusting Prose",
      abbr: "IE",
      gameName: "vestprose_",
      series: "Hilarious Vest",
      tourneyPresence: -1
    },
    {
      name: "Level Beef",
      abbr: "DG",
      gameName: "spoonbeef_",
      series: "Tangible Spoon",
      tourneyPresence: 0
    },
    {
      name: "Military Hand",
      abbr: "PI",
      gameName: "scenthand_",
      series: "Rampant Scent",
      tourneyPresence: 2
    },
    {
      name: "Merciful Arm",
      abbr: "EF",
      gameName: "luncharm_",
      series: "Far Lunchroom",
      tourneyPresence: 1
    },
    {
      name: "Opposite Arithmetic",
      abbr: "ZA",
      gameName: "songmath_",
      series: "Mature Song",
      tourneyPresence: 1
    },
    {
      name: "Tearful Judge",
      abbr: "ZH",
      gameName: "borderjudge_",
      series: "Bumpy Border",
      tourneyPresence: -1
    },
    {
      name: "Dreary Power",
      abbr: "VQ",
      gameName: "amountpower_",
      series: "Delicious Amount",
      tourneyPresence: -1
    },
    {
      name: "Futuristic Cook",
      abbr: "HD",
      gameName: "seedcook_",
      series: "Ceaseless Seed",
      tourneyPresence: 0
    }
  ],
  targetStages: [
    "vestprose_",
    "borderjudge_",
    "amountpower_"
  ]
};

export const NONE_EXISTS: StageClassifications[] = [
  {
    name: "Cautious Maid",
    abbr: "JX",
    gameName: "titlemaid_",
    series: "Ripe Title",
    tourneyPresence: 1
  },
  {
    name: "Clear Chicken",
    abbr: "PQ",
    gameName: "wallchicken_",
    series: "Selfish Wall",
    tourneyPresence: 0
  },
  {
    name: "Discreet Zephyr",
    abbr: "OG",
    gameName: "marblezephyr_",
    series: "Parsimonious Marble",
    tourneyPresence: 1
  },
  {
    name: "Stimulating Pancake",
    abbr: "HA",
    gameName: "cribpancake_",
    series: "Questionable Crib",
    tourneyPresence: 0
  },
  {
    name: "Spooky Recess",
    abbr: "DE",
    gameName: "actorrecess_",
    series: "Neat Actor",
    tourneyPresence: 2
  },
  {
    name: "Future Wind",
    abbr: "MM",
    gameName: "feelingwind_",
    series: "Spicy Feeling",
    tourneyPresence: -1
  },
  {
    name: "Psychotic Throne",
    abbr: "DN",
    gameName: "duckthrone_",
    series: "Impartial Duck",
    tourneyPresence: 2
  },
  {
    name: "Common Tray",
    abbr: "TG",
    gameName: "startray_",
    series: "Cuddly Star",
    tourneyPresence: 2
  }
];

export const NONE_LABEL: StageClassifications[] = [
  {
    name: "Roasted Field",
    abbr: "VS",
    gameName: "rollfield_",
    series: "Tame Roll",
    tourneyPresence: 2
  },
  {
    name: "Redundant Swim",
    abbr: "FS",
    gameName: "backswim_",
    series: "Tense Back",
    tourneyPresence: -1
  },
  {
    name: "Grotesque Order",
    abbr: "ZW",
    gameName: "donkeyorder_",
    series: "Scared Donkey",
    tourneyPresence: 0
  },
  {
    name: "Wet Reading",
    abbr: "PJ",
    gameName: "gradereading_",
    series: "Fertile Grade",
    tourneyPresence: 1
  },
  {
    name: "Bumpy Value",
    abbr: "KD",
    gameName: "flowervalue_",
    series: "Military Flower",
    tourneyPresence: -1
  },
  {
    name: "Graceful Pets",
    abbr: "BW",
    gameName: "nervepets_",
    series: "Magnificent Nerve",
    tourneyPresence: 2
  },
  {
    name: "Icky Bat",
    abbr: "IN",
    gameName: "legsbat_",
    series: "Lamentable Legs",
    tourneyPresence: 1
  },
  {
    name: "Boorish Addition",
    abbr: "LL",
    gameName: "cableaddition_",
    series: "Spiteful Cable",
    tourneyPresence: 0
  }
];

export const NONE_FIRST_SECTION: StageClassifications[] = [
  {
    name: "Pathetic Basket",
    abbr: "OK",
    gameName: "taxbasket_",
    series: "Superficial Tax",
    tourneyPresence: 0
  },
  {
    name: "Volatile Ocean",
    abbr: "BI",
    gameName: "mintocean_",
    series: "Unarmed Mint",
    tourneyPresence: -1
  },
  {
    name: "Illegal Spade",
    abbr: "AC",
    gameName: "feelingspade_",
    series: "Obsolete Feeling",
    tourneyPresence: 1
  },
  {
    name: "Conscious Payment",
    abbr: "QI",
    gameName: "songspayment_",
    series: "Sour Songs",
    tourneyPresence: -1
  },
  {
    name: "Closed Ray",
    abbr: "QS",
    gameName: "animalclosed_",
    series: "Lackadaisical Animal",
    tourneyPresence: 1
  },
  {
    name: "Unnatural Swing",
    abbr: "LP",
    gameName: "holidayswing_",
    series: "Testy Holiday",
    tourneyPresence: 0
  },
  {
    name: "Materialistic Power",
    abbr: "HT",
    gameName: "governorpower_",
    series: "Obedient Governor",
    tourneyPresence: 2
  },
  {
    name: "Dashing Size",
    abbr: "ME",
    gameName: "exchangesize_",
    series: "Imaginary Exchange",
    tourneyPresence: -1
  }
];

export const NONE_SELECT_POSITIVE_TOURNEY: StageClassifications[] = [
  {
    name: "Honorable Recess",
    abbr: "IA",
    gameName: "doctorrecess_",
    series: "Bawdy Doctor",
    tourneyPresence: -1
  },
  {
    name: "Ambitious Airplane",
    abbr: "RQ",
    gameName: "biteairplane_",
    series: "Daffy Bite",
    tourneyPresence: 1
  },
  {
    name: "Upset Crown",
    abbr: "GC",
    gameName: "businesscrown_",
    series: "Picayune Business",
    tourneyPresence: 0
  },
  {
    name: "Three Hobbies",
    abbr: "LM",
    gameName: "achieverhobbies_",
    series: "Uptight Achiever",
    tourneyPresence: 2
  },
  {
    name: "Small Cause",
    abbr: "PW",
    gameName: "capcause_",
    series: "Zany Cap",
    tourneyPresence: 1
  },
  {
    name: "Highfalutin Jeans",
    abbr: "DR",
    gameName: "anglejeans_",
    series: "Lopsided Angle",
    tourneyPresence: 0
  },
  {
    name: "Lean Ghost",
    abbr: "JS",
    gameName: "sweaterghost_",
    series: "Ugliest Sweater",
    tourneyPresence: -1
  },
  {
    name: "Nondescript Market",
    abbr: "TF",
    gameName: "lunchroommarket_",
    series: "Yielding Lunchroom",
    tourneyPresence: 2
  }
];

export const NONE_SELECT_POSITIVE_SERIES: StageClassifications[] = [
  {
    name: "Helpless Burst",
    abbr: "ZR",
    gameName: "tigerburst_",
    series: "Synonymous Tiger",
    tourneyPresence: 1
  },
  {
    name: "Maniacal Adjustment",
    abbr: "SZ",
    gameName: "rockadj_",
    series: "Tangy Rock",
    tourneyPresence: 1
  },
  {
    name: "Uppity Ants",
    abbr: "JT",
    gameName: "believeants_",
    series: "Venomous Believe",
    tourneyPresence: -1
  },
  {
    name: "Trite Approval",
    abbr: "YC",
    gameName: "churchapproval_",
    series: "Wasteful Church",
    tourneyPresence: 1
  },
  {
    name: "Unique Crate",
    abbr: "EN",
    gameName: "attackcrate_",
    series: "Jaded Attack",
    tourneyPresence: 2
  },
  {
    name: "Unnatural Oranges",
    abbr: "YO",
    gameName: "sticksoranges_",
    series: "Fair Sticks",
    tourneyPresence: -1
  },
  {
    name: "Alluring Plant",
    abbr: "NE",
    gameName: "receiptplant_",
    series: "Pink Receipt",
    tourneyPresence: -1
  },
  {
    name: "Sordid Straw",
    abbr: "KV",
    gameName: "brotherstraw_",
    series: "Naughty Brother",
    tourneyPresence: 0
  }
];

export const NONE_SELECT_NEGATIVE_TOURNEY: { inputStages: StageClassifications[], targetStages: string[] } = {
  inputStages: [
    {
      name: "Uttermost Slope",
      abbr: "YB",
      gameName: "guitarslope_",
      series: "Fascinated Guitar",
      tourneyPresence: 2
    },
    {
      name: "Acrid Aftermath",
      abbr: "PC",
      gameName: "smokeaftermath_",
      series: "Breezy Smoke",
      tourneyPresence: -1
    },
    {
      name: "Astonishing Interest",
      abbr: "EJ",
      gameName: "marbleinterest_",
      series: "Interesting Marble",
      tourneyPresence: -1
    },
    {
      name: "Jazzy Circle",
      abbr: "HN",
      gameName: "capcircle_",
      series: "Ashamed Cap",
      tourneyPresence: 2
    },
    {
      name: "Curved Roll",
      abbr: "KR",
      gameName: "observationroll_",
      series: "Jaded Observation",
      tourneyPresence: 2
    },
    {
      name: "Poised Earthquake",
      abbr: "ON",
      gameName: "deerearthquake_",
      series: "Joyous Deer",
      tourneyPresence: 0
    },
    {
      name: "Great Haircut",
      abbr: "NI",
      gameName: "accounthaircut_",
      series: "Entertaining Account",
      tourneyPresence: 2
    },
    {
      name: "Wise Dime",
      abbr: "NH",
      gameName: "pendime_",
      series: "Splendid Pen",
      tourneyPresence: -1
    }
  ],
  targetStages: [
    "smokeaftermath_",
    "marbleinterest_",
    "pendime_"
  ]
};

export const ALL_UNCHECKED_TOURNEY: {inputStages: StageClassifications[], targetStages: string[]} = {
  inputStages: [
    {
      name: "Premium Grass",
      abbr: "SG",
      gameName: "bonegrass_",
      series: "Sticky Bone",
      tourneyPresence: 1
    },
    {
      name: "Flashy Camp",
      abbr: "XV",
      gameName: "dirtcamp_",
      series: "Moaning Dirt",
      tourneyPresence: -1
    },
    {
      name: "Ossified Calculator",
      abbr: "FX",
      gameName: "crowdcalc_",
      series: "Charming Crowd",
      tourneyPresence: 1
    },
    {
      name: "Rustic Rain",
      abbr: "NU",
      gameName: "instrumentrain_",
      series: "Detailed Instrument",
      tourneyPresence: -1
    },
    {
      name: "Smooth Sidewalk",
      abbr: "TR",
      gameName: "attacksidewalk_",
      series: "Utopian Attack",
      tourneyPresence: 0
    },
    {
      name: "Sable Wound",
      abbr: "US",
      gameName: "yokewound_",
      series: "Astonishing Yoke",
      tourneyPresence: 2
    },
    {
      name: "Near Hydrant",
      abbr: "BX",
      gameName: "quiethydrant_",
      series: "Taboo Quiet",
      tourneyPresence: 1
    },
    {
      name: "Melodic Shock",
      abbr: "WV",
      gameName: "armyshock_",
      series: "Frequent Army",
      tourneyPresence: 0
    }
  ],
  targetStages: [
    "crowdcalc_",
    "attacksidewalk_",
    "quiethydrant_",
    "armyshock_"
  ]
};

export const PARENTERROR_FATAL: { inputStages: StageClassifications[], targetGameNames: string[], expectedMessage: string } = {
  inputStages: [
    {
      name: "Dry Comparison",
      abbr: "MG",
      gameName: "policycompare_",
      series: "Cloudy Policy",
      tourneyPresence: -1
    },
    {
      name: "Stormy Cancer",
      abbr: "DO",
      gameName: "newsstormy_",
      series: "Harsh News",
      tourneyPresence: 2
    },
    {
      name: "Polite Orange",
      abbr: "QE",
      gameName: "performancepolite_",
      series: "Spicy Performance",
      tourneyPresence: -1
    },
    {
      name: "Ethereal Story",
      abbr: "CP",
      gameName: "actorstory_",
      series: "Sleepy Actor",
      tourneyPresence: 1
    },
    {
      name: "Special Priority",
      abbr: "SK",
      gameName: "moviepriority_",
      series: "Global Movie",
      tourneyPresence: 2
    }
  ],
  targetGameNames: [
    "newsstormy_",
    "performancepolite_",
    "moviepriority_"
  ],
  expectedMessage: MESSAGES.unknownError
};

export const NOSTAGES_ERROR: { inputStages: StageClassifications[], expectedMessage: string } = {
  inputStages: [],
  expectedMessage: MESSAGES.noStagesLoaded
};

export const NOSTAGES_ERROR_NEGATIVE: { inputStages: StageClassifications[], targetMessage: string } = {
  inputStages: [
    {
      name: "Whispering Screw",
      abbr: "MD",
      gameName: "inkscrew_",
      series: "Ink",
      tourneyPresence: 2
    },
    {
      name: "Plain Memory",
      abbr: "EI",
      gameName: "balancememory_",
      series: "Solid Balance",
      tourneyPresence: 2
    },
    {
      name: "Elbow",
      abbr: "VY",
      gameName: "brickelbow_",
      series: "Dead Brick",
      tourneyPresence: 1
    },
    {
      name: "Sense",
      abbr: "KG",
      gameName: "debtsense_",
      series: "Useful Debt",
      tourneyPresence: -1
    }
  ],
  targetMessage: MESSAGES.noStagesLoaded
};

export const NONE_SELECT_ERROR: { inputStages: StageClassifications[], expectedMessage: string } = {
  inputStages: [
    {
      name: "Outrageous Airplane",
      abbr: "VU",
      gameName: "feelplane_",
      series: "Discreet Feeling",
      tourneyPresence: -1
    },
    {
      name: "Crooked Arm",
      abbr: "BU",
      gameName: "catarm_",
      series: "Tidy Cat",
      tourneyPresence: 0
    },
    {
      name: "Tightfisted Wish",
      abbr: "HC",
      gameName: "markwish_",
      series: "Ambitious Mark",
      tourneyPresence: 0
    },
    {
      name: "Ritzy Quill",
      abbr: "QR",
      gameName: "spiderquill_",
      series: "Imaginary Spiders",
      tourneyPresence: 1
    },
    {
      name: "Dependent Things",
      abbr: "EM",
      gameName: "keythings_",
      series: "Successful Key",
      tourneyPresence: -1
    },
    {
      name: "Husky Pear",
      abbr: "FW",
      gameName: "streampear_",
      series: "Elfin Stream",
      tourneyPresence: -1
    },
    {
      name: "Straight Channel",
      abbr: "LO",
      gameName: "eggnogchannel_",
      series: "Lying Eggnog",
      tourneyPresence: 2
    },
    {
      name: "Sudden Lace",
      abbr: "SS",
      gameName: "worklace_",
      series: "Tremendous Work",
      tourneyPresence: 0
    }
  ],
  expectedMessage: MESSAGES.noStagesSelected
};

export const UPDATE_ALL_INVALID_SECTION: StageClassifications[] = [
  {
    name: "Closed Education",
    abbr: "CE",
    gameName: "valueclosed_",
    series: "Impartial Value",
    tourneyPresence: -1
  },
  {
    name: "Windy Rail",
    abbr: "WR",
    gameName: "coachrail_",
    series: "Workable Coach",
    tourneyPresence: 1
  },
  {
    name: "Oceanic Eggs",
    abbr: "OE",
    gameName: "homelesseggs_",
    series: "Homeless Lock",
    tourneyPresence: 1
  },
  {
    name: "Bloody Rainstorm",
    abbr: "BR",
    gameName: "cumberstorm_",
    series: "Cumbersome Thing",
    tourneyPresence: 1
  }
];

export const UPDATE_ALL_INVALID_VALUE: StageClassifications[] = [
  {
    name: "Ludicrous Riddle",
    abbr: "LR",
    gameName: "verseriddle_",
    series: "Needy Verse",
    tourneyPresence: -1
  },
  {
    name: "Elite Duck",
    abbr: "ED",
    gameName: "debtduck_",
    series: "Ill Debt",
    tourneyPresence: 1
  },
  {
    name: "Nutritious Wrist",
    abbr: "NW",
    gameName: "actionwrist_",
    series: "Kaput Action",
    tourneyPresence: 0
  },
  {
    name: "Ancient Army",
    abbr: "AA",
    gameName: "armybead_",
    series: "Unwritten Bead",
    tourneyPresence: 1
  },
];

export const SUCCESS_NOTICE_INIT: StageClassifications[] = [
  {
    name: "qJSIuIeCKK",
    abbr: "YH",
    gameName: "VOCJROoIqk",
    series: "ptUzuhVbhl",
    tourneyPresence: -1
  },
  {
    name: "QcMkUhIIFp",
    abbr: "YK",
    gameName: "fffsDYvUJi",
    series: "tJjNeCEKkf",
    tourneyPresence: -1
  },
  {
    name: "MzUlZWsDbr",
    abbr: "UX",
    gameName: "AgReThTmtv",
    series: "cWIdDSFpFC",
    tourneyPresence: -1
  },
  {
    name: "TYsSRIkNoP",
    abbr: "EJ",
    gameName: "DxSbJMNImh",
    series: "EgHRhhaNWv",
    tourneyPresence: -1
  },
];

export const SUCCESS_NOTICE_SHOW: StageClassifications[] = [
  {
    name: "uqkDSsxWXS",
    abbr: "ZH",
    gameName: "fjIIocgEmv",
    series: "RAJTxvFNlW",
    tourneyPresence: 1
  },
  {
    name: "ODVpZaUcXW",
    abbr: "YO",
    gameName: "srfGPalxDb",
    series: "TskcNDuyEy",
    tourneyPresence: 0
  },
  {
    name: "saDsvEOksD",
    abbr: "UG",
    gameName: "ADjGVAZFrs",
    series: "qgXUjceQpf",
    tourneyPresence: -1
  },
];
export const SUCCESS_NOTICE_AUTOHIDE: StageClassifications[] = [
  {
    name: "zVIVfYlvGZ",
    abbr: "ZF",
    gameName: "XlzrzVSNZX",
    series: "pVuoQxuaaG",
    tourneyPresence: 3
  },
  {
    name: "ewrjQqAiVo",
    abbr: "VM",
    gameName: "hZfkuiSGJM",
    series: "LFjrzwPAlL",
    tourneyPresence: 1
  },
  {
    name: "pSPdBRFFmg",
    abbr: "PO",
    gameName: "mLSVAQIleU",
    series: "kUlHhAFUDn",
    tourneyPresence: -1
  },
  {
    name: "alKnLErXvq",
    abbr: "AH",
    gameName: "lAAGBiLkCw",
    series: "ewqqhYaaVR",
    tourneyPresence: 0
  },
  {
    name: "hMQgqCVsXS",
    abbr: "QS",
    gameName: "XBqHkTJXPd",
    series: "pXCeXFkbhz",
    tourneyPresence: 2
  },
];

export const ROOTHEADER_NOSUBMIT: StageClassifications[] = [
  {
    name: "CuwaveLYggJabBS",
    abbr: "DQ",
    gameName: "IhPmvbKcyiLCNvN",
    series: "UjVAdTcKeASfRkl",
    tourneyPresence: 1
  },
  {
    name: "qHhReHWoJojiBhK",
    abbr: "IZ",
    gameName: "PRSWglTgpPlnULa",
    series: "htikLFjcxDwgTKE",
    tourneyPresence: 1
  },
  {
    name: "ZmsHuszbXDyjSdY",
    abbr: "QX",
    gameName: "oqjTNRdHqbWxeLB",
    series: "TYCCddRpIcnAWeJ",
    tourneyPresence: -1
  },
  {
    name: "ofRcbYuABbFOESV",
    abbr: "GD",
    gameName: "yyKyIyKVWMvRgwi",
    series: "jYFGBsprQLeNVdM",
    tourneyPresence: 3
  },
  {
    name: "AgjfDUTNPjdsGUB",
    abbr: "SC",
    gameName: "HiKeYmIIxiPJnkz",
    series: "SSyAuLfzlPuPJFN",
    tourneyPresence: 3
  },
  {
    name: "WCcirsbImWNjhSu",
    abbr: "VY",
    gameName: "TzFonZdaqBAiwRh",
    series: "CBFqcqRxmBPyRHX",
    tourneyPresence: 0
  },
  {
    name: "ixYeLvcxEfmRblR",
    abbr: "IK",
    gameName: "fJcXbDhLMhxFFKj",
    series: "QoIMLqQOUYPVQyE",
    tourneyPresence: 2
  },
];

/*
{
  name: "",
  abbr: "",
  gameName: "",
  series: "",
  tourneyPresence: -1
},
*/