import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, ProductService } from './product.service';
import { CartService} from '../cart.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'story-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService, CartService]
})
export class ProductsComponent implements OnInit {
  @Output() changed = new EventEmitter<Product>();
  @Input() storyId: number;

  comparision: Product[] = [];
  addedProducts = [];
  products: any;
  selectedProduct: Product;
  cart = [];
  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.productService
      .getProducts(this.storyId)
      .subscribe(products => (this.products = products));
      if ( !sessionStorage.getItem('cart') ) {
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
      }
  }

  select(selectedProduct: Product) {
    console.log(this.products);
    this.selectedProduct = selectedProduct;
    this.changed.emit(selectedProduct);
  }
  add() {
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
    this.cart.push(this.selectedProduct);
    sessionStorage.setItem( 'cart' , JSON.stringify(this.cart));
    console.log(this.cart);
  }
  compare(product: Product) {
    this.comparision.push(product);
    console.log(this.comparision);
  }
  clear() {
    this.comparision = [];
  }
}
