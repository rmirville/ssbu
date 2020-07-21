import { Component, Input } from '@angular/core';

import { BinnedStageDimensionsSet } from '../../models/binned-stage-dimensions-set.model';

@Component({
  selector: 'ssbu-stage-comparator-graph',
  template: 'SSBU Stage Comparator Graph'
})
export class StageComparatorGraphMockComponent {
  @Input() stageData: BinnedStageDimensionsSet;
  @Input() dimension: string = 'blastzoneWidth';
}
