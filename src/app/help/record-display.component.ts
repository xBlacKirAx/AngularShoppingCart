import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordService, Record } from './record.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-record-display',
  template: `<div *ngIf="record">
               Purchase Id: {{record[0].purchaseId}}<br>
               Purchased Items: {{record[0].itemList}}<br>
               Customer Name: {{record[0].customerName}}<br>
               Customer Email: {{record[0].customerEmail}}<br>
               Customer Address: {{record[0].customerAddress}}<br>
               Customer Phone: {{record[0].customerPhone}}<br>
               <br>
               1. Price issue:
               <select  [(ngModel)]="issue" (change)="onChange()" >
                  <option value="Price is too much?">Price is too much?</option>
                  <option value="Didn't receive discount?">Didn't receive discount?</option>
               </select><br>
               2. Delivery issue:
               <select  [(ngModel)]="issue" (change)="onChange()" >
                  <option value="Delivery is too late?">Delivery is too late?</option>
                  <option value="Didn't receive the items?">Didn't receive the items?</option>
                  <option value="Items got damaged during the delivery?">Items got damaged during the delivery?</option>
               </select><br>
               3. Warranty issue:
               <select  [(ngModel)]="issue" (change)="onChange()" >
                  <option value="The goods are not as expected?">The goods are not as expected?</option>
                  <option value="Request to extend the warranty?">Request to extend the warranty?</option>
               </select><br>
               4. Others:<input type="text" [(ngModel)]="issue" placeholder="type your issus here!"><br>
                <input type="button" (click)="report() value="Report the issue" >
                </div>
            `,
  styleUrls: ['./help.component.css'],
  providers: [RecordService]
})
export class RecordDisplayComponent implements OnInit {
  @Input() record: Record;
  issue: string;
  constructor(
    private recordService: RecordService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  ngOnInit() {
    this.getRecord();
  }

  getRecord(): void {
    const purchaseId = this.route.snapshot.paramMap.get('purchaseId');
    console.log(purchaseId);
    this.recordService.getRecordById(purchaseId)
      .subscribe(record => this.record = record);
  }
  report() {
    console.log(this.record[0].customerAddress);
    console.log(this.record.customerAddress);
    const x = JSON.parse(JSON.stringify(this.record));
    console.log(JSON.parse(JSON.stringify(this.record)).purchaseId);
  }
  onChange() {
    console.log(this.issue);
  }
}
