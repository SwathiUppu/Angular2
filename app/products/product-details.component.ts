import { Component, OnInit } from '@angular/core'; 
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
    templateUrl: 'app/products/product-details.component.html'
})

export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
	product: IProduct;
	
	constructor(private _route: ActivatedRoute, private _router: Router) {
		console.log(this._route.snapshot.params['id']);
	}
	

	
	onBack(): void {
	  this._router.navigate(['/products'])
	}
	
	ngOnInit(): void  {
		// + converts string into number
		let id = +this._route.snapshot.params['id'];
		this.pageTitle += `: ${id}`;
	}
}

