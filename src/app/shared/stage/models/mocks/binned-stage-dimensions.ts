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

// TODO
export const SORTBLASTDESC_NAME_POS: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'NYs636V5O3',
    gameName: 'umoH6Dc0j4',
    blastzoneWidth: {
      value: 0,
      bin: 0,
      min: true,
      max: true
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
      max: true
    },
    ceilingHeight: {
      value: 0,
      bin: 0,
      min: true,
      max: true
    }
  },
  dimB: {
    name: 'iQ83UiGZo9',
    gameName: '634gwM2XGx',
    blastzoneWidth: {
      value: 0,
      bin: 0,
      min: true,
      max: true
    },
    stageLength: {
      value: 0,
      bin: 0,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 0,
      bin: 0,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 0,
      bin: 0,
      min: false,
      max: true
    }
  }
};

export const SORTBLASTDESC_NAME_NEG: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'GuSIQXQ5PG',
    gameName: 'SMwxZdLsUV',
    blastzoneWidth: {
      value: 31,
      bin: 61,
      min: true,
      max: false
    },
    stageLength: {
      value: 3,
      bin: 72,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 88,
      bin: 89,
      min: false,
      max: true
    },
    ceilingHeight: {
      value: 6,
      bin: 77,
      min: true,
      max: true
    }
  },
  dimB: {
    name: 'mp1JIuL6FB',
    gameName: 'KQYsWbQ8R9',
    blastzoneWidth: {
      value: 31,
      bin: 61,
      min: true,
      max: false
    },
    stageLength: {
      value: 77,
      bin: 96,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 32,
      bin: 13,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 95,
      bin: 1,
      min: false,
      max: true
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
      value: 9,
      bin: 75,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 95,
      bin: 30,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 50,
      bin: 93,
      min: false,
      max: false
    }
  },
  dimB: {
    name: 'nR0vEWS2Ag',
    gameName: 'KJTDVblQZX',
    blastzoneWidth: {
      value: 3,
      bin: 75,
      min: true,
      max: false
    },
    stageLength: {
      value: 1,
      bin: 32,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 1,
      bin: 86,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 16,
      bin: 52,
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

export const SORTSTAGELENGTHDESC_STAGELENGTH_POS: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'LmbEzKBTPw',
    gameName: 'RNRTUvXTB4',
    blastzoneWidth: {
      value: 65,
      bin: 47,
      min: true,
      max: false
    },
    stageLength: {
      value: 3,
      bin: 96,
      min: true,
      max: true
    },
    offStageDistance: {
      value: 68,
      bin: 31,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 81,
      bin: 26,
      min: true,
      max: true
    }
  },
  dimB: {
    name: 'FuGGdSmCj6',
    gameName: '8VLwMUYivs',
    blastzoneWidth: {
      value: 89,
      bin: 46,
      min: true,
      max: false
    },
    stageLength: {
      value: 69,
      bin: 72,
      min: true,
      max: true
    },
    offStageDistance: {
      value: 70,
      bin: 13,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 98,
      bin: 71,
      min: false,
      max: false
    }
  }
};

export const SORTSTAGELENGTHDESC_STAGELENGTH_NEG: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'FQXHKNbWln',
    gameName: 'TJnidIzqmf',
    blastzoneWidth: {
      value: 52,
      bin: 8,
      min: false,
      max: true
    },
    stageLength: {
      value: 55,
      bin: 13,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 6,
      bin: 58,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 63,
      bin: 68,
      min: true,
      max: false
    }
  },
  dimB: {
    name: 'DLLSbnSxyt',
    gameName: 'fY8wtX1faR',
    blastzoneWidth: {
      value: 37,
      bin: 81,
      min: false,
      max: false
    },
    stageLength: {
      value: 45,
      bin: 11,
      min: true,
      max: true
    },
    offStageDistance: {
      value: 24,
      bin: 70,
      min: false,
      max: true
    },
    ceilingHeight: {
      value: 96,
      bin: 83,
      min: false,
      max: true
    }
  }
};

