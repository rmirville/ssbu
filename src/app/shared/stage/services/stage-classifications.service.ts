import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, ReplaySubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SsbuApiUrls } from 'src/app/data/ssbu-api/constants/urls';
import { classificationsSet } from 'src/app/data/constants/stage-classifications';
import { SsbuApiStageClassificationsSetResponse } from 'src/app/data/ssbu-api/models';
import { DataNotFoundError } from '../../errors/data-not-found-error.model';
import { Dictionary } from '../../models';
import { httpRetryBackoff } from '../../utility/rxjs-operators';
import { StageClassifications } from '../models/stage-classifications.model';
import { StageInfo } from '../models/stage-info.model';

/**
 * Service class providing stage categorical data
 *
 * @export
 * @class StageClassificationsService
 */
@Injectable({
  providedIn: 'root'
})
export class StageClassificationsService {
  private classificationsSet$: ReplaySubject<Dictionary<StageClassifications>> = new ReplaySubject<Dictionary<StageClassifications>>(1);

  constructor(
    private http: HttpClient,
  ) {
    const set$: Observable<SsbuApiStageClassificationsSetResponse> = this.http.get<SsbuApiStageClassificationsSetResponse>(SsbuApiUrls.stageClassificationSets + '/all');
    set$.pipe(httpRetryBackoff()).pipe(
      catchError(err => {
        return from([{classifications: classificationsSet}]);
      }),
    ).subscribe(
      (resp: SsbuApiStageClassificationsSetResponse) => {
        this.classificationsSet$.next(resp.classifications);
      }
    );
  }

  /**
   * Binds loaded StageClassifications to an array
   *
   * @param {StageInfo[]} stages the array of stages to classify
   * @returns {Observable<StageClassifications[]>}
   * @memberof StageClassificationsService
   */
  classifyStages(stages: StageInfo[]): Observable<StageClassifications[]> {
    /**/
    // console.log('StageClassificationsService::classifyStages()')
    // console.log(`  * stages: ${JSON.stringify(stages)}`);

    if ( !Array.isArray(stages) ) {
      throw new TypeError('The list of stages to classify was not an array.');
    }

    let containsObjects: boolean = true;
    let containsGameName: boolean = true;
    let stringGameName: boolean = true;

    for (const stage of stages) {
      if (!(stage instanceof Object)) {
        containsObjects = false;
        break;
      }
      else if (!stage.hasOwnProperty('gameName')) {
        containsGameName = false;
        break;
      }

      else if (typeof stage.gameName !== 'string') {
        /**/
        // console.log(`  * typeof stage.gameName: ${typeof stage.gameName} - ${JSON.stringify(stage.gameName)}`);
        stringGameName = false;
        break;
      }
    }

    if (!containsObjects) {
      throw new TypeError('The list of stages to classify did not contain objects.');
    }

    if (!containsGameName) {
      throw new TypeError('The list of stages to classify did not contain a gameName property.');
    }

    if (!stringGameName) {
      throw new TypeError('The list of stages to classify contained a non-string gameName.');
    }
    return this.classificationsSet$.pipe(
      map((set: Dictionary<StageClassifications>) => stages.map((stage: StageInfo) => {
        let output: StageClassifications;
        if (set && set[stage.gameName]) {
          output = {
            ...stage,
            name: set[stage.gameName].name,
            abbr: set[stage.gameName].abbr,
            series: set[stage.gameName].series,
            tourneyPresence: set[stage.gameName].tourneyPresence,
          }
        }
        else {
          output = {
            ...stage,
            abbr: stage.abbr || null,
            series: stage.series || null,
            tourneyPresence: stage.tourneyPresence || null,
          };
        }
        return output;
      })),
    );
  }
}
