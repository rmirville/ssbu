export const VALID =
{
  "name": "CnL0PPAjot",
  "gameName": "LJO1ZrUPAd",
  "Type": 0
};

export const BAD_DATA: { [problem: string]: any } = {
  "nameNotString": {
    "name": false,
    "gameName": "UmfcCnl7z6",
    "Type": 6
  },
  "gameNameNotString": {
    "name": "HAOukoVUm1",
    "gameName": { property: -9 },
    "Type": -41
  },
  "typeNotNumber": {
    "name": "PMFvtrrXA6",
    "gameName": "BZmaspmi4v",
    "Type": "a7jB15RRjc"
  }
};

export const VALID_ARRAY = [
  {
    "name": "jdiCsl6iiK",
    "gameName": "9oBLi9frKC",
    "Type": 31
  },
  {
    "name": "ntRztyr8H4",
    "gameName": "ab2GQzOtgD",
    "Type": 85
  }
];

export const BAD_DATA_ARRAY: { [problem: string]: any } = {
  "notArray": {
    "name": "CJ172sPiEg",
    "gameName": "TkDazAcvra",
    "Type": 82
  }
};
