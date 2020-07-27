import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';
import { BinnedStageDimensions } from '../../../../shared/stage/models/binned-stage-dimensions.model';
import { StageDimensionsBinParams } from '../../../../shared/stage/models/stage-dimensions-bin-params.model';
import { StageDimensionsRange } from '../../../../shared/stage/models/stage-dimensions-range.model';

interface TextTableValueDisplay {
  value: string;
  highlight: boolean;
}

interface TextTableDimensions {
  name: string;
  gameName: string;
  blastzoneWidth: TextTableValueDisplay;
  stageLength: TextTableValueDisplay;
  offStageDistance: TextTableValueDisplay;
  ceilingHeight: TextTableValueDisplay;
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

interface TextTableDimensionIds {
  class: string;
  property: string;
  label: string;
}

const DIMENSION_IDS: { [dimension: string]: TextTableDimensionIds } = {
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
  selector: 'ssbu-stage-comparator-text-table',
  templateUrl: './stage-comparator-text-table.component.html',
  styleUrls: ['./stage-comparator-text-table.component.css']
})
export class StageComparatorTextTableComponent implements OnChanges, OnInit {

  @Input() stageData: BinnedStageDimensionsSet;
  @Input() dimension: string;

  displayData: TextTableDimensionsSet = {
    dimensions: null,
    ranges: null
  };

  dataPresent: boolean = false;

  ids: TextTableDimensionIds = DIMENSION_IDS.blastzoneWidth;

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
    const dimensions: string[] = ['blastzoneWidth', 'stageLength', 'offStageDistance', 'ceilingHeight'];

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

    if (this.stageData !== undefined) {
      let sortMethod: (a: BinnedStageDimensions, b: BinnedStageDimensions) => number = BinnedStageDimensions.sortBlastzoneDesc;
      switch (this.dimension) {
        case 'blastzoneWidth':
          sortMethod = BinnedStageDimensions.sortBlastzoneDesc;
          break;
        case 'stageLength':
          sortMethod = BinnedStageDimensions.sortStageLengthDesc;
          break;
        case 'offStageDistance':
          sortMethod = BinnedStageDimensions.sortOffStageDesc;
          break;
        case 'ceilingHeight':
          sortMethod = BinnedStageDimensions.sortCeilingDesc;
          break;
        default:
          sortMethod = BinnedStageDimensions.sortBlastzoneDesc;
      }

      this.displayData.dimensions = this.stageData.dimensions.sort(sortMethod).map(stage => {
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

  _getValue(params: StageDimensionsBinParams, dimension: string): TextTableValueDisplay {
    let highlight: boolean = false;
    let value: string = '';
    switch (params.bin) {
      case 0:
        if (this.stageData.dimensions.length === 1) {
          value = this.textValues[dimension].solo;
        }
        else {
          value = this.textValues[dimension].same;
        }
        break;
      case 1:
        if (params.min === true) {
          value = this.textValues[dimension].min;
          highlight = true;
        }
        else {
          value = this.textValues[dimension][1];
        }
        break;
      case 2:
        value = this.textValues[dimension][2];
        break;
      case 3:
        value = this.textValues[dimension][3];
        break;
      case 4:
        value = this.textValues[dimension][4];
        break;
      case 5:
        if (params.max === true) {
          value = this.textValues[dimension].max;
          highlight = true;
        }
        else {
          value = this.textValues[dimension][5];
        }
        break;
      default:
        value = 'N/A';
    }
    return {
      value: value,
      highlight: highlight
    };
  }

}
