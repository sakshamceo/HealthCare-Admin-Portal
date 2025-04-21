import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './Auth-Service/auth.service';
import { SharedService } from './shared-service/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AddReportComponent } from './add-report/add-report.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminLoginComponent,
    SearchBoxComponent,
    AddReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
