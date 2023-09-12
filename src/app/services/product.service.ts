import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  products: object[] = []

  public product_number_selects: Array<number> = []

  constructor(private http: HttpClient, private userService: UserService) {
    this.product_number_selects = Array.from(Array(50+1).keys()).slice(1)
  }

  getProductList () {
    return this.http.get(`${this.userService.url}/products`, { headers: this.userService.headers })
  }

  getProductDetail (id: number) {
    return this.http.get(`${this.userService.url}/product?id=${id}`, { headers: this.userService.headers })
  }
}
