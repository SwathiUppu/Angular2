import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe-services';

@Component({
  templateUrl: 'app/recipes/appetizer-recipes.component.html',
	styleUrls: ['app/recipes/recipes.css']
})

export class AppetizerComponent implements OnInit {
  recipes: any[];
  constructor(private _recipeService: RecipeService) {}

  ngOnInit(): void {
  this._recipeService.getRecipes('appetizers')
      .subscribe(data => this.recipes = data);
  }
}


