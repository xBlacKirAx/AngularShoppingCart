import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http, RequestOptionsArgs, RequestMethod, URLSearchParams  } from '@angular/http';
import { InformationService } from '../information/information.service';
@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  itemList: any = [];
  constructor(private http: Http,  public informationService: InformationService) {
  }
  registerInfo() {
    const params: URLSearchParams = new URLSearchParams();
    params.set('userid', this.informationService.info.userid);
    params.set('password', this.informationService.info.password);
    params.set('name', this.informationService.info.name);
    params.set('email', this.informationService.info.email);
    params.set('address', this.informationService.info.address);
    params.set('phone', this.informationService.info.phone);
    console.log(params);
    return this.http.post('http://localhost:3000/login/register', params);

  }
}

