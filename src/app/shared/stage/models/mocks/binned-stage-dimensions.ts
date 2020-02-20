export const VALID = {
  name: 'XAnomWiQnX',
  gameName: 'ikPYxrC6MN',
  blastzoneWidth: {
    value: 13.1209,
    bin: 22,
    min: true,
    max: true
  },
  stageLength: {
    value: -70.8077,
    bin: 88,
    min: true,
    max: true
  },
  offStageDistance: {
    value: -2.3936,
    bin: 86,
    min: false,
    max: true
  },
  ceilingHeight: {
    value: 35.4089,
    bin: 97,
    min: false,
    max: true
  }
};

export const BAD_DATA: { [problem: string]: any } = {
  nameNotString: {
    name: {value: 'zrs1GfjwfK'},
    gameName: 'OENjCPjpyj',
    blastzoneWidth: {
      value: 23.0577,
      bin: 17,
      min: true,
      max: true
    },
    stageLength: {
      value: -48.4993,
      bin: 61,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 99.0936,
      bin: 72,
      min: false,
      max: true
    },
    ceilingHeight: {
      value: -48.7238,
      bin: 55,
      min: true,
      max: true
    }
  },
  gameNameNotString: {
    name: 'kRT0tgN6Wp',
    gameName: false,
    blastzoneWidth: {
      value: 55.1029,
      bin: 44,
      min: false,
      max: false
    },
    stageLength: {
      value: -60.7145,
      bin: 59,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 35.3008,
      bin: 38,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 47.3072,
      bin: 58,
      min: true,
      max: true
    }
  },

  blastzoneWidthNotBinParams: {
    name: 'V4Gxbe8M1t',
    gameName: 'KDhpDCAbLS',
    blastzoneWidth: 62.1153,
    stageLength: {
      value: 77.4805,
      bin: 85,
      min: true,
      max: true
    },
    offStageDistance: {
      value: -36.1278,
      bin: 37,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 54.1868,
      bin: 30,
      min: true,
      max: false
    }
  },

  stageLengthNotBinParams: {
    name: '7oU5PehVCn',
    gameName: 'R3xlCB62D4',
    blastzoneWidth: {
      value: 19.8508,
      bin: 36,
      min: false,
      max: false
    },
    stageLength: {
      value: 63.8830,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 21.2228,
      bin: 99,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 36.8369,
      bin: 11,
      min: true,
      max: true
    }
  },

  offStageDistanceNotBinParams: {
    name: 'T68bSiFOoM',
    gameName: 'rt7tdFNJhJ',
    blastzoneWidth: {
      value: 18.2840,
      bin: 60,
      min: true,
      max: false
    },
    stageLength: {
      value: -29.2117,
      bin: 14,
      min: false,
      max: true
    },
    offStageDistance: true,
    ceilingHeight: {
      value: 10.5218,
      bin: 94,
      min: true,
      max: true
    }
  },

  ceilingHeightNotBinParams: {
    name: 'gNGARILutm',
    gameName: '0HYGLjCyXf',
    blastzoneWidth: {
      value: 16.9765,
      bin: 65,
      min: false,
      max: true
    },
    stageLength: {
      value: -54.8624,
      bin: 2,
      min: false,
      max: true
    },
    offStageDistance: {
      value: -13.4476,
      bin: 25,
      min: false,
      max: false
    },
    ceilingHeight: 9,
  }
};
