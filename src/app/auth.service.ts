import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    if(localStorage.getItem('userToken')!==null){
      this.decodeUserData();
    }
  }
  register(userData:object):Observable<any>
  {
      return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
  }
  login(userData:object):Observable<any>
  {
      return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData)
  }
  decodeUserData(){
   let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
   let decodedToken:any=jwtDecode(encodedToken);  
   this.userData.next(decodedToken); 
  }
  logOut(){
    this.userData.next(null);
    localStorage.removeItem('userToken');
    this._Router.navigate(['/login'])
  }
}
