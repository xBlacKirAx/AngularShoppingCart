import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http, RequestOptionsArgs, RequestMethod, URLSearchParams  } from '@angular/http';
@Injectable({
  providedIn: 'root'
})

export class InformationService {
  info: Information = new Information();
  itemList: any = [];
  constructor(private http: Http) {
  }
  updateInformation() {
    const params: URLSearchParams = new URLSearchParams();
    params.set('userid', this.info.userid);
    params.set('name', this.info.name);
    params.set('email', this.info.email);
    params.set('address', this.info.address);
    params.set('phone', this.info.phone);
    console.log(params);
    return this.http.post('http://localhost:3000/login/update', params);

  }
  getCurrentInformation(): Information {
    return this.info;
  }
}

export class Information {
  userid: string;
  password: string;
  name: string;
  email: string;
  address: string;
  phone: string;
}
