import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { BinnedStageDimensions } from '../../../../shared/stage/models/binned-stage-dimensions.model';
import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';
import { StageDimensionsRange } from '../../../../shared/stage/models/stage-dimensions-range.model';

interface NumberTableValueDisplay {
  value: number;
  highlight: boolean;
}

interface NumberTableDimensions {
  name: string;
  gameName: string;
  blastzoneWidth: NumberTableValueDisplay;
  stageLength: NumberTableValueDisplay;
  offStageDistance: NumberTableValueDisplay;
  ceilingHeight: NumberTableValueDisplay;
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

interface NumberTableDimensionIds {
  class: string;
  property: string;
  label: string;
}

const DIMENSION_IDS: { [dimension: string]: NumberTableDimensionIds } = {
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
  selector: 'ssbu-stage-comparator-number-table',
  templateUrl: './stage-comparator-number-table.component.html',
  styleUrls: ['./stage-comparator-number-table.component.css']
})
export class StageComparatorNumberTableComponent implements OnChanges, OnInit {

  @Input() stageData: BinnedStageDimensionsSet;
  @Input() dimension: string;

  displayData: NumberTableDimensionsSet = {
    dimensions: null,
    ranges: null
  };

  dataPresent: boolean = false;

  ids: NumberTableDimensionIds = DIMENSION_IDS.blastzoneWidth;

  constructor() { }

  ngOnInit() {
    this._updateData();
  }

  ngOnChanges() {
    this._updateData();
  }

  _updateData(): void {
    const dimensions: string[] = ['blastzoneWidth', 'stageLength', 'offStageDistance', 'ceilingHeight'];
    if (this.stageData !== undefined) {
      this.displayData.dimensions = this.stageData.dimensions.sort(BinnedStageDimensions.sortBlastzoneDesc).map(stage => {
        return {
          name: stage.name,
          gameName: stage.gameName,
          blastzoneWidth: {
            value: Math.round(stage.blastzoneWidth.value),
            highlight: this._getHighlight(Math.round(stage.blastzoneWidth.value), 'blastzoneWidth')
          },
          stageLength: {
            value: Math.round(stage.stageLength.value),
            highlight: this._getHighlight(Math.round(stage.stageLength.value), 'stageLength')
          },
          offStageDistance: {
            value: Math.round(stage.offStageDistance.value),
            highlight: this._getHighlight(Math.round(stage.offStageDistance.value), 'offStageDistance')
          },
          ceilingHeight: {
            value: Math.round(stage.ceilingHeight.value),
            highlight: this._getHighlight(Math.round(stage.ceilingHeight.value), 'ceilingHeight')
          }
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

  _getHighlight(value: number, dimension: string): boolean {
    return ((value === Math.round(this.stageData.ranges[dimension].min))
      || (value === Math.round(this.stageData.ranges[dimension].max))
    );
  }
}
