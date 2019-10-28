export const VALID = {
  lvd: 'somestring',
  pieceName: 'anotherstring'
};

export const BAD_DATA = {
  lvdNotString: {
    lvd: 135,
    pieceName: 'anotherString'
  },
  
  pieceNameNotString: {
    lvd: 'forty',
    pieceName: false
  }
};
