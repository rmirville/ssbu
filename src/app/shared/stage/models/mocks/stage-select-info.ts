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