export const SORTSTAGELENGTHDESC_NAME_POS: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'vLP2urnQNd',
    gameName: 'OuBrryYKxg',
    blastzoneWidth: {
      value: 89,
      bin: 10,
      min: false,
      max: false
    },
    stageLength: {
      value: 62,
      bin: 87,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 38,
      bin: 6,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 73,
      bin: 94,
      min: true,
      max: true
    }
  },
  dimB: {
    name: 'NYs636V5O3',
    gameName: 'Hjgusu7c16',
    blastzoneWidth: {
      value: 92,
      bin: 22,
      min: false,
      max: true
    },
    stageLength: {
      value: 62,
      bin: 87,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 58,
      bin: 5,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 23,
      bin: 78,
      min: false,
      max: false
    }
  }
};

export const SORTSTAGELENGTHDESC_NAME_NEG: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'ljDDKksqA6',
    gameName: 'SzBm8GXYJm',
    blastzoneWidth: {
      value: 32,
      bin: 52,
      min: true,
      max: true
    },
    stageLength: {
      value: 58,
      bin: 62,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 39,
      bin: 57,
      min: false,
      max: true
    },
    ceilingHeight: {
      value: 1,
      bin: 24,
      min: false,
      max: false
    }
  },
  dimB: {
    name: 'VNJFznxgXp',
    gameName: '29pE5kjRCa',
    blastzoneWidth: {
      value: 18,
      bin: 60,
      min: true,
      max: false
    },
    stageLength: {
      value: 58,
      bin: 62,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 19,
      bin: 36,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 72,
      bin: 47,
      min: false,
      max: false
    }
  }
};

export const SORTSTAGELENGTHDESC_EQUAL: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'pq3ZW2Kjpd',
    gameName: '3J41iiFAEE',
    blastzoneWidth: {
      value: 19,
      bin: 86,
      min: true,
      max: true
    },
    stageLength: {
      value: 75,
      bin: 17,
      min: true,
      max: false
    },
    offStageDistance: {
      value: 15,
      bin: 93,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 60,
      bin: 85,
      min: true,
      max: true
    }
  },
  dimB: {
    name: 'pq3ZW2Kjpd',
    gameName: 'a4i2reFyRe',
    blastzoneWidth: {
      value: 50,
      bin: 19,
      min: true,
      max: true
    },
    stageLength: {
      value: 75,
      bin: 17,
      min: true,
      max: false
    },
    offStageDistance: {
      value: 95,
      bin: 2,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 18,
      bin: 99,
      min: false,
      max: false
    }
  }
};

export const SORTSTAGELENGTHDESC_INVALID_A: { invalidDim: any, dimB: BinnedStageDimensions } = {
  invalidDim: 'bB6mF6uR1e',
  dimB: {
    name: 'AKNcF30cyY',
    gameName: 'w6PRRlC31R',
    blastzoneWidth: {
      value: 65,
      bin:   12,
      min: false,
      max: true
    },
    stageLength: {
      value: 90,
      bin:   6,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 59,
      bin:   45,
      min: false,
      max: true
    },
    ceilingHeight: {
      value: 12,
      bin:   11,
      min: false,
      max: false
    }
  }
};

export const SORTSTAGELENGTHDESC_INVALID_B: { dimA: BinnedStageDimensions, invalidDim: any } = {
  dimA: {
    name: 'bLhNqozZOV',
    gameName: '0CYVUJGWIf',
    blastzoneWidth: {
      value: 23,
      bin:   62,
      min: true,
      max: false
    },
    stageLength: {
      value: 51,
      bin:   60,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 70,
      bin:   98,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 67,
      bin:   91,
      min: false,
      max: true
    }
  },
  invalidDim: 14
};

