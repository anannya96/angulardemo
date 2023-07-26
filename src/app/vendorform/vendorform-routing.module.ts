import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorformComponent } from './vendorform.component';

const routes: Routes = [{ path: '', component: VendorformComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorformRoutingModule { }
