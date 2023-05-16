import { Injectable, NgZone } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { LoadingStatusService } from "src/app/core/services/loading-status.service";
import { StageClassifications } from "src/app/shared/stage/models/stage-classifications.model";
import { StageDimensionsSet } from "src/app/shared/stage/models/stage-dimensions-set.model";
import { Stage } from "src/app/shared/stage/models/stage.model";
import { StageDimensionsService } from "src/app/shared/stage/services/stage-dimensions.service";
import { StagePieceMapService } from "src/app/shared/stage/services/stage-piece-map.service";
import { StageDimensionsRange } from "src/app/shared/stage/models/stage-dimensions-range.model";

const getInitialDimensionsRange = (): StageDimensionsRange => ({
  min: null,
  max: null,
  range: null,
});

const getInitialDimensionsFull = (): StageDimensionsSet => ({
  dimensions: [],
  ranges: {
    blastzoneWidth: getInitialDimensionsRange(),
    stageLength: getInitialDimensionsRange(),
    offStageDistance: getInitialDimensionsRange(),
    ceilingHeight: getInitialDimensionsRange(),
  }
});

@Injectable()
export class StageComparatorStore {
  private dimensionsFullSubject$: BehaviorSubject<StageDimensionsSet> = new BehaviorSubject(getInitialDimensionsFull());
  constructor (
    private _lss: LoadingStatusService,
    private _sds: StageDimensionsService,
    private _spms: StagePieceMapService,
    private _route: ActivatedRoute,
    private _zone: NgZone) {
      this._route.data.subscribe((data: { stageData: {stages: Stage[], dimensionsFull: StageDimensionsSet, stageClassifications: StageClassifications[]} }) => {

      });
    }

}
