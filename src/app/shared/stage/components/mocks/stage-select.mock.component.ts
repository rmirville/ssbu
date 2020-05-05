import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { StageClassifications } from '../../models/stage-classifications.model';

@Component({
  selector: 'ssbu-stage-select',
  template: 'SSBU Stage Select'
})
export class StageSelectMockComponent implements OnInit {
  @Input() stages: StageClassifications[];
  @Input() parentEvent$: Observable<string>;
  @Output() submitSelection: EventEmitter<string[]> = new EventEmitter<string[]>();
  fatalError: boolean;

  constructor() {
    this.fatalError = false;
  }

  _initParentEvent(): void {
    if (this.parentEvent$ !== undefined) {
      this.parentEvent$.subscribe({
        next: event => {
          switch (event) {
            case 'fatalError':
              this.fatalError = true;
          }
        }
      });
    }
  }

  ngOnInit() {
    this._initParentEvent();
  }
}
