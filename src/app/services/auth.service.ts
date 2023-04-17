import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any=new BehaviorSubject(null)
  constructor(private _HttpClient:HttpClient, private _Router:Router ) {
    if(localStorage.getItem('token')!==null){
      this.checkLocalStorage()
    }
  }
  checkLocalStorage(){
    if(localStorage.getItem('token')!==null){
      this.userData.next(JSON.stringify(localStorage.getItem('token')))
    }else{
      this.userData.next(null)
    }

  }

  register(userData:object):Observable <any> {

    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', userData)
  }
  login(userData:object):Observable <any> {

    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin', userData)
  }


  logOut(){
    localStorage.removeItem('token');
  this.userData.next('null')
  this._Router.navigate(['/login'])
}
}
