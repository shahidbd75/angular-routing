import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';

@NgModule({
  declarations: [OrdersComponent, OrderTrackingComponent],
  imports: [CommonModule, FormsModule, OrdersRoutingModule],
})
export class OrdersModule {}
