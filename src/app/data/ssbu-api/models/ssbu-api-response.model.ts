import { Dictionary } from 'src/app/shared/models';
import { StageClassifications } from 'src/app/shared/stage/models/stage-classifications.model';
import { StagePieceMap } from '../../../shared/stage/models/stage-piece-map.model';

export interface SsbuApiResponse {
  _links: Dictionary<string>;
  [name: string]: any;
}


export interface SsbuApiStagePieceMapResponse extends SsbuApiResponse {
  maps?: StagePieceMap[];
}

export interface SsbuApiStageClassificationsSetResponse extends SsbuApiResponse {
  classifications?: Dictionary<StageClassifications>;
}
