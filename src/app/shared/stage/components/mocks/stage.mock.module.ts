import { NgModule } from '@angular/core';

import { StageComparatorGraphMockComponent } from './stage-comparator-graph.mock.component';
import { StageComparatorGraphHostMockComponent } from './stage-comparator-graph-host.mock.component';
import { StageComparatorNumberTableMockComponent } from './stage-comparator-number-table.mock.component';
import { StageComparatorNumberTableHostMockComponent } from './stage-comparator-number-table-host.mock.component';
import { StageComparatorTextTableMockComponent } from './stage-comparator-text-table.mock.component';
import { StageComparatorTextTableHostMockComponent } from './stage-comparator-text-table-host.mock.component';
import { StageSelectHostMockComponent } from './stage-select-host.mock.component';
import { StageSelectMockComponent } from './stage-select.mock.component';

@NgModule({
  declarations: [
    StageComparatorGraphMockComponent,
    StageComparatorGraphHostMockComponent,
    StageComparatorNumberTableMockComponent,
    StageComparatorNumberTableHostMockComponent,
    StageComparatorTextTableMockComponent,
    StageComparatorTextTableHostMockComponent,
    StageSelectHostMockComponent,
    StageSelectMockComponent
  ]
})
export class StageMockModule { }
