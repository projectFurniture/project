import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export default class CartComponent implements OnInit {
  productList: Product[] = [];
  user: User | null = null;
  orderSummary = { subTotal: 0.0, taxes: 0.0, total: 0 };
  isCartEmpty: boolean = true;
  constructor(
    private cartService: CartService,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    const cartDetails = this.cartService.getCartDetail();
    this.productList = cartDetails.productList;
    this.orderSummary = cartDetails.orderSummary;
    this.cartService.cartUpdated.subscribe((cartDetails) => {
      this.productList = cartDetails.productList;
      this.orderSummary = cartDetails.orderSummary;
    });
    this.authService.user.subscribe((user) => {
      this.user = user;
    });

    this.updateIfCartIsEmpty();
  }

  updateIfCartIsEmpty() {
    if (this.productList.length != 0) {
      this.isCartEmpty = false;
    } else {
      this.isCartEmpty = true;
    }
  }

  increaseProductQty(id: number) {
    this.cartService.updateCartItem(id, 1);
  }
  decreaseProductQty(id: number) {
    this.cartService.updateCartItem(id, -1);
  }

  deleteProduct(id: number) {
    this.cartService.deleteCartItem(id);
    this.updateIfCartIsEmpty();
  }

  onCheckOutBtnClick() {
    if (this.user) {
      this.router.navigate(['/checkout']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
