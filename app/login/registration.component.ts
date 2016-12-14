import { Component } from '@angular/core';
import { Users } from '../data/users'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'app/login/registration.component.html',
    styleUrls: ['app/css/common.css', 'app/css/login-registration.css']
})

export class 	RegistrationComponent {
  registrationForm: FormGroup;
  pageTitle: string = 'Registration';
  submitted: boolean = false;
  model: Users{};
	genders: any[] = ["Male", "Female"];
  constructor(private _route: ActivatedRoute, private _router: Router, private fb: FormBuilder) {
    this.registrationForm = fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
			'gender':[null, Validators.required],
      'email': [null, Validators.compose([ Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')])],
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  changeUsername(value: string, modelname: string)  {
    if(value && value.length > 0) {
      this.model[modelname] = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model[modelname] = value;
    }
  }

  registrationSubmit(isValid:boolean): void {
    this.submitted = true;
    if(isValid) {
      this._router.navigate(['/login'],{ queryParams: { registered:'true'}})
    }
  }
}


