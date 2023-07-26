import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerDataRoutingModule } from './buyer-data-routing.module';
import { BuyerDataComponent } from './buyer-data.component';


@NgModule({
  declarations: [
    BuyerDataComponent
  ],
  imports: [
    CommonModule,
    BuyerDataRoutingModule
  ]
})
export class BuyerDataModule { }
