import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, ProductService } from './product.service';
import { CartService} from '../cart.service';
import { MessageService } from '../message.service';
import { ImageService } from '../image.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'story-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService, CartService]
})
export class ProductsComponent implements OnInit {

  addedProducts = [];
  products: Product[] = [];
  selectedProduct: Product;
  cart = [];
  message: string;
  visibleImages: any[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    public messageService: MessageService,
    public imageService: ImageService
    ) {
      this.visibleImages = this.imageService.getImages();
      console.log(this.visibleImages);
    }

  ngOnInit() {
    this.productService
      .getAllProducts()
      .subscribe(products => {
        this.products = products;
        products.forEach(product => {
          product.img = this.imageService.getImage(product.productName).url;
        });
      });
      if ( !sessionStorage.getItem('cart') ) {
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
      }
  }

  select(selectedProduct: Product) {
    this.selectedProduct = selectedProduct;
  }
  add(product: Product) {
    if ( !sessionStorage.getItem('userid')) {
      this.message = 'Please log in first';
    } else {
      this.cart.push(product);
      sessionStorage.setItem( 'cart' , JSON.stringify(this.cart));
      console.log(this.cart);
      this.messageService.setCartMessage('You added ' + product.productName + ' to your cart!');
    }
  }
  compare(product: Product) {
    this.messageService.compareList.push(product);
  }
  getImage(name: string): string {
    console.log(name);
    return '1';
  }
}
