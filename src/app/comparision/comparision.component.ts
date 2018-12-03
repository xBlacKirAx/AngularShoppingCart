import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.service';

@Component({
  selector: 'app-comparision',
  template: `
                <table  *ngIf="compareList" border="1">
                  <tbody>
                  <tr>
                      <td>Product Name</td>
                      <td>Category</td>
                      <td>Price</td>
                      <td>Star Rating</td>
                  </tr>
                  <tr *ngFor="let product of compareList">
                      <td>{{product.productName}}</td>
                      <td>{{product.productCategory}}</td>
                      <td>$ {{product.productPrice}}</td>
                      <td>{{product.starRating}}</td>
                  </tr>
                  </tbody>
                </table>
                `,
  styleUrls: ['./comparision.component.css']
})
export class ComparisionComponent implements OnInit {
  @Input() compareList: Product[];
  constructor() { }

  ngOnInit() {
  }

}
