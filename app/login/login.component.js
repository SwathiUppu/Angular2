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
let LoginComponent = class LoginComponent {
    constructor(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.pageTitle = 'Login';
        this.submitted = false;
        this.registered = false;
        this.loginFailed = false;
        this.model = {};
        /* if(this._route.queryParams._value && this._route.queryParams._value.registered) {
           this.registered = true;
         }*/
    }
    loginSubmit() {
        this.registered = false;
        this.submitted = true;
        if (this.model.username && this.model.password) {
            this.submitted = false;
            if (this.model.username === 'user' && this.model.password === 'user') {
                this._router.navigate(['/recipes-home']);
                this.loginFailed = false;
            }
            else {
                this.loginFailed = true;
            }
        }
    }
};
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/login/login.component.html',
        styleUrls: ['app/login/login.component.css']
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map