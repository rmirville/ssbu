import { Component, Input } from '@angular/core';

import { BinnedStageDimensionsSet } from '../../models/binned-stage-dimensions-set.model';

@Component({
  selector: 'ssbu-stage-comparator-text-table',
  template: 'SSBU Stage Comparator Text Table'
})
export class StageComparatorTextTableMockComponent {
  @Input() stageData: BinnedStageDimensionsSet;
}
