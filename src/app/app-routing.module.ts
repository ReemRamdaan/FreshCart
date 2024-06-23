import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { authGuard } from './auth.guard';
import { PDetailsComponent } from './p-details/p-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { CashOnDeliveryComponent } from './cash-on-delivery/cash-on-delivery.component';
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component';
const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[authGuard],component:HomeComponent},
  {path:"cashondelivery/:id",canActivate:[authGuard],component:CashOnDeliveryComponent},
  {path:"categories",canActivate:[authGuard],component:CategoriesComponent},
  {path:"checkout/:id",canActivate:[authGuard],component:CheckOutComponent},
  {path:"allorders",canActivate:[authGuard],component:AllOrdersComponent},
  {path:"products",canActivate:[authGuard],component:ProductsComponent},
  {path:"cart",canActivate:[authGuard],component:CartComponent},
  {path:"productdetails/:id",canActivate:[authGuard],component:PDetailsComponent},
  {path:"brands",canActivate:[authGuard],component:BrandsComponent},
  {path:"wishlist",canActivate:[authGuard],component:MyWishlistComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",canActivate:[authGuard],component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
