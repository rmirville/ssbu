export const VALID = {
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

export const STAGE_SELECTIONS_ONE = [
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

export const STAGE_SELECTIONS_TWO = [
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

export const STAGE_SELECTIONS_THREE = [
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

export const STAGE_SELECTIONS_LEGAL_COMMON_PRESENT = [
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

export const STAGE_SELECTIONS_LEGAL_COMMON_ABSENT = [
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

export const STAGE_SELECTIONS_LEGAL_COMMON_INCLUDE = {
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

export const STAGE_SELECTIONS_LEGAL_COMMON_EXCLUDE = {
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

export const STAGE_SELECTIONS_LEGAL_UNCOMMON_PRESENT = [
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

export const STAGE_SELECTIONS_LEGAL_UNCOMMON_ABSENT = [
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

export const STAGE_SELECTIONS_LEGAL_UNCOMMON_INCLUDE = {
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

export const STAGE_SELECTIONS_LEGAL_UNCOMMON_EXCLUDE = {
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

export const STAGE_SELECTIONS_LEGAL_RARE_PRESENT = [
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

export const STAGE_SELECTIONS_LEGAL_RARE_ABSENT = [
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

export const STAGE_SELECTIONS_LEGAL_RARE_INCLUDE = {
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

export const STAGE_SELECTIONS_LEGAL_RARE_EXCLUDE = {
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

export const STAGE_SELECTIONS_TOURNEY = {
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
