import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { StagePieceMap } from '../models/stage-piece-map.model';

import { StagePieceMapConstService } from './stage-piece-map-const.service';
import { StagePieceMapHttpService } from './stage-piece-map-http.service';

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

  constructor(
    private spmcs: StagePieceMapConstService,
    private spmhs: StagePieceMapHttpService,
  ) { }

  getMaps(mapSetName: string): Observable<StagePieceMap[]> {
    return this.spmhs.getMaps(mapSetName).pipe(
      catchError(_ => this.spmcs.getMaps(mapSetName))
    );
  }

}
