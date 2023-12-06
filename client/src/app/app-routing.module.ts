// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AddProductComponent } from './components/add-product/add-product.component';
// import { HomeComponent } from './components/home/home.component';
// import { ProductDetailsComponent } from './components/product-details/product-details.component';
// import { ProductEditComponent } from './components/product-edit/product-edit.component';
// import { ProductsListComponent } from './components/products-list/products-list.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent, pathMatch: 'full' },
//   { path: 'shop', component: ProductsListComponent },
//   { path: 'products/:id', component: ProductEditComponent },
//   { path: 'add', component: AddProductComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AuthComponent } from './components/auth/auth.component';
import CartComponent from './components/cart/cart.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Home',
    data: { title: 'Home' },
  },
  { path: 'shop', component: ProductsListComponent, title: 'Shop' },
  {
    path: 'products/:id',
    component: ProductEditComponent,
    title: 'Product',
    canActivate: [AuthGuardService],
  },
  {
    path: 'add',
    component: AddProductComponent,
    title: 'Add',
    canActivate: [AuthGuardService],
  },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'sign-up', component: AuthComponent, title: 'Sign-Up' },
  { path: 'login', component: AuthComponent, title: 'Login' },
  { path: 'checkout', component: CheckoutPageComponent, title: 'Checkout' },
  {
    path: 'confirmation',
    component: ConfirmationPageComponent,
    title: 'Confirmation',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
