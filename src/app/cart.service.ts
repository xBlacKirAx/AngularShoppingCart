import { Injectable } from '@angular/core';
import { Product} from './product/product.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Observable string sources
  cart: Product[] = [];
  public addToCart(product: Product): void {
    this.cart.push(product);
  }
  public getCart(): Product[] {
    return this.cart;
  }
}
