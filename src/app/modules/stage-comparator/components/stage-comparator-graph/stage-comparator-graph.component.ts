import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';

interface GraphDimensions {
  name: string;
  gameName: string;
  blastzoneWidth: GraphDimensionsBinParams;
  stageLength: GraphDimensionsBinParams;
  offStageDistance: GraphDimensionsBinParams;
  ceilingHeight: GraphDimensionsBinParams;
}

interface GraphDimensionsBinParams {
  value: number;
  bin: number;
}

@Component({
  selector: 'ssbu-stage-comparator-graph',
  templateUrl: './stage-comparator-graph.component.html',
  styleUrls: ['./stage-comparator-graph.component.css']
})
export class StageComparatorGraphComponent implements OnChanges, OnInit {

  @Input() stageData: BinnedStageDimensionsSet;

  displayData: GraphDimensions[] = [];

  dataPresent: boolean = false;

  constructor() { }

  ngOnInit() {
    this._updateData();
  }

  ngOnChanges() {
    this._updateData();
  }

  _updateData() {
    if (this.stageData !== undefined) {
      this.dataPresent = true;
      this.displayData = this.stageData.dimensions.map(stage => {
        return {
          name: stage.name,
          gameName: stage.gameName,
          blastzoneWidth: {
            value: stage.blastzoneWidth.value,
            bin: stage.blastzoneWidth.bin
          },
          stageLength: {
            value: stage.stageLength.value,
            bin: stage.stageLength.bin
          },
          offStageDistance: {
            value: stage.offStageDistance.value,
            bin: stage.offStageDistance.bin
          },
          ceilingHeight: {
            value: stage.ceilingHeight.value,
            bin: stage.ceilingHeight.bin
          },
        };
      });
    }
    else {
      this.dataPresent = false;
    }

  }

}
