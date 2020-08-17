import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'stage-comparison',
    loadChildren: () => import('./modules/stage-comparator/stage-comparator.module').then(m => m.StageComparatorModule)
  },
  {
    path: '404',
    loadChildren: () => import('./modules/pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
  {
    path: '',
    redirectTo: 'stage-comparison',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES,
    {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
