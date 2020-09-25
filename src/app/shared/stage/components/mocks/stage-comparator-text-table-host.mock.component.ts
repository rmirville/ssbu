import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

import { BinnedStageDimensionsSet } from '../../models/binned-stage-dimensions-set.model';

@Component({
  selector: 'ssbu-stage-comparator-text-table-host',
  template:
    `<ssbu-stage-comparator-text-table
      [stageData]="binnedStageDimensionsSet"
      [dimension]="selectedDimension"
    ></ssbu-stage-comparator-text-table>`
})
export class StageComparatorTextTableHostMockComponent implements OnInit, OnChanges {
  binnedStageDimensionsSet: BinnedStageDimensionsSet;
  selectSubject$: Subject<string> = new Subject<string>();
  selectedDimension: string = 'blastzoneWidth';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    ///
    // console.group('StageComparatorTextTableHostMockComponent::ngOnChanges()');
    // console.log(`StageComparatorTextTableHost changes: ${JSON.stringify(changes)}`);
    // console.groupEnd();
  }

  ngOnInit() {
  }
}
