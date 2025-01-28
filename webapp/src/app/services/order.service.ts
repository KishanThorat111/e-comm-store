import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Order } from '../types/order';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  http=inject(HttpClient)
  constructor() { }

  addOrder(order:Order){
    return this.http.post(environment.apiUrl+"/customer/order",order)
  }

  getCustomerOrders(){
    return this.http.get<Order[]>(environment.apiUrl+"/customer/orders")
  }
}
