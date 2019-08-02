import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

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

  constructor( private _http: HttpClient ) { }

  loadStages(): Observable<Stage[]> {
    /**///console.log('StageLoaderService::loadStages() called.');
    let stagesObs: Observable<Stage[]> = new Observable((observer) => {

      let stages: Stage[] = [];

      const { next, error } = observer;

      // get stage summary data
      let summariesObs: Observable<StageSummary[]> = this._http.get<StageSummary[]>(API_URL + API_STAGE_LIST_PATH);
      /**///console.log('  * created summariesObs');

      summariesObs.subscribe((summaries) => {
        /**///console.log('  * summariesObs emitted: ' + JSON.stringify(summaries));
        /**///console.log('  * summariesObs emitted');
        /**///console.log('stages: ' + JSON.stringify(stages));

        // subscribe to _getStageDetails, providing summaries
        let stageObs: Observable<Stage> = this._getStageDetails(summaries);
        stageObs.subscribe({
          next(stage) {
            /**///console.log('    + summariesObs.subscribe - stageObs emitted: ' + JSON.stringify(stage));
            /**///console.log('    + summariesObs.subscribe - stageObs emitted');
            stages.push(stage);
          },

          error(e) {
            /**///console.log('    + summariesObs.subscribe - error occurred');
            observer.error(e);
          },
          complete() {
            /**///console.log('    + summariesObs.subscribe - stageObs complete');
            observer.next(stages);
          }
        });
      });
      /**///console.log('  * subscribed to summariesObs');
    });

    /**///console.log('  * returning stagesObs');
    return stagesObs;
  }

  _getStageDetails(summaries: StageSummary[]): Observable<Stage> {
    /**///console.log('StageLoaderService::_getStageDetails() called.');
    /**///console.log('  * summaries passed in: ' + JSON.stringify(summaries));

    let detailsObs = new Observable<Stage>((observer) => {
      /**///console.log('  * detailsObs executing');
      let stages: Stage[] = [];
      
      /**///console.log('  * summaries isArray: ' + Array.isArray(summaries));
      if (!Array.isArray(summaries)) {
        throw new TypeError('The stage summary data fetched was not an array');
      }
      
      // for each summary in summaries
      for (let i = 0; i < summaries.length; i++) {
        /**///console.log('    + detailsObs - summary: ' + JSON.stringify(summaries[i]));
        /**///console.log('    + checking summary type');
        if (!this._isStageSummary(summaries[i])) {
          /**///console.log('      = throwing TypeError');
          throw new TypeError('The stage summary data fetched was not of type StageSummary[]');
        }
        let url = API_URL + API_STAGE_DETAILS_PREFIX + summaries[i].name + API_STAGE_DETAILS_PATH;

        /**///console.log('    + retrieving details from url: ' + url);
        // retrieve json
        this._http.get<StageDetails[]>(url).subscribe((details) => {
          /**///console.log('    + detailsObs - retrieved details: ' + JSON.stringify(details));
          /**///console.log('    + detailsObs - retrieved details');
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

    return detailsObs;
  }

  _isStageSummary(stage): stage is StageSummary {
    /**///console.log('StageLoaderService::_isStage() called');
    /**///console.log('  * stage: ' + JSON.stringify(stage));
    if (typeof stage.name !== "string") {
      return false;
    } else if (typeof stage.gameName !== "string") {
      return false;
    } else if (typeof stage.Type !== "number") {
      return false;
    }
    /**///console.log('  * returning true');
    return true;
  }
}
