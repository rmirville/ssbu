import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '',
    redirectTo: 'stage-comparator',
    pathMatch: 'full'
  },
  {
    path: 'stage-comparator',
    loadChildren: () => import('./modules/stage-comparator/stage-comparator.module').then(m => m.StageComparatorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
