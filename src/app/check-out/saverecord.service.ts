import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestMethod, URLSearchParams  } from '@angular/http';
import { Product } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class SaverecordService {
  cart: Product[];
  itemList: any = [];
  constructor(private http: Http) {
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
    for ( const product of this.cart) {
      this.itemList.push(product.productName);
    }
  }
  saveRecord(email: string, address: string, name: string, phone: string) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('purchaseId', 's5678');
    params.set('itemList', this.itemList);
    params.set('customerName', name);
    params.set('customerEmail', email);
    params.set('customerAddress', address);
    params.set('customerPhone', phone);
    this.http.post('http://localhost:3000/record', params).subscribe((res) => {
      console.log(res);
    });

  }

}
