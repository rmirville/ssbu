import { StageSelectInfo } from '../stage-select-info.model';

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

export const TOURNEY_SHOW_LEGAL_COMMON = [
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

export const TOURNEY_SHOW_LEGAL_COMMON_BANNED = [
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
