import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { LoadingStatusService } from '../../../../core/services/loading-status.service';
import { StageDimensionsService } from '../../../../shared/stage/services/stage-dimensions.service';
import { StagePieceMapService } from '../../../../shared/stage/services/stage-piece-map.service';

import { DataNotFoundError } from '../../../../shared/errors/data-not-found-error.model';
import { DatasetNotFoundError } from '../../../../shared/errors/dataset-not-found-error.model';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';
import { Stage } from '../../../../shared/stage/models/stage.model';
import { StageClassifications } from '../../../../shared/stage/models/stage-classifications.model';
import { StageDimensionsSet } from '../../../../shared/stage/models/stage-dimensions-set.model';
import { StageMiscInfo } from '../../../../shared/stage/models/stage-misc-info.model';
import { StagePieceMap } from '../../../../shared/stage/models/stage-piece-map.model';

@Component({
  selector: 'ssbu-stage-comparator',
  templateUrl: './stage-comparator.component.html',
  styleUrls: ['./stage-comparator.component.css']
})
export class StageComparatorComponent implements OnInit {

  stages: Stage[];
  stageClassifications: StageClassifications[];
  selectSubject$: Subject<string>;
  stageDimensionsSet: StageDimensionsSet;
  binnedStageDimensionsSet: BinnedStageDimensionsSet;
  view: string;
  selectedDimension: string;
  firstLoad: boolean;

  constructor(
    private lss: LoadingStatusService,
    private sds: StageDimensionsService,
    private spms: StagePieceMapService,
    private route: ActivatedRoute,
    private zone: NgZone,
  ) { }

  ngOnInit() {
    ///
    // console.group('StageComparatorComponent::ngOnInit()');
    this.route.data.subscribe((data: { stageData: {stages: Stage[], dimensionsFull: StageDimensionsSet, stageClassifications: StageClassifications[]} }) => {
      ///
      // console.log(`data: ${JSON.stringify(data)}`);
      // console.log(`data.stages: ${JSON.stringify(data.stageData)}`);
      // console.log(`data.stages type: ${typeof data.stageData.stages}`);
      this.stages = [...data.stageData.stages];
      this.stageDimensionsSet = {...data.stageData.dimensionsFull};
      this.stageClassifications = [...data.stageData.stageClassifications];
      ///
      // console.log(`this.stageSelectInfo: ${JSON.stringify(this.stageSelectInfo)}`);
    });
    this.selectSubject$ = new Subject<string>();
    this.firstLoad = true;
    this.lss.stopLoading('app');
    this.view = 'graph';
    ///
    // console.groupEnd();
  }

  setDimension(dimension: string) {
    const dimensions: string[] = ['blastzoneWidth', 'stageLength', 'offStageDistance', 'ceilingHeight'];
    if (typeof dimension !== 'string') {
      throw new TypeError('dimension should be of type string');
    }
    if ( (dimension !== undefined)
        && ( dimensions.includes(dimension) )
    ) {
      this.selectedDimension = dimension;
    }
  }

  setView(view: string) {
    if (typeof view !== 'string') {
      throw new TypeError('view should be of type string');
    }
    switch (view) {
      case 'text':
        this.view = 'text';
        break;
      case 'number':
        this.view = 'number';
        break;
      case 'graph':
        this.view = 'graph';
        break;
    }
  }

  getStats(gameNames: string[]) {
    ///
    // console.group('StageComparatorComponent::getStats()');
    // console.log(`stages: ${stages}`);
    // validate the provided stage selection
    if (!Array.isArray(gameNames)) {
        throw new TypeError('stages should be of type string[]');
    }

    gameNames.forEach(stage => {
      if (typeof stage !== 'string') {
        throw new TypeError('stages should be of type string[]');
      }
    });

    if (gameNames.length === 0) {
      ///
      // console.log('stage selection invalid, doing nothing');
      // console.groupEnd();
      return;
    }

    const stages: StageMiscInfo[] = this.stageClassifications.filter( stage => gameNames.includes(stage.gameName));

    // get the stats
    this.sds.getDimensionsBinned(stages, true).subscribe(
      {
        next: (binnedData: BinnedStageDimensionsSet) => {
          this.binnedStageDimensionsSet = binnedData;
          if (!this.firstLoad) {
            this.selectSubject$.next('updateSuccess');
          }
          else {
            this.firstLoad = false;
          }
        },
        error: (e: Error) => {
          this.zone.run(() => {
            // if StageDimensionsService's dataset isn't created yet, regenerate it and try again
            if (e instanceof DatasetNotFoundError) {
              const binnedData$: Observable<BinnedStageDimensionsSet> = this.spms.getMaps('stageComparator')
                .pipe(
                  concatMap((pieceMaps: StagePieceMap[]) => this.sds.getDimensionsFull(this.stages, pieceMaps)),
                  concatMap(() => this.sds.getDimensionsBinned(stages, true))
              );
              binnedData$.subscribe((binnedData: BinnedStageDimensionsSet) => {
                this.binnedStageDimensionsSet = binnedData;
              });
            }
            else if (e instanceof DataNotFoundError) {
              this.selectSubject$.next('fatalError');
            }
          });
        }
      }
    );
    ///
    // console.groupEnd();
  }
}
