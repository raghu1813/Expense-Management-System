import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    registerMode = false;
  model: any = {};
  constructor(public authService: AuthService,
              private alertify: AlertifyService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.model.username = this.f.username.value;
    this.model.password = this.f.password.value;
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.success('Logged in successfully');
      },
      error => {
        this.alertify.error('Failed to login');
      },()=>{
        this.router.navigate(['/expense-submission']);
      }
    );
  }

  loggedIn() {
   return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/login']);

  }
  registerToggle(){

    this.registerMode = true;
  }
 
cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;

  }
}