export const SORTOFFSTAGEDESC_OFFSTAGE_POS: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'NE49gy4s71',
    gameName: 'vRAV7XRhgd',
    blastzoneWidth: {
      value: 82,
      bin:   11,
      min: false,
      max: true
    },
    stageLength: {
      value: 51,
      bin:   61,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 4,
      bin:   29,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 10,
      bin:   78,
      min: true,
      max: false
    }
  },
  dimB: {
    name: 'LNBoRB0TPN',
    gameName: 'TQZyCAbFhx',
    blastzoneWidth: {
      value: 84,
      bin:   89,
      min: false,
      max: false
    },
    stageLength: {
      value: 40,
      bin:   66,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 88,
      bin:   80,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 28,
      bin:   95,
      min: true,
      max: true
    }
  }
};

export const SORTOFFSTAGEDESC_OFFSTAGE_NEG: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'hhqv6ZLyPI',
    gameName: 'XKSjVcFOjc',
    blastzoneWidth: {
      value: 58,
      bin:   53,
      min: false,
      max: false
    },
    stageLength: {
      value: 7,
      bin:   88,
      min: true,
      max: true
    },
    offStageDistance: {
      value: 58,
      bin:   9,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 13,
      bin:   66,
      min: true,
      max: false
    }
  },
  dimB: {
    name: 'If7jvXL6jg',
    gameName: 'O2PySdkvEb',
    blastzoneWidth: {
      value: 77,
      bin:   3,
      min: false,
      max: false
    },
    stageLength: {
      value: 25,
      bin:   2,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 37,
      bin:   74,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 82,
      bin:   15,
      min: true,
      max: true
    }
  }
};

export const SORTOFFSTAGEDESC_NAME_POS: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'zHOWTYGMI7',
    gameName: 'ZeNjieGUZf',
    blastzoneWidth: {
      value: 69,
      bin:   81,
      min: true,
      max: false
    },
    stageLength: {
      value: 99,
      bin:   5,
      min: true,
      max: false
    },
    offStageDistance: {
      value: 64,
      bin:   47,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 8,
      bin:   94,
      min: true,
      max: false
    }
  },
  dimB: {
    name: 'xy4Dd5KVJf',
    gameName: 'DgYB3PvA80',
    blastzoneWidth: {
      value: 37,
      bin:   93,
      min: true,
      max: false
    },
    stageLength: {
      value: 56,
      bin:   85,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 64,
      bin:   47,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 64,
      bin:   37,
      min: true,
      max: false
    }
  }
};

export const SORTOFFSTAGEDESC_NAME_NEG: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'LaPEWXqOGN',
    gameName: 'UlWzIEG3Lt',
    blastzoneWidth: {
      value: 67,
      bin:   55,
      min: false,
      max: true
    },
    stageLength: {
      value: 64,
      bin:   100,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 94,
      bin:   37,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 17,
      bin:   39,
      min: true,
      max: false
    }
  },
  dimB: {
    name: 'TS0oGDBpMi',
    gameName: 'oOfkHBJMp0',
    blastzoneWidth: {
      value: 35,
      bin:   99,
      min: false,
      max: false
    },
    stageLength: {
      value: 68,
      bin:   73,
      min: true,
      max: false
    },
    offStageDistance: {
      value: 94,
      bin:   37,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 81,
      bin:   32,
      min: false,
      max: false
    }
  }
};

export const SORTOFFSTAGEDESC_EQUAL: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'isxGejmnKl',
    gameName: 'oYjaOu5fHN',
    blastzoneWidth: {
      value: 83,
      bin:   28,
      min: true,
      max: true
    },
    stageLength: {
      value: 64,
      bin:   63,
      min: true,
      max: true
    },
    offStageDistance: {
      value: 36,
      bin:   14,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 20,
      bin:   7,
      min: false,
      max: true
    }
  },
  dimB: {
    name: 'isxGejmnKl',
    gameName: 'mTSEv949Cn',
    blastzoneWidth: {
      value: 24,
      bin:   13,
      min: false,
      max: true
    },
    stageLength: {
      value: 12,
      bin:   91,
      min: true,
      max: true
    },
    offStageDistance: {
      value: 36,
      bin:   14,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 10,
      bin:   95,
      min: false,
      max: false
    }
  }
};

