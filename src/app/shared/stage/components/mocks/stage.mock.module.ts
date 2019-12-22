import { NgModule } from '@angular/core';

import { StageComparatorGraphMockComponent } from './stage-comparator-graph.mock.component';
import { StageComparatorNumberTableMockComponent } from './stage-comparator-number-table.mock.component';
import { StageComparatorTextTableMockComponent } from './stage-comparator-text-table.mock.component';
import { StageSelectHostMockComponent } from './stage-select-host.mock.component';
import { StageSelectMockComponent } from './stage-select.mock.component';

@NgModule({
  declarations: [
    StageComparatorGraphMockComponent,
    StageComparatorNumberTableMockComponent,
    StageComparatorTextTableMockComponent,
    StageSelectHostMockComponent,
    StageSelectMockComponent
  ]
})
export class StageMockModule { }
