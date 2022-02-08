import { Dictionary } from 'src/app/shared/models';
import { StagePieceMap } from '../../../shared/stage/models/stage-piece-map.model';

export interface SsbuApiResponse {
  _links: Dictionary<string>;
  [name: string]: any;
}


export interface SsbuApiStagePieceMapResponse extends SsbuApiResponse {
  maps?: StagePieceMap[];
}
