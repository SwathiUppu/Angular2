import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule }  from '@angular/http';

import { ProductListComponent }  from './products/product-list.component';
import { ProductFilterPipe }  from './products/product-filter.pipe';
import { StarComponent }  from './shared/star.component';
import { WelcomeComponent }  from './home/welcome.component';

import { ProductDetailGuard }  from './products/product-guard.service';
import { RecipeService }  from './services/recipe-services';
import { ProductDetailComponent }  from './products/product-details.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration.component';
import { RecipeComponent } from './recipes-home/recipe-home.component';
import { CarouselComponent } from './shared/carousel';
import { RecipeListComponent } from './recipes-home/recipe-list.component';
import { AppetizerComponent } from './recipes/appetizer-recipes.component';
import { EntreeComponent } from './recipes/entree-recipes.component';
import { DesertComponent } from './recipes/desert-recipes.component';
import { SelectedRecipeComponent } from './recipes/selected-recipe.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
	{ path: 'products', component: ProductListComponent },
	{ path: 'products/:id', canActivate:[ ProductDetailGuard ], component: ProductDetailComponent },
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'login', component: LoginComponent, data : {some_data : 'some value'} },
	{ path: 'registration', component: RegistrationComponent },
	{ path: 'recipes-home', component: RecipeComponent },
	{ path: 'recipeList', component: RecipeListComponent },
	{ path: 'appetizers', component: AppetizerComponent },
	{ path: 'deserts', component: DesertComponent },
	{ path: 'entree', component: EntreeComponent },
	{ path: 'selectedRecipe/:recipeType/:recipeName', component: SelectedRecipeComponent },
	{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
	{ path:'**', redirectTo: 'welcome', pathMatch: 'full' }
	], { useHash: false }) ],
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe, StarComponent, WelcomeComponent, ProductDetailComponent, LoginComponent, RegistrationComponent, RecipeComponent, CarouselComponent, RecipeListComponent, AppetizerComponent, EntreeComponent, DesertComponent, SelectedRecipeComponent ],
	providers: [ ProductDetailGuard, RecipeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
