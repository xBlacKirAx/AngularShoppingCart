



import { Component, Input } from '@angular/core';
import { Product } from './product.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'story-product',
  template: `<h3 *ngIf="product">Product Detail: <br>
            Name:{{product.productName}}<br>
            Category: {{product.productCategory}}<br>
            Price: $ {{product.productPrice}}<br>
            Star Rating: {{product.starRating}}</h3>`
})
export class ProductComponent {
  @Input() product: Product;
}
