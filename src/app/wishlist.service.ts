import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  headers:any={token:localStorage.getItem('userToken')};
numberOfWishItems=new BehaviorSubject(0)
  constructor(private _HttpClient:HttpClient) { 
    this.getMyWishlist().subscribe({
      next:(response)=>{
     //  console.log(response.data)
      this.numberOfWishItems.next(response.data.length)
      },
      error:(err)=>console.log(err)
    })
  }
  getMyWishlist():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist',
      {headers:this.headers}
    )
  }
  addToWishlist(productId:string):Observable<any>{
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/wishlist",
      {productId:productId},
      {headers:this.headers}
    )
  }
  removeWishlistItem(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      {headers:this.headers})
  }
}
