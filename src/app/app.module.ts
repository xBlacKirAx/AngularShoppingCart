import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character.component';
import { CharactersComponent } from './characters.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './product/products.component';

import { FilterArrayPipe } from './product/filter.pipe';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { CartService } from './cart.service';
import { YourCartComponent } from './your-cart/your-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ComparisionComponent } from './comparision/comparision.component';
import { HttpModule } from '@angular/http';
import { HelpComponent } from './help/help.component';
import { RecordDisplayComponent } from './help/record-display.component';


@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule, HttpModule],
  declarations: [AppComponent, CharacterComponent, CharactersComponent, ProductComponent, ProductsComponent, FilterArrayPipe,
    routableComponents,
    ContactInfoComponent,
    YourCartComponent,
    CheckOutComponent,
    ComparisionComponent,
    HelpComponent,
    RecordDisplayComponent],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule {}
