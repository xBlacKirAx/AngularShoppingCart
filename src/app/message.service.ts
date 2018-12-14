
import { Injectable } from '@angular/core';
import { Product } from './product/product.service';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message = 'Please log in first!';
  cartLink = '/login';
  informationLink = '/login';
  historyLink = '/login';
  compareList: Product[] = [];
  cartMessage: any = [];
  setMessage(text: string) {
    this.message = text;
  }
  setCartLink() {
    this.cartLink = '/your-cart';
  }
  setInformationLink() {
    this.informationLink = '/information';
  }
  setHistoryLink() {
    this.historyLink = '/shopping-history';
  }
  setLink() {
    this.setCartLink();
    this.setInformationLink();
    this.setHistoryLink();
  }

  setCartMessage(text: string) {
    this.cartMessage.push(text);
  }
}
