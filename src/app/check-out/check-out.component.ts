import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {
  cartId: any;
  isLoading:boolean=false;
  constructor(private _CartService: CartService, private _ActivatedRoute: ActivatedRoute) {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        //  console.log(params);
        this.cartId = params.get('id')
        // console.log(this.cartId);
      }
    })
  }
  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl(null, [Validators.required]),
  })
  navigateToPage(url: string) {
    window.location.href = url
  }

  handleSubmit(shippingAddress: FormGroup, cartId: string) {
    this._CartService.onlinePayment(shippingAddress.value, this.cartId).subscribe({
      next: (response: any) => {
        this.navigateToPage(response.session.url);
        this.isLoading=true;
        // console.log(response.session.url)  
      }
    })
  }

}
