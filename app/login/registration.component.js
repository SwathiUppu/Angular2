"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const forms_1 = require('@angular/forms');
let RegistrationComponent = class RegistrationComponent {
    constructor(_route, _router, fb) {
        this._route = _route;
        this._router = _router;
        this.fb = fb;
        this.pageTitle = 'Registration';
        this.submitted = false;
        this.model = {};
        this.registrationForm = fb.group({
            'firstname': [null, forms_1.Validators.required],
            'lastname': [null, forms_1.Validators.required],
            'email': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')])],
            'username': [null, forms_1.Validators.required],
            'password': [null, forms_1.Validators.required]
        });
    }
    changeUsername(value, modelname) {
        if (value && value.length > 0) {
            this.model[modelname] = value.charAt(0).toUpperCase() + value.slice(1);
        }
        else {
            this.model[modelname] = value;
        }
    }
    registrationSubmit(isValid) {
        this.submitted = true;
        if (isValid) {
            this._router.navigate(['/login'], { queryParams: { registered: 'true' } });
        }
    }
};
RegistrationComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/login/registration.component.html',
        styleUrls: ['app/login/login.component.css']
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map