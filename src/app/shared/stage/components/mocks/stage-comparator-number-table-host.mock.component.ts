import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

import { BinnedStageDimensionsSet } from '../../models/binned-stage-dimensions-set.model';

@Component({
  selector: 'ssbu-stage-comparator-number-table-host',
  template:
    `<ssbu-stage-comparator-number-table
      [stageData]="binnedStageDimensionsSet"
      [dimension]="selectedDimension"
    ></ssbu-stage-comparator-number-table>`
})
export class StageComparatorNumberTableHostMockComponent implements OnInit, OnChanges {
  binnedStageDimensionsSet: BinnedStageDimensionsSet;
  selectSubject$: Subject<string> = new Subject<string>();
  selectedDimension: string = 'blastzoneWidth';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    ///
    // console.group('StageComparatorNumberTableHostMockComponent::ngOnChanges()');
    // console.log(`StageComparatorNumberTableHost changes: ${JSON.stringify(changes)}`);
    // console.groupEnd();
  }

  ngOnInit() {
  }
}
