import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'story-app',
  template: `

  <div>
  <header>
    <h1>Shopping Cart Project</h1>
    <h3>Router Demo</h3>
    <nav>
      <ul>
        <li><a [routerLink]="['/products']" href="">Products</a></li>
        <li><a [routerLink]="['/characters']" href="">Characters</a></li>
		<li><a [routerLink]="['/contact-info']" href="">Contact Us</a></li>
		<li><a [routerLink]="['/your-cart']" href="">Your cart</a></li>
		<li><a [routerLink]="['/check-out']" href="">Check out</a></li>
		<li><a [routerLink]="['/help']" href="">Help Center</a></li>
      </ul>
    </nav>
  </header>
  <main>
	Component Will load here
    <section>
      <router-outlet></router-outlet>


    </section>
  </main>
</div>
  `
})
export class AppComponent {
  changed(changedCharacter: any) {
    if (changedCharacter) {
      console.log(`Event Emitter said you selected ${changedCharacter.name}`);
    }
  }
}
