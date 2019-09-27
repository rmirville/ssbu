import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StageSummary, isStageSummary } from '../../../shared/models/stage/stage-summary.model';
import { StageDetails, isStageDetails } from '../../../shared/models/stage/stage-details.model';
import { Stage } from '../../../shared/models/stage/stage.model';

const API_URL = 'https://rubendal.github.io/ssbu/data/patch/3.1.0';
const API_STAGE_LIST_PATH = '/stages.json';
const API_STAGE_DETAILS_PATH = '/data.json';
const API_STAGE_DETAILS_PREFIX = '/stages/';

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
   * @param {string[]} exclusions the names of stages to omit from returned data
   * @returns {Observable<Stage[]>}
   * @memberof StageLoaderService
   */
  loadStages(exclusions: string[] = []): Observable<Stage[]> {
    /**/
    // console.log('  StageLoaderService::loadStages()');

    // validate exclusions
    if ( (!Array.isArray(exclusions))
      || (!exclusions.forEach)
    ) { throw new TypeError('The excluded stages were not an array.'); }

    exclusions.forEach((exclusion) => {
      if (typeof exclusion !== 'string') {
        throw new TypeError('The excluded stages were not strings.');
      }
    });
    const stages$: Observable<Stage[]> = new Observable((observer) => {

      const stages: Stage[] = [];

      const { next, error } = observer;

      // get stage summary data
      const stagesHttp$: Observable<StageSummary[]> = this.http.get<StageSummary[]>(API_URL + API_STAGE_LIST_PATH);
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
        const stage$: Observable<Stage> = this._getStageDetails(summaries, exclusions);
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
   * @returns {Observable<Stage>}
   * @memberof StageLoaderService
   */
  _getStageDetails(summaries: StageSummary[], exclusions: string[]): Observable<Stage> {
    /**/
    // console.log('  StageLoaderService::_getStageDetails()');
    /**/
    // console.log(`    * summaries passed in: ${JSON.stringify(summaries)}`);
    const details$ = new Observable<Stage>((observer) => {
      /**/
      // console.log('    * details$ executing');
      const stages: Stage[] = [];

      /**/
      // console.log(`    * summaries isArray: ${Array.isArray(summaries)}`);
      if (!Array.isArray(summaries)) {
        throw new TypeError('The stage summary data fetched was not an array');
      }
      /**/
      // console.log(`      + summaries.length: ${summaries.length}`);
      // for each summary in summaries
      for (let i = 0; i < summaries.length; i++) {
        /**/
        // console.log(`      + index [${i}]:`);
        /**/
        // console.log(`      + details$ - summary: ${JSON.stringify(summaries[i])}`);
        /**/
        // console.log('      + checking summary type');
        let exclude = false;

        if (!isStageSummary(summaries[i])) {
          /**/
          // console.log('        = throwing TypeError');
          throw new TypeError('The stage summary data fetched was not of type StageSummary[]');
        }
        for (let j = 0; j < exclusions.length; j++) {
          if (summaries[i].name === exclusions[j]) {
            summaries.splice(i, 1);
            i--;
            exclude = true;
            break;
          }
        }
        if (!exclude) {
          const url = API_URL + API_STAGE_DETAILS_PREFIX + summaries[i].name + API_STAGE_DETAILS_PATH;

          /**/
          // console.log(`      + retrieving details from url: ${url}`);
          // retrieve json
          const stageDetailsHttp$ = this.http.get<StageDetails[]>(url);
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
              observer.error(new TypeError(`The ${summaries[i].name} stage details data fetched was not an array`));
              return;
            }
            details.forEach((phase) => {
              if (!isStageDetails(phase)) {
                /**/
                // console.log('      + throwing property TypeError');
                observer.error(new TypeError(`The ${summaries[i].name} stage details data fetched was not of type StageDetails[]`));
                return;
              }
            });
            stages[i] = {
              name: summaries[i].name,
              gameName: summaries[i].gameName,
              Type: summaries[i].Type,
              details
            };
            observer.next(stages[i]);
            if (i === summaries.length - 1) {
              observer.complete();
            }
          });
        }
      }

    });

    return details$;
  }
}
