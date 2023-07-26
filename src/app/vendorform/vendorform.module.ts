import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { VendorformRoutingModule } from './vendorform-routing.module';
import { VendorformComponent } from './vendorform.component';


@NgModule({
  declarations: [
    VendorformComponent
  ],
  imports: [
    CommonModule,
    VendorformRoutingModule, FormsModule,
  ]
})
export class VendorformModule { }
