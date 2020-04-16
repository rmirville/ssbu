import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { BinnedStageDimensionsSet, isBinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';
import { StageDimensionsRange } from '../../../../shared/stage/models/stage-dimensions-range.model';

interface NumberTableDimensions {
  name: string;
  gameName: string;
  blastzoneWidth: number;
  stageLength: number;
  offStageDistance: number;
  ceilingHeight: number;
}

interface NumberTableRanges {
  blastzoneWidth: StageDimensionsRange;
  stageLength: StageDimensionsRange;
  offStageDistance: StageDimensionsRange;
  ceilingHeight: StageDimensionsRange;
}

interface NumberTableDimensionsSet {
  dimensions: NumberTableDimensions[];
  ranges: NumberTableRanges;
}

@Component({
  selector: 'ssbu-stage-comparator-number-table',
  templateUrl: './stage-comparator-number-table.component.html',
  styleUrls: ['./stage-comparator-number-table.component.css']
})
export class StageComparatorNumberTableComponent implements OnChanges, OnInit {

  @Input() stageData: BinnedStageDimensionsSet;

  displayData: NumberTableDimensionsSet = {
    dimensions: null,
    ranges: null
  };

  dataPresent: boolean = false;

  constructor() { }

  ngOnInit() {
    this._updateData();
  }

  ngOnChanges() {
    this._updateData();
  }

  _updateData(): void {
    if (this.stageData !== undefined) {
      this.displayData.dimensions = this.stageData.dimensions.map(stage => {
        return {
          name: stage.name,
          gameName: stage.gameName,
          blastzoneWidth: Math.round(stage.blastzoneWidth.value),
          stageLength: Math.round(stage.stageLength.value),
          offStageDistance: Math.round(stage.offStageDistance.value),
          ceilingHeight: Math.round(stage.ceilingHeight.value),
        }
      });

      this.displayData.ranges = {
        blastzoneWidth: {
          min: Math.round(this.stageData.ranges.blastzoneWidth.min),
          max: Math.round(this.stageData.ranges.blastzoneWidth.max),
          range: Math.round(this.stageData.ranges.blastzoneWidth.range)
        },
        stageLength: {
          min: Math.round(this.stageData.ranges.stageLength.min),
          max: Math.round(this.stageData.ranges.stageLength.max),
          range: Math.round(this.stageData.ranges.stageLength.range)
        },
        offStageDistance: {
          min: Math.round(this.stageData.ranges.offStageDistance.min),
          max: Math.round(this.stageData.ranges.offStageDistance.max),
          range: Math.round(this.stageData.ranges.offStageDistance.range)
        },
        ceilingHeight: {
          min: Math.round(this.stageData.ranges.ceilingHeight.min),
          max: Math.round(this.stageData.ranges.ceilingHeight.max),
          range: Math.round(this.stageData.ranges.ceilingHeight.range)
        }
      };
      this.dataPresent = true;
    }
    else {
      this.dataPresent = false;
    }
  }
}
