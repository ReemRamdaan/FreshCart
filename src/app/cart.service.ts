import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  numberOfCartItems=new BehaviorSubject(0);
headers:any={token:localStorage.getItem('userToken')};
  constructor(private _HttpClient:HttpClient) { 
      this.getLoggedUserCart().subscribe({
        next:(response)=>{
        this.numberOfCartItems.next(response.numOfCartItems);
          //  console.log(response)  
        },
        error:(err)=>{console.log(err)}
      })
    
  }
  addToCart(productId:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
  {productId:productId},{
    headers:this.headers
  })
  }
  getLoggedUserCart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
  {
    headers:this.headers
  })
  }
  removeCartItem(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
  {
    headers:this.headers
  })
  }
  updateItemCount(productId:string,count:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
  {count:count},
  {
    headers:this.headers
  })
  }
  onlinePayment(shippingAddress:any,cartId:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {shippingAddress:shippingAddress},
    {headers:this.headers})
  }
  cashMoney(shippingAddress:any,cartId:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
    {shippingAddress:shippingAddress},
    {headers:this.headers})
  }
  getUserOrder():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/6407cf6f515bdcf347c09f17`,)
  }
}
