export const VALID = {
  min: 38,
  max: 93,
  range: 20
};

export const BAD_DATA = {
  minNotNumber: {
    min: 'forty-three',
    max: 75,
    range: 20
  },
  
  maxNotNumber: {
    min: 43,
    max: 'seventy-five',
    range: 20
  },

  rangeNotNumber: {
    min: 43,
    max: 75,
    range: 'twenty'
  },

  rangeNegative: {
    min: 43,
    max: 75,
    range: -32
  },

  minGreaterThanMax: {
    min: 25,
    max: -35
  }
};
