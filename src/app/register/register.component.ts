import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { InformationService } from '../information/information.service';
import { RegisterService } from './register.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { LoginoutService } from '../loginout.service';
@Component({
  selector: 'app-register',
  template: `
            <h1>Please enter the following information</h1>
            Userid: <input type="text" [(ngModel)]="informationService.info.userid">
            Password: <input type="password" [(ngModel)]="informationService.info.password">
            Name: <input type="text" [(ngModel)]="informationService.info.name">
            Email: <input type="text" [(ngModel)]="informationService.info.email">
            Address: <input type="text" [(ngModel)]="informationService.info.address">
            Phone: <input type="text" [(ngModel)]="informationService.info.phone">
            <button type="button" (click)="register()">Register</button>
            `,
  styleUrls: ['./register.component.css'],
  providers: [LoginService, RegisterService]
})
export class RegisterComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    public informationService: InformationService,
    private registerService: RegisterService,
    public messageService: MessageService,
    private router: Router,
    public loginoutService: LoginoutService
    ) { }

  ngOnInit() {
    this.informationService.info.userid = sessionStorage.getItem('userid');
    this.informationService.info.name = sessionStorage.getItem('name');
    this.informationService.info.email = sessionStorage.getItem('email');
    this.informationService.info.address = sessionStorage.getItem('address');
    this.informationService.info.phone = sessionStorage.getItem('phone');
  }
  register() {
    this.registerService.registerInfo();
    this.loginService.login(this.informationService.info.userid, this.informationService.info.password);
    sessionStorage.setItem('userid', this.informationService.info.userid);
    sessionStorage.setItem('name' , this.informationService.info.name);
    sessionStorage.setItem('email', this.informationService.info.email);
    sessionStorage.setItem('address', this.informationService.info.address);
    sessionStorage.setItem('phone', this.informationService.info.phone);
    this.messageService.setMessage('Welcome to Shopping Cart, ' + this.informationService.info.name);
    this.messageService.setLink();
    this.loginoutService.inout = true;
    this.router.navigateByUrl('/products');
  }
}
