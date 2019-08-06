import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface StageSummary {
  name: string;
  gameName: string;
  Type: number;
}

interface Stage extends StageSummary {
  details: StageDetails[];
}

interface StageDetails {
  stage: string;
  name: string;
  collisions: StageCollisions[];
}

interface StageCollisions {
  
}

const API_URL: string = 'https://rubendal.github.io/ssbu/data/patch/3.1.0';
const API_STAGE_LIST_PATH: string = '/stages.json';
const API_STAGE_DETAILS_PATH: string = '/data.json';
const API_STAGE_DETAILS_PREFIX: string = '/stages/';

@Injectable({
  providedIn: 'root'
})
export class StageLoaderService {

  constructor( private _http: HttpClient ) {
  }

  loadStages(): Observable<Stage[]> {
    /**///console.log('  StageLoaderService::loadStages()');
    let stages$: Observable<Stage[]> = new Observable((observer) => {

      let stages: Stage[] = [];

      const { next, error } = observer;

      // get stage summary data
      let stagesHttp$: Observable<StageSummary[]> = this._http.get<StageSummary[]>(API_URL + API_STAGE_LIST_PATH);
      /**///console.log(`    * created stagesHttp$: ${stagesHttp$}`);

      stagesHttp$.subscribe((summaries) => {
        /**///console.log(`    * stagesHttp$ emitted: ${JSON.stringify(summaries)}`);
        /**///console.log('    * stagesHttp$ emitted');
        /**///console.log(`stages: ${JSON.stringify(stages)}`);

        // subscribe to _getStageDetails, providing summaries
        let stage$: Observable<Stage> = this._getStageDetails(summaries);
        stage$.subscribe({
          next(stage) {
            /**///console.log(`      + stagesHttp$.subscribe - stage$ emitted: ${JSON.stringify(stage)}`);
            /**///console.log('      + stagesHttp$.subscribe - stage$ emitted');
            stages.push(stage);
          },

          error(e) {
            /**///console.log('      + stagesHttp$.subscribe - error occurred');
            observer.error(e);
          },
          complete() {
            /**///console.log('      + stagesHttp$.subscribe - stage$ complete');
            observer.next(stages);
          }
        });
      });
      /**///console.log('    * subscribed to stagesHttp$');
    });

    /**///console.log('    * returning stages$');
    return stages$;
  }

  _getStageDetails(summaries: StageSummary[]): Observable<Stage> {
    /**///console.log('  StageLoaderService::_getStageDetails()');
    /**///console.log(`    * summaries passed in: ${JSON.stringify(summaries)}`);

    let details$ = new Observable<Stage>((observer) => {
      /**///console.log('    * details$ executing');
      let stages: Stage[] = [];
      
      /**///console.log(`    * summaries isArray: ${Array.isArray(summaries)}`);
      if (!Array.isArray(summaries)) {
        throw new TypeError('The stage summary data fetched was not an array');
      }
      /**///console.log(`      + summaries.length: ${summaries.length}`);
      // for each summary in summaries
      for (let i = 0; i < summaries.length; i++) {
        /**///console.log(`      + details$ - summary: ${JSON.stringify(summaries[i])}`);
        /**///console.log('      + checking summary type');
        if (!this._isStageSummary(summaries[i])) {
          /**///console.log('      = throwing TypeError');
          throw new TypeError('The stage summary data fetched was not of type StageSummary[]');
        }
        let url = API_URL + API_STAGE_DETAILS_PREFIX + summaries[i].name + API_STAGE_DETAILS_PATH;

        /**///console.log(`      + retrieving details from url: ${url}`);
        // retrieve json
        let stageDetailsHttp$ = this._http.get<StageDetails[]>(url);
        /**///console.log('      + stageDetailsHttp$: ' + stageDetailsHttp$);
        stageDetailsHttp$.subscribe((details) => {
          /**///console.log(`      + details$ - retrieved details: ${JSON.stringify(details)}`);
          /**///console.log('      + details$ - retrieved details');
          if (!Array.isArray(details)) {
            /**///console.log('      + throwing array TypeError');
            observer.error(new TypeError(`The ${summaries[i].name} stage details data fetched was not an array`));
            return;
          }
          details.forEach((phase) => {
            if (!this._isStageDetails(phase)) {
              /**///console.log('      + throwing property TypeError');
              observer.error(new TypeError(`The ${summaries[i].name} stage details data fetched was not of type StageDetails[]`));
              return;
            }
          });
          stages[i] = {
            "name": summaries[i].name,
            "gameName": summaries[i].gameName,
            "Type": summaries[i].Type,
            "details": details
          };
          observer.next(stages[i]);
          if (i === summaries.length - 1) {
            observer.complete();
          }
        });
      }

    });

    return details$;
  }

  _isStageSummary(stage): stage is StageSummary {
    /**///console.log('  StageLoaderService::_isStageSummary()');
    /**///console.log(`    * stage: ${JSON.stringify(stage)}`);
    if (typeof stage.name !== "string") {
      return false;
    } else if (typeof stage.gameName !== "string") {
      return false;
    } else if (typeof stage.Type !== "number") {
      return false;
    }
    /**///console.log('    * returning true');
    return true;
  }

  _isStageDetails(phase): phase is StageDetails {
    /**///console.log('  StageLoaderService::_isStageDetails()');
    /**///console.log(`    * details: ${JSON.stringify(phase)}`);
    if (typeof phase.stage !== "string") {
      return false;
    }
    return true;
  }

  _isStageCollisions(collisions): collisions is StageCollisions {
    return true;
  }
}
