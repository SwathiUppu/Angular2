import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe-services';
import {CourseDetails} from '../shared/course-details';

@Component({
  templateUrl: 'app/recipes/appetizer-recipes.component.html',
	styleUrls: ['app/css/courses.css', 'app/css/common.css'],
	directives: [CourseDetails]
})

export class AppetizerComponent implements OnInit {
  recipes: any[];
	appetizer = "appetizers";
  constructor(private _recipeService: RecipeService) {}

  ngOnInit(): void {
  this._recipeService.getRecipes('appetizers')
      .subscribe(data => this.recipes = data);
  }
}


