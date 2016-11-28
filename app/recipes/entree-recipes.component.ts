import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe-services';

@Component({
  templateUrl: 'app/recipes/entree-recipes.component.html'
})

export class EntreeComponent implements OnInit {
  recipes: any[];
  constructor(private _recipeService: RecipeService) {}

  ngOnInit(): void {
    this._recipeService.getRecipes('entree')
        .subscribe(data => this.recipes = data);
  }
}