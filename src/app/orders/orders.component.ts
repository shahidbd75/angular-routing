import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Array<{
    name: string;
    odate: string;
    hub: string;
    isDelivered: boolean;
  }>;
  selectAllCheck;
  constructor() {}

  ngOnInit(): void {
    this.selectAllCheck = false;
    this.orders = [
      {
        name: 'Miniket Gold 5KG',
        odate: '2021-01-15',
        hub: 'ACI Cener',
        isDelivered: true,
      },
      {
        name: 'Atta 1KG',
        odate: '2021-01-16',
        hub: 'ACI Cener',
        isDelivered: false,
      },
      {
        name: 'Miniket Gold 5KG',
        odate: '2021-01-14',
        hub: 'Novo Tower',
        isDelivered: true,
      },
      {
        name: 'Sunflower Oil 3 Liter',
        odate: '2021-01-15',
        hub: 'Simpletree Anarkoli',
        isDelivered: false,
      },
    ];
  }

  toggleAll(): void {
    if (this.selectAllCheck) {
      this.orders = this.orders.map((x) => {
        return {
          name: x.name,
          hub: x.hub,
          odate: x.odate,
          isDelivered: true,
        };
      });
    } else {
      this.orders = this.orders.map((x) => {
        return {
          name: x.name,
          hub: x.hub,
          odate: x.odate,
          isDelivered: false,
        };
      });
    }
  }
  approved(): void {
    console.log(this.orders);
  }
}
