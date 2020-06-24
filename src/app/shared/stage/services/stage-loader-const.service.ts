import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataNotFoundError } from '../../errors/data-not-found-error.model';

import { Stage } from '../models/stage.model';

import { StageLoaderSubService } from './stage-loader-sub.service';

import { SAVED_STAGES } from '../models/data/stages';

/**
 * Service class providing Super Smash Bros. Ultimate stage data from a hard-coded constant
 *
 * @export
 * @class StageLoaderConstService
 */
@Injectable({
  providedIn: 'root'
})
export class StageLoaderConstService implements StageLoaderSubService {

  constructor() { }

  /**
   * Fetch stage data from the constant
   *
   * @param {string} filter option for including or excluding stages
   * @param {string[]} filterList list of stages to filter
   * @returns {Observable<Stage[]>}
   * @memberof StageLoaderHttpService
   */
  loadStages(filter?: string, filterList?: string[]): Observable<Stage[]> {
    return new Observable<Stage[]>(observer => {
      if (SAVED_STAGES.length === 0) {
        observer.error(new DataNotFoundError());
      }
      else {
        observer.next(SAVED_STAGES);
      }
      observer.complete();
    });
  }
}
