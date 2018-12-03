import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export class Product {
  _id: number;
  productName: string;
  productCategory: string;
  productPrice: number;
  starRating: number;
}

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(storyId: number) {
    return this.http
      .get('http://localhost:3000/product')
      .pipe(map(productsData => productsData));
  }
}
