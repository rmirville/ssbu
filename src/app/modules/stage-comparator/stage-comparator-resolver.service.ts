import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, zip } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { StageLoaderService } from '../../shared/stage/services/stage-loader.service';
import { StageClassificationsService } from '../../shared/stage/services/stage-classifications.service';
import { StageDimensionsService } from '../../shared/stage/services/stage-dimensions.service';
import { StagePieceMapService } from '../../shared/stage/services/stage-piece-map.service';
import { Stage } from '../../shared/stage/models/stage.model';
import { StageDimensionsSet } from '../../shared/stage/models/stage-dimensions-set.model';
import { StageClassifications } from '../../shared/stage/models/stage-classifications.model';

interface StageComparatorRouteData {
  stages: Stage[],
  dimensionsFull: StageDimensionsSet,
  stageClassifications: StageClassifications[]
};

@Injectable({
  providedIn: 'root'
})
export class StageComparatorResolverService implements Resolve<StageComparatorRouteData> {

  constructor(private sls: StageLoaderService, private sds: StageDimensionsService, private scs: StageClassificationsService, private spms: StagePieceMapService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StageComparatorRouteData> {
    const stageData$ = new Observable<StageComparatorRouteData>(observer => {
      let stageData: StageComparatorRouteData = {stages: null, dimensionsFull: null, stageClassifications: null};

      const stageCalculations$ = this.spms.getMaps('stageComparator')
        .pipe(
          // use piece maps to get raw stage data, then save piece maps for the next operation
          switchMap(pieceMaps => this.sls.loadStages('include', pieceMaps.map(stage => stage.lvd))
            .pipe(
              map(stages => {
                // add raw stage data to the route data
                stageData.stages = stages;
                return {stages, pieceMaps};
              })
            )
          ),
          // use piece maps and raw stage data to calculate dimensions and get classification data
          switchMap(rawData => {
            const stagesBasic = rawData.stages.map(stage => { return { name: stage.name, gameName: stage.gameName }; });
            return zip(
              this.sds.getDimensionsFull(rawData.stages, rawData.pieceMaps),
              this.scs.classifyStages(stagesBasic)
            );
          }),
          map(([dimensionsFull, stageClassifications]) => {
            return { dimensionsFull, stageClassifications };
          })
        );
      // add final calculations to the route data
      stageCalculations$.subscribe(stageCalculations => {
        stageData.dimensionsFull = stageCalculations.dimensionsFull;
        stageData.stageClassifications = stageCalculations.stageClassifications;
        observer.next(stageData);
        observer.complete();
      });
    });

    return stageData$;
  }
}
