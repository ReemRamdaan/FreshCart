import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PDetailsComponent } from './p-details/p-details.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { CashOnDeliveryComponent } from './cash-on-delivery/cash-on-delivery.component';
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    ProductsComponent,
    FeaturedProductsComponent,
    PDetailsComponent,
    MainSliderComponent,
    CheckOutComponent,
    AllOrdersComponent,
    CashOnDeliveryComponent,
    MyWishlistComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxSpinnerModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
