import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.css'
})
export class AllOrdersComponent implements OnInit{
  myOrders:any[]=[];
constructor(private _CartService:CartService,private _NgxSpinnerService:NgxSpinnerService){}
ngOnInit(): void {
  this._NgxSpinnerService.show();
this._CartService.getUserOrder().subscribe({
  next:(response)=>{
    this.myOrders=response.splice(5,10)
    // console.log(response[0].cartItems[0].product.title)
    this._NgxSpinnerService.hide();
    // console.log(response[0].cartItems[0].count);
    // console.log(this.myOrders);
    
   }
  ,
  error:(err)=>console.log(err)
})
}
}

