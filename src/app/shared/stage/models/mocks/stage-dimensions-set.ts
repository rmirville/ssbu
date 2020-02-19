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

const SAMPLE_STAGE_ONE = {
  name: "Sample Stage",
  gameName: "sample1_",
  blastzoneWidth: 210,
  stageLength: 70,
  offStageDistance: 150,
  ceilingHeight: 190
};

const SAMPLE_STAGE_TWO = {
  name: "Example Stage",
  gameName: "example2_",
  blastzoneWidth: 330,
  stageLength: 25,
  offStageDistance: 95,
  ceilingHeight: 425.3
};

const SAMPLE_STAGE_THREE = {
  name: "Made-up Placeville",
  gameName: "madeup3_",
  blastzoneWidth: 840,
  stageLength: 29,
  offStageDistance: 103,
  ceilingHeight: 83
};

const SAMPLE_STAGE_FOUR = {
  name: "Over There",
  gameName: "overthere4_",
  blastzoneWidth: 203,
  stageLength: 85,
  offStageDistance: 49,
  ceilingHeight: 7524
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

export const TWO_STAGE_SET = {
  dimensions: [TOWN, SMASHVILLE],
  ranges: {
    blastzoneWidth: {
      min: 229.5,
      max: 230,
      range: 0.5
    },
    stageLength: {
      min: 69.6488304,
      max: 82.5,
      range: 12.8511696
    },
    offStageDistance: {
      min: 147.5,
      max: 159.8511696,
      range: 12.3511696
    },
    ceilingHeight: {
      min: 189.90001145,
      max: 195,
      range: 5.09998855
    }
  }
};

export const DIMENSIONS_SET_ONE = {
  dimensions: [TOWN, SMASHVILLE],
  ranges: {
    blastzoneWidth: {
      min: 229.5,
      max: 230,
      range: 0.5
    },
    stageLength: {
      min: 69.6488304,
      max: 82.5,
      range: 12.8511696
    },
    offStageDistance: {
      min: 147.5,
      max: 159.8511696,
      range: 12.3511696
    },
    ceilingHeight: {
      min: 189.90001145,
      max: 195,
      range: 5.09998855
    }
  }
};

export const DIMENSIONS_SET_TWO = {
  dimensions: [SAMPLE_STAGE_ONE, SAMPLE_STAGE_TWO, TOWN],
  ranges: {
    blastzoneWidth: {
      min: 290,
      max: 530,
      range: 20
    },
    stageLength: {
      min: 437,
      max: 629,
      range: 120
    },
    offStageDistance: {
      min: 20,
      max: 43,
      range: 2
    },
    ceilingHeight: {
      min: 195,
      max: 222,
      range: 4.359
    }
  }
};

export const DIMENSIONS_SET_THREE = {
  dimensions: [SAMPLE_STAGE_THREE, SAMPLE_STAGE_FOUR],
  ranges: {
    blastzoneWidth: {
      min: 852,
      max: 949,
      range: 241
    },
    stageLength: {
      min: 72,
      max: 596,
      range: 718
    },
    offStageDistance: {
      min: 715,
      max: 759,
      range: 963
    },
    ceilingHeight: {
      min: 22,
      max: 289,
      range: 279
    }
  }
};
