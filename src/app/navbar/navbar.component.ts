import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLogin:boolean=false;
  cartNumbers:number=0;
  wishItemsNumbers:number=0;
constructor(private _AuthService:AuthService,private _CartService:CartService,private _WishlistService:WishlistService){
 _AuthService.userData.subscribe({
  next:()=>{
    if(_AuthService.userData.getValue() !== null){  
      this.isLogin=true;
    }else{
      this.isLogin=false;  
    }
  }
 })
    _CartService.numberOfCartItems.subscribe({
      next:(value)=>{
        this.cartNumbers=value
      }
    })
    _WishlistService.numberOfWishItems.subscribe({
      next:(value)=>{
        this.wishItemsNumbers=value
      }
    })
}
logOut(){
  this._AuthService.logOut();
}
}
