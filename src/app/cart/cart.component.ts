import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { PRODUCT } from '../types';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from '../services/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent {
  products: Array<PRODUCT> = []
  cartId?: number;
  summ: number = 0;
  checkoutInfo: {fullname?: string, address?: string, cartNumber?: number} = {}
  blankContent: string = `No any product in your cart`
  constructor (private cartService: CartService,
    private userService: UserService,
    private errorHandler: ErrorHandlerService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private orderService: OrderService
  ) {
    this.getCart()
    this.summ = this.cartService.summ
  }

  getCart () {
    this.cartService.getCart(this.userService.userInfo.id).subscribe((res: any) => {
      this.products = res.data
      this.cartId = res.data[0]?.cart_id
      this.checkout()
    }, (e: HttpErrorResponse) => {
      this.errorHandler.errorHandler(e)
    })
  }

  amountChanged (product: PRODUCT) {
    if (product.product_number < 0) {
      product.product_number = 0
    }
    if (product.product_number % 2 !== 1 && product.product_number % 2 !== 0) {
      product.product_number = Math.floor(product.product_number)
    }
    this.checkout()
  }

  checkout () {
    this.cartService.summ = this.summ = 0
    this.products.forEach((product: PRODUCT) => {
      let discountPrice = Number(product.discount_price.split('$')[0])
      this.cartService.summ += discountPrice * product.product_number
    })
    this.summ = this.cartService.summ
  }

  deleteProductFromCart (product_id: number) {
    if (this.cartId) {
      this.cartService.deleteProductFromCart({ cart_id: this.cartId, product_id: product_id })
        .subscribe((res: any) => {
          this.getCart()
          this._snackBar.open(res.message, 'close');
        }, (e: HttpErrorResponse) => {
          this.errorHandler.errorHandler(e)
        })
    }
  }

  cartSubmit () {
    if (this.products.length) {
      this.orderService.createOrder({
        cart_id: this.cartId || -1,
        user_id: this.userService.userInfo.id || -1,
        products: this.products
      }).subscribe((res: any) => {
        this._snackBar.open(res.message, 'close');
        this.router.navigate(['/submit-order'])
      }, (e: HttpErrorResponse) => {
        this.errorHandler.errorHandler(e)
      })
    }
  }

  onCheckCreditCard (form: NgForm) {
    const cardNumber = this.checkoutInfo.cartNumber?.toString()
    if (!cardNumber?.match(/^[0-9]+$/)) {
      form.form.controls['credit'].setErrors({'numberOnly': true});
      return
    }
    const len = cardNumber.length || 0
    if (len === 0 || len !== 16) {
      form.form.controls['credit'].setErrors({'incorrect': true});
      return
    }
  }
}
