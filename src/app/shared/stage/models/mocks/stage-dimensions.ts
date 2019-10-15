export const TWO_STAGES = [
  {
    name: "Town & City",
    gameName: "village2_",
    blastzoneWidth: 230,
    stageLength: 82.5,
    offStageDistance: 147.5,
    ceilingHeight: 195
  },
  {
    name: "Smashville",
    gameName: "xvillage",
    blastzoneWidth: 229.5,
    stageLength: 69.6488304,
    offStageDistance: 159.8511696,
    ceilingHeight: 189.90001145
  }
];

export const TOWN = {
  name: "Town & City",
  gameName: "village2_",
  blastzoneWidth: 230,
  stageLength: 82.5,
  offStageDistance: 147.5,
  ceilingHeight: 195
};

export const BAD_DATA = {
  "nameNotString":
  {
    name: 20,
    gameName: "village2_",
    blastzoneWidth: 230,
    stageLength: 82.5,
    offStageDistance: 147.5,
    ceilingHeight: 195
  },
  "gameNameNotString":
  {
    name: "Town & City",
    gameName: 20,
    blastzoneWidth: 230,
    stageLength: 82.5,
    offStageDistance: 147.5,
    ceilingHeight: 195
  },
  "blastzoneWidthNotNumber":
  {
    name: "Town & City",
    gameName: "village2_",
    blastzoneWidth: "two-hundred thirty",
    stageLength: 82.5,
    offStageDistance: 147.5,
    ceilingHeight: 195
  },
  "stageLengthNotNumber":
  {
    name: "Town & City",
    gameName: "village2_",
    blastzoneWidth: 230,
    stageLength: "eighty-two",
    offStageDistance: 147.5,
    ceilingHeight: 195
  },
  "offStageDistanceNotNumber":
  {
    name: "Town & City",
    gameName: "village2_",
    blastzoneWidth: 230,
    stageLength: 82.5,
    offStageDistance: "one-hundred forty-seven",
    ceilingHeight: 195
  },
  "ceilingHeightNotNumber":
  {
    name: "Town & City",
    gameName: "village2_",
    blastzoneWidth: 230,
    stageLength: 82.5,
    offStageDistance: 147.5,
    ceilingHeight: "one-hundred ninety-five"
  }
};
