import { BinnedStageDimensions } from '../binned-stage-dimensions.model';

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

export const SORTBLASTDESC_BLAST_POS: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'fSNRq08qXl',
    gameName: 'gS0XXUj2tt',
    blastzoneWidth: {
      value: 2,
      bin: 3,
      min: false,
      max: false
    },
    stageLength: {
      value: 41,
      bin: 62,
      min: true,
      max: false
    },
    offStageDistance: {
      value: 57,
      bin: 62,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 39,
      bin: 79,
      min: true,
      max: true
    }
  },
  dimB: {
    name: 'ZuubMytg24',
    gameName: 'lJtanTheMM',
    blastzoneWidth: {
      value: 45,
      bin: 38,
      min: true,
      max: true
    },
    stageLength: {
      value: 4,
      bin: 15,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 11,
      bin: 33,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 32,
      bin: 2,
      min: true,
      max: true
    }
  }
};

export const SORTBLASTDESC_BLAST_NEG: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'wrWP8Jg3Y4',
    gameName: 'foJXCmz9Dy',
    blastzoneWidth: {
      value: 82,
      bin: 41,
      min: false,
      max: true
    },
    stageLength: {
      value: 44,
      bin: 5,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 43,
      bin: 14,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 4,
      bin: 49,
      min: false,
      max: true
    }
  },
  dimB: {
    name: 'rprpkgtuiS',
    gameName: '9jP4qYs6hN',
    blastzoneWidth: {
      value: 72,
      bin: 47,
      min: true,
      max: false
    },
    stageLength: {
      value: 78,
      bin: 62,
      min: true,
      max: false
    },
    offStageDistance: {
      value: 46,
      bin: 63,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 65,
      bin: 79,
      min: true,
      max: true
    }
  }
};

export const SORTBLASTDESC_STAGELENGTH_POS: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'VcHmAZSWqQ',
    gameName: 'nbGBqwv5Bb',
    blastzoneWidth: {
      value: 23,
      bin: 70,
      min: true,
      max: true
    },
    stageLength: {
      value: 28,
      bin: 79,
      min: true,
      max: false
    },
    offStageDistance: {
      value: 82,
      bin: 66,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 100,
      bin: 25,
      min: true,
      max: true
    }
  },
  dimB: {
    name: 'eigV6iK3BX',
    gameName: 'jA4BZaM7uw',
    blastzoneWidth: {
      value: 23,
      bin: 70,
      min: true,
      max: true
    },
    stageLength: {
      value: 89,
      bin: 24,
      min: true,
      max: true
    },
    offStageDistance: {
      value: 37,
      bin: 15,
      min: false,
      max: true
    },
    ceilingHeight: {
      value: 3,
      bin: 75,
      min: true,
      max: false
    }
  }
};

export const SORTBLASTDESC_STAGELENGTH_NEG: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'm1yYQj9l0I',
    gameName: '2wGERb2Vtb',
    blastzoneWidth: {
      value: 48,
      bin: 44,
      min: false,
      max: true
    },
    stageLength: {
      value: 10,
      bin: 61,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 14,
      bin: 67,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 34,
      bin: 73,
      min: false,
      max: false
    }
  },
  dimB: {
    name: '6A1eJefFha',
    gameName: '1vkGL8u7CH',
    blastzoneWidth: {
      value: 48,
      bin: 44,
      min: false,
      max: false
    },
    stageLength: {
      value: 1,
      bin: 75,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 43,
      bin: 82,
      min: false,
      max: true
    },
    ceilingHeight: {
      value: 76,
      bin: 47,
      min: false,
      max: false
    }
  }
};

