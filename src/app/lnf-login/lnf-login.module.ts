import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LnfLoginPageRoutingModule } from './lnf-login-routing.module';

import { LnfLoginPage } from './lnf-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LnfLoginPageRoutingModule
  ],
  declarations: [LnfLoginPage]
})
export class LnfLoginPageModule {}
