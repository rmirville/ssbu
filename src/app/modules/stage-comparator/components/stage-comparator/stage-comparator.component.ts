import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { StageDimensionsService } from '../../../../shared/stage/services/stage-dimensions.service';
import { StagePieceMapService } from '../../../../shared/stage/services/stage-piece-map.service';

import { DataNotFoundError } from '../../../../shared/errors/data-not-found-error.model';
import { DatasetNotFoundError } from '../../../../shared/errors/dataset-not-found-error.model';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';
import { Stage } from '../../../../shared/stage/models/stage.model';
import { StageDimensionsSet } from '../../../../shared/stage/models/stage-dimensions-set.model';
import { StagePieceMap } from '../../../../shared/stage/models/stage-piece-map.model';
import { StageSelectInfo } from '../../../../shared/stage/models/stage-select-info.model';

@Component({
  selector: 'ssbu-stage-comparator',
  templateUrl: './stage-comparator.component.html',
  styleUrls: ['./stage-comparator.component.css']
})
export class StageComparatorComponent implements OnInit {

  stages: Stage[];
  stageSelectInfo: StageSelectInfo[];
  selectSubject$: Subject<string>;
  stageDimensionsSet: StageDimensionsSet;
  binnedStageDimensionsSet: BinnedStageDimensionsSet;
  view: string;

  constructor(
    private sds: StageDimensionsService,
    private spms: StagePieceMapService,
    private route: ActivatedRoute,
    private zone: NgZone,
  ) { }

  ngOnInit() {
    /**/
    // console.group('StageComparatorComponent::ngOnInit()');
    this.route.data.subscribe((data: { stageData: {stages: Stage[], dimensionsFull: StageDimensionsSet, stageSelectInfo: StageSelectInfo[]} }) => {
      /**/
      // console.log(`data: ${JSON.stringify(data)}`);
      // console.log(`data.stages: ${JSON.stringify(data.stageData)}`);
      // console.log(`data.stages type: ${typeof data.stages}`);
      this.stages = [...data.stageData.stages];
      this.stageDimensionsSet = data.stageData.dimensionsFull;
      this.stageSelectInfo = [...data.stageData.stageSelectInfo];
      /**/
      // console.log(`this.stageSelectInfo: ${JSON.stringify(this.stageSelectInfo)}`);
    });
    this.selectSubject$ = new Subject<string>();
    this.view = 'graph';
    /**/
    // console.groupEnd();
  }

  setView(view: string) {
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

  getStats(stages: string[]) {
    ///
    // console.group('StageComparatorComponent::getStats()');
    // console.log(`stages: ${stages}`);
    // validate the provided stage selection
    if ((stages === undefined)
        || !stages.hasOwnProperty(length)
        || (stages.length === 0)
      ) {
      ///
      // console.log('stage selection invalid, doing nothing');
      // console.groupEnd();
      return;
    }

    // get the stats
    this.sds.getDimensionsBinned(stages).subscribe(
      {
        next: (binnedData: BinnedStageDimensionsSet) => {
          this.binnedStageDimensionsSet = binnedData;
        },
        error: (e: Error) => {
          this.zone.run(() => {
            // if StageDimensionsService's dataset isn't created yet, regenerate it and try again
            if (e instanceof DatasetNotFoundError) {
              const binnedData$: Observable<BinnedStageDimensionsSet> = this.spms.getMaps('stageComparator')
                .pipe(
                  concatMap((pieceMaps: StagePieceMap[]) => this.sds.getDimensionsFull(this.stages, pieceMaps)),
                  concatMap(() => this.sds.getDimensionsBinned(stages))
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
