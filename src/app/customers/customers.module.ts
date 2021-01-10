import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CartComponent } from './cart/cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';


@NgModule({
  declarations: [CustomersComponent, CartComponent, OrderHistoryComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
