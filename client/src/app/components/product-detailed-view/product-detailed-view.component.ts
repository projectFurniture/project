import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detailed-view',
  templateUrl: './product-detailed-view.component.html',
  styleUrls: ['./product-detailed-view.component.css'],
})
export class ProductDetailedViewComponent {
  @Input('product') product!: Product;
  @Output() isModalOpen = new EventEmitter();
  showToastMsg: boolean = false;

  constructor(private cartService: CartService) {}

  onCloseBtnClick() {
    this.isModalOpen.emit();
  }

  onAddToCartBtnClick(product: Product) {
    product.qty = 1;
    this.showToastMsg = true;
    setTimeout(() => {
      this.cartService.addCartItem(product);
      this.showToastMsg = false;
    }, 1500);
  }
}
