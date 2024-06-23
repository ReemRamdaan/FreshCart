import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cash-on-delivery',
  templateUrl: './cash-on-delivery.component.html',
  styleUrl: './cash-on-delivery.component.css'
})
export class CashOnDeliveryComponent {
  cartId:any;
  isLoading:boolean=false;
  constructor(private _CartService:CartService,private _Router:Router ,private _ActivatedRoute:ActivatedRoute){
    this._ActivatedRoute.paramMap.subscribe({next:(params)=>{
      // console.log(params);
            this.cartId=params.get('id')
          }})
  }
shippingAddress:FormGroup=new FormGroup({
  details:new FormControl(null,[Validators.required]),
  phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  city:new FormControl(null,[Validators.required]),
}) 
handleSubmit(shippingAddress:FormGroup,cartId:string){
 this._CartService.cashMoney(shippingAddress.value,this.cartId).subscribe({
  next:(response:any)=>{
    //  console.log(response) 
    this.isLoading=true;
      this._Router.navigate(['/allorders'])  
  }
  ,error:(err)=>{console.log(err)}
 })
}

}
