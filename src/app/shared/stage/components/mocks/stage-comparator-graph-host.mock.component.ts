import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

import { BinnedStageDimensionsSet } from '../../models/binned-stage-dimensions-set.model';

@Component({
  selector: 'ssbu-stage-comparator-graph-host',
  template:
    `<ssbu-stage-comparator-graph
      [stageData]="binnedStageDimensionsSet"
    ></ssbu-stage-comparator-graph>`
})
export class StageComparatorGraphHostMockComponent implements OnInit, OnChanges {
  binnedStageDimensionsSet: BinnedStageDimensionsSet;
  selectSubject$: Subject<string> = new Subject<string>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    ///
    console.group('StageComparatorGraphHostMockComponent::ngOnChanges()');
    console.log(`StageComparatorGraphHost changes: ${JSON.stringify(changes)}`);
    console.groupEnd();
  }

  ngOnInit() {
  }
}
