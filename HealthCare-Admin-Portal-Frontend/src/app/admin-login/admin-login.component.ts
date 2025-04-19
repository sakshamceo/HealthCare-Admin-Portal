import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  authForm!: FormGroup;
  isLoginMode = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: [''] // used only in signup mode
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
      console.log('Logging in with', { email, password });
      // Add login logic here
    } else {
      console.log('Signing up with', { name, email, password });
      // Add signup logic here
    }
  }
}