export const SORTOFFSTAGEDESC_INVALID_A: { invalidDim: any, dimB: BinnedStageDimensions } = {
  invalidDim: 'FW4skHt4Ss',
  dimB: {
    name: 'FrsQf5EdaZ',
    gameName: 'qel5DoF2Fx',
    blastzoneWidth: {
      value: 12,
      bin:   44,
      min: true,
      max: true
    },
    stageLength: {
      value: 17,
      bin:   84,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 46,
      bin:   83,
      min: true,
      max: false
    },
    ceilingHeight: {
      value: 88,
      bin:   19,
      min: false,
      max: false
    }
  }
};

export const SORTOFFSTAGEDESC_INVALID_B: { dimA: BinnedStageDimensions, invalidDim: any } = {
  dimA: {
    name: 'weXJ0m8muZ',
    gameName: 'O90ugrFcdv',
    blastzoneWidth: {
      value: 49,
      bin:   30,
      min: true,
      max: false
    },
    stageLength: {
      value: 92,
      bin:   67,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 19,
      bin:   73,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 38,
      bin:   49,
      min: true,
      max: false
    }
  },
  invalidDim: false
};

export const SORTCEILINGDESC_CEILING_POS: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'lIfmLOkfYX',
    gameName: 'hF2G1nHQnn',
    blastzoneWidth: {
      value: 71,
      bin:   71,
      min: true,
      max: false
    },
    stageLength: {
      value: 74,
      bin:   92,
      min: true,
      max: true
    },
    offStageDistance: {
      value: 27,
      bin:   46,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 75,
      bin:   99,
      min: true,
      max: true
    }
  },
  dimB: {
    name: 'sdjrL3R334',
    gameName: 'g4KfDJatTZ',
    blastzoneWidth: {
      value: 71,
      bin:   35,
      min: false,
      max: true
    },
    stageLength: {
      value: 21,
      bin:   80,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 2,
      bin:   79,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 87,
      bin:   33,
      min: true,
      max: true
    }
  }
};

export const SORTCEILINGDESC_CEILING_NEG: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'mGqMkSaFcy',
    gameName: 'GES5Ec6ke6',
    blastzoneWidth: {
      value: 32,
      bin:   33,
      min: false,
      max: false
    },
    stageLength: {
      value: 58,
      bin:   83,
      min: true,
      max: true
    },
    offStageDistance: {
      value: 73,
      bin:   82,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 34,
      bin:   68,
      min: true,
      max: true
    }
  },
  dimB: {
    name: 'tojYXWYf8b',
    gameName: 'HXlENYkCdI',
    blastzoneWidth: {
      value: 81,
      bin:   13,
      min: false,
      max: false
    },
    stageLength: {
      value: 90,
      bin:   50,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 40,
      bin:   31,
      min: false,
      max: true
    },
    ceilingHeight: {
      value: 21,
      bin:   89,
      min: true,
      max: true
    }
  }
};

export const SORTCEILINGDESC_NAME_POS: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'pGc0eIuOJz',
    gameName: 'wQdfagpDWh',
    blastzoneWidth: {
      value: 48,
      bin:   70,
      min: false,
      max: true
    },
    stageLength: {
      value: 19,
      bin:   14,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 93,
      bin:   3,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 14,
      bin:   29,
      min: true,
      max: true
    }
  },
  dimB: {
    name: 'eb85YCwvJd',
    gameName: 'BNSg9afkjJ',
    blastzoneWidth: {
      value: 9,
      bin:   41,
      min: true,
      max: true
    },
    stageLength: {
      value: 7,
      bin:   32,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 26,
      bin:   52,
      min: false,
      max: true
    },
    ceilingHeight: {
      value: 14,
      bin:   29,
      min: true,
      max: true
    }
  }
};

