import { StageSelectInfo } from '../stage-select-info.model';

const MESSAGES: {[type: string]: string} = {
  noStagesLoaded: "Stages could not be loaded. Try refreshing the page.",
  unknownError: "Something went wrong. Try refreshing the page."
}

export const VALID: StageSelectInfo = {
  name: "Princess Peach's Castle",
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
    gameName: -82,
    series: "Super Hedgehog Wars",
    tourneyPresence: 2.9
  },

  seriesNotString: {
    name: "Whatnot",
    gameName: "shatseveral_",
    series: false,
    tourneyPresence: 7
  },

  tourneyPresenceNotNumber: {
    name: "Do it",
    gameName: "justkiddingdongdoit",
    series: "Seriously, don't do it.",
    tourneyPresence: "It's a trap"
  }
};

export const ONE: StageSelectInfo[] = [
  {
    name: "Princess Peach's Castle",
    gameName: "mario_castledx_",
    series: "Super Mario",
    tourneyPresence: -1
  },
  {
    name: "Yoshi's Story",
    gameName: "yoshi_cartboard_",
    series: "Yoshi",
    tourneyPresence: 0
  },
  {
    name: "Great Plateau Tower",
    gameName: "zelda_tower",
    series: "The Legend of Zelda",
    tourneyPresence: -1
  }
];

export const TWO: StageSelectInfo[] = [
  {
    name: "Arena Ferox",
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
    gameName: "poke_stadium_",
    series: "Pokémon",
    tourneyPresence: 2
  }
];

export const THREE: StageSelectInfo[] = [
  {
    name: "Wily Castle",
    gameName: "wily_",
    series: "Mega Man",
    tourneyPresence: -1
  },
  {
    name: "Gamer",
    gameName: "gamer_",
    series: "Wario Ware",
    tourneyPresence: -1
  },
  {
    name: "PictoChat 2",
    gameName: "pictchat_",
    series: "Miscellaneous",
    tourneyPresence: -1
  }
];

export const LEGAL_COMMON_PRESENT: StageSelectInfo[] = [
  {
    name: "Extreme Place",
    gameName: "extremeplace_",
    series: "Extremities",
    tourneyPresence: 0
  },
  {
    name: "Foreign Oddity",
    gameName: "foreignoddity_",
    series: "Oddworld",
    tourneyPresence: 0
  },
  {
    name: "Unknown Realm",
    gameName: "mariounknown_",
    series: "Super Mario",
    tourneyPresence: 0
  },
  {
    name: "Optical Illusion",
    gameName: "illusion_",
    series: "Space Age",
    tourneyPresence: -1
  },
  {
    name: "Present Time",
    gameName: "timepresent_",
    series: "Time",
    tourneyPresence: 2
  },
  {
    name: "Future's Past",
    gameName: "timefuturepast_",
    series: "Time",
    tourneyPresence: 1
  }
];

export const LEGAL_COMMON_ABSENT: StageSelectInfo[] = [
  {
    name: "Whereabouts",
    gameName: "whereabouts_",
    series: "Vague",
    tourneyPresence: 1
  },
  {
    name: "Thereabouts",
    gameName: "thereabouts_",
    series: "Vague",
    tourneyPresence: 2
  },
  {
    name: "Wherever",
    gameName: "wherever_",
    series: "Vague",
    tourneyPresence: -1
  },
  {
    name: "Off in the Distance",
    gameName: "vaguedistance_",
    series: "Slibhtly Vague",
    tourneyPresence: -1
  }
];

export const LEGAL_COMMON_INCLUDE: { [property: string]: StageSelectInfo[] } = {
  allStages: [
    {
      name: "Place of Destiny",
      gameName: "battledestiny_",
      series: "Battle",
      tourneyPresence: 2
    },
    {
      name: "Offroad",
      gameName: "raceroffroad_",
      series: "Racer",
      tourneyPresence: 0
    },
    {
      name: "Inside Brain",
      gameName: "surgerybrain_",
      series: "Surgery",
      tourneyPresence: -1
    },
    {
      name: "Inside Heart",
      gameName: "surgeryheart_",
      series: "Surgery",
      tourneyPresence: 1
    },
    {
      name: "Onroad",
      gameName: "raceronroad_",
      series: "Racer",
      tourneyPresence: -1
    },
    {
      name: "Bank",
      gameName: "tycoonBank_",
      series: "Tycoon",
      tourneyPresence: 0
    },
    {
      name: "Temple of Prayer",
      gameName: "religiontemple_",
      series: "Religion",
      tourneyPresence: 1
    },
    {
      name: "Gate of Odin",
      gameName: "mythologygate_",
      series: "Mythology",
      tourneyPresence: 0
    },
    {
      name: "Office",
      gameName: "tycoonoffice_",
      series: "Tycoon",
      tourneyPresence: -1
    }

  ],
  includedStages: [
    {
      name: "Offroad",
      gameName: "raceroffroad_",
      series: "Racer",
      tourneyPresence: 0
    },
    {
      name: "Bank",
      gameName: "tycoonBank_",
      series: "Tycoon",
      tourneyPresence: 0
    },
    {
      name: "Gate of Odin",
      gameName: "mythologygate_",
      series: "Mythology",
      tourneyPresence: 0
    }
  ]
};

export const LEGAL_COMMON_EXCLUDE: { [property: string]: StageSelectInfo[] } = {
  allStages: [
    {
      name: "Haystack",
      gameName: "farmhaystack_",
      series: "Animal Farm",
      tourneyPresence: 1
    },
    {
      name: "Stable",
      gameName: "farmstable_",
      series: "Animal Farm",
      tourneyPresence: 0
    },
    {
      name: "Living Room",
      gameName: "dogsroom_",
      series: "Nintendogs",
      tourneyPresence: -1
    },
    {
      name: "Cartesian Graph",
      gameName: "mathcartesian_",
      series: "Mathemagics",
      tourneyPresence: 2
    },
    {
      name: "Apple Tree",
      gameName: "scienceapple_",
      series: "Science History",
      tourneyPresence: -1
    },
    {
      name: "Farmer's Market",
      gameName: "slicefarmers",
      series: "Slice of Life",
      tourneyPresence: 1,
    },
    {
      name: "Disco",
      gameName: "dancedisco_",
      series: "Better Dance Better",
      tourneyPresence: 0,
    },
    {
      name: "High School",
      gameName: "sliceschool_",
      series: "Slice of Life",
      tourneyPresence: 1
    },
    {
      name: "Park",
      gameName: "slicepark_",
      series: "Slice of Life",
      tourneyPresence: 0
    }
  ],
  excludedStages: [
    {
      name: "Haystack",
      gameName: "farmhaystack_",
      series: "Animal Farm",
      tourneyPresence: 1
    },

    {
      name: "Living Room",
      gameName: "dogsroom_",
      series: "Nintendogs",
      tourneyPresence: -1
    },
    {
      name: "Cartesian Graph",
      gameName: "mathcartesian_",
      series: "Mathemagics",
      tourneyPresence: 2
    },
    {
      name: "Apple Tree",
      gameName: "scienceapple_",
      series: "Science History",
      tourneyPresence: -1
    },
    {
      name: "Farmer's Market",
      gameName: "slicefarmers_",
      series: "Slice of Life",
      tourneyPresence: 1,
    },
    {
      name: "High School",
      gameName: "sliceschool_",
      series: "Slice of Life",
      tourneyPresence: 1
    }
  ]
};

export const LEGAL_UNCOMMON_PRESENT: StageSelectInfo[] = [
  {
    name: "World of Light",
    gameName: "smashultlight_",
    series: "Super Smash Bros.",
    tourneyPresence: -1
  },
  {
    name: "World of Shadow",
    gameName: "smashultdark_",
    series: "Super Smash Bros.",
    tourneyPresence: 1
  },
  {
    name: "Coffee Table",
    gameName: "toytable_",
    series: "Toy Tale",
    tourneyPresence: 2
  },
  {
    name: "Countryside",
    gameName: "farmcountry_",
    series: "Farm Story",
    tourneyPresence: 0
  },
  {
    name: "Realm of Mediocrity",
    gameName: "underwhelmmediocrity_",
    series: "Underwhelm",
    tourneyPresence: 1
  },
  {
    name: "ImpossiBrain's Lair",
    gameName: "mindimpossibrain_",
    series: "Captain Mind Man",
    tourneyPresence: 1
  }
];

export const LEGAL_UNCOMMON_ABSENT: StageSelectInfo[] = [
  {
    name: "UN Embassy",
    gameName: "historyembassy_",
    series: "History",
    tourneyPresence: 2
  },
  {
    name: "Field",
    gameName: "farmfield_",
    series: "Farm Story",
    tourneyPresence: 0
  },
  {
    name: "Classroom",
    gameName: "sliceclass_",
    series: "Slice of Life",
    tourneyPresence: -1
  },
  {
    name: "Domain of Destiny",
    gameName: "knightsdestiny_",
    series: "Knights",
    tourneyPresence: 2
  }
];

export const LEGAL_UNCOMMON_INCLUDE: { [property: string]: StageSelectInfo[] } = {
  allStages: [
    {
      name: "Cafeteria",
      gameName: "foodcafe_",
      series: "Food Fighters",
      tourneyPresence: 2
    },
    {
      name: "Puerto Rico",
      gameName: "geopr_",
      series: "Geography",
      tourneyPresence: 1
    },
    {
      name: "Panama",
      gameName: "geopa_",
      series: "Geography",
      tourneyPresence: -1
    },
    {
      name: "1955 Paris",
      gameName: "hist1955paris_",
      series: "History",
      tourneyPresence: 0
    },
    {
      name: "Golden Gate Bridge",
      gameName: "geoggb_",
      series: "Geography",
      tourneyPresence: -1
    },
    {
      name: "Pacific Ocean",
      gameName: "geopacocean_",
      series: "Geography",
      tourneyPresence: -1
    },
    {
      name: "Desk",
      gameName: "officedesk_",
      series: "Office Simulator",
      tourneyPresence: 1
    }
  ],
  includedStages: [
    {
      name: "Puerto Rico",
      gameName: "geopr_",
      series: "Geography",
      tourneyPresence: 1
    },
    {
      name: "Desk",
      gameName: "officedesk_",
      series: "Office Simulator",
      tourneyPresence: 1
    }
  ]
};

export const LEGAL_UNCOMMON_EXCLUDE: { [property: string]: StageSelectInfo[] } = {
  allStages: [
    {
      name: "Ancient Pyramid",
      gameName: "histpyramid_",
      series: "History",
      tourneyPresence: -1
    },
    {
      name: "Under the Sea",
      gameName: "mermaidsea_",
      series: "A Small Mermaid",
      tourneyPresence: 2
    },
    {
      name: "On Land",
      gameName: "mermaidland_",
      series: "A Small Mermaid",
      tourneyPresence: 1
    },
    {
      name: "Buffet Land",
      gameName: "johnbuffet_",
      series: "Hyper John Time",
      tourneyPresence: 0
    },
    {
      name: "Lava Land",
      gameName: "johnlava_",
      series: "Hyper John Time",
      tourneyPresence: 2
    }
  ],
  excludedStages: [
    {
      name: "Ancient Pyramid",
      gameName: "histpyramid_",
      series: "History",
      tourneyPresence: -1
    },
    {
      name: "Under the Sea",
      gameName: "mermaidsea_",
      series: "A Small Mermaid",
      tourneyPresence: 2
    },
    {
      name: "Buffet Land",
      gameName: "johnbuffet_",
      series: "Hyper John Time",
      tourneyPresence: 0
    },
    {
      name: "Lava Land",
      gameName: "johnlava_",
      series: "Hyper John Time",
      tourneyPresence: 2
    }
  ]
};

export const LEGAL_RARE_PRESENT = [
  {
    name: "Ancient Forest",
    gameName: "monsterwforest_",
    series: "Monster Hunter",
    tourneyPresence: 1
  },
  {
    name: "Deserted Island",
    gameName: "monstertriisland_",
    series: "Monster Hunter",
    tourneyPresence: 2
  },
  {
    name: "Family Room",
    gameName: "slicefamily_",
    series: "Slice of Life",
    tourneyPresence: -1
  },
  {
    name: "Dire Dire Docks",
    gameName: "mariodocks_",
    series: "Super Mario",
    tourneyPresence: 2
  },
  {
    name: "Les Vagas",
    gameName: "tvcvgas_",
    series: "Tatsunoko vs Capcom",
    tourneyPresence: 0
  },
  {
    name: "Zen Monastery",
    gameName: "religionzen_",
    series: "Religion",
    tourneyPresence: 2
  },
  {
    name: "Local Bar",
    gameName: "slicebar_",
    series: "Slice of Life",
    tourneyPresence: 2
  }
];

export const LEGAL_RARE_ABSENT = [
  {
    name: "Metropolis",
    gameName: "supermanmetro_",
    series: "DC Universe",
    tourneyPresence: -1
  },
  {
    name: "Mysterious Portal",
    gameName: "fantasyportal_",
    series: "Fantasy Land",
    tourneyPresence: 1
  },
  {
    name: "Elven Village",
    gameName: "fantasyelven_",
    series: "Fantasy Land",
    tourneyPresence: 1
  },
  {
    name: "Convenience Store",
    gameName: "sliceconvenience_",
    series: "Slice of Life",
    tourneyPresence: 0
  }
];

