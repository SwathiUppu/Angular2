import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe-services';
import { ActivatedRoute } from '@angular/router'; 

@Component({
	templateUrl: 'app/recipes/selected-recipe.component.html',
	styleUrls: ['app/recipes/recipes.css']
})

export class SelectedRecipeComponent implements OnInit{
	selectedRecipe: any[];
	constructor(private _route: ActivatedRoute, private _recipeService: RecipeService) {
		
	}
	ngOnInit() : void {
		let recipeType = this._route.snapshot.params['recipeType'];
		let recipeName = this._route.snapshot.params['recipeName'];
		this._recipeService.getSelectedRecipe(recipeType, recipeName)
		    .subscribe(data => this.selectedRecipe = data);
	}
}