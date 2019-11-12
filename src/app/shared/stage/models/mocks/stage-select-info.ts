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
