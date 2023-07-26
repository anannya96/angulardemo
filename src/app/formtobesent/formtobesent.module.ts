import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormtobesentRoutingModule } from './formtobesent-routing.module';
import { FormtobesentComponent } from './formtobesent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormtobesentComponent
  ],
  imports: [
    CommonModule,
    FormtobesentRoutingModule,FormsModule
  ]
})
export class FormtobesentModule { }
