import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

interface CartDetail {
  productList: Product[];
  orderSummary: {
    subTotal: number;
    taxes: number;
    total: number;
  };
}

export const CART_DETAIL_KEY = 'cart_detail';

@Injectable({ providedIn: 'root' })
export class CartService {
  productList: Product[] = [];
  orderSummary = { subTotal: 0.0, taxes: 0.0, total: 0 };
  cartUpdated = new Subject<CartDetail>();

  getCartDetail() {
    const retreivedCart = this.retreiveCartFromLocalStorage();
    this.productList = retreivedCart.productList;
    this.orderSummary = retreivedCart.orderSummary;

    return { productList: this.productList, orderSummary: this.orderSummary };
  }

  updateOrderSummary() {
    this.orderSummary.subTotal = this.productList.reduce(
      (total: number, product: Product) => {
        if (product.price && product.qty) {
          return +(total + product.price * product.qty).toFixed(2);
        } else {
          return +total.toFixed(2);
        }
      },
      0
    );
    this.orderSummary.taxes = +(this.orderSummary.subTotal * 0.13).toFixed(2);
    this.orderSummary.total = +(
      this.orderSummary.subTotal + this.orderSummary.taxes
    ).toFixed(2);
  }

  private indexOfCartItem(id: number) {
    return this.productList.findIndex((product) => product.id == id);
  }

  updateCartItem(id: number, increaseOrDecrease: number) {
    const cartItemIndex = this.indexOfCartItem(id);
    console.log(cartItemIndex);
    if (cartItemIndex != -1) {
      let product = this.productList[cartItemIndex];
      if (product.qty !== undefined && increaseOrDecrease === 1) {
        product.qty = product.qty + 1;
      } else if (product.qty !== undefined && increaseOrDecrease === -1) {
        product.qty = product.qty - 1;
      }
      this.productList[cartItemIndex] = product;
    }
    this.updateOrderSummary();
    this.storeCartInLocalStorage({
      productList: this.productList,
      orderSummary: this.orderSummary,
    });
    this.cartUpdated.next(this.getCartDetail());
  }

  deleteCartItem(id: any) {
    const cartItemIndex = this.indexOfCartItem(id);
    if (cartItemIndex != -1) {
      this.productList.splice(cartItemIndex, 1);
    }
    this.updateOrderSummary();
    this.storeCartInLocalStorage({
      productList: this.productList,
      orderSummary: this.orderSummary,
    });
    this.cartUpdated.next(this.getCartDetail());
  }

  addCartItem(product: Product) {
    const cartItemIndex = this.indexOfCartItem(product.id);
    if (cartItemIndex == -1) {
      this.productList.push(product);
    } else {
      const product = this.productList[cartItemIndex];
      if (product.qty) {
        product.qty += 1;
      }
      this.productList[cartItemIndex] = product;
    }

    this.updateOrderSummary();

    this.storeCartInLocalStorage({
      productList: this.productList,
      orderSummary: this.orderSummary,
    });
    this.cartUpdated.next(this.getCartDetail());
  }

  storeCartInLocalStorage(cartDetail: CartDetail) {
    localStorage.setItem(CART_DETAIL_KEY, JSON.stringify(cartDetail));
  }

  retreiveCartFromLocalStorage() {
    let cartDetail = localStorage.getItem(CART_DETAIL_KEY);
    if (cartDetail) {
      return JSON.parse(cartDetail);
    }
    return {
      productList: [],
      orderSummary: {
        subTotal: 0.0,
        taxes: 0.0,
        total: 0.0,
      },
    };
  }
}
