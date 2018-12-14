import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { InformationService } from '../information/information.service';
import { LoginoutService } from '../loginout.service';

@Component({
  selector: 'app-login',
  template: `
            UserId: <input type="text" (input) = "userid = $event.target.value"/>
            Password: <input type="password" (input) = "password = $event.target.value"/>
            <button (click)="login()">Login</button>
            {{this.resp}}
            `,
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  userid: string;
  password: string;
  resp: string;
  constructor(
    private loginService: LoginService,
    public messageService: MessageService,
    private router: Router,
    public informationService: InformationService,
    public loginoutService: LoginoutService
    ) { }

  ngOnInit() {
    if (sessionStorage.getItem('userid') ) {
      this.loginoutService.inout = true;
    }
  }

  login() {
    console.log(this.userid);
    console.log(this.password);
    this.loginService.login(this.userid, this.password).subscribe(res => {
      const jsonData = JSON.parse(res.text());
      if (!jsonData.message) {

        this.informationService.info.userid = this.userid;
        this.informationService.info.name = jsonData[0].name;
        this.informationService.info.email = jsonData[0].email;
        this.informationService.info.address = jsonData[0].address;
        this.informationService.info.phone = jsonData[0].phone;


        sessionStorage.setItem('userid', this.userid);
        this.resp = 'You are logged in!';
        sessionStorage.setItem('name' , jsonData[0].name);
        sessionStorage.setItem('email', jsonData[0].email);
        sessionStorage.setItem('address', jsonData[0].address);
        sessionStorage.setItem('phone', jsonData[0].phone);
        this.messageService.setMessage('Welcome to Shopping Cart, ' + this.informationService.info.name);
        this.messageService.setLink();
        console.log(jsonData[0].name + jsonData[0].email + jsonData[0].address + jsonData[0].phone);
        this.loginoutService.inout = true;
        this.router.navigateByUrl('/products');
      } else {
        this.resp = jsonData.message;
      }
    }, (err) => alert('xxx' + err));

  }
}
