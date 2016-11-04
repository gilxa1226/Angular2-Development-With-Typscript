import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'auction-product-page',
	templateUrl: 'app/components/product-detail/product-detail.html'
})
export default class ProductDetailComponent {
	productTitle: string;

	constructor(route: ActivatedRoute){
		this.productTitle = route.snapshot.params['prodTitle'];
	}
}