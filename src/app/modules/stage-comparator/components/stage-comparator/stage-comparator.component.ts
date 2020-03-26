import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StageDimensionsService } from '../../../../shared/stage/services/stage-dimensions.service';

import { DatasetNotFoundError } from '../../../../shared/errors/dataset-not-found-error.model';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';
import { Stage } from '../../../../shared/stage/models/stage.model';
import { StageDimensionsSet } from '../../../../shared/stage/models/stage-dimensions-set.model';
import { StageSelectInfo } from '../../../../shared/stage/models/stage-select-info.model';

@Component({
  selector: 'ssbu-stage-comparator',
  templateUrl: './stage-comparator.component.html',
  styleUrls: ['./stage-comparator.component.css']
})
export class StageComparatorComponent implements OnInit {

  stages: Stage[];
  stageSelectInfo: StageSelectInfo[];
  stageDimensionsSet: StageDimensionsSet;
  binnedStageDimensionsSet: BinnedStageDimensionsSet;
  view: string;


  constructor(
    private sds: StageDimensionsService,
    private route: ActivatedRoute
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
    // TODO: validate the input
    // get the stats
    this.sds.getDimensionsBinned(stages).subscribe(
      {
        next: (binnedData: BinnedStageDimensionsSet) => {
          this.binnedStageDimensionsSet = binnedData;
        },
        error: (e) => {
          // generate the datastore if not found
          /*if (e instanceof DataStoreNotFoundError) {
            // console.log(e);
          }*/
        }
      }
    );
  }
}
