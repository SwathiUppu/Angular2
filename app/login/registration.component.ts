import { Component } from '@angular/core';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: 'app/login/registration.component.html',
		styleUrls: ['app/login/login.component.css']
})

export class RegistrationComponent {
  pageTitle: string = 'Registration';
	model: any = {};
	constructor(private _route: ActivatedRoute, private _router: Router) {
		//console.log(this._route.snapshot.data);
	}
	changeUsername(value: string, modelname: string)  {
		if(value.length > 0) {
      this.model[modelname] = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model[modelname] = value;
    }
  }
	registrationSubmit(): void {
		if(this.model.firstname && this.model.lastname && this.model.email && this.model.username && this.model.password) {
			this._router.navigate(['/login'],{ queryParams: { registered:'true'}})
		} else {
			
		}
	}
	
	
}

