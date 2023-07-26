import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent,
    children:[
      { path: '',component:ChartComponent
   
    },
      { 
      path: 'test', 
      loadChildren: () => import('./test/test.module').then(m => m.TestModule)
     },
     { path: 'display', loadChildren: () => import('./display/display.module').then(m => m.DisplayModule) },
     { path: 'formtobesent', loadChildren: () => import('./formtobesent/formtobesent.module').then(m => m.FormtobesentModule) },
     { path: 'test1', loadChildren: () => import('./test1/test1.module').then(m => m.Test1Module) },
     
     { path: 'vendorform', loadChildren: () => import('./vendorform/vendorform.module').then(m => m.VendorformModule) },
    
     //{ path: 'formtobesent', loadChildren: () => import('./formtobesent/formtobesent.module').then(m => m.FormtobesentModule) },
     { path: 'masterpage', loadChildren: () => import('./masterpage/masterpage.module').then(m => m.MasterpageModule) },
     { path: 'BuyerData', loadChildren: () => import('./buyer-data/buyer-data.module').then(m => m.BuyerDataModule) },
     { path: 'tabledata', loadChildren: () => import('./tabledata/tabledata.module').then(m => m.TabledataModule) },
  
    ]

  },

  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'homepage', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'tabledata', loadChildren: () => import('./tabledata/tabledata.module').then(m => m.TabledataModule) },
  { path: 'adminpage', loadChildren: () => import('./adminpage/adminpage.module').then(m => m.AdminpageModule) },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
