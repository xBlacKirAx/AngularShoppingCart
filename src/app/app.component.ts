import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { LoginoutService } from './loginout.service';
import { InformationService, Information } from './information/information.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'story-app',
  template: `
  <div class="topnav">
    <a class="active" href="">Home</a>
    <a *ngIf="!loginoutService.inout" [routerLink]="['/login']" href="">Login</a>
    <a *ngIf="!loginoutService.inout" [routerLink]="['/register']" href="">Register</a>
    <a [routerLink]="['/contact-info']" href="">Contact Us</a>
    <a *ngIf="loginoutService.inout" [routerLink]="[messageService.cartLink]"  href="">Your cart</a>
    <a *ngIf="loginoutService.inout" [routerLink]="[messageService.informationLink]"  href="">Your Information</a>
    <a *ngIf="loginoutService.inout" [routerLink]="[messageService.historyLink]"  href="">Shopping History</a>
    <a [routerLink]="['/help']" href="">Help Center</a>
    <a *ngIf="loginoutService.inout" href="" (click)="logout()">Logout</a>
    <a [routerLink]="['/customer-service-center']" href="">Customer Service Center</a>
  </div>
  <div>
  <header>
    <h1>Shopping Cart Project</h1>
    <nav>
      <ul>
        <li *ngIf="!loginoutService.inout"><a [routerLink]="['/login']" href="">Login</a></li>
        <li><a [routerLink]="['/register']" href="">Register</a></li>
        <li><a [routerLink]="['/products']" href="">Products</a></li>
        <li><a [routerLink]="['/contact-info']" href="">Contact Us</a></li>
        <li><a [routerLink]="[messageService.cartLink]"  href="">Your cart</a></li>
        <li><a [routerLink]="[messageService.informationLink]"  href="">Your Information</a></li>
        <li><a [routerLink]="[messageService.historyLink]"  href="">Shopping History</a></li>
        <li><a [routerLink]="['/help']" href="">Help Center</a></li>
        <li *ngIf="loginoutService.inout"><a  href="" (click)="logout()">Logout</a></li><br>
        <li><a [routerLink]="['/customer-service-center']" href="">Customer Service Center</a></li>
      </ul>
    </nav>
  </header>
  <main>
	{{messageService.message}}
    <section>
      <router-outlet></router-outlet>


    </section>
  </main>
</div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  changed(changedCharacter: any) {
    if (changedCharacter) {
      console.log(`Event Emitter said you selected ${changedCharacter.name}`);
    }
  }
  constructor(
    public messageService: MessageService,
    public loginoutService: LoginoutService,
    public informationService: InformationService
    ) {}
  ngOnInit() {
    if ( sessionStorage.getItem('userid') ) {
      this.messageService.setLink();
      this.messageService.setMessage('Welcome to Shopping Cart, ' + sessionStorage.getItem('name'));
      this.loginoutService.inout = true;
    }
  }
  logout() {
    this.loginoutService.inout = false;
    this.informationService.info = new Information();
    sessionStorage.clear();
  }
}
