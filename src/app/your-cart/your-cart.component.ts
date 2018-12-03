import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product/product.service';
@Component({
  selector: 'app-your-cart',
  template: `
  <h1>Your Cart:</h1>
  <ul *ngIf="cart" class="cart">
    <li *ngFor="let addedProduct of cart">
       <div>{{addedProduct.productName}}  $ {{addedProduct.productPrice}}
       <button (click)="delete(addedProduct)">Delete</button>
       </div>
    </li>
    Total: $ {{total}}
    <br>
    <app-check-out></app-check-out>
  </ul>
  `,
  styleUrls: ['./your-cart.component.css'],
})
export class YourCartComponent implements OnInit {
  cart: Product[];
  total = 0;
  constructor(private cartService: CartService) {
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
  }
  ngOnInit() {
    console.log(this.cart);
    for ( const product of this.cart) {
      this.total += product.productPrice;
    }
  }

  delete(product: Product) {
    const index: number = this.cart.indexOf(product);
    if ( index !== -1) {
      this.cart.splice( index , 1);
    }
    this.total -= product.productPrice;
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

}
