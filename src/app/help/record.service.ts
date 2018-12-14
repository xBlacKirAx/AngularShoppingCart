import { Injectable } from '@angular/core';

import { RequestOptionsArgs, RequestMethod, URLSearchParams, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

export class Record {
  _id: number;
  purchaseId: string;
  itemList: string;
  userid: string;
  date: Date;
  total: number;
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
  getRecordByPurchaseId(purchaseId: string): Observable<Record> {
    const url = 'http://localhost:3000/record?purchaseId=' + purchaseId;
    return this.http.get<Record>(url);
  }
  getRecordByUserId(userid: string): Observable<Record[]> {
    const url = 'http://localhost:3000/record/history?userid=' + userid;
    return this.http.get<Record[]>(url);
  }
}



