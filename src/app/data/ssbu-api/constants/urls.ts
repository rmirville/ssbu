const IDX = 'https://api.ssbutools.com/v1';
const STAGE_IDX = IDX + '/stages';
const STAGE_CLASS_SET_IDX = STAGE_IDX + '/classification-sets';

export abstract class SsbuApiUrls {
  static readonly home: string = IDX;
  static readonly stages: string = STAGE_IDX;
  static readonly stageClassificationSets: string = STAGE_CLASS_SET_IDX;
}
