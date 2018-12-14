import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordService, Record } from './record.service';
import { IssueService, Issue } from './issue.service';
import { Location } from '@angular/common';
import { Product } from '../product/product.service';

@Component({
  selector: 'app-record-display',
  template: `<div *ngIf="record==null; then notFound else issuePanel"></div>
              <ng-template #notFound>There is no such purchaseId in our database, please check your purchaseId again!</ng-template>
              <ng-template #issuePanel>
                <div *ngIf="issue == null; then reportIssue else checkIssue"></div>
                    <ng-template #reportIssue>
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
                      <br>
                      1. Price issue:
                      <select  [(ngModel)]="issueProblem" (change)="onChange('priceIssue')" >
                          <option value="Price is too much?">Price is too much?</option>
                          <option value="Didn't receive discount?">Didn't receive discount?</option>
                      </select><br>
                      2. Delivery issue:
                      <select  [(ngModel)]="issueProblem" (change)="onChange('deliveryIssue')" >
                          <option value="Delivery is too late?">Delivery is too late?</option>
                          <option value="Didn't receive the items?">Didn't receive the items?</option>
                          <option value="Items got damaged during the delivery?">Items got damaged during the delivery?</option>
                      </select><br>
                      3. Warranty issue:
                      <select  [(ngModel)]="issueProblem" (change)="onChange('warrantyIssue')" >
                          <option value="The goods are not as expected?">The goods are not as expected?</option>
                          <option value="Request to extend the warranty?">Request to extend the warranty?</option>
                      </select><br>
                      4. Others:<input type="text" [(ngModel)]="issueProblem"
                              (change)="onChange('others')" placeholder="type your issus here!"><br>
                        <input type="button" (click)="report()" value="Report the issue" >
                        <h1>{{message}}</h1>
                    </ng-template>
                </ng-template>
                <ng-template #checkIssue>
                      Purchase Id: {{issue.purchaseId}}<br>
                      Issue Category: {{issue.issueCategory}}<br>
                      Issue: {{issue.issue}}<br>
                      Issue Status: {{issue.status}}<br>
                      Issue Resolution: {{issue.resolution}}<br>
                    </ng-template>
            `,
  styleUrls: ['./help.component.css'],
  providers: [RecordService, IssueService]
})
export class RecordDisplayComponent implements OnInit {
  @Input() record: Record;
  @Input() issue: Issue;
  issueProblem: string;
  issueCategory: string;
  issueStatus: string;
  message: string;
  itemsBought: Product[];
  total: number;
  constructor(
    private issueService: IssueService,
    private recordService: RecordService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.getRecord();
    this.getIssue();
  }

  getRecord(): void {
    const purchaseId = this.route.snapshot.paramMap.get('purchaseId');
    console.log(purchaseId);
    this.recordService.getRecordByPurchaseId(purchaseId)
      .subscribe(record => {
        this.record = record[0];
        this.itemsBought = JSON.parse(this.record.itemList);
        this.total = this.record.total;
      });
  }

// send_categories() is now called after get_categories().

  getIssue(): void {
    const purchaseId = this.route.snapshot.paramMap.get('purchaseId');
    console.log(purchaseId);
    this.issueService.getIssueById(purchaseId)
      .subscribe(issue => this.issue = issue[0], (err) => alert('xxx' + err));
  }
  report() {
    this.issueService.saveIssue(this.route.snapshot.paramMap.get('purchaseId'), this.issueProblem, this.issueCategory, 'Pending')
      .subscribe(res => this.message = res.text());
  }
  onChange(ic: string) {
    this.issueCategory = ic;
  }
}
