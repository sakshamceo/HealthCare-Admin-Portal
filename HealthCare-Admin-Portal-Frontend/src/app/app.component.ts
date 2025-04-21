import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared-service/shared.service';
import { catchError } from 'rxjs';
import { AuthService } from './Auth-Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HealthPortal--hackathon';
  isLoggedIn: boolean = false;
  constructor(private router: Router,
    private shared:SharedService,
    private auth: AuthService
  ) {}
  ngOnInit(): void {
    // const isLogged = localStorage.getItem('isLoggedIn');
    // this.isLoggedIn = isLogged === 'true';
    // this.auth.isLoggedIn = this.isLoggedIn;
    this.shared.isLoggedIn(this.isLoggedIn);
  }
  addNewReport(){
   this.router.navigate(['/add-report'])
  }
  goToAdminLogin() {
    this.router.navigate(['/admin-login'])
  }
}
