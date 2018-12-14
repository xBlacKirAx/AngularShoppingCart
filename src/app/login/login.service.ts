import { Injectable } from '@angular/core';
import {   Headers, Http, Request, Response, RequestOptions, RequestOptionsArgs, URLSearchParams, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  resp: string;
  constructor(private http: Http) { }
  login (userid: string, password: string): Observable<Response> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('userid', userid);
    params.set('password', password);
    const basicOptions: RequestOptionsArgs = {
      method: RequestMethod.Get,
      search: params,
      headers: null
    };
    console.log(params);
    return this.http.get('http://localhost:3000/login', basicOptions);
  }
}
