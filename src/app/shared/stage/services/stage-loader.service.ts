import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Stage } from '../models/stage.model';

import { StageLoaderConstService } from './stage-loader-const.service';
import { StageLoaderHttpService } from './stage-loader-http.service';

/**
 * Service class managing subservices that providing Super Smash Bros. Ultimate stage data
 *
 * @export
 * @class StageLoaderHttpService
 */
@Injectable({
  providedIn: 'root'
})
export class StageLoaderService {

  constructor(private slcs: StageLoaderConstService, private slhs: StageLoaderHttpService) { }

  /**
   * Fetch stage data from the API
   *
   * @param {string} filter option for including or excluding stages
   * @param {string[]} filterList list of stages to filter
   * @returns {Observable<Stage[]>}
   * @memberof StageLoaderHttpService
   */
  loadStages(filter?: string, filterList?: string[]): Observable<Stage[]> {
    let filterParams: [string, string[]] = [undefined, undefined];

    // data validation
    if (filter !== undefined) {
      if (typeof filter !== 'string') {
        throw new TypeError('The filter argument was not a string.');
      }
      if ((!Array.isArray(filterList))
        || (!filterList.forEach)
      ) { throw new TypeError('The list of stages to filter was not a string array.'); }
  
      filterList.forEach((filterItem) => {
        if (typeof filterItem !== 'string') {
          throw new TypeError('The list of stages to filter was not a string array.');
        }
      });
      filterParams = [filter, filterList];
    }

    return this.slcs.loadStages(...filterParams).pipe(
      catchError(() => {
        return this.slhs.loadStages(...filterParams);
      })
    );
  }
}
