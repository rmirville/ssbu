const IDX = 'https://api.ssbutools.com/v1';
const STAGE_IDX = IDX + '/stages';

export abstract class SsbuApiUrls {
  static readonly home: string = IDX;
  static readonly stages: string = STAGE_IDX;
}
