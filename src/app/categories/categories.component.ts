import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
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

}
