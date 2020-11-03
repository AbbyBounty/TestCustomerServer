import { Component, OnInit } from '@angular/core';
import { shopoffer } from '../shopoffer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  shop:shopoffer[];

  constructor() 
  {
    this.shop=[new shopoffer("Festive Dhanteras, Diwali Discount offer on Spare Parts for November 2020","Grace Motors","validity till 30 november"),
    new shopoffer("Diwali Discount Offers","Super Motors","validity till 20 December"),
    new shopoffer("Festive offers on all accessories","Bajaj Motors","validity till 10 January")];
  }

  ngOnInit(): void {
  }

}
