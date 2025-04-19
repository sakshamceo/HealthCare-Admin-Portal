import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'admin-login', component:AdminLoginComponent},
  {path:'',component: DashboardComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
