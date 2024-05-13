import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportLostPage } from './report-lost.page';

const routes: Routes = [
  {
    path: '',
    component: ReportLostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportLostPageRoutingModule {}
