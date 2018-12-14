import { Component, OnInit } from '@angular/core';
import { EmailsenderService } from './emailsender.service';
import { Product } from '../product/product.service';
import { SaverecordService } from './saverecord.service';
import { Information, InformationService } from '../information/information.service';

@Component({
  selector: 'app-check-out',
  template: `
            <h2>Please review your information </h2>
            <app-information></app-information>
            <button type="button" (click)="checkOut()">Check Out</button>
            <h1>{{message}}</h1>
            `,
  styleUrls: ['./check-out.component.css'],
  providers: [EmailsenderService]
})
export class CheckOutComponent implements OnInit {
  cart: Product[];
  total = 0;
  purchaseId: string;
  message: string;
  info: Information;

  constructor(
    private emailSenderService: EmailsenderService,
    private saveRecordService: SaverecordService,
    private informationService: InformationService
    ) { }

  ngOnInit() {
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
    for ( const product of this.cart) {
      this.total += product.productPrice;
    }
    this.info = this.informationService.getCurrentInformation();
  }
  checkOut() {
  const min = 100000;
  const max = 1000000;
  const rand = Math.floor(min + Math.random() * (max - min));
  this.purchaseId = 'x' + rand;
  console.log(this.purchaseId);
    this.saveRecordService.saveRecord(this.info, this.cart, this.total, this.purchaseId);
    this.emailSenderService.sendEmail(this.info, this.purchaseId).subscribe(res => this.message = res.text());
  sessionStorage.setItem('cart', '');
  }

}
