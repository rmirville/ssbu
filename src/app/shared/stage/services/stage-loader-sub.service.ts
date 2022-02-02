import { Observable } from 'rxjs';

import { Stage } from '../models/stage.model';

/**
 * Service class for providing Super Smash Bros. Ultimate stage data
 *
 * @export
 * @abstract
 * @class StageLoaderSubService
 */
export abstract class StageLoaderSubService {
  /**
   * Fetch stage data
   *
   * @param {string} filter option for including or excluding stages
   * @param {string[]} filterList list of stages to filter
   * @returns {Observable<Stage[]>}
   * @memberof StageLoaderSubService
   */
  abstract loadStages(filter?: string, filterList?: string[]): Observable<Stage[]>;
}
