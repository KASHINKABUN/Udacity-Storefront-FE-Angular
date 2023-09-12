import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public summ: number = 0
  constructor(private http: HttpClient, private userService: UserService) { }

  getCart (userId?: number) {
    return this.http.get(`${this.userService.url}/cart/${userId}`, { headers: this.userService.headers })
  }

  addProductToCart (data: { product_id: number, user_id: number, product_number: number }) {
    return this.http.post(`${this.userService.url}/cart`, data, { headers: this.userService.headers })
  }

  deleteProductFromCart (data: { cart_id: number, product_id: number }) {
    return this.http.delete(`${this.userService.url}/cart?cart_id=${data.cart_id}&product_id=${data.product_id}`, { headers: this.userService.headers })
  }
  
}
