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
let RegistrationComponent = class RegistrationComponent {
    constructor(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.pageTitle = 'Registration';
        this.model = {};
        //console.log(this._route.snapshot.data);
    }
    changeUsername(value, modelname) {
        if (value.length > 0) {
            this.model[modelname] = value.charAt(0).toUpperCase() + value.slice(1);
        }
        else {
            this.model[modelname] = value;
        }
    }
    registrationSubmit() {
        if (this.model.firstname && this.model.lastname && this.model.email && this.model.username && this.model.password) {
            this._router.navigate(['/login'], { queryParams: { registered: 'true' } });
        }
        else {
        }
    }
};
RegistrationComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/login/registration.component.html',
        styleUrls: ['app/login/login.component.css']
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map