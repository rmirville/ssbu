import { StagePieceMap } from '../stage-piece-map.model';


export const GETMAPS: { mapName: string, maps: StagePieceMap[] } = {
  mapName: 'learnedSulky',
  maps: [
    {
      lvd: "retrievalChief",
      pieceName: "rancidityOutwar"
    },
    {
      lvd: "seniorMug",
      pieceName: "spoilerIsolating"
    },
    {
      lvd: "maritalBasically",
      pieceName: "overblownFineness"
    },
  ],
};

export const HTTP_SVC_ONLY: { mapName: string, maps: StagePieceMap[] } = {
  mapName: 'guiltlessAbundant',
  maps: [
    {
      lvd: 'pegboardHull',
      pieceName: 'rakeLinguist',
    },
    {
      lvd: 'dormitoryGrafted',
      pieceName: 'trippingCelestial',
    },
    {
      lvd: 'antsyHuff',
      pieceName: 'riotFacelift',
    },
  ], 
};

export const HTTP_SVC_FAIL: { mapName: string, maps: StagePieceMap[] } = {
  mapName: 'robustCrowded',
  maps: [
    {
      lvd: 'bullfightEncrypt',
      pieceName: 'overhearTactful',
    },
    {
      lvd: 'collideExclusive',
      pieceName: 'geraniumResidence',
    },
    {
      lvd: 'playtimeThicket',
      pieceName: 'viscosityFlatness',
    },
    {
      lvd: 'blimpPalpitate',
      pieceName: 'glutenHeadlock',
    },
  ], 
};
