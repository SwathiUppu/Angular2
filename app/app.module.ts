import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule }  from '@angular/http';
import { WelcomeComponent }  from './home/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration.component';
import { RecipeComponent } from './recipes-home/recipe-home.component';
import { AppetizerComponent } from './recipes/appetizer-recipes.component';
import { DesertComponent } from './recipes/desert-recipes.component';
import { EntreeComponent } from './recipes/entree-recipes.component';
import { SelectedRecipeComponent } from './recipes/selected-recipe.component';
import { RecipeListComponent } from './recipes-home/recipe-list.component';
import { RecipeService }  from './services/recipe-services';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './shared/carousel';
import { AppRoutingModule } from './route';
import { TestDirective } from './directives/test.directive'

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, ReactiveFormsModule, AppRoutingModule ],
  declarations: [ AppComponent, WelcomeComponent, LoginComponent, RegistrationComponent, RecipeComponent, CarouselComponent, RecipeListComponent, AppetizerComponent, EntreeComponent, DesertComponent, SelectedRecipeComponent, TestDirective ],
	providers: [  RecipeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
