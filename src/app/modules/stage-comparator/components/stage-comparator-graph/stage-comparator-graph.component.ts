import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { BinnedStageDimensions } from '../../../../shared/stage/models/binned-stage-dimensions.model';
import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';

interface GraphDimensions {
  name: string;
  gameName: string;
  abbr: string;
  blastzoneWidth: GraphDimensionsBinParams;
  stageLength: GraphDimensionsBinParams;
  offStageDistance: GraphDimensionsBinParams;
  ceilingHeight: GraphDimensionsBinParams;
}

interface GraphDimensionsBinParams {
  value: number;
  percent: number;
  bin: number;
}

interface GraphDimensionIds {
  class: string;
  property: string;
  label: string;
}

const SCALE: number = 0.5;
const MAX: number = 860;

const DIMENSION_IDS: { [dimension: string]: GraphDimensionIds } = {
  blastzoneWidth: {
    class: 'blastzone-width',
    property: 'blastzoneWidth',
    label: 'Blastzone Width'
  },
  stageLength: {
    class: 'stage-length',
    property: 'stageLength',
    label: 'Floor Length'
  },
  offStageDistance: {
    class: 'off-stage-distance',
    property: 'offStageDistance',
    label: 'Off-Stage Distance'
  },
  ceilingHeight: {
    class: 'ceiling-height',
    property: 'ceilingHeight',
    label: 'Ceiling Height'
  }
};

@Component({
  selector: 'ssbu-stage-comparator-graph',
  templateUrl: './stage-comparator-graph.component.html',
  styleUrls: ['./stage-comparator-graph.component.css']
})
export class StageComparatorGraphComponent implements OnChanges, OnInit {

  @Input() stageData: BinnedStageDimensionsSet;
  @Input() dimension: string;

  displayData: GraphDimensions[] = [];

  dataPresent: boolean = false;

  ids: GraphDimensionIds = DIMENSION_IDS.blastzoneWidth;

  constructor() {

  }

  ngOnInit() {
    this._updateData();
  }

  ngOnChanges() {
    this._updateData();
  }

  _updateData() {
    const dimensions: string[] = ['blastzoneWidth', 'stageLength', 'offStageDistance', 'ceilingHeight'];
    if (this.stageData !== undefined) {
      this.dataPresent = true;
      this.ids = DIMENSION_IDS[this.dimension];
      this.displayData = this.stageData.dimensions.sort(BinnedStageDimensions.sortBlastzoneDesc).map(stage => {
        return {
          name: stage.name,
          gameName: stage.gameName,
          abbr: stage.abbr,
          blastzoneWidth: {
            value: Math.round(stage.blastzoneWidth.value * SCALE),
            percent: stage.blastzoneWidth.value * 100 / MAX,
            bin: stage.blastzoneWidth.bin
          },
          stageLength: {
            value: Math.round(stage.stageLength.value * SCALE),
            percent: stage.stageLength.value * 100 / MAX,
            bin: stage.stageLength.bin
          },
          offStageDistance: {
            value: Math.round(stage.offStageDistance.value * SCALE),
            percent: stage.offStageDistance.value * 100 / MAX,
            bin: stage.offStageDistance.bin
          },
          ceilingHeight: {
            value: Math.round(stage.ceilingHeight.value * SCALE),
            percent: stage.ceilingHeight.value * 100 / MAX,
            bin: stage.ceilingHeight.bin
          },
        };
      });
    }
    else {
      this.dataPresent = false;
    }

    if (
      (this.dimension !== undefined)
      && ( dimensions.includes(this.dimension) )
    ) {
      this.ids = DIMENSION_IDS[this.dimension];
    }
    else {
      this.dimension = 'blastzoneWidth';
      this.ids = DIMENSION_IDS.blastzoneWidth;
    }
  }

}