export const SORTCEILINGDESC_NAME_NEG: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'c2L6Cvkxma',
    gameName: 'pCh8rRIQKG',
    blastzoneWidth: {
      value: 55,
      bin:   80,
      min: true,
      max: true
    },
    stageLength: {
      value: 20,
      bin:   98,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 62,
      bin:   57,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 12,
      bin:   37,
      min: false,
      max: true
    }
  },
  dimB: {
    name: 'OyLpvlRSiy',
    gameName: 'ySp1MCRPCW',
    blastzoneWidth: {
      value: 72,
      bin:   36,
      min: true,
      max: true
    },
    stageLength: {
      value: 68,
      bin:   99,
      min: true,
      max: true
    },
    offStageDistance: {
      value: 96,
      bin:   74,
      min: false,
      max: true
    },
    ceilingHeight: {
      value: 12,
      bin:   37,
      min: false,
      max: true
    }
  }
};

export const SORTCEILINGDESC_EQUAL: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: 'wDts8fUKD4',
    gameName: 'CfvpGjfY7W',
    blastzoneWidth: {
      value: 59,
      bin:   78,
      min: true,
      max: false
    },
    stageLength: {
      value: 83,
      bin:   38,
      min: false,
      max: true
    },
    offStageDistance: {
      value: 27,
      bin:   32,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 92,
      bin:   80,
      min: false,
      max: true
    }
  },
  dimB: {
    name: 'wDts8fUKD4',
    gameName: 'lWiuB5QZL5',
    blastzoneWidth: {
      value: 51,
      bin:   6,
      min: true,
      max: true
    },
    stageLength: {
      value: 95,
      bin:   81,
      min: true,
      max: true
    },
    offStageDistance: {
      value: 99,
      bin:   47,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 92,
      bin:   80,
      min: false,
      max: true
    }
  }
};

export const SORTCEILINGDESC_INVALID_A: { invalidDim: any, dimB: BinnedStageDimensions } = {
  invalidDim: {
    att: [30, 9],
    bet: [-17, 34, 5938]
  },
  dimB: {
    name: 'qk8znJKZmn',
    gameName: 'ncmchRwD0A',
    blastzoneWidth: {
      value: 69,
      bin:   56,
      min: true,
      max: false
    },
    stageLength: {
      value: 79,
      bin:   52,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 85,
      bin:   48,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 59,
      bin:   92,
      min: false,
      max: true
    }
  }
};

export const SORTCEILINGDESC_INVALID_B: { dimA: BinnedStageDimensions, invalidDim: any } = {
  dimA: {
    name: 'WwwtT0CpIa',
    gameName: 'UkMeJD6HoO',
    blastzoneWidth: {
      value: 23,
      bin:   94,
      min: true,
      max: false
    },
    stageLength: {
      value: 27,
      bin:   50,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 28,
      bin:   4,
      min: true,
      max: true
    },
    ceilingHeight: {
      value: 88,
      bin:   74,
      min: true,
      max: true
    }
  },
  invalidDim: 39
};

/*

export const SORTCEILINGDESC_DIM_VAL: { [name: string]: BinnedStageDimensions } = {
  dimA: {
    name: '',
    gameName: '',
    blastzoneWidth: {
      value: 0,
      bin:   0,
      min: false,
      max: false
    },
    stageLength: {
      value: 0,
      bin:   0,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 0,
      bin:   0,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 0,
      bin:   0,
      min: false,
      max: false
    }
  },
  dimB: {
    name: '',
    gameName: '',
    blastzoneWidth: {
      value: 0,
      bin:   0,
      min: false,
      max: false
    },
    stageLength: {
      value: 0,
      bin:   0,
      min: false,
      max: false
    },
    offStageDistance: {
      value: 0,
      bin:   0,
      min: false,
      max: false
    },
    ceilingHeight: {
      value: 0,
      bin:   0,
      min: false,
      max: false
    }
  }
};
*/