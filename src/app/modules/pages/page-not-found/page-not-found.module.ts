import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found.component';

const PAGE_NOT_FOUND_ROUTES: Routes = [{
  path: '',
  component: PageNotFoundComponent
}];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PAGE_NOT_FOUND_ROUTES)
  ]
})
export class PageNotFoundModule { }
