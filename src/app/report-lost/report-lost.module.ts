import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportLostPageRoutingModule } from './report-lost-routing.module';

import { ReportLostPage } from './report-lost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportLostPageRoutingModule
  ],
  declarations: [ReportLostPage]
})
export class ReportLostPageModule {}
