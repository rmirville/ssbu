import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { httpRetryBackoff } from '../../rxjs-operators/http-retry-backoff';

import { StageSummary, isStageSummary } from '../models/stage-summary.model';
import { StageDetails, isStageDetails } from '../models/stage-details.model';
import { Stage } from '../models/stage.model';

const API_URL = 'https://rubendal.github.io/ssbu/data/patch/4.0.0';
const API_STAGE_LIST_PATH = '/stages.json';
const API_STAGE_DETAILS_PATH = '/data.json';
const API_STAGE_DETAILS_PREFIX = '/stage/';

/**
 * Service class providing all Super Smash Bros. Ultimate stage data from Rubendal's API
 *
 * @export
 * @class StageLoaderService
 */
@Injectable({
  providedIn: 'root'
})
export class StageLoaderService {

  /**
   * Creates an instance of StageLoaderService.
   *
   * @param {HttpClient} http the HTTP service used to fetch data
   * @memberof StageLoaderService
   */
  constructor( private http: HttpClient ) {
  }

  /**
   * Fetch stage data from the API
   *
   * @param {string} filter option for including or excluding stages
   * @param {string[]} filterList list of stages to filter
   * @returns {Observable<Stage[]>}
   * @memberof StageLoaderService
   */
  loadStages(filter?: string, filterList?: string[]): Observable<Stage[]> {
    /**/
    // console.log('  StageLoaderService::loadStages()');
    let hasFilter: boolean = false;
    // validate exclusions
    if (filter == 'exclude' || filter == 'include') {
      if ((!Array.isArray(filterList))
        || (!filterList.forEach)
      ) { throw new TypeError('The list of stages to filter was not an array.'); }

      filterList.forEach((filterItem) => {
        if (typeof filterItem !== 'string') {
          throw new TypeError('The list of stages to filter did not contain strings.');
        }
      });
      hasFilter = true;
    }
    const stages$: Observable<Stage[]> = new Observable((observer) => {

      const stages: Stage[] = [];

      const { next, error } = observer;

      // get stage summary data
      const stagesHttp$: Observable<StageSummary[]> = this.http.get<StageSummary[]>(API_URL + API_STAGE_LIST_PATH).pipe(httpRetryBackoff());
      /**/
      // console.log(`    * created stagesHttp$: ${stagesHttp$}`);

      stagesHttp$.subscribe((summaries) => {
        /**/
        // console.log(`    * stagesHttp$ emitted: ${JSON.stringify(summaries)}`);
        /**/
        // console.log('    * stagesHttp$ emitted');
        /**/
        // console.log(`stages: ${JSON.stringify(stages)}`);

        // subscribe to _getStageDetails, providing summaries
        let stage$: Observable<Stage>;
        if (hasFilter) {
          stage$ = this._getStageDetails(summaries, filter, filterList);
        } else {
          stage$ = this._getStageDetails(summaries);
        }
        stage$.subscribe({
          next(stage) {
            /**/
            // console.log(`      + stagesHttp$.subscribe - stage$ emitted: ${JSON.stringify(stage)}`);
            /**/
            // console.log('      + stagesHttp$.subscribe - stage$ emitted');
            stages.push(stage);
          },

          error(e) {
            /**/
            // console.log('      + stagesHttp$.subscribe - error occurred');
            observer.error(e);
          },
          complete() {
            /**/
            // console.log('      + stagesHttp$.subscribe - stage$ complete');
            observer.next(stages);
            observer.complete();
          }
        });
      });
      /**/
      // console.log('    * subscribed to stagesHttp$');
    });

    /**/
    // console.log('    * returning stages$');
    return stages$;
  }

  /**
   * Fetches stage dimension data for provided stages
   *
   * @param {StageSummary[]} summaries the summary stage data
   * @param {string} filter the type of filter to use in fetching data
   * @param {string[]} filterList the list of stages to filter
   * @returns {Observable<Stage>}
   * @memberof StageLoaderService
   */
  _getStageDetails(summaries: StageSummary[], filter?: string, filterList?: string[]): Observable<Stage> {
    /**/
    // console.log('  StageLoaderService::_getStageDetails()');
    /**/
    // console.log(`    * summaries passed in: ${JSON.stringify(summaries)}`);
    const details$ = new Observable<Stage>((observer) => {
      /**/
      // console.log('    * details$ executing');
      const stages: Stage[] = [];
      let filteredSummaries: StageSummary[];

      /**/
      // console.log(`    * summaries isArray: ${Array.isArray(summaries)}`);
      if (!Array.isArray(summaries)) {
        throw new TypeError('The stage summary data fetched was not an array');
      }

      /**/
      /*if (filter) {
        // console.log(`    * unfiltered summaries: ${JSON.stringify(summaries)}`);
        // console.log(`    * filterList: ${JSON.stringify(filterList)}`);
        // console.log(`    * filter type: ${filter}`);
      }*/

      if (filter == 'exclude') {
        filteredSummaries = summaries.filter( (summary) => {
          return !filterList.find((filterItem) => filterItem.split('00')[0] == summary.gameName );
        });
      }

      else if (filter == 'include') {
        filteredSummaries = summaries.filter( (summary) => {
          return filterList.find((filterItem) => filterItem.split('00')[0] == summary.gameName );
        });
      }

      else {
        filteredSummaries = summaries;
      }
      /**/
      // console.log(`    * filtered summaries: ${JSON.stringify(filteredSummaries)}`);

      /**/
      // console.log(`      + summaries.length: ${summaries.length}`);
      // for each summary in summaries
      for (let i = 0; i < filteredSummaries.length; i++) {
        /**/
        // console.log(`      + index [${i}]:`);
        /**/
        // console.log(`      + details$ - summary: ${JSON.stringify(summaries[i])}`);
        /**/
        // console.log('      + checking summary type');

        if (!isStageSummary(filteredSummaries[i])) {
          /**/
          // console.log('        = throwing TypeError');
          throw new TypeError('The stage summary data fetched was not of type StageSummary[]');
        }

        const url = API_URL + API_STAGE_DETAILS_PREFIX + filteredSummaries[i].name + API_STAGE_DETAILS_PATH;

        /**/
        // console.log(`      + retrieving details from url: ${url}`);
        // retrieve json
        const stageDetailsHttp$ = this.http.get<StageDetails[]>(url).pipe(httpRetryBackoff());
        /**/
        // console.log('      + stageDetailsHttp$: ' + stageDetailsHttp$);
        stageDetailsHttp$.subscribe((details) => {
          /**/
          // console.log(`      + details$ - retrieved details: ${JSON.stringify(details)}`);
          /**/
          // console.log('      + details$ - retrieved details');
          if (!Array.isArray(details)) {
            /**/
            // console.log('      + throwing array TypeError');
            observer.error(new TypeError(`The ${filteredSummaries[i].name} stage details data fetched was not an array`));
            return;
          }
          details.forEach((phase) => {
            if (!isStageDetails(phase)) {
              /**/
              // console.log('      + throwing property TypeError');
              observer.error(new TypeError(`The ${filteredSummaries[i].name} stage details data fetched was not of type StageDetails[]`));
              return;
            }
          });
          stages[i] = {
            name: filteredSummaries[i].name,
            gameName: filteredSummaries[i].gameName,
            Type: filteredSummaries[i].Type,
            details
          };
          observer.next(stages[i]);
          if (i == filteredSummaries.length - 1) { observer.complete(); }
        });
      }
      //observer.complete();

    });

    return details$;
  }
}
