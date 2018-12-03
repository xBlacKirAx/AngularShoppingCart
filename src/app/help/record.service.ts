import { Injectable } from '@angular/core';

import { RequestOptionsArgs, RequestMethod, URLSearchParams, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

export class Record {
  _id: number;
  purchaseId: string;
  itemList: [];
  customerName: string;
  customerEmail: string;
  customerAddress: string;
  customerPhone: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) {}
  getRecordById(purchaseId: string): Observable<Record> {
    const url = 'http://localhost:3000/record?purchaseId=' + purchaseId;
    console.log(url);
    return this.http.get<Record>(url);
  }
}



