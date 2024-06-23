import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../product.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories:any[]=[];
  constructor(private _ProductService:ProductService,private _NgxSpinnerService:NgxSpinnerService){}
ngOnInit(): void {
  this._NgxSpinnerService.show();
this._ProductService.getCategories().subscribe({
  next:(response)=>{
  this.categories=response.data;
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
        items: 6
      }
    },
    nav: true
  }
}
