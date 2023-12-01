import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesenlacePage } from './desenlace.page';

const routes: Routes = [
  {
    path: '',
    component: DesenlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesenlacePageRoutingModule {}
