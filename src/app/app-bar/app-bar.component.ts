import { Component, EventEmitter, Input, Output } from '@angular/core';
import { USERINFO } from '../types';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.less']
})
export class AppBarComponent{
  @Output() callGoToCart = new EventEmitter<void>();
  @Output() callGoToListPage = new EventEmitter<void>();
  @Output() callLogout = new EventEmitter<void>();
  @Output() callGoToOrder = new EventEmitter<void>();

  @Input() userInfo!: USERINFO;
  
  constructor () {}

  goToCart () {
    this.callGoToCart.emit();
  }

  goToListPage () {
    this.callGoToListPage.emit();
  }

  logout () {
    this.callLogout.emit();
  }

  goToOrder () {
    this.callGoToOrder.emit();
  }
}
