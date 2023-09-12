import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-congratulation',
  templateUrl: './congratulation.component.html',
  styleUrls: ['./congratulation.component.less']
})
export class CongratulationComponent {
  username?: string
  summ: number = 0
  constructor(private router: Router, private userService: UserService, private cartService: CartService){
    this.username = this.userService.userInfo.username
    this.summ = this.cartService.summ
  }

  goToOrder() {
    this.router.navigate(['/order'])
  }
}
