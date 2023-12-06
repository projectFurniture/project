import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: Product = {
    name: '',
    image: '',
    description: '',
    price: undefined,
    qty: 1,
    category: '',
  };
  submitted = false;

  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories;
    });
  }

  saveProduct(): void {
    const data = {
      name: this.product.name,
      image: this.product.image,
      description: this.product.description,
      price: this.product.price,
      qty: this.product.qty,
      category: this.product.category,
    };

    this.productService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      image: '',
      description: '',
      price: 0,
      qty: 0,
      category: '',
    };
  }
}
