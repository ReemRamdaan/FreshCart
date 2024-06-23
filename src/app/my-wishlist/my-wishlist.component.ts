import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrl: './my-wishlist.component.css'
})
export class MyWishlistComponent implements OnInit {
  wishlistDetails: any = null;
  myWishItems: string[] = []
  constructor(private _WishlistService: WishlistService,private _NgxSpinnerService:NgxSpinnerService) { }
  ngOnInit(): void {
    this._NgxSpinnerService.show();
    this._WishlistService.getMyWishlist().subscribe({
      next: (response) => {
        this.wishlistDetails = response.data;
        this._WishlistService.numberOfWishItems.next(response.data.length);
        this._NgxSpinnerService.hide();
      //  console.log(this.wishlistDetails);
      },
      error: (err) => console.log(err)
    })

  }
}
