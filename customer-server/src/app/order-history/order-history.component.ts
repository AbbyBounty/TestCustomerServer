import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  orderHistories = [
    {
      'Order Id': 161,
      'Customer Name': 'steve',
      Date: '12/12/1994',
      'Vehicle Number': 'MH12LH2967',
      'Service Name': 'Full body service',
    },
    {
      'Order Id': 112,
      'Customer Name': 'john',
      Date: '12/12/1994',
      'Vehicle Number': 'MH12LH2967',
      'Service Name': 'Oil Change',
    },
    {
      'Order Id': 3313,
      'Customer Name': 'will',
      Date: '12/12/1994',
      'Vehicle Number': 'MH12LH2967',
      'Service Name': 'Air',
    },
    {
      'Order Id': 124,
      'Customer Name': 'kane',
      Date: '12/12/1994',
      'Vehicle Number': 'MH12LH2967',
      'Service Name': 'Washing',
    },
    {
      'Order Id': 155,
      'Customer Name': 'tim',
      Date: '12/12/1994',
      'Vehicle Number': 'MH12LH2967',
      'Service Name': 'Full body service',
    },
    {
      'Order Id': 111,
      'Customer Name': 'paulo',
      Date: '12/12/1994',
      'Vehicle Number': 'MH12LH2967',
      'Service Name': 'Oil Change',
    },
  ];
  viewDetails(orderhistory) {
    this.router.navigate(['/view-history-details'], {
      queryParams: { num: orderhistory['Vehicle Number'] },
    });
  }
}
