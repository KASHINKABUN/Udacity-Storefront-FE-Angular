import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from './services/error-handler.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit{
  title = 'Udacity-Storefront-FE-Angular';
  userInfo: {id?: number, fullname?: string, username?: string} = {}

  constructor(private router: Router,
    private errorHandlerService: ErrorHandlerService,
    private userService: UserService
  ) {
    this.userInfo = this.userService.userInfo
  }
  ngOnInit(): void {
    this.userInfo = this.userService.userInfo
  }
  
  goToCart () {
    this.router.navigate(['/cart'])
  }

  goToListPage () {
    this.router.navigate(['/'])
  }

  logout () {
    this.userInfo = {}
    this.errorHandlerService.redirectToLogin()
  }

  goToOrder () {
    this.router.navigate(['/order'])
  }
}
