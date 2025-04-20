import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AddReportComponent } from './add-report/add-report.component';

const routes: Routes = [
  {path: 'patient-record',component:SearchBoxComponent},
  {path:'add-report',component:AddReportComponent},
  {path:'admin-login', component:AdminLoginComponent},
  {path:'',component: DashboardComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
