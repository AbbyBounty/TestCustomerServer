import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-history-details',
  templateUrl: './view-history-details.component.html',
  styleUrls: ['./view-history-details.component.css'],
})
export class ViewHistoryDetailsComponent implements OnInit {
  CustomerName = 'Tuka';
  OrderId = '';
  orderDate = '';
  VehicleNumber = '';
  ServiceId = '';
  VendorName = '';
  ServiceName = '';
  Description = '';
  Amount = '';
  orderHistories = [
    {
      'ServiceId': 161,
      'ServiceName': 'Full body service',
      'Description': 'xxxxxxxxxxxxxx',
      'Amount': 2399
    },
    {
      'ServiceId': 112,
      'ServiceName': 'Oil Change',
      'Description': 'xxxxxxxxxxxxxx',
      'Amount': 2399
    },
    {
      'ServiceId': 3313,
      'ServiceName': 'Air',
      'Description': 'xxxxxxxxxxxxxx',
      'Amount': 2399
    },
    {
      'ServiceId': 124,
      'ServiceName': 'Washing',
      'Description': 'xxxxxxxxxxxxxx',
      'Amount': 2399
    },
    {
      'ServiceId': 155,
      'ServiceName': 'Full body service',
      'Description': 'xxxxxxxxxxxxxx',
      'Amount': 2399
    },
    {
      'ServiceId': 111,
      'ServiceName': 'Oil Change',
      'Description': 'xxxxxxxxxxxxxx',
      'Amount': 2399
    },
  ];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const num = this.activatedRoute.snapshot.queryParams['num'];
    alert('In Service Details' + num);
  }
}
