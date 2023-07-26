import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerDataComponent } from './buyer-data.component';

const routes: Routes = [{ path: '', component: BuyerDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerDataRoutingModule { }
