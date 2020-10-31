import { OfferComponent } from './offer/offer.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ShopComponent } from './shop/shop.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FeedbackAddComponent } from './feedback/feedback-add/feedback-add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'feedback',component:FeedbackAddComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'shop',component:ShopComponent},
  {path:'order-history',component:OrderHistoryComponent},
  {path:'offer',component:OfferComponent},
  {path:'vehicle',component:VehicleComponent},
  {path:'feedback-add',component:FeedbackAddComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
