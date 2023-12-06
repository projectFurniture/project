import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent implements OnInit {
  orderSummary = { subTotal: 0.0, taxes: 0.0, total: 0 };
  productList!: Product[];
  paymentMode = '1';
  user: User | null = null;
  constructor(
    private cartService: CartService,
    private router: Router,
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  onSubmit(paymentForm: NgForm) {
    const formData = paymentForm.value;

    if (paymentForm.valid) {
      const data = {
        order_status: 'Shipped',
        order_delivery_address: formData.deliveryAddress,
        product_list: this.productList,
        payment: {},
      };
      if (this.paymentMode == '1') {
        data.payment = {
          mode: 'card',
          details: {
            name: formData.name,
            email: formData.email,
            cardNumber: formData.cardNumber,
            expiryDate: formData.expiryDate,
            cvv: formData.cvvNumber,
          },
        };
      } else {
        data.payment = {
          mode: 'cash',
        };
      }

      const url = environment.baseUrl + '/orders';
      let headers;
      if (this.user?.accessToken) {
        headers = new HttpHeaders().set(
          'x-access-token',
          this.user.accessToken
        );
      }
      this.httpClient
        .post(url, data, { headers })
        .pipe(
          catchError((errorResponse: HttpErrorResponse) => {
            return throwError('Error occurred while ordering up!');
          })
        )
        .subscribe((data) => {
          console.log('Backend', data);
          localStorage.removeItem('cart_detail');
          this.router.navigate(['/confirmation']);
        });
    }
  }

  ngOnInit(): void {
    const { productList, orderSummary } = this.cartService.getCartDetail();
    this.productList = productList;
    this.orderSummary = orderSummary;
    this.authService.user.subscribe((user: User | null) => {
      this.user = user;
    });
  }
}
