import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { BinnedStageDimensionsSet } from '../../models/binned-stage-dimensions-set.model';

@Component({
  selector: 'ssbu-stage-comparator-number-table',
  template: 'SSBU Stage Comparator Number Table'
})
export class StageComparatorNumberTableMockComponent implements OnChanges {
  @Input() stageData: BinnedStageDimensionsSet;
  @Input() dimension: string = 'blastzoneWidth';

  ngOnChanges(changes: SimpleChanges) {
    /**/
    // console.group('(Mock)StageComparatorNumberTableComponent::ngOnChanges()');
    // console.log(`changes: ${JSON.stringify(changes)}`);
    // console.groupEnd();
  }
}
