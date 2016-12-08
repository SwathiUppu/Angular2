import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe-services';

@Component({
  templateUrl: 'app/recipes/dessert-recipes.component.html',
	styleUrls: ['app/recipes/recipes.css']
})

export class DessertComponent implements OnInit {
  recipes: any[];
  constructor(private _recipeService: RecipeService) {}

  ngOnInit(): void {
    this._recipeService.getRecipes('desserts')
        .subscribe(data => this.recipes = data);
  }
}