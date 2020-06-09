import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'stage-comparison',
    loadChildren: () => import('./modules/stage-comparator/stage-comparator.module').then(m => m.StageComparatorModule)
  },
  {
    path: 'credits',
    loadChildren: () => import('./modules/credits/credits.module').then(m => m.CreditsModule)
  },
  { path: '',
    redirectTo: 'stage-comparison',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
