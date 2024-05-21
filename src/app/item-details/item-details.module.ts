import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ItemDetailsPageRoutingModule } from './item-details-routing.module';

import { ItemDetailsPage } from './item-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetailsPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemDetailsPage // Route configuration for the item-details page
      }
    ])
  ],
  declarations: [ItemDetailsPage]
})
export class ItemDetailsPageModule {}
