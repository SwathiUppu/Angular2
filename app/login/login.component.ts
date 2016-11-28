import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'app/login/login.component.html',
  styleUrls: ['app/login/login.component.css']
})

export class LoginComponent {
  pageTitle: string = 'Login Page';
  username: string;
  password: string;
  submitted: boolean = false;
  registered: boolean = false;
  loginFailed: boolean = false;
  model: any = {};

  constructor(private _route: ActivatedRoute, private _router: Router) {
   /* if(this._route.queryParams._value && this._route.queryParams._value.registered) {
      this.registered = true;
    }*/
  }

 loginSubmit(): void {
   this.registered = false;
   this.submitted = true;
   if(this.model.username && this.model.password) {
     this.submitted = false;
     if(this.model.username === 'user' && this.model.password === 'user'){
     this._router.navigate(['/recipes-home'])
     this.loginFailed = false;
   } else {
     this.loginFailed = true;
   }
   }
 }
 }


