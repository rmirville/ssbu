import { environment } from 'src/environments/environment';

const IDX = environment.apiHost;
const STAGE_IDX = IDX + '/stages';
const STAGE_CLASS_SET_IDX = STAGE_IDX + '/classification-sets';

export abstract class SsbuApiUrls {
  static readonly home: string = IDX;
  static readonly stages: string = STAGE_IDX;
  static readonly stageClassificationSets: string = STAGE_CLASS_SET_IDX;
}
