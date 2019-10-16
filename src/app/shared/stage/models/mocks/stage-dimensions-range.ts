export const VALID = {
  min: 38,
  max: 93
};

export const BAD_DATA = {
  minNotNumber: {
    min: 'forty-three',
    max: 75
  },
  
  maxNotNumber: {
    min: 43,
    max: 'seventy-five'
  },

  minGreaterThanMax: {
    min: 25,
    max: -35
  }
};
