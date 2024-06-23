import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartDetails:any=null;
constructor(private _CartService:CartService,private _NgxSpinnerService:NgxSpinnerService){}
ngOnInit(): void {
  this._NgxSpinnerService.show();
  this._CartService.getLoggedUserCart().subscribe({
    next:(response)=>{this.cartDetails=response.data;
      this._NgxSpinnerService.hide();
    //  console.log(this.cartDetails)
    }
    ,
    error:(err)=>{}
  })
}
removeCartItem(productId:string){
  return this._CartService.removeCartItem(productId).subscribe({
    next:(response)=>{
      this.cartDetails=response.data
      this._CartService.numberOfCartItems.next(response.numOfCartItems)
    },
    error:(err)=>{console.log(err)}
  })
}
updateItemCount(productId:string,count:number){
  return this._CartService.updateItemCount(productId,count).subscribe({
    next:(response)=>{
      this.cartDetails=response.data;
    },
    error:(err)=>{console.log(err)}
})
}
}
