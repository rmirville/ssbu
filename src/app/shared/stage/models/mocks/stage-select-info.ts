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

export const MISC_STAGE_SORT: {
  inputStages: StageSelectInfo[],
  sortedStages: { [property: string]: StageSelectInfo[] }
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

  sortedStages: {

  }
};
