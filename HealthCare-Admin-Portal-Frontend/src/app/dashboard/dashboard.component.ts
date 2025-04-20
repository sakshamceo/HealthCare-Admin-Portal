import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  isLoggedIn:boolean = false;
  constructor(private shared : SharedService,
    private route:Router
  ){}
  ngOnInit(): void {
   this.shared.isLoggedIn$.subscribe(result=>{this.isLoggedIn=result;})
  }
  getStarted(){
   this.isLoggedIn?this.route.navigate(['/patient-record']):this.route.navigate(['/admin-login']);
  }
}
