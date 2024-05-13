import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LnfLoginPage } from './lnf-login.page';

const routes: Routes = [
  {
    path: '',
    component: LnfLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LnfLoginPageRoutingModule {}
