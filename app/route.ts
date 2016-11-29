import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent }  from './home/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration.component';
import { RecipeComponent } from './recipes-home/recipe-home.component';
import { AppetizerComponent } from './recipes/appetizer-recipes.component';
import { DesertComponent } from './recipes/desert-recipes.component';
import { EntreeComponent } from './recipes/entree-recipes.component';
import { SelectedRecipeComponent } from './recipes/selected-recipe.component';
import { RecipeListComponent } from './recipes-home/recipe-list.component';

const routes: Routes = [
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'login', component: LoginComponent, data : {some_data : 'some value'} },
	{ path: 'registration', component: RegistrationComponent },
	{ path: 'recipes-home', component: RecipeComponent },
	{ path: 'recipeList', component: RecipeListComponent },
	{ path: 'appetizer', component: AppetizerComponent },
	{ path: 'desert', component: DesertComponent },
	{ path: 'entree', component: EntreeComponent },
	{ path: 'selectedRecipe/:recipeType/:recipeName', component: SelectedRecipeComponent },
	{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
	{ path:'**', redirectTo: 'welcome', pathMatch: 'full' }
	];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}