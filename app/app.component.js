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
const product_service_1 = require('./products/product.service');
const recipe_services_1 = require('./services/recipe-services');
let AppComponent = class AppComponent {
    constructor() {
        this.pageTitle = 'My First Angular 2 project';
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: `<nav class="navbar navbar-default">
	              <div class="container-fluid">
								  <a class="navbar-brand">{{pageTitle}}</a>
									<ul class="nav navbar-nav">
									  <li><a [routerLink]="['/welcome']">Home</a></li>
										<li><a [routerLink]="['/products']">ProductList</a></li>
									</ul>
								</div>
							</nav>
							<div class="container">
							  <router-outlet></router-outlet>
							</div>`,
        providers: [product_service_1.ProductService, recipe_services_1.RecipeService]
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map