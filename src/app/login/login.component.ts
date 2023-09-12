import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from '../services/error-handler.service';
import { USERINFO } from '../types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  constructor (private userService: UserService, private router: Router, private errorHandler: ErrorHandlerService) {}
  @Output() userEvent = new EventEmitter<USERINFO>()

  data: { username: string, pass_word: string } = {
    username: '',
    pass_word: ''
  }

  login () {
    this.userService.login(this.data).subscribe((res: any) => {
      this.userService.token = res.data?.token;
      this.userService.setHeader();
      this.userService.setUserInfo(res.data?.user)
      localStorage.setItem('token', res.data?.token);
      localStorage.setItem('user', JSON.stringify(res.data?.user));
      this.router.navigate(['/']);
    }, (e: HttpErrorResponse) => {
      this.errorHandler.errorHandler(e)
    })
  }
}
