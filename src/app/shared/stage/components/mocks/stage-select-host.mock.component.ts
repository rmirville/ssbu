import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { StageSelectInfo } from '../../models/stage-select-info.model';

@Component({
  selector: 'ssbu-stage-select-host',
  template: `<ssbu-stage-select [stages]="stages"></ssbu-stage-select>`
})
export class StageSelectHostMockComponent implements OnInit, OnChanges {
  stages: StageSelectInfo[];

  ngOnChanges(changes: SimpleChanges) {
    console.log(`StageSelectHost changes: ${JSON.stringify(changes)}`);
  }

  ngOnInit() {}
}
