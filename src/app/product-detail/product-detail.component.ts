import { Component, OnInit } from '@angular/core';
import { PRODUCT } from '../types';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from '../services/error-handler.service';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit{
  product_number_selects: Array<number> = []
  product: PRODUCT = {
    id: -1,
    product_name: '',
    product_image: '',
    product_description: '',
    first_price: '',
    discount_price: '',
    selected: 1,
    product_number: 1
  }

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private errorHandler: ErrorHandlerService, private cartService: CartService, private userService: UserService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id = params['id']
      this.productService.getProductDetail(id).subscribe((res: any) => {
        this.product = res.data
        this.product_number_selects = this.productService.product_number_selects
      })
    }, (e: HttpErrorResponse) => {
      this.errorHandler.errorHandler(e)
    })
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
