import { Component, OnInit } from '@angular/core';
import { RecordService, Record } from '../help/record.service';
import { Product } from '../product/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-history',
  template: `<div *ngIf="history==''; then notFound else historyPanel"></div>
              <ng-template #notFound>There is no shopping history.</ng-template>
              <ng-template #historyPanel>
                <table border="1">
                  <tr>
                  <td>PurchaseID</td>
                  <td>Date</td>
                  </tr>
                  <tr *ngFor="let record of history">
                    <td (click)="select(record) ">{{record.purchaseId}}</td>
                    <td>{{record.date | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                    <button type="button" (click)="detail(record)">Details</button>
                    <button type="button" (click)="report(record)">Report Issue</button>
                  </tr>
                </table>
              </ng-template>
              <table *ngIf="itemsBought!=null" border="1">
              <tr>
                <td>Product Name</td>
                <td>Product Category</td>
                <td>Product Price</td>
                <td>Star Rating</td>
              </tr>
              <tr *ngFor="let product of itemsBought">
                <td>{{product.productName}}</td>
                <td>{{product.productCategory}}</td>
                <td>$ {{product.productPrice}}</td>
                <td>{{product.starRating}}</td>
                </tr>
              </table>
              <div *ngIf="total">Total: {{total}}</div>
            `,
  styleUrls: ['./shopping-history.component.css'],
  providers: [RecordService]
})
export class ShoppingHistoryComponent implements OnInit {
  history: Record[];
  itemsBought: Product[];
  total: number;
  constructor(private recordService: RecordService, private router: Router) { }

  ngOnInit() {
    this.getRecord();
  }
  getRecord(): void {
    this.recordService.getRecordByUserId(sessionStorage.getItem('userid'))
      .subscribe(record => (this.history = record));
  }
  detail(record: Record) {
    this.itemsBought = JSON.parse(record.itemList);
    this.total = record.total;
    console.log(this.itemsBought[1]);
  }
  report(record: Record) {
    this.router.navigateByUrl('/record-display/' + record.purchaseId);
  }
}
