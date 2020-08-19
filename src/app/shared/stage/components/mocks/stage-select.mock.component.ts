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
  updateSuccess: boolean;

  constructor() {
    this.fatalError = false;
    this.updateSuccess = false;
  }

  _initParentEvent(): void {
    if (this.parentEvent$ !== undefined) {
      this.parentEvent$.subscribe({
        next: event => {
          switch (event) {
            case 'fatalError':
              this.fatalError = true;
              break;
            case 'updateSuccess':
              this.updateSuccess = true;
              setTimeout(() => {
                this.updateSuccess = false;
              }, 1000);
              break;
          }
        }
      });
    }
  }

  ngOnInit() {
    this._initParentEvent();
  }
}
