import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { ORDER_REQ } from '../types';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private userService: UserService) { }
  
  getOrder () {
    return this.http.get(`${this.userService.url}/order/${this.userService.userInfo.id}`, { headers: this.userService.headers })
  }

  createOrder (data: ORDER_REQ) {
    return this.http.post(`${this.userService.url}/order`, data, { headers: this.userService.headers })
  }
}
