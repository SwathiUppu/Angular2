import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
import { RecipeService } from './services/recipe-services';

@Component({
	selector : 'pm-app',
  template : `<nav class="navbar navbar-default">
	              <div class="container-fluid">
								  <a class="navbar-brand">{{pageTitle}}</a>
									<ul class="nav navbar-nav">
									  <li><a [routerLink]="['/welcome']">Home</a></li>
										<li><a [routerLink]="['/products']">ProductList</a></li>
									</ul>
								</div>
							</nav>
							<div class="container">
							  <router-outlet></router-outlet>
							</div>`,
	providers: [ ProductService,RecipeService ]
	
})

export class AppComponent {
  pageTitle : string = 'My First Angular 2 project'	;
}