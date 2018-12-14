import { Component, OnInit } from '@angular/core';
import { RecordService, Record } from '../help/record.service';
import { IssueService, Issue } from '../help/issue.service';
import { Product } from '../product/product.service';
@Component({
  selector: 'app-customer-service-center',
  template: `
            <table border="1">
              <tr>
              <td>Purchase ID</td>
              <td>Issue Post Date</td>
              <td>Issue Category</td>
              <td>Issue</td>
              <td>Status</td>
              <td>Resolution</td>
              </tr>
              <tr *ngFor="let iss of issues">
                <td (click)="select(iss) ">{{iss.purchaseId}}</td>
                <td>{{iss.postDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                <td>{{iss.issueCategory}}</td>
                <td>{{iss.issue}}</td>
                <td>
                  <select  [(ngModel)]="iss.status">
                      <option value="Pending" [selected]="iss.status =='Pending'">Pending</option>
                      <option value="Reading" [selected]="iss.status =='Reading'">Reading</option>
                      <option value="Solved" [selected]="iss.status =='Solved'">Solved</option>
                  </select>
                </td>
                <td>
                  <input type="text" [(ngModel)] = "iss.resolution" >
                </td>
                <button type="button" (click)="detail(iss.purchaseId)">Details</button>
                <button type="button" (click)="update(iss)">Update</button>
              </tr>
            </table>
            <h1>{{message}}</h1>
            <div *ngIf="record">
                Purchase Id: {{record.purchaseId}}<br>
                Customer Name: {{record.customerName}}<br>
                Customer Email: {{record.customerEmail}}<br>
                Customer Address: {{record.customerAddress}}<br>
                Customer Phone: {{record.customerPhone}}<br>
                Purchased Items:
                <table  border="1">
                  <tbody>
                  <tr>
                      <td>Product Name</td>
                      <td>Category</td>
                      <td>Price</td>
                      <td>Star Rating</td>
                  </tr>
                  <tr *ngFor="let product of itemDetails">
                      <td>{{product.productName}}</td>
                      <td>{{product.productCategory}}</td>
                      <td>$ {{product.productPrice}}</td>
                      <td>{{product.starRating}}</td>
                  </tr>
                  </tbody>
                </table>
            </div>
            `,
  styleUrls: ['./customer-service-center.component.css'],
  providers: [RecordService, IssueService]
})
export class CustomerServiceCenterComponent implements OnInit {
  issues: Issue[];
  issueStatus: string;
  record: Record;
  itemDetails: Product[];
  message: string;
  constructor(
    private issueService: IssueService,
    private recordService: RecordService
    ) { }

  ngOnInit() {
    this.issueService.getAllIssues().subscribe(issues => this.issues = issues);
  }
  update(iss: Issue) {
    console.log(iss.status);
    console.log(iss.resolution);
    this.issueService.updateIssue(iss.purchaseId, iss.status, iss.resolution).subscribe(res => this.message = res.text());
  }
  detail(purchaseId: string) {
    this.recordService.getRecordByPurchaseId(purchaseId)
      .subscribe(record => {
        this.record = record[0];
        this.itemDetails = JSON.parse(record[0].itemList);
      });
  }
}
