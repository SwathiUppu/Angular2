import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RecipeService {
	private _recipeUrl: string;
  constructor(private _http: Http) {}
	
  getRecipes(recipeType: string): Observable<any []>  {
    this._recipeUrl = 'api/products/' + recipeType +'.json';
    return this._http.get(this._recipeUrl)
               .map((res:Response) => res.json())
               .do(data => console.log(JSON.stringify(data)))
               .catch(this.errorHandler);
  }
	
	getSelectedRecipe(recipeType: string, recipeName: string) : Observable<any []> {
		this._recipeUrl = 'api/'+ recipeType + '/' + recipeType + '_' + recipeName + '.json';
		return this._http.get(this._recipeUrl)
		           .map((res:Response) => res.json())
							 .do(data => console.log(JSON.stringify(data)))
							 .catch(this.errorHandler);
	}

  private errorHandler(error: Response) {
    return Observable.throw(error.json().error || 'Server Error');
  }
}




