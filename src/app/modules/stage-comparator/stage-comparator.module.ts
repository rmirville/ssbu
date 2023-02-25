import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StageSelectComponent } from '../../shared/stage/components/stage-select/stage-select.component';
import { StageComparatorComponent } from './components/stage-comparator/stage-comparator.component';
import { StageComparatorGraphComponent } from './components/stage-comparator-graph/stage-comparator-graph.component';
import { StageComparatorNumberTableComponent } from './components/stage-comparator-number-table/stage-comparator-number-table.component';
import { StageComparatorTextTableComponent } from './components/stage-comparator-text-table/stage-comparator-text-table.component';
import { StageComparatorResolverService } from './stage-comparator-resolver.service';

const STAGE_COMPARATOR_ROUTES: Routes = [{
  path: '',
  component: StageComparatorComponent,
  resolve: { stageData: () => inject(StageComparatorResolverService).resolve() }
}];

@NgModule({
  declarations: [
    StageSelectComponent,
    StageComparatorComponent,
    StageComparatorGraphComponent,
    StageComparatorNumberTableComponent,
    StageComparatorTextTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(STAGE_COMPARATOR_ROUTES)
  ],
  providers: [
    StageComparatorResolverService
  ]
})
export class StageComparatorModule { }
