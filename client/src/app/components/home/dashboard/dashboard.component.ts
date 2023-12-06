import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

interface ProductData {
  payment: {
    details: {
      name: string;
      email: string;
      cardNumber: number;
      expiryDate: string;
      cvv: number;
    };
    mode: any;
  };
  order_status: string;
  order_delivery_address: string;
  product_list: Product[];
  id: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isAuthenticated: boolean = false;
  user: User | null = null;
  orders: ProductData[] = [];
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user: User | null) => {
      this.isAuthenticated = !!user;
      this.user = user;
    });
    console.log('Hi');
    if (this.user) {
      const url = environment.baseUrl + '/orders/' + this.user.id;
      this.httpClient.get<ProductData[]>(url).subscribe((data) => {
        this.orders = data;
        // this.orders = {
        //   product_list: data.product_list,
        //   order_status: data.order_status,
        // };
        // console.log(this.orders);
      });
    }
  }
}
