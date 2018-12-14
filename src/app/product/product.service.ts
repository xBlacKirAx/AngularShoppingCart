import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Http, RequestOptionsArgs, RequestMethod, URLSearchParams } from '@angular/http';
export class Product {
  _id: number;
  productName: string;
  productCategory: string;
  productPrice: number;
  starRating: number;
  img: string;
}

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get('http://localhost:3000/product')
      .pipe(map(productsData => productsData));
  }
  getAllProducts(): Observable<Product[]> {
    const url = 'http://localhost:3000/product';
    return this.http.get<Product[]>(url);
  }
}
