import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe-services';

@Component({
  templateUrl: 'app/recipes/desert-recipes.component.html'
})

export class DesertComponent implements OnInit {
  recipes: any[];
  constructor(private _recipeService: RecipeService) {}

  ngOnInit(): void {
    this._recipeService.getRecipes('deserts')
        .subscribe(data => this.recipes = data);
  }
}