import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ORDER, ORDER_INFO, ORDER_RES, PRODUCT } from '../types';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from '../services/error-handler.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent {
  orders: ORDER_RES[] = []
  constructor(private orderService: OrderService, private errorHandler: ErrorHandlerService) {
    this.orderService.getOrder().subscribe((res: any) => {
      this.handleOrderRes(res.data as { orders: ORDER_INFO[], products: { [key: string]: PRODUCT[] } })
    }, (e: HttpErrorResponse) => {
      this.errorHandler.errorHandler(e)
    })
  }

  handleOrderRes (data: { orders: ORDER_INFO[], products: { [key: string]: PRODUCT[] } }) {
    data.orders?.forEach((order: ORDER_INFO) => {
      this.orders.push({
        order: order,
        products: data.products[order.id]
      })
    })
  }
}
