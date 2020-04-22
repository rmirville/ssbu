import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';
import { StageDimensionsBinParams } from '../../../../shared/stage/models/stage-dimensions-bin-params.model';
import { StageDimensionsRange } from '../../../../shared/stage/models/stage-dimensions-range.model';

interface TextTableDimensions {
  name: string;
  gameName: string;
  blastzoneWidth: string;
  stageLength: string;
  offStageDistance: string;
  ceilingHeight: string;
}

interface TextTableRanges {
  blastzoneWidth: StageDimensionsRange;
  stageLength: StageDimensionsRange;
  offStageDistance: StageDimensionsRange;
  ceilingHeight: StageDimensionsRange;
}

interface TextTableDimensionsSet {
  dimensions: TextTableDimensions[];
  ranges: TextTableRanges;
}

interface TextTableValues {
  same: string;
  solo: string;
  min: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  max: string;
}

@Component({
  selector: 'ssbu-stage-comparator-text-table',
  templateUrl: './stage-comparator-text-table.component.html',
  styleUrls: ['./stage-comparator-text-table.component.css']
})
export class StageComparatorTextTableComponent implements OnChanges, OnInit {

  @Input() stageData: BinnedStageDimensionsSet;

  displayData: TextTableDimensionsSet = {
    dimensions: null,
    ranges: null
  };

  dataPresent: boolean = false;

  textValues: { [dimension: string]: TextTableValues } = {
    blastzoneWidth: {
      same: 'Same width',
      solo: 'N/A',
      min: 'Smallest',
      1: 'Smaller',
      2: 'Small',
      3: 'Medium',
      4: 'Large',
      5: 'Larger',
      max: 'Largest'
    },
    stageLength: {
      same: 'Same length',
      solo: 'N/A',
      min: 'Shortest',
      1: 'Shorter',
      2: 'Short',
      3: 'Medium',
      4: 'Long',
      5: 'Longer',
      max: 'Longest'
    },
    offStageDistance: {
      same: 'Same distance',
      solo: 'N/A',
      min: 'Closest',
      1: 'Closer',
      2: 'Close',
      3: 'Medium',
      4: 'Far',
      5: 'Farther',
      max: 'Farthest'
    },
    ceilingHeight: {
      same: 'Same height',
      solo: 'N/A',
      min: 'Lowest',
      1: 'Lower',
      2: 'Low',
      3: 'Medium',
      4: 'High',
      5: 'Higher',
      max: 'Highest'
    },
  };

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
          blastzoneWidth: this._getValue(stage.blastzoneWidth, 'blastzoneWidth'),
          stageLength: this._getValue(stage.stageLength, 'stageLength'),
          offStageDistance: this._getValue(stage.offStageDistance, 'offStageDistance'),
          ceilingHeight: this._getValue(stage.ceilingHeight, 'ceilingHeight')
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

  _getValue(params: StageDimensionsBinParams, dimension: string): string {
    switch (params.bin) {
      case 0:
        if (this.stageData.dimensions.length === 1) {
          return this.textValues[dimension].solo;
        }
        else {
          return this.textValues[dimension].same;
        }
      case 1:
        if (params.min === true) {
          return this.textValues[dimension].min;
        }
        else {
          return this.textValues[dimension][1];
        }
      case 2:
        return this.textValues[dimension][2];
      case 3:
        return this.textValues[dimension][3];
      case 4:
        return this.textValues[dimension][4];
      case 5:
        if (params.max === true) {
          return this.textValues[dimension].max;
        }
        else {
          return this.textValues[dimension][5];
        }
      default:
        return 'N/A';
    }
  }

}
