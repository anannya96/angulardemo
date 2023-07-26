import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabledataRoutingModule } from './tabledata-routing.module';
import { TabledataComponent } from './tabledata.component';


@NgModule({
  declarations: [
    TabledataComponent
  ],
  imports: [
    CommonModule,
    TabledataRoutingModule,
    FormsModule
  ]
})
export class TabledataModule { }
