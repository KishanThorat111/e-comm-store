import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product } from '../types/product';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  http=inject(HttpClient);
  constructor() { }

  getNewProducts(){
    return this.http.get<Product[]>(environment.apiUrl + "/customer/new-products");
  }
  getFeaturedProducts(){
    return this.http.get<Product[]>(environment.apiUrl + "/customer/featured-products");
  }
}
