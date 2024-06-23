import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-featured-products',
  standalone: false,
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent implements OnInit {
  products:any;
  myWishItems:string[]=[];
  searchTerm:string='';
  constructor(private _ProductService:ProductService,private _CartService:CartService,private _WishlistService:WishlistService,private _NgxSpinnerService:NgxSpinnerService){ 
  }
  addToCart(productId:string){
    this._CartService.addToCart(productId).subscribe({
      next:(response)=>{
        this._CartService.numberOfCartItems.next(response.numOfCartItems)
        // console.log(response);
      },
      error:(err)=>console.log(err)
    })
  }
  addToWishlist(productId:string){
    this._WishlistService.addToWishlist(productId).subscribe({
      next:(response)=>{
        this.myWishItems=response.data;
        this._WishlistService.numberOfWishItems.next(response.data.length);
       // console.log(response);
      },
      error:(err)=>console.log(err)
    })
  }
  removeWishlistItem(productId:string){
    this._WishlistService.removeWishlistItem(productId).subscribe({
      next:(response)=>{
         this.myWishItems=response.data;
         this._WishlistService.numberOfWishItems.next(response.data.length);
        //  console.log(response);
      },
      error:(err)=>console.log(err)
    })
  }
  ngOnInit(): void {
    this._NgxSpinnerService.show();
    this._ProductService.getProducts().subscribe({
      next: (response) => {
      this.products=response.data;
      this._NgxSpinnerService.hide();
      },
    })
  }
}
