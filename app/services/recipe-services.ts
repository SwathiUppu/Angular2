import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RecipeService {
	
	private _recipeUrl = 'api/products/appetizers.json';
	constructor(private _http: Http) {
		
	}
  getRecipes(): Observable<any []>  {
		return this._http.get(this._recipeUrl)
                         .map((res:Response) => res.json())
								.do(data => console.log(JSON.stringify(data)))
								.catch(this.errorHandler);
  }
	
	private errorHandler(error: Response) {
		console.log(error);
		return Observable.throw(error.json().error || 'Server Error');
	}
}


                         
                         
