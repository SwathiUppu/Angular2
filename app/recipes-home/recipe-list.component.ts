import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe-services';

@Component({
  templateUrl: 'app/recipes-home/recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
  recipeCount: any[];
	countTitles: any{};
	constructor(private _recipeService: RecipeService) {}
	setCountData(data): void {
		this.recipeCount = data;
		this.countTitles.appetizers = data.appetizers.vegetarian + ' veg appetizers ' + data.appetizers.vegetarian + ' non veg appetizers';
	}
	ngOnInit(): void {
				 this._recipeService.getRecipesCount()
		    .subscribe(data => this.setCountData(data));
	}
}