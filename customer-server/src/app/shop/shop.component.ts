import { Component, OnInit } from '@angular/core';
import { shopper } from '../shopper';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  s:shopper[];

  constructor() 
  {
    this.s=[new shopper(11,"Grace Motors","25% off on spare parts"),
    new shopper(12,"super motors","50% off on servicing"),
    new shopper(13,"bajaj motors","20% off on all kinds items and services")];
  }

  ngOnInit(): void {
  }

}
