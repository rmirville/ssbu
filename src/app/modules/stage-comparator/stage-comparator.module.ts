import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StageComparatorComponent } from './components/stage-comparator/stage-comparator.component';

const stageComparatorRoutes: Routes = [{
  path: '',
  component: StageComparatorComponent
}];

@NgModule({
  declarations: [StageComparatorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(stageComparatorRoutes)
  ]
})
export class StageComparatorModule { }
