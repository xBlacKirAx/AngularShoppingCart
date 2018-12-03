import { Injectable } from '@angular/core';
import {   Headers, Http, Request, Response, RequestOptions, RequestOptionsArgs, URLSearchParams, RequestMethod} from '@angular/http';
import { Product } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class EmailsenderService {

  constructor(private http: Http) { }
  sendEmail(email: string, address: string, name: string, phone: string) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('sender', 'synergisticitsessionusc33@gmail.com');
    params.set('email', email);
    params.set('subject', 'receipt from Shopping App');
    params.set('textbody', this.createMessage( address, name, phone));
    const basicOptions: RequestOptionsArgs = {
      method: RequestMethod.Get,
      search: params,
      headers: null
    };
    console.log(params);
    this.http.get('http://localhost:3000/email', basicOptions).subscribe((res) => {
      console.log(res);
    });
  }
  createMessage(address: string, name: string, phone: string) {
    let mailMessage = '';
    const cart: Product[] = JSON.parse(sessionStorage.getItem('cart'));
    mailMessage += 'Dear ' + name + ',\n';
    mailMessage += 'Thank you for shopping with us!\n';
    mailMessage += 'Your orders are as follow: \n\n';
    let total = 0;
    for ( const product of cart) {
      mailMessage += 'Product Name: ' + product.productName + ' Product Price: $' + product.productPrice + '\n';
      total += product.productPrice;
    }
    mailMessage += 'Total: ' + total + '\n';
    mailMessage += 'We will send your orders to ' + address + ' as soon as possible.\n';
    mailMessage += 'If there are something unexpected happen, we will contact you on ' + phone + '.\n\n';
    mailMessage += 'Sincerely,\n';
    mailMessage += 'Shopping Cart Project';
    return mailMessage;
  }
}
