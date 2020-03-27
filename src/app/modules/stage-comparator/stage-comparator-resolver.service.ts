import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { StageLoaderService } from '../../shared/stage/services/stage-loader.service';
import { StageClassificationsService } from '../../shared/stage/services/stage-classifications.service';
import { StageDimensionsService } from '../../shared/stage/services/stage-dimensions.service';
import { StagePieceMapService } from '../../shared/stage/services/stage-piece-map.service';
import { Stage } from '../../shared/stage/models/stage.model';
import { StageDimensionsSet } from '../../shared/stage/models/stage-dimensions-set.model';
import { StageSelectInfo } from '../../shared/stage/models/stage-select-info.model';

interface StageComparatorRouteData {
  stages: Stage[],
  dimensionsFull: StageDimensionsSet,
  stageSelectInfo: StageSelectInfo[]
};

@Injectable({
  providedIn: 'root'
})
export class StageComparatorResolverService implements Resolve<StageComparatorRouteData> {

  constructor(private sls: StageLoaderService, private sds: StageDimensionsService, private scs: StageClassificationsService, private spms: StagePieceMapService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StageComparatorRouteData> {
    /**/
    // console.log('StageComparatorResolverService::resolve()');
    const stageData$ = new Observable<StageComparatorRouteData>(observer => {
      /**/
      // console.log(`  * observer at start: ${JSON.stringify(Object.keys(observer))}`);
      let stageData: StageComparatorRouteData = {stages: null, dimensionsFull: null, stageSelectInfo: null};

      const pieceMaps$ = this.spms.getMaps('stageComparator');
      pieceMaps$.subscribe(pieceMaps => {

        const stages$ = this.sls.loadStages('include', pieceMaps.map(stage => stage.lvd));
        stages$.subscribe(stages => {
          /**/
          // console.log('  * received stages');
          // console.log(`  * stages.length: ${JSON.stringify(stages.length)}`);
          // console.log(`  * stageData: ${JSON.stringify(stageData)}`);
          stageData.stages = stages;
          // console.log(`  * stageData: ${JSON.stringify(stageData)}`);

          /**/
          // console.log('  * calling getDimensionsFull()');
          const stagesBasic = stages.map(stage => { return { name: stage.name, gameName: stage.gameName }; });
          const stageCalculations$ = forkJoin(
            this.sds.getDimensionsFull(stages, pieceMaps),
            this.scs.classifyStages(stagesBasic)
          ).pipe(
            map(([dimensionsFull, stageSelectInfo]) => {
              return { dimensionsFull, stageSelectInfo };
            })
          );
          stageCalculations$.subscribe(stageCalculations => {
            stageData.dimensionsFull = stageCalculations.dimensionsFull;
            stageData.stageSelectInfo = stageCalculations.stageSelectInfo;
            observer.next(stageData);
            observer.complete();
          });
        });
      });
    });

    return stageData$;
  }
}
