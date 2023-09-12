import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private router: Router, private userService: UserService, private _snackBar: MatSnackBar) { }

  errorHandler (e: HttpErrorResponse) {
    if (e.status === 409) {
      this.redirectToLogin()
      return
    }
    this._snackBar.open(e.error.message, 'close');
  }

  redirectToLogin () {
    this.userService.userInfo = {}
    this.userService.setUserInfo(null)
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