export const LEGAL_RARE_INCLUDE: { [property: string]: StageSelectInfo[] } = {
  allStages: [
    {
      name: "Pizza Time Palace",
      gameName: "spidermanpizza_",
      series: "Spider-man",
      tourneyPresence: 1
    },
    {
      name: "Easy Street",
      gameName: "monopolyeasy_",
      series: "Monopoly",
      tourneyPresence: 2
    },
    {
      name: "Daily Bugle",
      gameName: "spidermanbugle_",
      series: "Spider-man",
      tourneyPresence: -1
    },
    {
      name: "Supermarket",
      gameName: "slicegrocery_",
      series: "Slice of Life",
      tourneyPresence: 1
    },
    {
      name: "Strideville Stadium",
      gameName: "sportsstride_",
      series: "Sports",
      tourneyPresence: 2
    },
    {
      name: "Playground",
      gameName: "schoolplayground_",
      series: "School",
      tourneyPresence: 0
    },
    {
      name: "Park Place",
      gameName: "monopolypark_",
      series: "Monopoly",
      tourneyPresence: 0
    }
  ],
  includedStages: [
    {
      name: "Easy Street",
      gameName: "monopolyeasy_",
      series: "Monopoly",
      tourneyPresence: 2
    },
    {
      name: "Strideville Stadium",
      gameName: "sportsstride_",
      series: "Sports",
      tourneyPresence: 2
    },
  ]
};

export const LEGAL_RARE_EXCLUDE: { [property: string]: StageSelectInfo[] } = {
  allStages: [
    {
      name: "Goodshop Laboratory",
      gameName: "goodlab_",
      series: "Goodshop",
      tourneyPresence: 1
    },
    {
      name: "Vanilla Villa",
      gameName: "johnvanilla_",
      series: "Hyper John Time",
      tourneyPresence: 2
    },
    {
      name: "Serenity",
      gameName: "fireflyserenity_",
      series: "Firefly",
      tourneyPresence: -1
    },
    {
      name: "Circuit Country",
      gameName: "johncircuit_",
      series: "Hyper John Time",
      tourneyPresence: 0
    },
    {
      name: "New Kansas Jail",
      gameName: "brawlerjail_",
      series: "Broody Brawlers",
      tourneyPresence: 1
    },
    {
      name: "Ferris Wheel",
      gameName: "sliceferris_",
      series: "Slice of Life",
      tourneyPresence: 2
    },
    {
      name: "Amazon Forest",
      gameName: "geoamazon_",
      series: "Geography",
      tourneyPresence: 2
    },
    {
      name: "Destructionland",
      gameName: "blocksdestroy_",
      series: "Block Party",
      tourneyPresence: -1
    },
    {
      name: "Federal City",
      gameName: "supermanfed_",
      series: "Superman",
      tourneyPresence: 0
    },
  ],
  excludedStages: [
    {
      name: "Goodshop Laboratory",
      gameName: "goodlab_",
      series: "Goodshop",
      tourneyPresence: 1
    },
    {
      name: "Serenity",
      gameName: "fireflyserenity_",
      series: "Firefly",
      tourneyPresence: -1
    },
    {
      name: "Circuit Country",
      gameName: "johncircuit_",
      series: "Hyper John Time",
      tourneyPresence: 0
    },
    {
      name: "New Kansas Jail",
      gameName: "brawlerjail_",
      series: "Broody Brawlers",
      tourneyPresence: 1
    },
    {
      name: "Destructionland",
      gameName: "blocksdestroy_",
      series: "Block Party",
      tourneyPresence: -1
    },
    {
      name: "Federal City",
      gameName: "supermanfed_",
      series: "Superman",
      tourneyPresence: 0
    },
  ]
};

export const TOURNEY = {
  input: [
    {
      name: "Battle Screen",
      gameName: "motherbattle_",
      series: "Mother",
      tourneyPresence: -1
    },
    {
      name: "Office",
      gameName: "rainbowoffice_",
      series: "Captain Rainbow",
      tourneyPresence: 2
    },
    {
      name: "Place Station",
      gameName: "placestation_",
      series: "Miscellaneous",
      tourneyPresence: 0
    },
    {
      name: "Backyard",
      gameName: "nintendogsyard_",
      series: "Nintendogs",
      tourneyPresence: 1
    },
    {
      name: "Rooftop",
      gameName: "bondroof_",
      series: "James Bond",
      tourneyPresence: -1
    },
    {
      name: "Villestown",
      gameName: "villestown_",
      series: "Animal Crossing",
      tourneyPresence: 0
    },
    {
      name: "Bathtub",
      gameName: "nintendogsbath_",
      series: "Nintendogs",
      tourneyPresence: 2
    },
    {
      name: "Kitchen",
      gameName: "kitchen_",
      series: "Cooking Mama",
      tourneyPresence: 1
    }
  ],
  output: {
    legalCommon: [
      {
        name: "Place Station",
        gameName: "placestation_",
        series: "Miscellaneous",
        tourneyPresence: 0
      },
      {
        name: "Villestown",
        gameName: "villestown_",
        series: "Animal Crossing",
        tourneyPresence: 0
      },
    ],
    legalUncommon: [
      {
        name: "Kitchen",
        gameName: "kitchen_",
        series: "Cooking Mama",
        tourneyPresence: 1
      },
      {
        name: "Backyard",
        gameName: "nintendogsyard_",
        series: "Nintendogs",
        tourneyPresence: 1
      },
    ],
    legalRare: [
      {
        name: "Bathtub",
        gameName: "nintendogsbath_",
        series: "Nintendogs",
        tourneyPresence: 2
      },
      {
        name: "Office",
        gameName: "rainbowoffice_",
        series: "Captain Rainbow",
        tourneyPresence: 2
      },
    ]
  }
};

export const TOURNEY_STAGE_ID: StageSelectInfo[] = [
  {
    name: "Vale of Vacuums",
    gameName: "dirtyvacuum_",
    series: "Dirtymancing",
    tourneyPresence: 1
  },
  {
    name: "Ashley Farm",
    gameName: "baconashley_",
    series: "Iterative Bacon Hero",
    tourneyPresence: 1
  },
  {
    name: "Double-Door Foyer",
    gameName: "homefoyer_",
    series: "Welcome Home",
    tourneyPresence: 0
  },
  {
    name: "Galactic Microscope Lab",
    gameName: "lessonmicro_",
    series: "Lesson Learned",
    tourneyPresence: 1
  },
  {
    name: "Jerry Arctic's Life Insurance Office",
    gameName: "unimaginablejerry_",
    series: "Quest of the Unimaginable",
    tourneyPresence: 1
  },
  {
    name: "Karl's Place",
    gameName: "neverkarl_",
    series: "Neverwhere",
    tourneyPresence: 1
  },
  {
    name: "HRT Bank",
    gameName: "opulencebank_",
    series: "Opulence",
    tourneyPresence: 2
  },
  {
    name: "Questionland",
    gameName: "truthquestion_",
    series: "Truthfinder",
    tourneyPresence: 2
  }
];

export const TOURNEY_STAGE_LABEL_FOR: StageSelectInfo[] = [
  {
    name: "Iciclipse Dungeon",
    gameName: "ventureice_",
    series: "Venture World",
    tourneyPresence: 0
  },
  {
    name: "Verdent Pyramid",
    gameName: "zealpyramid_",
    series: "Zeal",
    tourneyPresence: 2
  },
  {
    name: "Oddball Temple",
    gameName: "presenceodd_",
    series: "Presence",
    tourneyPresence: 1
  },
  {
    name: "Basketball Court",
    gameName: "youthcourt_",
    series: "Youth of the Ancients",
    tourneyPresence: 2
  },
  {
    name: "Pepper's Playground",
    gameName: "edpepper_",
    series: "Edward Island",
    tourneyPresence: 1
  },
  {
    name: "Zedd Dredd's Canopy",
    gameName: "deathcanopy_",
    series: "Deathfarm",
    tourneyPresence: 0
  },
  {
    name: "Zephyr Ring Drawer",
    gameName: "dearestdrawer_",
    series: "Hello Dearest",
    tourneyPresence: 1
  },
  {
    name: "Frank's Discussion Table",
    gameName: "jefffrank_",
    series: "Jeff Jameson",
    tourneyPresence: 0
  }
];

export const TOURNEY_SHOW_LEGAL_COMMON: StageSelectInfo[] = [
  {
    name: "Murky Swamp",
    gameName: "farswamp_",
    series: "Farawayland",
    tourneyPresence: 0
  },
  {
    name: "Abandoned Castle",
    gameName: "explorercastle_",
    series: "Explorer",
    tourneyPresence: 0
  },
  {
    name: "Fairless Mills",
    gameName: "farmmills_",
    series: "Fantasy Farmer",
    tourneyPresence: 0
  }
];

export const TOURNEY_SHOW_LEGAL_COMMON_BANNED: StageSelectInfo[] = [
  {
    name: "Turkey Factory",
    gameName: "farmturkey_",
    series: "Fantasy Farmer",
    tourneyPresence: -1
  },
  {
    name: "Mound of Ashes",
    gameName: "fireashes_",
    series: "World of Fire",
    tourneyPresence: -1
  },
  {
    name: "Aphid Farms",
    gameName: "farmaphid_",
    series: "Fantasy Farmer",
    tourneyPresence: 0
  }
];


export const TOURNEY_SHOW_LEGAL_UNCOMMON = [
  {
    name: "Atrophy Island",
    gameName: "moroseatrophy_",
    series: "Morose Man",
    tourneyPresence: 1
  },
  {
    name: "Tutor Palace",
    gameName: "schooltutor_",
    series: "School",
    tourneyPresence: 1
  },
  {
    name: "Forgiveness Forest",
    gameName: "virtueforest",
    series: "Virtue Reality",
    tourneyPresence: 1
  }
];

export const TOURNEY_SHOW_LEGAL_UNCOMMON_BANNED = [
  {
    name: "Entropical Island",
    gameName: "thermoisland_",
    series: "The Thermodynamic Duo",
    tourneyPresence: 1
  },
  {
    name: "Interrogation Room",
    gameName: "policequestion_",
    series: "Police Force Prime",
    tourneyPresence: 1
  },
  {
    name: "Ginormous Jenga Jungle",
    gameName: "fairlyjenga_",
    series: "A Fairly Large Adventure Game",
    tourneyPresence: -1
  }
];

export const TOURNEY_SHOW_LEGAL_RARE = [
  {
    name: "Break Room",
    gameName: "janitorbreak_",
    series: "Super Janitor",
    tourneyPresence: 2
  },
  {
    name: "Hotel Lobby",
    gameName: "managehotel_",
    series: "Ultra Manager",
    tourneyPresence: 2
  }
];

export const TOURNEY_SHOW_LEGAL_RARE_BANNED = [
  {
    name: "Bully Beach",
    gameName: "racebeach_",
    series: "Raceway Inferno",
    tourneyPresence: 2
  },
  {
    name: "Federal Alliance Headquarters",
    gameName: "superhq_",
    series: "Super Group Alpha",
    tourneyPresence: -1
  },
  {
    name: "Easter Bunny's Hideout",
    gameName: "holidayeaster_",
    series: "World of Holidays",
    tourneyPresence: 2
  }
];

export const TOURNEY_SHOW_LEGAL_COMMON_UNCOMMON = [
  {
    name: "Ferretable Wasteland",
    gameName: "animalferret_",
    series: "Animalice",
    tourneyPresence: 0
  },
  {
    name: "Frantic Freezer",
    gameName: "cookfreezer_",
    series: "Chaos Cook",
    tourneyPresence: 0
  },
  {
    name: "Acrid Acid Antfarm",
    gameName: "petsacrid_",
    series: "Pets: The Musical",
    tourneyPresence: 1
  },
  {
    name: "Acorn Tree of Actual Treasure",
    gameName: "flantasytree_",
    series: "Flantastic Flantasy",
    tourneyPresence: 0
  },
  {
    name: "Shia Shire",
    gameName: "celebrityshire_",
    series: "Celebrity Fighters",
    tourneyPresence: 1
  }
];

export const TOURNEY_SHOW_LEGAL_COMMON_UNCOMMON_BANNED = [
  {
    name: "Chris's Christening Cruise",
    gameName: "fortuneboat_",
    series: "Fortune Universe",
    tourneyPresence: 1
  },
  {
    name: "Goldland",
    gameName: "periodicgold_",
    series: "The Periodic Table That Could",
    tourneyPresence: -1
  },
  {
    name: "Foul Fowl Farm",
    gameName: "animalfarm_",
    series: "Animalice",
    tourneyPresence: 0
  },
  {
    name: "Fancy Fortune Frontier",
    gameName: "fortunefrontier_",
    series: "Fortune Universe",
    tourneyPresence: 0
  },
  {
    name: "Inflatable Interdimensional Portal",
    gameName: "inventorportal_",
    series: "Inventor Adventures",
    tourneyPresence: 1
  }
];

export const TOURNEY_SHOW_LEGAL_COMMON_RARE = [
  {
    name: "Fantasy Flan Land",
    gameName: "courageflan_",
    series: "Courage the Cowardly Game",
    tourneyPresence: 2
  },
  {
    name: "French Fry Temple",
    gameName: "megasfry_",
    series: "Megas Deluxe",
    tourneyPresence: 2
  },
  {
    name: "Dog Tower",
    gameName: "petsdog_",
    series: "Pets",
    tourneyPresence: 0
  },
  {
    name: "Ferris Windmill",
    gameName: "moviemill_",
    series: "Movie Mash",
    tourneyPresence: 2
  },
  {
    name: "Introspective Pizza Oven",
    gameName: "furnitureoven_",
    series: "Absurd Furniture",
    tourneyPresence: 0
  },
  {
    name: "Widened Barricade",
    gameName: "armybarricade_",
    series: "Army Time Zero",
    tourneyPresence: 2
  }
];

export const TOURNEY_SHOW_LEGAL_COMMON_RARE_BANNED = [
  {
    name: "Frere Praire",
    gameName: "folkfrere_",
    series: "Folk Fair",
    tourneyPresence: -1
  },
  {
    name: "Tremendously Towering Tom's Pizza",
    gameName: "judytom_",
    series: "The EJudycator",
    tourneyPresence: -1
  },
  {
    name: "Flower World",
    gameName: "johnflower_",
    series: "Super John Time",
    tourneyPresence: 2
  },
  {
    name: "Destructible Dance Party",
    gameName: "destroyparty_",
    series: "Destroy Things Now",
    tourneyPresence: 0
  },
  {
    name: "Actual Archetype Archway",
    gameName: "literacerarch_",
    series: "Literacers",
    tourneyPresence: 2
  }
];

