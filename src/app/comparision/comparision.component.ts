import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-comparision',
  template: `
            <div  *ngIf="messageService.compareList!=''; then comparePanel "></div>
            <ng-template #comparePanel>
              <table  border="1">
                <tbody>
                <tr>
                    <td>Product Name</td>
                    <td>Category</td>
                    <td>Price</td>
                    <td>Star Rating</td>
                </tr>
                <tr *ngFor="let product of messageService.compareList">
                    <td>{{product.productName}}</td>
                    <td>{{product.productCategory}}</td>
                    <td>$ {{product.productPrice}}</td>
                    <td>{{product.starRating}}</td>
                </tr>
                </tbody>
              </table>
              <input  type="button" value="Clear comparision" (click)="clear()">
            </ng-template>
                `,
  styleUrls: ['./comparision.component.css']
})
export class ComparisionComponent implements OnInit {
  @Input() compareList: Product[];
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }
  clear() {
    this.messageService.compareList = [];
  }

}
