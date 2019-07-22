import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Stage {
  name: string;
  gameName: string;
  Type: number;
  details: StageDetails[];
}

interface StageDetails {}

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
      let summariesObs: Observable<Stage[]> = this._http.get<Stage[]>(API_URL + API_STAGE_LIST_PATH);
      /**///console.log('  * created summariesObs');

      summariesObs.subscribe((summaries) => {
        /**///console.log('  * summariesObs emitted: ' + JSON.stringify(summaries));
        /**///console.log('stages: ' + JSON.stringify(stages));

        // subscribe to _getStageDetails, providing summaries
        let stageObs: Observable<Stage> = this._getStageDetails(summaries);
        stageObs.subscribe({
          next(stage) {
            /**///console.log('    + summariesObs.subscribe - stageObs emitted: ' + JSON.stringify(stage));
            stages.push(stage);
          },

          error() {
            /**/console.log('    + summariesObs.subscribe - error occurred');
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

  _getStageDetails(summaries: Stage[]): Observable<Stage> {
    /**///console.log('StageLoaderService::_getStageDetails() called.');
    /**///console.log('  * summaries passed in: ' + JSON.stringify(summaries));

    let detailsObs = new Observable<Stage>((observer) => {
      /**///console.log('  * detailsObs executing');
      // for each summary in summaries
      for (let i = 0; i < summaries.length; i++) {
        /**///console.log('    + detailsObs - summary: ' + JSON.stringify(summaries[i]));
        let url = API_URL + API_STAGE_DETAILS_PREFIX + summaries[i].name + API_STAGE_DETAILS_PATH;

        /**///console.log('    + retrieving details from url: ' + url);
        // retrieve json
        this._http.get<StageDetails[]>(url).subscribe((details) => {
          /**///console.log('    + detailsObs - retrieved details: ' + JSON.stringify(details));
          summaries[i].details = details;
          observer.next(summaries[i]);
          if (i === summaries.length - 1) {
            observer.complete();
          }
        });
      }

    });

    return detailsObs;
  }
}