export const SORTBLASTDESC_CEILING_POS: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'qCBOJxYsZM',
    gameName: 'UMA6A9kV59',
    blastzoneWidth: {
      value: 88,
      bin: 17,
      min: true,
      max: true
    },
    stageLength: {
      value: 38,
      bin: 40,
      min: true,
      max: true
    },
    offStageDistance: {
      value: 80,
      bin: 31,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 5,
      bin: 25,
      min: false,
      max: false
    }
  },
  dimB: {
    name: '5pZS5rA6WT',
    gameName: 'tncmoKSDPg',
    blastzoneWidth: {
      value: 88,
      bin: 17,
      min: false,
      max: false
    },
    stageLength: {
      value: 38,
      bin: 40,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 80,
      bin: 31,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 6,
      bin: 88,
      min: false,
      max: false
    }
  }
};

export const SORTBLASTDESC_CEILING_NEG: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'z9m1mxr0rj',
    gameName: 'vmHe5mtSB6',
    blastzoneWidth: {
      value: 63,
      bin: 17,
      min: true,
      max: false
    },
    stageLength: {
      value: 83,
      bin: 24,
      min: true,
      max: false
    },
    offStageDistance: {
      value: 65,
      bin: 66,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 57,
      bin: 83,
      min: true,
      max: true
    }
  },
  dimB: {
    name: '4Es3i17oW8',
    gameName: 'R0vikFPQX7',
    blastzoneWidth: {
      value: 63,
      bin: 17,
      min: true,
      max: true
    },
    stageLength: {
      value: 83,
      bin: 24,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 65,
      bin: 66,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 44,
      bin: 75,
      min: true,
      max: false
    }
  }
};

export const SORTBLASTDESC_EQUAL: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'nR0vEWS2Ag',
    gameName: 'G9ZYhHj2m3',
    blastzoneWidth: {
      value: 3,
      bin: 75,
      min: false,
      max: true
    },
    stageLength: {
      value: 74,
      bin: 1,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 81,
      bin: 31,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 100,
      bin: 49,
      min: false,
      max: false
    }
  },
  dimB: {
    name: 'nXovX8tDHW',
    gameName: 'KJTDVblQZX',
    blastzoneWidth: {
      value: 3,
      bin: 75,
      min: true,
      max: false
    },
    stageLength: {
      value: 74,
      bin: 1,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 81,
      bin: 31,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 100,
      bin: 49,
      min: false,
      max: true
    }
  }
};

export const SORTBLASTDESC_INVALID_A = {
  invalidDim: 'A0lP2JPLKP',
  dimB: {
    name: '1h2au7scFR',
    gameName: 'KntMGVKCcL',
    blastzoneWidth: {
      value: 23,
      bin: 0,
      min: false,
      max: false
    },
    stageLength: {
      value: 41,
      bin: 5,
      min: true,
      max: false
    },
    offStageDistance: {
      value: 33,
      bin: 4,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 31,
      bin: 5,
      min: false,
      max: true
    }
  }
};

export const SORTBLASTDESC_INVALID_B = {
  dimA: {
    name: 'FQ3zgtJ65i',
    gameName: 'OTEYHokl7Z',
    blastzoneWidth: {
      value: 91,
      bin: 3,
      min: true,
      max: true
    },
    stageLength: {
      value: 28,
      bin: 1,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 58,
      bin: 5,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 7,
      bin: 1,
      min: true,
      max: false
    }
  },
  invalidDim: [2500, 47]
};

/*

export const SORTBLASTDESC_DIM_VAL: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: '',
    gameName: '',
    blastzoneWidth: {
      value: 0,
      bin: 0,
      min: false,
      max: false
    },
    stageLength: {
      value: 0,
      bin: 0,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 0,
      bin: 0,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 0,
      bin: 0,
      min: false,
      max: false
    }
  },
  dimB: {
    name: '',
    gameName: '',
    blastzoneWidth: {
      value: 0,
      bin: 0,
      min: false,
      max: false
    },
    stageLength: {
      value: 0,
      bin: 0,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 0,
      bin: 0,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 0,
      bin: 0,
      min: false,
      max: false
    }
  }
};
*/