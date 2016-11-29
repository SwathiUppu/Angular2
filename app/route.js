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
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const http_1 = require('@angular/http');
const welcome_component_1 = require('./home/welcome.component');
const product_details_component_1 = require('./products/product-details.component');
const login_component_1 = require('./login/login.component');
const registration_component_1 = require('./login/registration.component');
const recipe_home_component_1 = require('./recipes-home/recipe-home.component');
const recipe_list_component_1 = require('./recipes-home/recipe-list.component');
const appetizer_recipes_component_1 = require('./recipes/appetizer-recipes.component');
const entree_recipes_component_1 = require('./recipes/entree-recipes.component');
const desert_recipes_component_1 = require('./recipes/desert-recipes.component');
const selected_recipe_component_1 = require('./recipes/selected-recipe.component');
const routings = [
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'login', component: login_component_1.LoginComponent, data: { some_data: 'some value' } },
    { path: 'registration', component: registration_component_1.RegistrationComponent },
    { path: 'recipes-home', component: recipe_home_component_1.RecipeComponent },
    { path: 'recipeList', component: recipe_list_component_1.RecipeListComponent },
    { path: 'appetizer', component: appetizer_recipes_component_1.AppetizerComponent },
    { path: 'desert', component: desert_recipes_component_1.DesertComponent },
    { path: 'entree', component: entree_recipes_component_1.EntreeComponent },
    { path: 'selectedRecipe/:recipeType/:recipeName', component: selected_recipe_component_1.SelectedRecipeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
let RoutingComponent = class RoutingComponent {
};
RoutingComponent = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(routings, { useHash: false })],
    }), 
    __metadata('design:paramtypes', [])
], RoutingComponent);
exports.RoutingComponent = RoutingComponent;
class DeclarationComponent {
}
exports.DeclarationComponent = DeclarationComponent;
[welcome_component_1.WelcomeComponent, product_details_component_1.ProductDetailComponent, login_component_1.LoginComponent, registration_component_1.RegistrationComponent, recipe_home_component_1.RecipeComponent, recipe_list_component_1.RecipeListComponent, appetizer_recipes_component_1.AppetizerComponent, entree_recipes_component_1.EntreeComponent, desert_recipes_component_1.DesertComponent, selected_recipe_component_1.SelectedRecipeComponent];
//# sourceMappingURL=route.js.map