import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MasterpageRoutingModule } from './masterpage-routing.module';
import { MasterpageComponent } from './masterpage.component';



@NgModule({
  declarations: [
    MasterpageComponent
  ],
  imports: [
    CommonModule,
    MasterpageRoutingModule,FormsModule
  ]
})
export class MasterpageModule { }
