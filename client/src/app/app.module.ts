import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AuthComponent } from './components/auth/auth.component';
import CartComponent from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailedViewComponent } from './components/product-detailed-view/product-detailed-view.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToastComponent } from './components/toast/toast.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductsListComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductEditComponent,
    AuthComponent,
    ToastComponent,
    SpinnerComponent,
    ProductDetailedViewComponent,
    CartComponent,
    CheckoutPageComponent,
    ConfirmationPageComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
