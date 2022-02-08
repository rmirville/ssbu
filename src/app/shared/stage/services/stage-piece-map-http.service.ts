import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { StagePieceMapSubService } from './stage-piece-map-sub.service';
import { StagePieceMap } from '../models/stage-piece-map.model';
import { DataNotFoundError } from '../../errors/data-not-found-error.model';
import { EmptyArgumentError } from '../../errors/empty-argument-error.model';
import { Dictionary } from '../../models';
import { httpRetryBackoff } from '../../utility/rxjs-operators';
import { SsbuApiUrls } from '../../../data/ssbu-api/constants/urls';
import { SsbuApiStagePieceMapResponse } from '../../../data/ssbu-api/models';

const ENDPOINT: string = SsbuApiUrls.stages + '/piece-maps';

/**
 * Service class providing StagePiece selection data for each Stage
 *
 * @export
 * @class StagePieceMapHttpService
 */
@Injectable({
  providedIn: 'root'
})
export class StagePieceMapHttpService extends StagePieceMapSubService {

  mapSets: Dictionary<StagePieceMap[]> = {};

  /**
   * Creates an instance of StagePieceMapHttpService.
   *
   * @param {HttpClient} http the HTTP service used to fetch data
   * @memberof StageLoaderHttpService
   */
  constructor(private http: HttpClient) {
    super();
  }

  getMaps(mapSetName: string): Observable<StagePieceMap[]> {
    if (typeof mapSetName !== 'string') {
      throw new TypeError();
    }
    if (mapSetName.trim().length === 0) {
      throw new EmptyArgumentError();
    }
    const id: string = this._getEndpointId(mapSetName);
    const url: string = ENDPOINT + '/' + id;
    const response$: Observable<StagePieceMap[]> = this.http.get<SsbuApiStagePieceMapResponse>(url).pipe(
      httpRetryBackoff(),
      catchError(err => {
        return from([new DataNotFoundError()]);
      }),
      map((res: SsbuApiStagePieceMapResponse) => {
        if (res.maps) {
          return res.maps;
        }
        else throw new DataNotFoundError();
      }),
    );
    return response$;
  }

  private _getEndpointId(mapSetName: string): string {
    const wordRgx: RegExp = /(([a-z]+)|([A-Z][a-z0-9]+))/;
    const replaceRgx: string = "\$&-";
    let id: string = mapSetName.replace(wordRgx, replaceRgx).toLowerCase();
    if (id[id.length - 1] === '-') id.slice(0,-1);
    return id;
  }

}
