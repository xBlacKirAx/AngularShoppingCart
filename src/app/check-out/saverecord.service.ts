import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestMethod, URLSearchParams  } from '@angular/http';
import { Product } from '../product/product.service';
import { Information, InformationService } from '../information/information.service';

@Injectable({
  providedIn: 'root'
})
export class SaverecordService {
  itemList: any = [];
  constructor(private http: Http) {
  }
  saveRecord(info: Information, cart: Product[], total: number, purchaseId: string) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('purchaseId', purchaseId);
    params.set('itemList', JSON.stringify(cart));
    params.set('customerName', info.name);
    params.set('customerEmail', info.email);
    params.set('customerAddress', info.address);
    params.set('customerPhone', info.phone);
    params.set('userid', info.userid);
    params.set('total', '' + total);
    console.log(params);
    this.http.post('http://localhost:3000/record?purchaseId=xxx', params).subscribe((res) => {
      console.log(res);
    });

  }

}
