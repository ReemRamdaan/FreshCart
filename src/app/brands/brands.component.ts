import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit {
  brands:any[]=[];
constructor(private _ProductService:ProductService,private _NgxSpinnerService:NgxSpinnerService){}
ngOnInit(): void {
  this._NgxSpinnerService.show();
  this._ProductService.getBrands().subscribe({
    next:(response)=>{this.brands=response.data;
    this._NgxSpinnerService.hide();}
  })
}
}
