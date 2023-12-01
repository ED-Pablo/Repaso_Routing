import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NudoPage } from './nudo.page';

const routes: Routes = [
  {
    path: '',
    component: NudoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NudoPageRoutingModule {}
