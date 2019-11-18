import { Component, Input } from '@angular/core';

import { StageSelectInfo } from '../../models/stage-select-info.model';

@Component({
  selector: 'ssbu-stage-select',
  template: 'SSBU Stage Select'
})
export class StageSelectMockComponent {
  @Input() stages: StageSelectInfo[];
}
