import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-p-details',
  templateUrl: './p-details.component.html',
  styleUrl: './p-details.component.css'
})

  export class PDetailsComponent implements OnInit {
    productId:any;
    productDetails:any;
    myWishItem:string[]=[];
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService,private _CartService:CartService,private _WishlistService:WishlistService,private _NgxSpinnerService:NgxSpinnerService){ }
  addToCart(productId:string){
    this._CartService.addToCart(productId).subscribe({
      next:(response)=>{
        this._CartService.numberOfCartItems.next(response.numOfCartItems)
      },
      error:(err)=>console.log(err)
    })
  }
  addToWishlist(productId:string){
    this._WishlistService.addToWishlist(productId).subscribe({
      next:(response)=>{
        this.myWishItem=response.data;
        this._WishlistService.numberOfWishItems.next(response.data.length);
      //  console.log(response);
      },
      error:(err)=>console.log(err)
    })
  }
  removeWishlistItem(productId:string){
    this._WishlistService.removeWishlistItem(productId).subscribe({
      next:(response)=>{
         this.myWishItem=response.data;
         this._WishlistService.numberOfWishItems.next(response.data.length);
         // console.log(response);
      },
      error:(err)=>console.log(err)
    })
  }
  ngOnInit(): void {
    this._NgxSpinnerService.show();
    this._ActivatedRoute.paramMap.subscribe((params)=>{
  this.productId=params.get('id')
    })
    this._ProductService.getProductDetails(this.productId).subscribe({
      next:(response)=>{this.productDetails=response.data;
        this._NgxSpinnerService.hide();
      }
    })  
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
 
}