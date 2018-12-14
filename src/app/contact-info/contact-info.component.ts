import { Component, OnInit } from '@angular/core';
import { LoginoutService } from '../loginout.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  constructor(public loginoutService: LoginoutService) { }

  ngOnInit() {
    if (sessionStorage.getItem('userid') ) {
      this.loginoutService.inout = true;
    }
  }

}
