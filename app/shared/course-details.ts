import {Component} from '@angular/core';
import {Http} from '@angular/http';
import { RecipeService } from '../services/recipe-services';

@Component({
    selector: "course-details",
    templateUrl: 'app/shared/course-details.html',
		inputs: ['counterValue:test']
})

export class CourseDetails {
	 constructor(private _recipeService: RecipeService) {}
}