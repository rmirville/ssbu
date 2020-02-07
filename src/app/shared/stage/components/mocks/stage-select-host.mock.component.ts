import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { StageSelectInfo } from '../../models/stage-select-info.model';

@Component({
  selector: 'ssbu-stage-select-host',
  template:
    `<ssbu-stage-select
      [stages]="stages"
      (submitSelection)="updateSelection($event)"
    ></ssbu-stage-select>`
})
export class StageSelectHostMockComponent implements OnInit, OnChanges {
  stages: StageSelectInfo[];
  selectedStages: string[];

  constructor() {
    this.selectedStages = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    /**/
    console.group('StageSelectHostMockComponent::ngOnChanges()');
    console.log(`StageSelectHost changes: ${JSON.stringify(changes)}`);
    console.groupEnd();
  }

  ngOnInit() {}

  updateSelection(emittedStages: string[]) {
    this.selectedStages = [...emittedStages];
  }
}
