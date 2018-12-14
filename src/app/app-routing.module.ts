import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './product/products.component';
// import { CharactersComponent } from './characters.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { YourCartComponent } from './your-cart/your-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HelpComponent } from './help/help.component';
import { RecordDisplayComponent } from './help/record-display.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InformationComponent } from './information/information.component';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';
import { CustomerServiceCenterComponent } from './customer-service-center/customer-service-center.component';





const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products'},
  { path: 'login',  component: LoginComponent},
  { path: 'register',  component: RegisterComponent},
  { path: 'products', component: ProductsComponent},
  // { path: 'characters', component: CharactersComponent},
  { path: 'contact-info', component: ContactInfoComponent},
  { path: 'your-cart', component: YourCartComponent},
  { path: 'check-out', component: CheckOutComponent},
  { path: 'help', component: HelpComponent},
  { path: 'record-display/:purchaseId', component: RecordDisplayComponent},
  { path: 'shopping-history', component: ShoppingHistoryComponent},
  { path: 'information', component: InformationComponent},
  { path: 'customer-service-center', component: CustomerServiceCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  ProductsComponent
];




// import { CharacterListComponent } from './characters/character-list.component';
// import { CharacterComponent } from './characters/character.component';
// import { PageNotFoundComponent } from './page-not-found.component';
// import { VehicleListComponent } from './vehicles/vehicle-list.component';
// import { VehicleComponent } from './vehicles/vehicle.component';
// import { TrainListComponent } from './train/train-list.component';

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'characters', },
//   { path: 'characters', component: CharacterListComponent },
//   { path: 'characters/:id', component: CharacterComponent },
//   { path: 'vehicles', component: VehicleListComponent },
//   { path: 'vehicles/:id', component: VehicleComponent },
//   { path: 'trains', component: TrainListComponent },
//   { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// export const routableComponents = [
//   CharacterListComponent,
//   CharacterComponent,
//   VehicleListComponent,
//   VehicleComponent,
//   PageNotFoundComponent,
//   TrainListComponent
// ];