export const TOURNEY_SHOW_LEGAL_UNCOMMON_RARE = [
  {
    name: "Howdy-Doody Howie Land",
    gameName: "greethowdy_",
    series: "Greetinator Beta",
    tourneyPresence: 1
  },
  {
    name: "Fair Enough Fairy Town",
    gameName: "johnfairy_",
    series: "Super John Time",
    tourneyPresence: 2
  },
  {
    name: "Manger Manager's Office",
    gameName: "historymanager_",
    series: "History Team",
    tourneyPresence: 2
  },
  {
    name: "Picnic",
    gameName: "foodpicnic_",
    series: "Food Fighters",
    tourneyPresence: 2
  },
  {
    name: "The Unquestionable Quentin's Quarry",
    gameName: "alliteratequentin_",
    series: "Alliteration Island",
    tourneyPresence: 1
  }
];

export const TOURNEY_SHOW_LEGAL_UNCOMMON_RARE_BANNED = [
  {
    name: "Forcefield Fence",
    gameName: "alliteratefence_",
    series: "Alliteration Island",
    tourneyPresence: 2
  },
  {
    name: "Creator's Crater",
    gameName: "buildercrater_",
    series: "Builder Squad",
    tourneyPresence: -1
  },
  {
    name: "Fort 49",
    gameName: "armyfort_",
    series: "Army Team Squad",
    tourneyPresence: 1
  },
  {
    name: "Trevor Town",
    gameName: "alliteratetrevor_",
    series: "Alliteration Island",
    tourneyPresence: 1
  },
  {
    name: "Picture Perfect Patio",
    gameName: "paintpatio_",
    series: "It's Painting Time!",
    tourneyPresence: -1
  }
];

export const TOURNEY_HIDE_LEGAL_BANNED = [
  {
    name: "True Love Island",
    gameName: "romanceisland_",
    series: "Romance Journey",
    tourneyPresence: -1
  },
  {
    name: "Board Room",
    gameName: "workboard_",
    series: "Workplace Adventure",
    tourneyPresence: -1
  },
  {
    name: "Fordy River",
    gameName: "passengerfordy_",
    series: "Passenger Road",
    tourneyPresence: -1
  }
];

export const TOURNEY_STAGE_SORT: {
  inputStages: StageSelectInfo[],
  sortedStages: { [property: string]: StageSelectInfo[] }
} = {

  inputStages: [
    {
      name: "Extra Credit Round",
      gameName: "schoolextra_",
      series: "School-Time Hustle",
      tourneyPresence: 2
    },
    {
      name: "Dunes of Nurfesque",
      gameName: "johndunes_",
      series: "Super John Time",
      tourneyPresence: 0
    },
    {
      name: "Questionable Workshop",
      gameName: "ceramicquestionable_",
      series: "Ceramic Maker",
      tourneyPresence: 1
    },
    {
      name: "House of Horrors",
      gameName: "jeffhorror_",
      series: "Jeffrey's Revenge",
      tourneyPresence: 1
    },
    {
      name: "Roadway",
      gameName: "condescendroad_",
      series: "Condescension Man",
      tourneyPresence: 1
    },
    {
      name: "Igloo",
      gameName: "quailigloo_",
      series: "Quailentino",
      tourneyPresence: 0
    },
    {
      name: "Sentinel Station",
      gameName: "olveriasentinel_",
      series: "Acts of Olveria",
      tourneyPresence: 1
    },
    {
      name: "Cargo Hold",
      gameName: "prodigycargo_",
      series: "Prodigy",
      tourneyPresence: 1
    },
    {
      name: "Island Port",
      gameName: "antelopeport_",
      series: "Antelope Escape",
      tourneyPresence: 2
    },
    {
      name: "Graph Paper",
      gameName: "leveragegraph_",
      series: "Leverage",
      tourneyPresence: 2
    },
    {
      name: "Friendship City",
      gameName: "friendcity_",
      series: "King of Friendship",
      tourneyPresence: 2
    },
    {
      name: "Neverwind Castle",
      gameName: "duskcastle_",
      series: "Until Dusk",
      tourneyPresence: 1
    },
    {
      name: "Gerald's Bar",
      gameName: "youngbar_",
      series: "Young Jimmy",
      tourneyPresence: 2
    },
    {
      name: "Nigel's Cabin",
      gameName: "evercabin_",
      series: "Everwilds",
      tourneyPresence: 0
    },
    {
      name: "Investigation Desk",
      gameName: "probabledesk_",
      series: "Probable Cause",
      tourneyPresence: 2
    }
  ],

  sortedStages: {
    legalCommon: [
      {
        name: "Dunes of Nurfesque",
        gameName: "johndunes_",
        series: "Super John Time",
        tourneyPresence: 0
      },
      {
        name: "Igloo",
        gameName: "quailigloo_",
        series: "Quailentino",
        tourneyPresence: 0
      },
      {
        name: "Nigel's Cabin",
        gameName: "evercabin_",
        series: "Everwilds",
        tourneyPresence: 0
      }
    ],
    legalUncommon: [
      {
        name: "Cargo Hold",
        gameName: "prodigycargo_",
        series: "Prodigy",
        tourneyPresence: 1
      },
      {
        name: "House of Horrors",
        gameName: "jeffhorror_",
        series: "Jeffrey's Revenge",
        tourneyPresence: 1
      },
      {
        name: "Neverwind Castle",
        gameName: "duskcastle_",
        series: "Until Dusk",
        tourneyPresence: 1
      },
      {
        name: "Questionable Workshop",
        gameName: "ceramicquestionable_",
        series: "Ceramic Maker",
        tourneyPresence: 1
      },
      {
        name: "Roadway",
        gameName: "condescendroad_",
        series: "Condescension Man",
        tourneyPresence: 1
      },
      {
        name: "Sentinel Station",
        gameName: "olveriasentinel_",
        series: "Acts of Olveria",
        tourneyPresence: 1
      }
    ],
    legalRare: [
      {
        name: "Extra Credit Round",
        gameName: "schoolextra_",
        series: "School-Time Hustle",
        tourneyPresence: 2
      },
      {
        name: "Friendship City",
        gameName: "friendcity_",
        series: "King of Friendship",
        tourneyPresence: 2
      },
      {
        name: "Gerald's Bar",
        gameName: "youngbar_",
        series: "Young Jimmy",
        tourneyPresence: 2
      },
      {
        name: "Graph Paper",
        gameName: "leveragegraph_",
        series: "Leverage",
        tourneyPresence: 2
      },
      {
        name: "Investigation Desk",
        gameName: "probabledesk_",
        series: "Probable Cause",
        tourneyPresence: 2
      },
      {
        name: "Island Port",
        gameName: "antelopeport_",
        series: "Antelope Escape",
        tourneyPresence: 2
      }
    ]
  }
};

export const SERIES_STAGE_ID: StageSelectInfo[] = [
  {
    name: "Scenterfuge",
    gameName: "umscent_",
    series: "Um What",
    tourneyPresence: 0
  },
  {
    name: "Meritable Wasteland",
    gameName: "confusingmerit_",
    series: "Very Confusing Game",
    tourneyPresence: 2
  },
  {
    name: "Snack Den",
    gameName: "flavorden_",
    series: "Fancy Flavor Forest",
    tourneyPresence: 0
  },
  {
    name: "Zen Center",
    gameName: "nextzen_",
    series: "Next Time",
    tourneyPresence: 2
  },
  {
    name: "Laurel Theater",
    gameName: "noxitheater_",
    series: "Noxiomometer",
    tourneyPresence: 2
  },
  {
    name: "Trobble's Trench",
    gameName: "ferrettrench_",
    series: "Ferret Kingdom",
    tourneyPresence: 1
  },
  {
    name: "Enterprise Office",
    gameName: "interestenterprise_",
    series: "Interest",
    tourneyPresence: 0
  },
  {
    name: "West Wing Section A",
    gameName: "owwwa_",
    series: "Ow",
    tourneyPresence: 1
  }
];

export const SERIES_STAGE_LABEL_FOR: StageSelectInfo[] = [
  {
    name: "Separation Station",
    gameName: "arggghstation_",
    series: "Argggh!",
    tourneyPresence: 1
  },
  {
    name: "Z. Ablo's Tent",
    gameName: "devilablo_",
    series: "Devil's Plateau",
    tourneyPresence: 0
  },
  {
    name: "Uptown",
    gameName: "trackup_",
    series: "Track Record",
    tourneyPresence: 1
  },
  {
    name: "Beto's Revenge Land",
    gameName: "yuibeto_",
    series: "Yui Monosuke",
    tourneyPresence: 1
  },
  {
    name: "Arid Arrowland",
    gameName: "possiblearid_",
    series: "Possible Squad",
    tourneyPresence: 1
  },
  {
    name: "Barry's Basement",
    gameName: "awrybasement_",
    series: "Ronald Awry",
    tourneyPresence: 1
  },
  {
    name: "Roger's Disco",
    gameName: "jrdisco_",
    series: "Jr. Jukebox",
    tourneyPresence: 2
  },
  {
    name: "Orange Bananaland",
    gameName: "orangeorange_",
    series: "Orange You Glad",
    tourneyPresence: 0
  }
];

export const SERIES_SHOW: StageSelectInfo[] = [
  {
    name: "Affordable Mortgage Land",
    gameName: "financemorgage_",
    series: "Finance Fanatic",
    tourneyPresence: 2
  },
  {
    name: "Power Palace",
    gameName: "johnpalace_",
    series: "Super John Time",
    tourneyPresence: 5
  }
];

