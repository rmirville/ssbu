import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

import { StageSelectInfo } from '../../models/stage-select-info.model';

@Component({
  selector: 'ssbu-stage-select-host',
  template:
    `<ssbu-stage-select
      [stages]="stages"
      [parentEvent$]="selectSubject$.asObservable()"
      (submitSelection)="updateSelection($event)"
    ></ssbu-stage-select>`
})
export class StageSelectHostMockComponent implements OnInit, OnChanges {
  stages: StageSelectInfo[];
  selectedStages: string[];
  selectSubject$: Subject<string> = new Subject<string>();

  constructor() {
    this.selectedStages = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    /**/
    console.group('StageSelectHostMockComponent::ngOnChanges()');
    console.log(`StageSelectHost changes: ${JSON.stringify(changes)}`);
    console.groupEnd();
  }

  ngOnInit() {
  }

  updateSelection(emittedStages: string[]) {
    this.selectedStages = [...emittedStages];
  }
}
