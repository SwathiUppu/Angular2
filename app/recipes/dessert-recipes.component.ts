import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe-services';

@Component({
  templateUrl: 'app/recipes/dessert-recipes.component.html',
	styleUrls: ['app/css/courses.css', 'app/css/common.css']
})

export class DessertComponent implements OnInit {
  recipes: any[];
  constructor(private _recipeService: RecipeService) {}

  ngOnInit(): void {
    this._recipeService.getRecipes('desserts')
        .subscribe(data => this.recipes = data);
  }
}