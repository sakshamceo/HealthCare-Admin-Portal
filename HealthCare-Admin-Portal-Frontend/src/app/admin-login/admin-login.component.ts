import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../Auth-Service/auth.service';
import { catchError } from 'rxjs';
import { SharedService } from '../shared-service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  authForm!: FormGroup;
  isLoginMode = true;

  constructor(private fb: FormBuilder,
    private auth:AuthService,
    private shared:SharedService,
    private route:Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['']
    });
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
    if (!this.isLoginMode) {
      this.authForm.get('name')?.setValidators([Validators.required]);
    } else {
      this.authForm.get('name')?.clearValidators();
    }
    this.authForm.get('name')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.authForm.invalid) return;

    const { email, password, name } = this.authForm.value;

    if (this.isLoginMode) {
      this.auth.login(email,password).subscribe({
        next:(result)=>{
        },
        error:(err)=>{console.error(err);}
      })
      console.log('Logging in with', { email, password });
      
    } else {
      this.auth.signup(name,email,password).subscribe({
        next:(res)=>{
        this.route.navigate(['/']); 
        this.switchMode();
        },
        error:(err)=>{
        console.error(err);
        }
      })
      console.log('Signing up with', { name, email, password });
    }
  }
}