export const SERIES_SORT: { [property: string]: StageSelectInfo[] } = {
  inputStages: [
    {
      name: "Feral Food Forest",
      gameName: "johnferal_",
      series: "Super John Time",
      tourneyPresence: 3
    },
    {
      name: "Contestant's Chamber",
      gameName: "questionchamber_",
      series: "Question Quest",
      tourneyPresence: 13
    },
    {
      name: "Marie's Massage Parlor",
      gameName: "gentlemarie_",
      series: "Gentle Fighter",
      tourneyPresence: 25
    },
    {
      name: "Old Man's Cabin",
      gameName: "wherecabin_",
      series: "Wherewood",
      tourneyPresence: 0
    },
    {
      name: "Fandost Court",
      gameName: "judgefandost_",
      series: "Judgementron",
      tourneyPresence: 65
    },
    {
      name: "Axle Ottle's Castle",
      gameName: "ifritaxle_",
      series: "Ifrit",
      tourneyPresence: 81
    },
    {
      name: "Ludwig's Living Room",
      gameName: "nickludwig_",
      series: "Next Door Nick",
      tourneyPresence: -1
    },
    {
      name: "Trentshop Cave",
      gameName: "lesaolamoscave_",
      series: "Light of Lesolamos",
      tourneyPresence: 97
    },
    {
      name: "Very Berry Barry's Banana Boat Tour",
      gameName: "berryboat_",
      series: "Berry Barry",
      tourneyPresence: 84
    },
    {
      name: "Fairless Fareway",
      gameName: "olliefairless_",
      series: "Ollie Alden",
      tourneyPresence: 20
    },
    {
      name: "Hypotenuse Hippo's Lagoon",
      gameName: "abacuslagoon_",
      series: "Abigail Abacus",
      tourneyPresence: -2
    },
    {
      name: "Farm",
      gameName: "hunterfarm_",
      series: "Hunter's Lagoon",
      tourneyPresence: 85
    },
    {
      name: "Sue's Bar",
      gameName: "detrimentalsue_",
      series: "Detrimental DJ",
      tourneyPresence: 14
    },
    {
      name: "Pop Shop",
      gameName: "citizenshop_",
      series: "Citizen O'Brian",
      tourneyPresence: -35
    },
    {
      name: "Miyamoto Temple",
      gameName: "zenjamiyamoto_",
      series: "Zenja",
      tourneyPresence: 24
    },
    {
      name: "Potato Sack",
      gameName: "vealpotato_",
      series: "Veal of Legends",
      tourneyPresence: 59
    },
    {
      name: "Mariana's House",
      gameName: "trenchmariana_",
      series: "Trenchville",
      tourneyPresence: 2
    },
    {
      name: "Union Office",
      gameName: "unionsoffice_",
      series: "Unions of the Laboretum",
      tourneyPresence: 1
    },
    {
      name: "Museum",
      gameName: "krossmuseum_",
      series: "Krosspharoah's Grave",
      tourneyPresence: 57
    },
    {
      name: "Dream Tapestry Estate",
      gameName: "dphangestate_",
      series: "D'Phang Schwanheiser",
      tourneyPresence: 30
    },
    {
      name: "Barnyard Bananza",
      gameName: "roosterbananza_",
      series: "Radical Rooster",
      tourneyPresence: 17
    },
    {
      name: "Moonside Theater",
      gameName: "yoinkstheater_",
      series: "Yoinks McGee",
      tourneyPresence: 34
    },
    {
      name: "Phinderbust Leaf Cafe",
      gameName: "acorncafe_",
      series: "Exit the Acorn",
      tourneyPresence: 97
    },
    {
      name: "Letterby Cron's Oasis",
      gameName: "onyaoasis_",
      series: "I. F. Onya",
      tourneyPresence: 61
    },
    {
      name: "Planet Matroon",
      gameName: "xcelmatroon_",
      series: "Xcel Squad",
      tourneyPresence: 29
    },
    {
      name: "Police Academy",
      gameName: "pheasantpol_",
      series: "Federal Pheasant Brigade",
      tourneyPresence: 0
    },
    {
      name: "Temporalamew High School",
      gameName: "philschool_",
      series: "Phil of the Present",
      tourneyPresence: 31
    },
    {
      name: "Vessel of Untrusted Fentelsaunds",
      gameName: "windsvessel_",
      series: "Nestled Winds",
      tourneyPresence: 34
    },
    {
      name: "Front Yard",
      gameName: "garageyard_",
      series: "Secrets of the Garage Sale",
      tourneyPresence: 17
    },
    {
      name: "Yggdrasil's Chamber",
      gameName: "templeyggdrasil_",
      series: "Temple Spirits",
      tourneyPresence: 32
    }
  ],
  sortedStages: [
    {
      name: "Hypotenuse Hippo's Lagoon",
      gameName: "abacuslagoon_",
      series: "Abigail Abacus",
      tourneyPresence: -2
    },
    {
      name: "Very Berry Barry's Banana Boat Tour",
      gameName: "berryboat_",
      series: "Berry Barry",
      tourneyPresence: 84
    },
    {
      name: "Pop Shop",
      gameName: "citizenshop_",
      series: "Citizen O'Brian",
      tourneyPresence: -35
    },
    {
      name: "Dream Tapestry Estate",
      gameName: "dphangestate_",
      series: "D'Phang Schwanheiser",
      tourneyPresence: 30
    },
    {
      name: "Sue's Bar",
      gameName: "detrimentalsue_",
      series: "Detrimental DJ",
      tourneyPresence: 14
    },
    {
      name: "Phinderbust Leaf Cafe",
      gameName: "acorncafe_",
      series: "Exit the Acorn",
      tourneyPresence: 97
    },
    {
      name: "Police Academy",
      gameName: "pheasantpol_",
      series: "Federal Pheasant Brigade",
      tourneyPresence: 0
    },
    {
      name: "Marie's Massage Parlor",
      gameName: "gentlemarie_",
      series: "Gentle Fighter",
      tourneyPresence: 25
    },
    {
      name: "Farm",
      gameName: "hunterfarm_",
      series: "Hunter's Lagoon",
      tourneyPresence: 85
    },
    {
      name: "Letterby Cron's Oasis",
      gameName: "onyaoasis_",
      series: "I. F. Onya",
      tourneyPresence: 61
    },
    {
      name: "Axle Ottle's Castle",
      gameName: "ifritaxle_",
      series: "Ifrit",
      tourneyPresence: 81
    },
    {
      name: "Fandost Court",
      gameName: "judgefandost_",
      series: "Judgementron",
      tourneyPresence: 65
    },
    {
      name: "Museum",
      gameName: "krossmuseum_",
      series: "Krosspharoah's Grave",
      tourneyPresence: 57
    },
    {
      name: "Trentshop Cave",
      gameName: "lesaolamoscave_",
      series: "Light of Lesolamos",
      tourneyPresence: 97
    },
    {
      name: "Vessel of Untrusted Fentelsaunds",
      gameName: "windsvessel_",
      series: "Nestled Winds",
      tourneyPresence: 34
    },
    {
      name: "Ludwig's Living Room",
      gameName: "nickludwig_",
      series: "Next Door Nick",
      tourneyPresence: -1
    },
    {
      name: "Fairless Fareway",
      gameName: "olliefairless_",
      series: "Ollie Alden",
      tourneyPresence: 20
    },
    {
      name: "Temporalamew High School",
      gameName: "philschool_",
      series: "Phil of the Present",
      tourneyPresence: 31
    },
    {
      name: "Contestant's Chamber",
      gameName: "questionchamber_",
      series: "Question Quest",
      tourneyPresence: 13
    },
    {
      name: "Barnyard Bananza",
      gameName: "roosterbananza_",
      series: "Radical Rooster",
      tourneyPresence: 17
    },
    {
      name: "Front Yard",
      gameName: "garageyard_",
      series: "Secrets of the Garage Sale",
      tourneyPresence: 17
    },
    {
      name: "Feral Food Forest",
      gameName: "johnferal_",
      series: "Super John Time",
      tourneyPresence: 3
    },
    {
      name: "Yggdrasil's Chamber",
      gameName: "templeyggdrasil_",
      series: "Temple Spirits",
      tourneyPresence: 32
    },
    {
      name: "Mariana's House",
      gameName: "trenchmariana_",
      series: "Trenchville",
      tourneyPresence: 2
    },
    {
      name: "Union Office",
      gameName: "unionsoffice_",
      series: "Unions of the Laboretum",
      tourneyPresence: 1
    },
    {
      name: "Potato Sack",
      gameName: "vealpotato_",
      series: "Veal of Legends",
      tourneyPresence: 59
    },
    {
      name: "Old Man's Cabin",
      gameName: "wherecabin_",
      series: "Wherewood",
      tourneyPresence: 0
    },
    {
      name: "Planet Matroon",
      gameName: "xcelmatroon_",
      series: "Xcel Squad",
      tourneyPresence: 29
    },
    {
      name: "Moonside Theater",
      gameName: "yoinkstheater_",
      series: "Yoinks McGee",
      tourneyPresence: 34
    },
    {
      name: "Miyamoto Temple",
      gameName: "zenjamiyamoto_",
      series: "Zenja",
      tourneyPresence: 24
    }
  ]
};

export const SERIES_INDIVIDUAL_SHOW: { series: string, selections: StageSelectInfo[] } = {
  series: "Fun Physics Fair",
  selections: [
    {
      name: "Apple Tree",
      gameName: "physicsapple_",
      series: "Fun Physics Fair",
      tourneyPresence: 2
    },
    {
      name: "Tall Tower",
      gameName: "physicstower_",
      series: "Fun Physics Fair",
      tourneyPresence: 8
    }
  ]
};

export const SERIES_INDIVIDUAL_HIDE: { series: string, selections: StageSelectInfo[] } = {
  series: "Fenton Barrenceno",
  selections: [
    {
      name: "Barren Beach",
      gameName: "incrediblebarren_",
      series: "Incredible Islands",
      tourneyPresence: 8
    },
    {
      name: "Land of Several Snakes",
      gameName: "johnsnakes_",
      series: "Super John Time",
      tourneyPresence: -1
    },
    {
      name: "Italian Restaurant",
      gameName: "fooditalian_",
      series: "Food Fighters",
      tourneyPresence: 2
    },
    {
      name: "Aptitude Island",
      gameName: "brainsaptitude_",
      series: "Adventures in Brains",
      tourneyPresence: 1
    }
  ]
};

export const SERIES_INDIVIDUAL_INCLUDE: { series: string, allStages: StageSelectInfo[], includedStages: StageSelectInfo[] } = {
  series: "Super John Time",
  allStages: [
    {
      name: "Tall Tall Tower",
      gameName: "johntower_",
      series: "Super John Time",
      tourneyPresence: 3
    },
    {
      name: "Treble Tower",
      gameName: "minstreltreble_",
      series: "Magical Minstrel",
      tourneyPresence: 1
    },
    {
      name: "FanciFeast Diner",
      gameName: "foodfancifeast_",
      series: "Food Fighters",
      tourneyPresence: 1
    },
    {
      name: "Average Orange Orchid",
      gameName: "johnorchid_",
      series: "Super John Time",
      tourneyPresence: 5
    },
    {
      name: "Beat's Beet Beer Pub",
      gameName: "foodbeet_",
      series: "Food Fighters",
      tourneyPresence: 8
    },
    {
      name: "Powerful Purple Platter Place",
      gameName: "johnplatter_",
      series: "Super John Time",
      tourneyPresence: -1
    },
    {
      name: "Masterful Matriarch's Museum",
      gameName: "johnmuseum_",
      series: "Super John Time",
      tourneyPresence: 2
    }
  ],
  includedStages: [
    {
      name: "Tall Tall Tower",
      gameName: "johntower_",
      series: "Super John Time",
      tourneyPresence: 3
    },
    {
      name: "Average Orange Orchid",
      gameName: "johnorchid_",
      series: "Super John Time",
      tourneyPresence: 5
    },
    {
      name: "Powerful Purple Platter Place",
      gameName: "johnplatter_",
      series: "Super John Time",
      tourneyPresence: -1
    },
    {
      name: "Masterful Matriarch's Museum",
      gameName: "johnmuseum_",
      series: "Super John Time",
      tourneyPresence: 2
    }
  ]
};

export const SERIES_INDIVIDUAL_EXCLUDE: { series: string, allStages: StageSelectInfo[], excludedStages: StageSelectInfo[] } = {
  series: "Fate of Fairies",
  allStages: [
    {
      name: "Root of Yggdrasil",
      gameName: "fairiesroot_",
      series: "Fate of Fairies",
      tourneyPresence: 9
    },
    {
      name: "Back Room",
      gameName: "workback_",
      series: "Workplace",
      tourneyPresence: -2
    },
    {
      name: "Ferret Fountain",
      gameName: "fairiesroot_",
      series: "Fate of Fairies",
      tourneyPresence: 11
    },
    {
      name: "Trash Town",
      gameName: "johntrash_",
      series: "Super John Time",
      tourneyPresence: 2
    },
    {
      name: "An Abysmal Palace",
      gameName: "moodpalace_",
      series: "Mood Master",
      tourneyPresence: 3
    }
  ],
  excludedStages: [
    {
      name: "Back Room",
      gameName: "workback_",
      series: "Workplace",
      tourneyPresence: -2
    },
    {
      name: "Trash Town",
      gameName: "johntrash_",
      series: "Super John Time",
      tourneyPresence: 2
    },
    {
      name: "An Abysmal Palace",
      gameName: "moodpalace_",
      series: "Mood Master",
      tourneyPresence: 3
    }
  ]
};

export const SERIES_INDIVIDUAL_EXCLUDE_BLANK: { series: string, allStages: StageSelectInfo[], excludedStages: StageSelectInfo[] } = {
  series: "",
  allStages: [
    {
      name: "Back at the Ranch",
      gameName: "cowranch_",
      series: "Cowllege Credit Man",
      tourneyPresence: 3
    },
    {
      name: "Unknown World",
      gameName: "unknown_",
      series: "",
      tourneyPresence: -1
    },
    {
      name: "Fearsome Fighters Headquarters",
      gameName: "heroffhq_",
      series: "Hero Squad Alpha",
      tourneyPresence: 2
    },
    {
      name: "Troubador's Chamber",
      gameName: "misctroubador_",
      series: "",
      tourneyPresence: 5
    },
    {
      name: "South Dakota Marketplace",
      gameName: "sdmarket_",
      series: "",
      tourneyPresence: 29
    },
    {
      name: "Whiteout Wednesday Watchtower",
      gameName: "alliteratewhiteout_",
      series: "Alliteration Island",
      tourneyPresence: -5
    },
    {
      name: "Phantom Foodbasket",
      gameName: "alliteratephantom_",
      series: "Alliteration Island",
      tourneyPresence: 3
    },
    {
      name: "Trash Compactor",
      gameName: "trash_",
      series: "",
      tourneyPresence: 4
    }
  ],
  excludedStages: [
    {
      name: "Unknown World",
      gameName: "unknown_",
      series: "",
      tourneyPresence: -1
    },
    {
      name: "Troubador's Chamber",
      gameName: "misctroubador_",
      series: "",
      tourneyPresence: 5
    },
    {
      name: "South Dakota Marketplace",
      gameName: "sdmarket_",
      series: "",
      tourneyPresence: 29
    },
    {
      name: "Trash Compactor",
      gameName: "trash_",
      series: "",
      tourneyPresence: 4
    }
  ]
};

export const SERIES_STAGE_SORT: {
    inputStages: StageSelectInfo[],
    sortedStages: { series: string, stages: StageSelectInfo[] }[]
  } = {
  inputStages: [
    {
      name: "Canyon of Sorrows",
      gameName: "journeysorrow_",
      series: "The Grand Journey",
      tourneyPresence: 51
    },
    {
      name: "Geralt Boutique",
      gameName: "metrogeralt_",
      series: "Metro Mash",
      tourneyPresence: 24
    },
    {
      name: "Rascal Rathouse",
      gameName: "paulorats_",
      series: "Paulo",
      tourneyPresence: 33
    },
    {
      name: "Zedd Terminal",
      gameName: "metrozedd_",
      series: "Metro Mash",
      tourneyPresence: 69
    },
    {
      name: "International Airport",
      gameName: "pauloairport_",
      series: "Paulo",
      tourneyPresence: 74
    },
    {
      name: "Lucy's Legume Land",
      gameName: "paulolucy_",
      series: "Paulo",
      tourneyPresence: 9
    },
    {
      name: "Sogtown",
      gameName: "metrosog_",
      series: "Metro Mash",
      tourneyPresence: 75
    },
    {
      name: "Weepright Tomatoes",
      gameName: "metroweep_",
      series: "Metro Mash",
      tourneyPresence: 84
    },
    {
      name: "Uthulura",
      gameName: "journeyuthu_",
      series: "The Grand Journey",
      tourneyPresence: 17
    },
    {
      name: "Bento Bakery",
      gameName: "paulobake_",
      series: "Paulo",
      tourneyPresence: 81
    },
    {
      name: "Leraldo Mansion",
      gameName: "journeymansion_",
      series: "The Grand Journey",
      tourneyPresence: 46
    },
    {
      name: "National Nesters, LLC",
      gameName: "metronesters_",
      series: "Metro Mash",
      tourneyPresence: 12
    },
    {
      name: "Quad Burgers",
      gameName: "metroquad_",
      series: "Metro Mash",
      tourneyPresence: 59
    },
    {
      name: "Kurifico",
      gameName: "metrokur_",
      series: "Metro Mash",
      tourneyPresence: 56
    },
    {
      name: "Yuci Plains",
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
          gameName: "journeysorrow_",
          series: "The Grand Journey",
          tourneyPresence: 51
        },
        {
          name: "Leraldo Mansion",
          gameName: "journeymansion_",
          series: "The Grand Journey",
          tourneyPresence: 46
        },
        {
          name: "Uthulura",
          gameName: "journeyuthu_",
          series: "The Grand Journey",
          tourneyPresence: 17
        },
        {
          name: "Yuci Plains",
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
          gameName: "paulobake_",
          series: "Paulo",
          tourneyPresence: 81
        },
        {
          name: "International Airport",
          gameName: "pauloairport_",
          series: "Paulo",
          tourneyPresence: 74
        },
        {
          name: "Lucy's Legume Land",
          gameName: "paulolucy_",
          series: "Paulo",
          tourneyPresence: 9
        },
        {
          name: "Rascal Rathouse",
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
          gameName: "metrogeralt_",
          series: "Metro Mash",
          tourneyPresence: 24
        },
        {
          name: "Kurifico",
          gameName: "metrokur_",
          series: "Metro Mash",
          tourneyPresence: 56
        },
        {
          name: "National Nesters, LLC",
          gameName: "metronesters_",
          series: "Metro Mash",
          tourneyPresence: 12
        },
        {
          name: "Quad Burgers",
          gameName: "metroquad_",
          series: "Metro Mash",
          tourneyPresence: 59
        },
        {
          name: "Sogtown",
          gameName: "metrosog_",
          series: "Metro Mash",
          tourneyPresence: 75
        },
        {
          name: "Weepright Tomatoes",
          gameName: "metroweep_",
          series: "Metro Mash",
          tourneyPresence: 84
        },
        {
          name: "Zedd Terminal",
          gameName: "metrozedd_",
          series: "Metro Mash",
          tourneyPresence: 69
        }
      ]
    }
  ]
};

