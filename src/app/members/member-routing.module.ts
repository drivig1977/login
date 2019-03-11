import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  //{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  //{ path: 'clear', loadChildren: './clear/clear.module#ClearPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  /*{ path: 'first-with-tabs', loadChildren: './first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule' },
  { path: 'second', loadChildren: './second/second.module#SecondPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },*/
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
