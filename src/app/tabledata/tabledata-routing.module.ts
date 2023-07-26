import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabledataComponent } from './tabledata.component';

const routes: Routes = [{ path: '', component: TabledataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabledataRoutingModule { }
