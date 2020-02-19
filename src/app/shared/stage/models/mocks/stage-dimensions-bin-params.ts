export const VALID = {
  value: 32.9,
  bin: 2,
  min: true,
  max: false
};

export const BAD_DATA: { [problem: string]: any } = {
  valueNotNumber: {
    value: 'xa0th9b81x',
    bin: 25,
    min: false,
    max: true
  },

  binNotNumber: {
    value: 88.590,
    bin: {val: 'd5ba7o6jpp'},
    min: true,
    max: false
  },
  
  binNotInteger: {
    value: 77.517,
    bin: 67.572,
    min: false,
    max: true
  },

  minNotBoolean: {
    value: 70.315,
    bin: 31,
    min: 0.081,
    max: true
  },

  maxNotBoolean: {
    value: 8.387,
    bin: 28,
    min: false,
    max: -10.280
  }
};
