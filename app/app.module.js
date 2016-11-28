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
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const app_component_1 = require('./app.component');
const http_1 = require('@angular/http');
const product_list_component_1 = require('./products/product-list.component');
const product_filter_pipe_1 = require('./products/product-filter.pipe');
const star_component_1 = require('./shared/star.component');
const welcome_component_1 = require('./home/welcome.component');
const product_guard_service_1 = require('./products/product-guard.service');
const recipe_services_1 = require('./services/recipe-services');
const product_details_component_1 = require('./products/product-details.component');
const router_1 = require('@angular/router');
const login_component_1 = require('./login/login.component');
const registration_component_1 = require('./login/registration.component');
const recipe_home_component_1 = require('./recipes-home/recipe-home.component');
const carousel_1 = require('./shared/carousel');
const recipe_list_component_1 = require('./recipes-home/recipe-list.component');
const appetizer_recipes_component_1 = require('./recipes/appetizer-recipes.component');
const entree_recipes_component_1 = require('./recipes/entree-recipes.component');
const desert_recipes_component_1 = require('./recipes/desert-recipes.component');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot([
                { path: 'products', component: product_list_component_1.ProductListComponent },
                { path: 'products/:id', canActivate: [product_guard_service_1.ProductDetailGuard], component: product_details_component_1.ProductDetailComponent },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'login', component: login_component_1.LoginComponent, data: { some_data: 'some value' } },
                { path: 'registration', component: registration_component_1.RegistrationComponent },
                { path: 'recipes-home', component: recipe_home_component_1.RecipeComponent },
                { path: 'recipeList', component: recipe_list_component_1.RecipeListComponent },
                { path: 'appetizers', component: appetizer_recipes_component_1.AppetizerComponent },
                { path: 'deserts', component: desert_recipes_component_1.DesertComponent },
                { path: 'entree', component: entree_recipes_component_1.EntreeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ], { useHash: false })],
        declarations: [app_component_1.AppComponent, product_list_component_1.ProductListComponent, product_filter_pipe_1.ProductFilterPipe, star_component_1.StarComponent, welcome_component_1.WelcomeComponent, product_details_component_1.ProductDetailComponent, login_component_1.LoginComponent, registration_component_1.RegistrationComponent, recipe_home_component_1.RecipeComponent, carousel_1.CarouselComponent, recipe_list_component_1.RecipeListComponent, appetizer_recipes_component_1.AppetizerComponent, entree_recipes_component_1.EntreeComponent, desert_recipes_component_1.DesertComponent],
        providers: [product_guard_service_1.ProductDetailGuard, recipe_services_1.RecipeService],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map