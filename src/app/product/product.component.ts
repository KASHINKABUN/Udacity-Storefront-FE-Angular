import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PRODUCT } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent {
  constructor (private router: Router) {}
  @Input() product: PRODUCT = {
    id: -1,
    product_name: '',
    product_image: '',
    product_description: '',
    first_price: '',
    discount_price: '',
    selected: 0,
    product_number: 0
  }
  @Input('selects') product_number_selects: any = []

  @Output() callAddToCart = new EventEmitter<any>();
  @Output() callGoToProductDetailPage = new EventEmitter<any>();

  goToProductDetailPage (id: number) {
    this.callGoToProductDetailPage.emit(id)
  }

  addToCart() {
    this.callAddToCart.emit(this.product)
  }
}
