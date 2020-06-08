import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreditsComponent } from './components/credits.component';

const CREDITS_ROUTES: Routes = [{
  path: '',
  component: CreditsComponent
}];

@NgModule({
  declarations: [CreditsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CREDITS_ROUTES)
  ]
})
export class CreditsModule { }
