import { Component, OnInit } from '@angular/core';
import { InformationService, Information } from './information.service';

@Component({
  selector: 'app-information',
  template: `
            <h1>Your information</h1>
            Name: <input type="text" [(ngModel)]="informationService.info.name">
            Email: <input type="text" [(ngModel)]="informationService.info.email">
            Address: <input type="text" [(ngModel)]="informationService.info.address">
            Phone: <input type="text" [(ngModel)]="informationService.info.phone">
            <button type="button" (click)="update()">Update</button>
            <br>{{message}}<br>
            `,
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  message: string;
  constructor(public informationService: InformationService) {
  }
  ngOnInit() {
    this.informationService.info.userid = sessionStorage.getItem('userid');
    this.informationService.info.name = sessionStorage.getItem('name');
    this.informationService.info.email = sessionStorage.getItem('email');
    this.informationService.info.address = sessionStorage.getItem('address');
    this.informationService.info.phone = sessionStorage.getItem('phone');
  }
  update() {
    sessionStorage.setItem('name' , this.informationService.info.name);
    sessionStorage.setItem('email', this.informationService.info.email);
    sessionStorage.setItem('address', this.informationService.info.address);
    sessionStorage.setItem('phone', this.informationService.info.phone);
    this.informationService.updateInformation().subscribe(res => this.message = res.text());
  }
}
