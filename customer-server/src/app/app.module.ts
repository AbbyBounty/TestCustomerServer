import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { OfferComponent } from './offer/offer.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CartComponent } from './cart/cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { FeedbackAddComponent } from './feedback/feedback-add/feedback-add.component';
import { FeedbackHistoryComponent } from './feedback/feedback-history/feedback-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';
import { ViewHistoryDetailsComponent } from './view-history-details/view-history-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    ShopComponent,
    OfferComponent,
    VehicleComponent,
    CartComponent,
    OrderHistoryComponent,
    FeedbackAddComponent,
    FeedbackHistoryComponent,
    DashboardComponent,
    VehicleAddComponent,
    ViewHistoryDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
