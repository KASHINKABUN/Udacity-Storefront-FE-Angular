import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Base, PRODUCT } from '../types';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from '../services/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})

export class ProductsComponent implements OnInit {
  products: Array<PRODUCT> = []
  product_number_selects: Array<number> = []

  constructor(private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private userService: UserService,
    private errorHandler: ErrorHandlerService,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.product_number_selects = this.productService.product_number_selects
    this.productService.getProductList().subscribe((res: any) => {
      this.products = res.data;
      this.products.map((product: PRODUCT) => {
        return {
          ...product,
          selected: 1
        }
      })
    }, (e: HttpErrorResponse) => {
      this.errorHandler.errorHandler(e)
    })
  }

  goToProductDetailPage (id: number) {
    this.router.navigate([`/product/${id}`])
  }

  addToCart(product: PRODUCT) {
    this.cartService.addProductToCart({ product_id: product.id, user_id: this.userService.userInfo.id || -1, product_number: product.selected })
      .subscribe((res: any) => {
        this._snackBar.open(res.message, 'close');
      }, (e: HttpErrorResponse) => {
        this.errorHandler.errorHandler(e)
      })
  }
}
