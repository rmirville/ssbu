import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { StagePieceMap } from '../models/stage-piece-map.model';

import { StagePieceMapConstService } from './stage-piece-map-const.service';

/**
 * Service class providing StagePiece selection data for each Stage
 *
 * @export
 * @class StagePieceMapService
 */
@Injectable({
  providedIn: 'root'
})
export class StagePieceMapService {

  constructor(private spmcs: StagePieceMapConstService) { }

  getMaps(mapSetName: string): Observable<StagePieceMap[]> {
    return this.spmcs.getMaps(mapSetName);
  }

}
