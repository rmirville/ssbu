import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StageComparatorComponent } from './components/stage-comparator/stage-comparator.component';
import { StageComparatorNumberTableComponent } from './components/stage-comparator-number-table/stage-comparator-number-table.component';
import { StageComparatorGraphComponent } from './components/stage-comparator-graph/stage-comparator-graph.component';
import { StageComparatorTextTableComponent } from './components/stage-comparator-text-table/stage-comparator-text-table.component';

const stageComparatorRoutes: Routes = [{
  path: '',
  component: StageComparatorComponent,
  children: [
    {
      path: '',
      redirectTo: 'graph'
    },
    {
      path: 'graph',
      component: StageComparatorGraphComponent
    },
    {
      path: 'summary',
      component: StageComparatorTextTableComponent
    },
    {
      path: 'numbers',
      component: StageComparatorNumberTableComponent
    }
  ]
}];

@NgModule({
  declarations: [StageComparatorComponent, StageComparatorNumberTableComponent, StageComparatorGraphComponent, StageComparatorTextTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(stageComparatorRoutes)
  ]
})
export class StageComparatorModule { }
