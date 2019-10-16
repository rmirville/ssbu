const TOWN = {
  name: "Town & City",
  gameName: "village2_",
  blastzoneWidth: 230,
  stageLength: 82.5,
  offStageDistance: 147.5,
  ceilingHeight: 195
};

const SMASHVILLE = {
  name: "Smashville",
  gameName: "xvillage",
  blastzoneWidth: 229.5,
  stageLength: 69.6488304,
  offStageDistance: 159.8511696,
  ceilingHeight: 189.90001145
};

const VALID_STAGES = [TOWN, SMASHVILLE];

const VALID_WIDTH = {
  min: 38,
  max: 75,
  range: 42
};

const VALID_LENGTH = {
  min: -32,
  max: -3,
  range: 83
};

const VALID_DISTANCE = {
  min: -1,
  max: 3894,
  range: 8
}

const VALID_HEIGHT = {
  min: 43,
  max: 49,
  range: 6
};

const VALID_RANGES = {
  blastzoneWidth: VALID_WIDTH,
  stageLength: VALID_LENGTH,
  offStageDistance: VALID_DISTANCE,
  ceilingHeight: VALID_HEIGHT
};

export const VALID = {
  dimensions: VALID_STAGES,
  ranges: VALID_RANGES
};

export const BAD_DATA = {
  dimensionsNotArray: {
    dimensions: TOWN,
    ranges: VALID_RANGES
  },

  dimensionsNotStageDimensions: {
    dimensions: [2,3],
    ranges: VALID_RANGES
  },

  blastzoneWidthNotRange: {
    dimensions: VALID_STAGES,
    ranges: {
      blastzoneWidth: 2,
      stageLength: VALID_LENGTH,
      offStageDistance: VALID_DISTANCE,
      ceilingHeight: VALID_HEIGHT
    }
  },

  stageLengthNotRange: {
    dimensions: VALID_STAGES,
    ranges: {
      blastzoneWidth: VALID_WIDTH,
      stageLength: "length",
      offStageDistance: VALID_DISTANCE,
      ceilingHeight: VALID_HEIGHT
    }
  },

  offStageDistanceNotRange: {
    dimensions: VALID_STAGES,
    ranges: {
      blastzoneWidth: VALID_WIDTH,
      stageLength: VALID_LENGTH,
      offStageDistance: TOWN,
      ceilingHeight: VALID_HEIGHT
    }
  },

  ceilingHeighthNotRange: {
    dimensions: VALID_STAGES,
    ranges: {
      blastzoneWidth: VALID_WIDTH,
      stageLength: VALID_LENGTH,
      offStageDistance: VALID_DISTANCE,
      ceilingHeight: {
        invalidProperty: ["sometext", "moretext"]
      }
    }
  },
};
