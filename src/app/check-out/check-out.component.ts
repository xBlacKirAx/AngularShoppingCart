import { Component, OnInit } from '@angular/core';
import { EmailsenderService } from './emailsender.service';
import { Product } from '../product/product.service';
import { SaverecordService } from './saverecord.service';

@Component({
  selector: 'app-check-out',
  template: `
  <h1>Please enter the following information</h1>
  Name: <input type="text" id="name" placeholder="John" (input) = "name = $event.target.value">
  Email: <input type="text" id="email" placeholder="John@gmail.com" (input) = "email = $event.target.value">
  Address: <input type="text" id="address" placeholder="345 Lakeshore Ave" (input) = "address = $event.target.value">
  Phone: <input type="text" id="phone" placeholder="123-456-7890" (input) = "phone = $event.target.value">
  <button type="button" (click)="checkOut()">Check Out</button>
  `,
  styleUrls: ['./check-out.component.css'],
  providers: [EmailsenderService]
})
export class CheckOutComponent implements OnInit {
  cart: Product[];
  total = 0;
  email: string;
  name: string;
  phone: string;
  address: string;

  constructor(private emailSenderService: EmailsenderService, private saveRecordService: SaverecordService) { }

  ngOnInit() {
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
    for ( const product of this.cart) {
      this.total += product.productPrice;
    }
  }
  checkOut() {
    this.saveRecordService.saveRecord(this.email, this.address, this.name, this.phone);
    // this.emailSenderService.sendEmail(this.email, this.address, this.name, this.phone);
  }

}
