import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  public url: string = 'http://localhost:4001'
  public token: string = ''
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });

  public userInfo: { id?: number, username?: string, fullname?: string } = {}

  constructor(private http: HttpClient) {
    try {
      const userLocal: string = localStorage.getItem('user') || ''
      this.setHeader()
      this.setUserInfo(JSON.parse(userLocal))
    } catch(error) {
      console.log(error)
    }
  }

  login (data: any) {
    return this.http.post(`${this.url}/validate-information`, data)
  }

  setHeader () {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token || localStorage.getItem('token')}`
    });
  }

  setUserInfo (data: any) {
    this.userInfo = data
  }
}