export const INIT_CHECKED: {inputStages: StageSelectInfo[], targetStages: string[]} = {
  inputStages: [
    {
      name: "Zesty Pipe",
      gameName: "twigpipe_",
      series: "Aquatic Twig",
      tourneyPresence: 0
    },
    {
      name: "Berserk Seed",
      gameName: "needleseed_",
      series: "Disillusioned Needle",
      tourneyPresence: -1
    },
    {
      name: "Careless Cloth",
      gameName: "middlecloth_",
      series: "Hard Middle",
      tourneyPresence: 1
    },
    {
      name: "Cooing Finger",
      gameName: "seafinger_",
      series: "Malicious Sea",
      tourneyPresence: 2
    },
    {
      name: "Steep Wash",
      gameName: "copperwash_",
      series: "Tedious Copper",
      tourneyPresence: 0
    },
    {
      name: "Wrathful Grain",
      gameName: "acousticsgrain_",
      series: "Nice Acoustics",
      tourneyPresence: -1
    },
    {
      name: "Normal Bite",
      gameName: "profitbite_",
      series: "Defeated Profit",
      tourneyPresence: 2
    },
    {
      name: "Humorous Digestion",
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

export const INIT_UNCHECKED: { inputStages: StageSelectInfo[], targetStages: string[] } = {
  inputStages: [
    {
      name: "Witty Wool",
      gameName: "sackwool_",
      series: "Fortunate Sack",
      tourneyPresence: 2
    },
    {
      name: "Jumpy Partner",
      gameName: "shelfpartner_",
      series: "Defective Shelf",
      tourneyPresence: -1
    },
    {
      name: "Painful Horn",
      gameName: "educationhorn_",
      series: "Organic Education",
      tourneyPresence: 0
    },
    {
      name: "Ahead Wave",
      gameName: "dockwave_",
      series: "Pushy Dock",
      tourneyPresence: -1
    },
    {
      name: "Quick Argument",
      gameName: "offerargument_",
      series: "Mundane Offer",
      tourneyPresence: -1
    },
    {
      name: "Breakable Birthday",
      gameName: "paperbirthday_",
      series: "Crowded Paper",
      tourneyPresence: 0
    },
    {
      name: "Sophisticated Comparison",
      gameName: "bikecomparison_",
      series: "Square Bike",
      tourneyPresence: 1
    },
    {
      name: "Vivacious Discovery",
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

export const INIT_SUBMITTED: { inputStages: StageSelectInfo[], expectedGameNames: string[], expectedLength: number } = {
  inputStages: [
    {
      name: "Torpid Quiet",
      gameName: "vesselquiet_",
      series: "Excellent Vessel",
      tourneyPresence: 0
    },
    {
      name: "Noisy Spiders",
      gameName: "boatspiders_",
      series: "Dusty Boat",
      tourneyPresence: 1
    },
    {
      name: "Unable Railway",
      gameName: "limitrail_",
      series: "Huge Limit",
      tourneyPresence: 0
    },
    {
      name: "Screeching Dad",
      gameName: "hilldad_",
      series: "Vacuous Hill",
      tourneyPresence: 0
    },
    {
      name: "Hypnotic Notebook",
      gameName: "weightbook_",
      series: "Whispering Weight",
      tourneyPresence: 2
    },
    {
      name: "Bad Birthday",
      gameName: "throatbirthday_",
      series: "Cheerful Throat",
      tourneyPresence: 2
    },
    {
      name: "Waggish Wren",
      gameName: "competitionwren_",
      series: "Adventurous Competition",
      tourneyPresence: 2
    },
    {
      name: "Discreet Crate",
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

export const MISC_SHOW_MISC: StageSelectInfo[] = [
  {
    name: "Howdy House",
    gameName: "howdy_",
    series: "Miscellaneous",
    tourneyPresence: 1
  },
  {
    name: "What in the Sam Hill",
    gameName: "hill_",
    series: "Sayings Forever",
    tourneyPresence: -1
  },
  {
    name: "Foreign Forest",
    gameName: "forest_",
    series: "Miscellaneous",
    tourneyPresence: 2
  }
];

export const MISC_SHOW_BLANK: StageSelectInfo[] = [
  {
    name: "Doctor's Office",
    gameName: "office_",
    series: "The Land of the Mundane",
    tourneyPresence: -1
  },
  {
    name: "Blue Cheese Ranch",
    gameName: "ranch_",
    series: "",
    tourneyPresence: 0
  },
  {
    name: "Hotel Oklahoma",
    gameName: "musicok_",
    series: "Kind of Music",
    tourneyPresence: 2
  },
  {
    name: "The Forty-Five Paper Trail",
    gameName: "punpaper_",
    series: "Pun Amuk",
    tourneyPresence: 3
  }
];

export const MISC_HIDE: StageSelectInfo[] = [
  {
    name: "Western Spaghetti",
    gameName: "neverwestern_",
    series: "Never Forgetti",
    tourneyPresence: 5
  },
  {
    name: "Under the C",
    gameName: "punc_",
    series: "Pun Amuk",
    tourneyPresence: -1
  },
  {
    name: "Foundation",
    gameName: "constructfound_",
    series: "Construction",
    tourneyPresence: 45
  },
  {
    name: "Actual Land",
    gameName: "millenland_",
    series: "Millienal Slang",
    tourneyPresence: 3
  }
];

export const MISC_STAGE_INCLUDE_BLANK: { [property: string]: StageSelectInfo[] } = {
  inputStages: [
    {
      name: "Input Island",
      gameName: "boxinput_",
      series: "Black Box",
      tourneyPresence: 7
    },
    {
      name: "Somewhere",
      gameName: "somewhere_",
      series: "",
      tourneyPresence: 5
    },
    {
      name: "Out there",
      gameName: "out_",
      series: " ",
      tourneyPresence: 7
    },
    {
      name: "Under the Witch Wood",
      gameName: "fantasywitch_",
      series: "Fantasy Land",
      tourneyPresence: -3
    },
    {
      name: "Skill Plateau",
      gameName: "abstractplateau_",
      series: "Abstract Equivocation",
      tourneyPresence: 4
    },
    {
      name: "Water",
      gameName: "water_",
      series: "   ",
      tourneyPresence: 2
    }
  ],

  includedStages: [
    {
      name: "Somewhere",
      gameName: "somewhere_",
      series: "",
      tourneyPresence: 5
    },
    {
      name: "Out there",
      gameName: "out_",
      series: " ",
      tourneyPresence: 7
    },
    {
      name: "Water",
      gameName: "water_",
      series: "   ",
      tourneyPresence: 2
    }
  ]
};

export const MISC_STAGE_INCLUDE_MISC: { [property: string]: StageSelectInfo[] } = {
  inputStages: [
    {
      name: "Dairy Isle",
      gameName: "marketdairy_",
      series: "Marketopia",
      tourneyPresence: -5
    },
    {
      name: "Canterbury Parkway",
      gameName: "boardparkway_",
      series: "Board Games Collection",
      tourneyPresence: 4
    },
    {
      name: "Tower",
      gameName: "tower_",
      series: "Miscellaneous",
      tourneyPresence: 3
    },
    {
      name: "Frankfurt Hotel",
      gameName: "travelfrank_",
      series: "Travelogue Rogue",
      tourneyPresence: 29
    },
    {
      name: "Absolute Destruction Island",
      gameName: "breakisland_",
      series: "Break Freak",
      tourneyPresence: 17
    },
    {
      name: "Haven",
      gameName: "haven_",
      series: "Miscellaneous",
      tourneyPresence: 30
    },
    {
      name: "Countryside Road",
      gameName: "travelcountry_",
      series: "Travelogue Rogue",
      tourneyPresence: 1
    },
    {
      name: "Shop",
      gameName: "shop_",
      series: "Miscellaneous",
      tourneyPresence: 22
    },
    {
      name: "Studio",
      gameName: "studio_",
      series: "Miscellaneous",
      tourneyPresence: 5
    }
  ],
  includedStages: [
    {
      name: "Tower",
      gameName: "tower_",
      series: "Miscellaneous",
      tourneyPresence: 3
    },
    {
      name: "Haven",
      gameName: "haven_",
      series: "Miscellaneous",
      tourneyPresence: 30
    },
    {
      name: "Shop",
      gameName: "shop_",
      series: "Miscellaneous",
      tourneyPresence: 22
    },
    {
      name: "Studio",
      gameName: "studio_",
      series: "Miscellaneous",
      tourneyPresence: 5
    }
  ]
};

export const MISC_STAGE_EXCLUDE: { [property: string]: StageSelectInfo[] } = {
  inputStages: [
    {
      name: "Obstacle Course",
      gameName: "obstacle_",
      series: "Miscellaneous",
      tourneyPresence: 11
    },
    {
      name: "Outer Space Station",
      gameName: "space_",
      series: "Miscellaneous",
      tourneyPresence: 1
    },
    {
      name: "Introvert Paradise",
      gameName: "socialintrovert_",
      series: "Socializing",
      tourneyPresence: 2
    },
    {
      name: "Canvas Campus",
      gameName: "johncanvas_",
      series: "Super John Time",
      tourneyPresence: 3
    },
    {
      name: "Snowglobe",
      gameName: "snowglobe_",
      series: "Miscellaneous",
      tourneyPresence: -9
    },
    {
      name: "Minewoss Mountain",
      gameName: "johnminewoss_",
      series: "Super John Timme",
      tourneyPresence: 8
    },
    {
      name: "Cantakerous Tank",
      gameName: "wartank_",
      series: "War of Words",
      tourneyPresence: 7
    }
  ],
  excludedStages: [
    {
      name: "Introvert Paradise",
      gameName: "socialintrovert_",
      series: "Socializing",
      tourneyPresence: 2
    },
    {
      name: "Canvas Campus",
      gameName: "johncanvas_",
      series: "Super John Time",
      tourneyPresence: 3
    },
    {
      name: "Minewoss Mountain",
      gameName: "johnminewoss_",
      series: "Super John Timme",
      tourneyPresence: 8
    },
    {
      name: "Cantakerous Tank",
      gameName: "wartank_",
      series: "War of Words",
      tourneyPresence: 7
    }
  ]
};

export const MISC_SORT: { [property: string]: StageSelectInfo[] } = {
  inputStages: [
    {
      name: "Western Town",
      gameName: "western_",
      series: "Miscellaneous",
      tourneyPresence: 52
    },
    {
      name: "New World City",
      gameName: "city_",
      series: "Miscellaneous",
      tourneyPresence: 1
    },
    {
      name: "Painting",
      gameName: "paint_",
      series: "Miscellaneous",
      tourneyPresence: 35
    },
    {
      name: "French Village",
      gameName: "french_",
      series: "Miscellaneous",
      tourneyPresence: 35
    },
    {
      name: "Kaleidoscopic Realm",
      gameName: "kaleidoscope_",
      series: "Miscellaneous",
      tourneyPresence: 52
    },
    {
      name: "Hill",
      gameName: "hill_",
      series: "Miscellaneous",
      tourneyPresence: 96
    },
    {
      name: "Vintage Car Dealership",
      gameName: "salecarshop_",
      series: "Super Sale Sisters",
      tourneyPresence: 37
    },
    {
      name: "Crate Factory",
      gameName: "factory_",
      series: "",
      tourneyPresence: 40
    },
    {
      name: "Medical School",
      gameName: "phdschool_",
      series: "PhD Land",
      tourneyPresence: 80
    },
    {
      name: "Twisting Tower",
      gameName: "johntwists_",
      series: "Super John Time",
      tourneyPresence: 80
    },
    {
      name: "Jade Caves",
      gameName: "monkeycave_",
      series: "Monkey Donk County",
      tourneyPresence: 99
    },
    {
      name: "United Negotiation Room",
      gameName: "politicsunr_",
      series: "Politics World",
      tourneyPresence: 68
    }
  ]
};

// TODO: Finish MISC_STAGE_SORT data
export const MISC_STAGE_SORT: {
  inputStages: StageSelectInfo[],
  sortedStages: StageSelectInfo[]
} = {
  inputStages: [
    {
      name: "Weather World Tower",
      gameName: "weather_",
      series: "Miscellaneous",
      tourneyPresence: 0
    },
    {
      name: "Quiet Room",
      gameName: "meditationquiet_",
      series: "",
      tourneyPresence: 20
    },
    {
      name: "Awkward Alex's Alley",
      gameName: "cityalex_",
      series: "",
      tourneyPresence: 55
    },
    {
      name: "Derrick Desert",
      gameName: "derrick_",
      series: "",
      tourneyPresence: 28
    },
    {
      name: "Veritable Wasteland",
      gameName: "veritable_",
      series: "Miscellaneous",
      tourneyPresence: 56
    },
    {
      name: "Rooster Roost",
      gameName: "roost_",
      series: "Miscellaneous",
      tourneyPresence: 91
    },
    {
      name: "Unaugmented Argyle",
      gameName: "argyledx_",
      series: "",
      tourneyPresence: 19
    },
    {
      name: "Xeno Pizza",
      gameName: "foodxeno_",
      series: "Miscellaneous",
      tourneyPresence: 83
    },
    {
      name: "Proverbial Prophet's Shrine",
      gameName: "fantasyshrine_",
      series: "",
      tourneyPresence: 16
    },
    {
      name: "Kissinger Lobby",
      gameName: "businesslobby_",
      series: "Miscellaneous",
      tourneyPresence: 80
    },
    {
      name: "Edward's Elemental Enchantments",
      gameName: "fantasyedward_",
      series: "",
      tourneyPresence: 11
    },
    {
      name: "Illustrious Isaac's Interstellar Interchange",
      gameName: "spaceisaac_",
      series: "Miscellaneous",
      tourneyPresence: 61
    },
    {
      name: "Medical Room",
      gameName: "doctormed_",
      series: "Miscellaneous",
      tourneyPresence: 61
    },
    {
      name: "Soup Server Station",
      gameName: "foodsoup_",
      series: "",
      tourneyPresence: 88
    },
    {
      name: "Luxury Land",
      gameName: "jewelluxury_",
      series: "Miscellaneous",
      tourneyPresence: 66
    }
  ],

  sortedStages: []
};

export const CROSS_SINGLE_CHECK_TOURNEY_SERIES: { stages: StageSelectInfo[], targetID: string } = {
  stages: [
    {
      name: "Tower of Babbling Brooks",
      gameName: "mixedtower_",
      series: "World of Mixed Metaphors",
      tourneyPresence: 1
    },
    {
      name: "Effervescent Paradise",
      gameName: "fantasyeffer_",
      series: "Fantasy Land",
      tourneyPresence: -1
    }
  ],
  targetID: "mixedtower_"
};

export const CROSS_SINGLE_CHECK_SERIES_TOURNEY: { stages: StageSelectInfo[], targetID: string } = {
  stages: [
    {
      name: "Portland Post Office Headquarters",
      gameName: "oregonportlandhq_",
      series: "Oregon Mail",
      tourneyPresence: 2
    },
    {
      name: "Lucy Goose's Loose Moose Caboose",
      gameName: "elegantlucy_",
      series: "Elegent Lad",
      tourneyPresence: 0
    }
  ],
  targetID: "elegantlucy_"
};

export const CROSS_SINGLE_UNCHECK_TOURNEY_SERIES: { stages: StageSelectInfo[], targetID: string } = {
  stages: [
    {
      name: "Dawn Meadow Zone",
      gameName: "wistmeadow",
      series: "Wistwalker",
      tourneyPresence: 1
    },
    {
      name: "Dodo Shop Tower",
      gameName: "questdodo",
      series: "Questrunner",
      tourneyPresence: -1
    }
  ],
  targetID: "wistmeadow"
};

export const CROSS_SINGLE_UNCHECK_SERIES_TOURNEY: { stages: StageSelectInfo[], targetID: string } = {
  stages: [
    {
      name: "Fontaine Fountain",
      gameName: "stellarfountain_",
      series: "Super Secret Stellar Squad",
      tourneyPresence: 0
    },
    {
      name: "Olive Branch",
      gameName: "zenolive_",
      series: "Zentlemen",
      tourneyPresence: 1
    }
  ],
  targetID: "zenolive_"
};

export const CROSS_SINGLE_CHECK_SERIES_TOURNEY_ISOLATE: { stages: StageSelectInfo[], targetID: string } = {
  stages: [
    {
      name: "Zone of French Horns",
      gameName: "baritonfrench_",
      series: "Baritone Hero",
      tourneyPresence: 2
    },
    {
      name: "Neutral Paradise",
      gameName: "xtremeneutral_",
      series: "Xtreme Moderation",
      tourneyPresence: 0
    },
    {
      name: "Organ Room",
      gameName: "proctorgan_",
      series: "Proctologists United",
      tourneyPresence: 1
    },
    {
      name: "Mesopotamia",
      gameName: "garretmeso_",
      series: "Garrett Wise",
      tourneyPresence: 1
    },
    {
      name: "Uncertain Tea Shop",
      gameName: "juicytea_",
      series: "Juicy's Revenge",
      tourneyPresence: 1
    }
  ],
  targetID: "proctorgan_"
};

export const CROSS_SINGLE_CHECK_TOURNEY_SERIES_ISOLATE: { stages: StageSelectInfo[], targetID: string } = {
  stages: [
    {
      name: "Xephyr Bookstore",
      gameName: "unclexephyr",
      series: "Uncle Standing",
      tourneyPresence: 0
    },
    {
      name: "Quentin's Smithy",
      gameName: "whencequent_",
      series: "Whence It Came",
      tourneyPresence: 2
    },
    {
      name: "Daffodil Studio",
      gameName: "silverstudio",
      series: "Silverfish",
      tourneyPresence: 1
    },
    {
      name: "Canine Millenium Tower",
      gameName: "ondogtower_",
      series: "On Dog?",
      tourneyPresence: 0
    },
    {
      name: "Venice's Abuela",
      gameName: "noodlevenice_",
      series: "The Noodler",
      tourneyPresence: 0
    }
  ],
  targetID: "unclexephyr"
};

export const CROSS_SINGLE_UNCHECK_SERIES_TOURNEY_ISOLATE: { stages: StageSelectInfo[], targetID: string } = {
  stages: [
    {
      name: "Damning Teeth Mountain",
      gameName: "dentaldamn_",
      series: "Dental Doom",
      tourneyPresence: 1
    },
    {
      name: "Abandoned Town",
      gameName: "xenoghosttown_",
      series: "Xenoghost",
      tourneyPresence: 0
    },
    {
      name: "Nassel Falls",
      gameName: "odiumfalls_",
      series: "Odium",
      tourneyPresence: 2
    },
    {
      name: "Roddle Hillside",
      gameName: "blunderhills_",
      series: "Alex in Blunderland",
      tourneyPresence: 1
    },
    {
      name: "Producer's Office",
      gameName: "frankoffice_",
      series: "Frank's in Opera",
      tourneyPresence: 1
    }
  ],
  targetID: "dentaldamn_"
};

export const CROSS_SINGLE_UNCHECK_TOURNEY_SERIES_ISOLATE: { stages: StageSelectInfo[], targetID: string } = {
  stages: [
    {
      name: "On-site",
      gameName: "entouragesite_",
      series: "Internet Entourage",
      tourneyPresence: 2
    },
    {
      name: "Caesar's Saladworks",
      gameName: "scenturiansalad_",
      series: "Scenturian",
      tourneyPresence: 1
    },
    {
      name: "Venture Capital Island",
      gameName: "riddlingventure_",
      series: "Riddling",
      tourneyPresence: 1
    },
    {
      name: "Nesting Area",
      gameName: "awkwardnesting_",
      series: "Awkwardity",
      tourneyPresence: 0
    },
    {
      name: "Faux Swine Pen",
      gameName: "temporaripen_",
      series: "Temporarium",
      tourneyPresence: 1
    }
  ],
  targetID: "riddlingventure_"
};

export const CROSS_MULTIPLE_CHECK_TOURNEY_SERIES: { stages: StageSelectInfo[], targetIDs: string[] } = {
  stages: [
    {
      name: "Tasteful Prose",
      gameName: "earlyprose_",
      series: "Early Name",
      tourneyPresence: 0
    },
    {
      name: "Rampant Truth",
      gameName: "spelltruth_",
      series: "Spell Park",
      tourneyPresence: 1
    },
    {
      name: "Offer Jail",
      gameName: "wealthyjail_",
      series: "The Wealthy Stick",
      tourneyPresence: 0
    },
    {
      name: "Damaged Mine",
      gameName: "supplymine_",
      series: "Restful Supply",
      tourneyPresence: -1
    },
    {
      name: "Nifty Waggish",
      gameName: "warmwag_",
      series: "Warm Scarecrow",
      tourneyPresence: 1
    },
    {
      name: "Lip Unlock",
      gameName: "meatunlock_",
      series: "Meat Famous",
      tourneyPresence: 1
    },
    {
      name: "Scrawny Slope",
      gameName: "dryslope_",
      series: "Dry, Unwritten",
      tourneyPresence: 1
    }
  ],
  targetIDs: ["wealthyjail_", "warmwag_", "meatunlock_"]
};

export const CROSS_MULTIPLE_CHECK_SERIES_TOURNEY: { stages: StageSelectInfo[], targetIDs: string[] } = {
  stages: [
    {
      name: "Redundant Move",
      gameName: "damagemove_",
      series: "Damage Harbor",
      tourneyPresence: 0
    },
    {
      name: "Apathetic Mystery",
      gameName: "trademystery_",
      series: "The Marriage Trade",
      tourneyPresence: 1
    },
    {
      name: "Wait Coach",
      gameName: "vastwait_",
      series: "Vast Money",
      tourneyPresence: 2
    },
    {
      name: "Pointless Growth",
      gameName: "stretchpointless_",
      series: "Stretch of Fog",
      tourneyPresence: -1
    },
    {
      name: "Subtract Shelf",
      gameName: "tiresomeshelf_",
      series: "Tiresome Enthusiasm",
      tourneyPresence: -1
    },
    {
      name: "Dreary Cheat",
      gameName: "elfincheat_",
      series: "Elfin Stitch",
      tourneyPresence: 0
    },
    {
      name: "Guttural Separation",
      gameName: "pourseparation_",
      series: "Pour Vigorously",
      tourneyPresence: -1
    }
  ],
  targetIDs: ["elfincheat_", "vastwait_", "trademystery_"]
};

export const CROSS_MULTIPLE_UNCHECK_TOURNEY_SERIES: { stages: StageSelectInfo[], targetIDs: string[] } = {
  stages: [
    {
      name: "Meat War",
      gameName: "wingrakemeat_",
      series: "WingRake",
      tourneyPresence: 0
    },
    {
      name: "Sincere Workplace",
      gameName: "cleardogwork_",
      series: "Clear Dog",
      tourneyPresence: 0
    },
    {
      name: "Bashful Twig",
      gameName: "impresstwig_",
      series: "ImpressMan",
      tourneyPresence: 1
    },
    {
      name: "Encouraging Reaction",
      gameName: "dirtfitreact_",
      series: "Dirtfit",
      tourneyPresence: 0
    },
    {
      name: "Confused Piquant",
      gameName: "pokepiquant_",
      series: "Poke Account",
      tourneyPresence: 1
    },
    {
      name: "Ashamed Root",
      gameName: "grotesqueroot_",
      series: "Grotesque Confusion",
      tourneyPresence: 2
    },
    {
      name: "Growth Heat",
      gameName: "oldheat_",
      series: "Festivities of Old",
      tourneyPresence: 0
    }
  ],
  targetIDs: ["wingrakemeat_", "dirtfitreact_", "grotesqueroot_"]
};

export const CROSS_MULTIPLE_UNCHECK_SERIES_TOURNEY: { stages: StageSelectInfo[], targetIDs: string[] } = {
  stages: [
    {
      name: "Tedious Tickle",
      gameName: "tensetickle_",
      series: "Tense Temper",
      tourneyPresence: -1
    },
    {
      name: "Grip Itch",
      gameName: "shelfitch_",
      series: "Juvenile Shelf",
      tourneyPresence: 0
    },
    {
      name: "Numberless Group",
      gameName: "crabgroup_",
      series: "Poised Crab",
      tourneyPresence: 1
    },
    {
      name: "Choc o' Brain",
      gameName: "observerchoc_",
      series: "Nimble Observer",
      tourneyPresence: 2
    },
    {
      name: "Late Preservatives",
      gameName: "bikelate_",
      series: "Imaginary Bike",
      tourneyPresence: 0
    },
    {
      name: "Open Attachment",
      gameName: "twistopen_",
      series: "Poor Twist",
      tourneyPresence: -1
    },
    {
      name: "Rural",
      gameName: "timesnewrural_",
      series: "New Time",
      tourneyPresence: 0
    }
  ],
  targetIDs: ["shelfitch_", "observerchoc_", "bikelate_"]
};

export const CROSS_MULTIPLE_CHECK_SERIES_TOURNEY_ISOLATE: { stages: StageSelectInfo[], targetIDs: string[] } = {
  stages: [
    {
      name: "Waste Spray",
      gameName: "daughterspray_",
      series: "Daughter of Pourage",
      tourneyPresence: 0
    },
    {
      name: "Spectacular Sin",
      gameName: "petsin_",
      series: "Slip Pets",
      tourneyPresence: 0
    },
    {
      name: "Care Weather",
      gameName: "boundlesscare_",
      series: "Boundless Direction",
      tourneyPresence: 1
    },
    {
      name: "Second-Hand Life",
      gameName: "direlife_",
      series: "Dire Glory",
      tourneyPresence: 2
    },
    {
      name: "Kettlespace",
      gameName: "brakekettle_",
      series: "Overrated Brake",
      tourneyPresence: 2
    },
    {
      name: "Judge Queen",
      gameName: "clamjudge_",
      series: "Puny Clam",
      tourneyPresence: -1
    },
    {
      name: "Aloof Mix",
      gameName: "handsomemix_",
      series: "Handsome Appreciation",
      tourneyPresence: 2
    }
  ],
  targetIDs: ["daughterspray_", "petsin_", "boundlesscare_", "direlife_"]
};

export const CROSS_MULTIPLE_CHECK_TOURNEY_SERIES_ISOLATE: { stages: StageSelectInfo[], targetIDs: string[] } = {
  stages: [
    {
      name: "Lyrical Wonder",
      gameName: "joiniverselyric_",
      series: "Joiniverse",
      tourneyPresence: 0
    },
    {
      name: "Possible Discovery",
      gameName: "tenuouspossible_",
      series: "Tenuous Collar",
      tourneyPresence: 0
    },
    {
      name: "Damaging Breath",
      gameName: "sackdamage_",
      series: "Sack Sisters",
      tourneyPresence: 2
    },
    {
      name: "Front Things",
      gameName: "impulsefront_",
      series: "Lovely Impulse",
      tourneyPresence: 1
    },
    {
      name: "Sigh Match",
      gameName: "quirkysigh_",
      series: "Quirky Balance",
      tourneyPresence: -1
    },
    {
      name: "Malicious Authority",
      gameName: "snakeauthority_",
      series: "Unwritten Snake",
      tourneyPresence: 2
    },
    {
      name: "Dust Plane",
      gameName: "crowddust_",
      series: "Domineering Crowd",
      tourneyPresence: 0
    }
  ],
  targetIDs: ["joiniverselyric_", "sackdamage_", "snakeauthority_"]
};

export const CROSS_MULTIPLE_UNCHECK_SERIES_TOURNEY_ISOLATE: { stages: StageSelectInfo[], targetIDs: string[] } = {
  stages: [
    {
      name: "Magic Rhyme",
      gameName: "bearmagic_",
      series: "Vivacious Bear",
      tourneyPresence: 2
    },
    {
      name: "Certain Magic",
      gameName: "ordinarymagic_",
      series: "Ordinary Value",
      tourneyPresence: 0
    },
    {
      name: "Righteous Passenger",
      gameName: "legalpassenger_",
      series: "Legal Grieving",
      tourneyPresence: 0
    },
    {
      name: "Mystery Rate",
      gameName: "greasyrate_",
      series: "Greasy Quirk",
      tourneyPresence: 0
    },
    {
      name: "Awakened Preserve",
      gameName: "visitorpreserve_",
      series: "Highfalutin Visitor",
      tourneyPresence: 0
    },
    {
      name: "Chivalrous Hollow",
      gameName: "cloudhollow_",
      series: "Cloud Nasty",
      tourneyPresence: -1
    },
    {
      name: "Useful Grass",
      gameName: "signalgrass_",
      series: "Wiry Signal",
      tourneyPresence: 2
    }
  ],
  targetIDs: ["ordinarymagic_", "legalpassenger_", "signalgrass_"]
};

export const CROSS_MULTIPLE_UNCHECK_TOURNEY_SERIES_ISOLATE: { stages: StageSelectInfo[], targetIDs: string[] } = {
  stages: [
    {
      name: "Rhyme Bear",
      gameName: "clumsybear_",
      series: "Foregoing Clumsiness",
      tourneyPresence: 2
    },
    {
      name: "Waste Substance",
      gameName: "pansubstance_",
      series: "Righteous Pan",
      tourneyPresence: 0
    },
    {
      name: "Join Sound",
      gameName: "earningsjoin_",
      series: "Fearful Earnings",
      tourneyPresence: -1
    },
    {
      name: "Magically Jobless",
      gameName: "unsuitablemagic_",
      series: "Unsuitable Imperfections",
      tourneyPresence: 2
    },
    {
      name: "Erratic Support",
      gameName: "kneesupport_",
      series: "Enchanted Knee",
      tourneyPresence: 0
    },
    {
      name: "Dog Pot",
      gameName: "hollowdog_",
      series: "Untidy Hollow",
      tourneyPresence: 0
    },
    {
      name: "Shade Curtain",
      gameName: "increaseablecurtain_",
      series: "Increaseable",
      tourneyPresence: 1
    }
  ],
  targetIDs: ["clumsybear_", "pansubstance_", "kneesupport_", "hollowdog_"]
};

export const UPDATE_EXISTS: StageSelectInfo[] = [
  {
    name: "Wilderness",
    gameName: "foulwilds_",
    series: "Foul Beast",
    tourneyPresence: 5
  }
];

export const UPDATE_ENABLED: { inputStages: StageSelectInfo[], selectedStages: string[] } = {
  inputStages: [
    {
      name: "Unarmed Degree",
      gameName: "castdegree_",
      series: "Roomy Cast",
      tourneyPresence: 0
    },
    {
      name: "Ambiguous Eggs",
      gameName: "ticketeggs_",
      series: "Panoramic Ticket",
      tourneyPresence: 0
    },
    {
      name: "Fearful Order",
      gameName: "spicyorder_",
      series: "Spicy Action",
      tourneyPresence: 0
    },
    {
      name: "Brief Grandfather",
      gameName: "moneygrandfather_",
      series: "Capricious Money",
      tourneyPresence: -1
    },
    {
      name: "Brave History",
      gameName: "scissorshistory_",
      series: "Painful Scissors",
      tourneyPresence: 2
    },
    {
      name: "Open Sneeze",
      gameName: "grandmothersneeze_",
      series: "Assorted Grandmother",
      tourneyPresence: 1
    },
    {
      name: "Modern Tail",
      gameName: "designtail_",
      series: "Defective Design",
      tourneyPresence: 2
    },
    {
      name: "Lethal Health",
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

export const UPDATE_DISABLED: StageSelectInfo[] = [
  {
    name: "Comfortable Motion",
    gameName: "quicksandmotion_",
    series: "Heavy Quicksand",
    tourneyPresence: 1
  },
  {
    name: "Easy Distance",
    gameName: "signdistance_",
    series: "Clammy Sign",
    tourneyPresence: 0
  },
  {
    name: "Swift Back",
    gameName: "pencilback_",
    series: "Real Pencil",
    tourneyPresence: -1
  },
  {
    name: "Gleaming Screw",
    gameName: "knotscres_",
    series: "Unwieldy Knot",
    tourneyPresence: 1
  },
  {
    name: "Stingy Color",
    gameName: "stomachcolor_",
    series: "Parsimonious Stomach",
    tourneyPresence: 2
  },
  {
    name: "Forgetful Cup",
    gameName: "crowdcup_",
    series: "Available Crowd",
    tourneyPresence: 2
  },
  {
    name: "Hard-to-Find Cake",
    gameName: "representativecake_",
    series: "Relieved Representative",
    tourneyPresence: 2
  },
  {
    name: "Dull Beds",
    gameName: "booksbeds_",
    series: "Astonishing Books",
    tourneyPresence: 2
  }
];

export const UPDATE_SELECTED: { inputStages: StageSelectInfo[], selectedStages: string[] } = {
  inputStages: [
    {
      name: "Chief Grain",
      gameName: "classgrain_",
      series: "Remarkable Class",
      tourneyPresence: -1
    },
    {
      name: "Waiting Silk",
      gameName: "questionsilk_",
      series: "Calm Question",
      tourneyPresence: -1
    },
    {
      name: "Nutritious Home",
      gameName: "cookhome_",
      series: "Average Cook",
      tourneyPresence: -1
    },
    {
      name: "Tense Rain",
      gameName: "temporaryrain_",
      series: "Temporary",
      tourneyPresence: -1
    },
    {
      name: "Flimsy Shelf",
      gameName: "nearshelf_",
      series: "Near Tendency",
      tourneyPresence: -1
    },
    {
      name: "Gentle Can",
      gameName: "giantscan_",
      series: "Crowded Giants",
      tourneyPresence: -1
    },
    {
      name: "Lacking Salt",
      gameName: "yamsalt_",
      series: "Righteous Yam",
      tourneyPresence: -1
    },
    {
      name: "Arrogant Grandfather",
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
  inputStages: StageSelectInfo[],
  selectedStages: string[],
  targetStages: string[]
} = {
  inputStages: [
    {
      name: "Tense Knife",
      gameName: "kettleknife_",
      series: "Glamorous Kettle",
      tourneyPresence: 0
    },
    {
      name: "Frequent Rabbits",
      gameName: "stingyrabbits_",
      series: "Stingy Dinosaurs",
      tourneyPresence: -1
    },
    {
      name: "Abusive Crown",
      gameName: "educationcrown_",
      series: "Calm Education",
      tourneyPresence: 1
    },
    {
      name: "Harmonious Face",
      gameName: "capharmony_",
      series: "Malicious Cap",
      tourneyPresence: 1
    },
    {
      name: "Normal Wind",
      gameName: "linenwind_",
      series: "Workable Linen",
      tourneyPresence: 2
    },
    {
      name: "Roomy Cave",
      gameName: "bitecave_",
      series: "Crooked Bite",
      tourneyPresence: 2
    },
    {
      name: "Aback Aunt",
      gameName: "rangeaunt_",
      series: "Thoughtless Range",
      tourneyPresence: 2
    },
    {
      name: "Ad Hoc Meeting",
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

export const UPDATE_NO_STAGES: StageSelectInfo[] = [
  {
    name: "Invincible Dress",
    gameName: "cavedress_",
    series: "Grateful Cave",
    tourneyPresence: -1
  },
  {
    name: "Plastic Camp",
    gameName: "iciclecamp_",
    series: "Glossy Icicle",
    tourneyPresence: 1
  },
  {
    name: "Spiffy Pen",
    gameName: "dinopen_",
    series: "Jumpy Dinosaurs",
    tourneyPresence: 2
  },
  {
    name: "Used Trousers",
    gameName: "horsetrousers_",
    series: "Disastrous Horse",
    tourneyPresence: -1
  },
  {
    name: "Puny Line",
    gameName: "bearline_",
    series: "Detailed Bear",
    tourneyPresence: 1
  },
  {
    name: "Ragged Flame",
    gameName: "birthflame_",
    series: "Tall Birth",
    tourneyPresence: 2
  },
  {
    name: "Callous Moon",
    gameName: "readingmoon_",
    series: "Thoughtless Reading",
    tourneyPresence: -1
  },
  {
    name: "Fluttering Slip",
    gameName: "zipperslip_",
    series: "Nebulous Zipper",
    tourneyPresence: 1
  }
];

export const UPDATE_NO_ERROR: { inputStages: StageSelectInfo[], targetStages: string[] } = {
  inputStages: [
    {
      name: "Waiting Smile",
      gameName: "bordersmile_",
      series: "Productive Border",
      tourneyPresence: -1
    },
    {
      name: "Quixotic Coast",
      gameName: "trainscoast_",
      series: "Enthusiastic Trains",
      tourneyPresence: -1
    },
    {
      name: "Glorious Day",
      gameName: "whipday_",
      series: "Mundane Whip",
      tourneyPresence: 1
    },
    {
      name: "Voiceless Bat",
      gameName: "drawerbat_",
      series: "Abaft Drawer",
      tourneyPresence: 0
    },
    {
      name: "Puffy Suit",
      gameName: "wristsuit_",
      series: "Exotic Wrist",
      tourneyPresence: -1
    },
    {
      name: "Numberless Aftermath",
      gameName: "troublenumberless_",
      series: "Ripe Trouble",
      tourneyPresence: 0
    },
    {
      name: "Next Army",
      gameName: "potarmy_",
      series: "Silly Pot",
      tourneyPresence: 1
    },
    {
      name: "Upset Ants",
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

export const ALL_EXISTS: StageSelectInfo[] = [
  {
    name: "Level Women",
    gameName: "carriagewomen_",
    series: "Disgusting Carriage",
    tourneyPresence: 2
  },
  {
    name: "Superficial Hands",
    gameName: "salthands_",
    series: "Axiomatic Salt",
    tourneyPresence: 2
  },
  {
    name: "Slim Nest",
    gameName: "maidnest_",
    series: "Panicky Maid",
    tourneyPresence: 0
  },
  {
    name: "Ashamed Food",
    gameName: "discussionfood_",
    series: "Confused Discussion",
    tourneyPresence: 1
  },
  {
    name: "Enchanted Crayon",
    gameName: "pollutioncrayon_",
    series: "Snotty Pollution",
    tourneyPresence: 1
  },
  {
    name: "Silent Can",
    gameName: "partycan_",
    series: "Irritating Party",
    tourneyPresence: 0
  },
  {
    name: "Glossy Sofa",
    gameName: "fleshsofa_",
    series: "Volatile Flesh",
    tourneyPresence: 1
  },
  {
    name: "Unarmed Back",
    gameName: "firemanback_",
    series: "Old Fireman",
    tourneyPresence: -1
  }
];

export const ALL_LABEL: StageSelectInfo[] = [
  {
    name: "Separate Bell",
    gameName: "structurebell_",
    series: "Efficient Structure",
    tourneyPresence: 1
  },
  {
    name: "Wholesale Curtain",
    gameName: "effectcurtain_",
    series: "Tranquil Effect",
    tourneyPresence: -1
  },
  {
    name: "Plucky Church",
    gameName: "liquidchurch_",
    series: "Kindly Liquid",
    tourneyPresence: -1
  },
  {
    name: "Hungry Dog",
    gameName: "wavedog_",
    series: "Uncovered Wave",
    tourneyPresence: 1
  },
  {
    name: "Glistening Point",
    gameName: "discoverypoint_",
    series: "Toothsome Discovery",
    tourneyPresence: 0
  },
  {
    name: "Tenuous Sink",
    gameName: "crowdsink_",
    series: "Violent Crowd",
    tourneyPresence: 0
  },
  {
    name: "Plant Drawer",
    gameName: "cherriesdrawer_",
    series: "Second-hand Cherries",
    tourneyPresence: 0
  },
  {
    name: "Careless Jump",
    gameName: "rodjump_",
    series: "Auspicious Rod",
    tourneyPresence: 2
  }
];

export const ALL_FIRST_SECTION: StageSelectInfo[] = [
  {
    name: "Delightful Dogs",
    gameName: "geesedogs_",
    series: "Accidental Geese",
    tourneyPresence: 0
  },
  {
    name: "Used Throne",
    gameName: "shoethrone_",
    series: "Reminiscent Shoe",
    tourneyPresence: -1
  },
  {
    name: "Simplistic Oven",
    gameName: "offeroven_",
    series: "Honorable Offer",
    tourneyPresence: 0
  },
  {
    name: "Tasteful Spark",
    gameName: "mouthspark_",
    series: "Square Mouth",
    tourneyPresence: 0
  },
  {
    name: "Ethereal Bait",
    gameName: "spotbait_",
    series: "Precious Spot",
    tourneyPresence: 2
  },
  {
    name: "Boundless Glove",
    gameName: "trousersglove_",
    series: "Orange Trousers",
    tourneyPresence: 2
  },
  {
    name: "Round Mountain",
    gameName: "airplanemountain_",
    series: "Cooing Airplane",
    tourneyPresence: 0
  },
  {
    name: "Volatile Coal",
    gameName: "crimecoal_",
    series: "Well-off Crime",
    tourneyPresence: 0
  }
];

export const ALL_SELECT_POSITIVE_TOURNEY: StageSelectInfo[] = [
  {
    name: "Heavenly Growth",
    gameName: "bikesgrowth_",
    series: "Spectacular Bikes",
    tourneyPresence: 1
  },
  {
    name: "Wakeful Metal",
    gameName: "dogmetal_",
    series: "Guttural Dog",
    tourneyPresence: 0
  },
  {
    name: "Aggressive Rainstorm",
    gameName: "degreerain_",
    series: "Pushy Degree",
    tourneyPresence: 2
  },
  {
    name: "Tightfisted Sugar",
    gameName: "lavishsugar_",
    series: "Lavish Use",
    tourneyPresence: 2
  },
  {
    name: "Intelligent Hat",
    gameName: "gunhat_",
    series: "Rapid Gun",
    tourneyPresence: 0
  },
  {
    name: "Workable Grape",
    gameName: "earwork_",
    series: "Nasty Ear",
    tourneyPresence: -1
  },
  {
    name: "Bawdy Science",
    gameName: "ironscience_",
    series: "Helpful Iron",
    tourneyPresence: -1
  },
  {
    name: "Wrathful Discussion",
    gameName: "platediscussion_",
    series: "Next Plate",
    tourneyPresence: -1
  }
];

export const ALL_SELECT_POSITIVE_SERIES: StageSelectInfo[] = [
  {
    name: "Incandescent Point",
    gameName: "businesspoint_",
    series: "Pumped Business",
    tourneyPresence: 2
  },
  {
    name: "Majestic Zebra",
    gameName: "furniturezebra_",
    series: "Languid Furniture",
    tourneyPresence: -1
  },
  {
    name: "Charming Carpenter",
    gameName: "spooncarpenter_",
    series: "Bad Spoon",
    tourneyPresence: 1
  },
  {
    name: "Longing Crayon",
    gameName: "horsecrayon_",
    series: "Three Horses",
    tourneyPresence: 1
  },
  {
    name: "Subdued Edge",
    gameName: "rolledge_",
    series: "Pointless Roll",
    tourneyPresence: 1
  },
  {
    name: "Exultant Coil",
    gameName: "treecoil_",
    series: "Sick Trees",
    tourneyPresence: 1
  },
  {
    name: "Madly Tiger",
    gameName: "texturetiger_",
    series: "Succinct Texture",
    tourneyPresence: 2
  },
  {
    name: "Rustic Move",
    gameName: "baitmove_",
    series: "Plain Bait",
    tourneyPresence: -1
  }
];

export const ALL_SELECT_NEGATIVE_TOURNEY: {inputStages: StageSelectInfo[], targetStages: string[]} = {
  inputStages: [
    {
      name: "Disgusting Prose",
      gameName: "vestprose_",
      series: "Hilarious Vest",
      tourneyPresence: -1
    },
    {
      name: "Level Beef",
      gameName: "spoonbeef_",
      series: "Tangible Spoon",
      tourneyPresence: 0
    },
    {
      name: "Military Hand",
      gameName: "scenthand_",
      series: "Rampant Scent",
      tourneyPresence: 2
    },
    {
      name: "Merciful Arm",
      gameName: "luncharm_",
      series: "Far Lunchroom",
      tourneyPresence: 1
    },
    {
      name: "Opposite Arithmetic",
      gameName: "songmath_",
      series: "Mature Song",
      tourneyPresence: 1
    },
    {
      name: "Tearful Judge",
      gameName: "borderjudge_",
      series: "Bumpy Border",
      tourneyPresence: -1
    },
    {
      name: "Dreary Power",
      gameName: "amountpower_",
      series: "Delicious Amount",
      tourneyPresence: -1
    },
    {
      name: "Futuristic Cook",
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

export const NONE_EXISTS: StageSelectInfo[] = [
  {
    name: "Cautious Maid",
    gameName: "titlemaid_",
    series: "Ripe Title",
    tourneyPresence: 1
  },
  {
    name: "Clear Chicken",
    gameName: "wallchicken_",
    series: "Selfish Wall",
    tourneyPresence: 0
  },
  {
    name: "Discreet Zephyr",
    gameName: "marblezephyr_",
    series: "Parsimonious Marble",
    tourneyPresence: 1
  },
  {
    name: "Stimulating Pancake",
    gameName: "cribpancake_",
    series: "Questionable Crib",
    tourneyPresence: 0
  },
  {
    name: "Spooky Recess",
    gameName: "actorrecess_",
    series: "Neat Actor",
    tourneyPresence: 2
  },
  {
    name: "Future Wind",
    gameName: "feelingwind_",
    series: "Spicy Feeling",
    tourneyPresence: -1
  },
  {
    name: "Psychotic Throne",
    gameName: "duckthrone_",
    series: "Impartial Duck",
    tourneyPresence: 2
  },
  {
    name: "Common Tray",
    gameName: "startray_",
    series: "Cuddly Star",
    tourneyPresence: 2
  }
];

export const NONE_LABEL: StageSelectInfo[] = [
  {
    name: "Roasted Field",
    gameName: "rollfield_",
    series: "Tame Roll",
    tourneyPresence: 2
  },
  {
    name: "Redundant Swim",
    gameName: "backswim_",
    series: "Tense Back",
    tourneyPresence: -1
  },
  {
    name: "Grotesque Order",
    gameName: "donkeyorder_",
    series: "Scared Donkey",
    tourneyPresence: 0
  },
  {
    name: "Wet Reading",
    gameName: "gradereading_",
    series: "Fertile Grade",
    tourneyPresence: 1
  },
  {
    name: "Bumpy Value",
    gameName: "flowervalue_",
    series: "Military Flower",
    tourneyPresence: -1
  },
  {
    name: "Graceful Pets",
    gameName: "nervepets_",
    series: "Magnificent Nerve",
    tourneyPresence: 2
  },
  {
    name: "Icky Bat",
    gameName: "legsbat_",
    series: "Lamentable Legs",
    tourneyPresence: 1
  },
  {
    name: "Boorish Addition",
    gameName: "cableaddition_",
    series: "Spiteful Cable",
    tourneyPresence: 0
  }
];

export const NONE_FIRST_SECTION: StageSelectInfo[] = [
  {
    name: "Pathetic Basket",
    gameName: "taxbasket_",
    series: "Superficial Tax",
    tourneyPresence: 0
  },
  {
    name: "Volatile Ocean",
    gameName: "mintocean_",
    series: "Unarmed Mint",
    tourneyPresence: -1
  },
  {
    name: "Illegal Spade",
    gameName: "feelingspade_",
    series: "Obsolete Feeling",
    tourneyPresence: 1
  },
  {
    name: "Conscious Payment",
    gameName: "songspayment_",
    series: "Sour Songs",
    tourneyPresence: -1
  },
  {
    name: "Closed Ray",
    gameName: "animalclosed_",
    series: "Lackadaisical Animal",
    tourneyPresence: 1
  },
  {
    name: "Unnatural Swing",
    gameName: "holidayswing_",
    series: "Testy Holiday",
    tourneyPresence: 0
  },
  {
    name: "Materialistic Power",
    gameName: "governorpower_",
    series: "Obedient Governor",
    tourneyPresence: 2
  },
  {
    name: "Dashing Size",
    gameName: "exchangesize_",
    series: "Imaginary Exchange",
    tourneyPresence: -1
  }
];

export const NONE_SELECT_POSITIVE_TOURNEY: StageSelectInfo[] = [
  {
    name: "Honorable Recess",
    gameName: "doctorrecess_",
    series: "Bawdy Doctor",
    tourneyPresence: -1
  },
  {
    name: "Ambitious Airplane",
    gameName: "biteairplane_",
    series: "Daffy Bite",
    tourneyPresence: 1
  },
  {
    name: "Upset Crown",
    gameName: "businesscrown_",
    series: "Picayune Business",
    tourneyPresence: 0
  },
  {
    name: "Three Hobbies",
    gameName: "achieverhobbies_",
    series: "Uptight Achiever",
    tourneyPresence: 2
  },
  {
    name: "Small Cause",
    gameName: "capcause_",
    series: "Zany Cap",
    tourneyPresence: 1
  },
  {
    name: "Highfalutin Jeans",
    gameName: "anglejeans_",
    series: "Lopsided Angle",
    tourneyPresence: 0
  },
  {
    name: "Lean Ghost",
    gameName: "sweaterghost_",
    series: "Ugliest Sweater",
    tourneyPresence: -1
  },
  {
    name: "Nondescript Market",
    gameName: "lunchroommarket_",
    series: "Yielding Lunchroom",
    tourneyPresence: 2
  }
];

export const NONE_SELECT_POSITIVE_SERIES: StageSelectInfo[] = [
  {
    name: "Helpless Burst",
    gameName: "tigerburst_",
    series: "Synonymous Tiger",
    tourneyPresence: 1
  },
  {
    name: "Maniacal Adjustment",
    gameName: "rockadj_",
    series: "Tangy Rock",
    tourneyPresence: 1
  },
  {
    name: "Uppity Ants",
    gameName: "believeants_",
    series: "Venomous Believe",
    tourneyPresence: -1
  },
  {
    name: "Trite Approval",
    gameName: "churchapproval_",
    series: "Wasteful Church",
    tourneyPresence: 1
  },
  {
    name: "Unique Crate",
    gameName: "attackcrate_",
    series: "Jaded Attack",
    tourneyPresence: 2
  },
  {
    name: "Unnatural Oranges",
    gameName: "sticksoranges_",
    series: "Fair Sticks",
    tourneyPresence: -1
  },
  {
    name: "Alluring Plant",
    gameName: "receiptplant_",
    series: "Pink Receipt",
    tourneyPresence: -1
  },
  {
    name: "Sordid Straw",
    gameName: "brotherstraw_",
    series: "Naughty Brother",
    tourneyPresence: 0
  }
];

export const NONE_SELECT_NEGATIVE_TOURNEY: { inputStages: StageSelectInfo[], targetStages: string[] } = {
  inputStages: [
    {
      name: "Uttermost Slope",
      gameName: "guitarslope_",
      series: "Fascinated Guitar",
      tourneyPresence: 2
    },
    {
      name: "Acrid Aftermath",
      gameName: "smokeaftermath_",
      series: "Breezy Smoke",
      tourneyPresence: -1
    },
    {
      name: "Astonishing Interest",
      gameName: "marbleinterest_",
      series: "Interesting Marble",
      tourneyPresence: -1
    },
    {
      name: "Jazzy Circle",
      gameName: "capcircle_",
      series: "Ashamed Cap",
      tourneyPresence: 2
    },
    {
      name: "Curved Roll",
      gameName: "observationroll_",
      series: "Jaded Observation",
      tourneyPresence: 2
    },
    {
      name: "Poised Earthquake",
      gameName: "deerearthquake_",
      series: "Joyous Deer",
      tourneyPresence: 0
    },
    {
      name: "Great Haircut",
      gameName: "accounthaircut_",
      series: "Entertaining Account",
      tourneyPresence: 2
    },
    {
      name: "Wise Dime",
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

export const ALL_UNCHECKED_TOURNEY: {inputStages: StageSelectInfo[], targetStages: string[]} = {
  inputStages: [
    {
      name: "Premium Grass",
      gameName: "bonegrass_",
      series: "Sticky Bone",
      tourneyPresence: 1
    },
    {
      name: "Flashy Camp",
      gameName: "dirtcamp_",
      series: "Moaning Dirt",
      tourneyPresence: -1
    },
    {
      name: "Ossified Calculator",
      gameName: "crowdcalc_",
      series: "Charming Crowd",
      tourneyPresence: 1
    },
    {
      name: "Rustic Rain",
      gameName: "instrumentrain_",
      series: "Detailed Instrument",
      tourneyPresence: -1
    },
    {
      name: "Smooth Sidewalk",
      gameName: "attacksidewalk_",
      series: "Utopian Attack",
      tourneyPresence: 0
    },
    {
      name: "Sable Wound",
      gameName: "yokewound_",
      series: "Astonishing Yoke",
      tourneyPresence: 2
    },
    {
      name: "Near Hydrant",
      gameName: "quiethydrant_",
      series: "Taboo Quiet",
      tourneyPresence: 1
    },
    {
      name: "Melodic Shock",
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

export const PARENTERROR_FATAL: { inputStages: StageSelectInfo[], targetGameNames: string[], expectedMessage: string } = {
  inputStages: [
    {
      name: "Dry Comparison",
      gameName: "policycompare_",
      series: "Cloudy Policy",
      tourneyPresence: -1
    },
    {
      name: "Stormy Cancer",
      gameName: "newsstormy_",
      series: "Harsh News",
      tourneyPresence: 2
    },
    {
      name: "Polite Orange",
      gameName: "performancepolite_",
      series: "Spicy Performance",
      tourneyPresence: -1
    },
    {
      name: "Ethereal Story",
      gameName: "actorstory_",
      series: "Sleepy Actor",
      tourneyPresence: 1
    },
    {
      name: "Special Priority",
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

export const NOSTAGES_ERROR: { inputStages: StageSelectInfo[], expectedMessage: string } = {
  inputStages: [],
  expectedMessage: MESSAGES.noStagesLoaded
};

export const NOSTAGES_ERROR_NEGATIVE: { inputStages: StageSelectInfo[], targetMessage: string } = {
  inputStages: [
    {
      name: "Whispering Screw",
      gameName: "inkscrew_",
      series: "Ink",
      tourneyPresence: 2
    },
    {
      name: "Plain Memory",
      gameName: "balancememory_",
      series: "Solid Balance",
      tourneyPresence: 2
    },
    {
      name: "Elbow",
      gameName: "brickelbow_",
      series: "Dead Brick",
      tourneyPresence: 1
    },
    {
      name: "Sense",
      gameName: "debtsense_",
      series: "Useful Debt",
      tourneyPresence: -1
    }
  ],
  targetMessage: MESSAGES.noStagesLoaded
};
