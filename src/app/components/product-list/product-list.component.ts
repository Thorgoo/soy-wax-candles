import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private productsSvc = inject(ProductsService);
  private cart = inject(CartService);

  products: Product[] = [];
  loading = true;

  ngOnInit() {
    this.productsSvc.getProducts().subscribe({
      next: (list) => { this.products = list.filter(p => p.inStock); this.loading = false; },
      error: () => (this.loading = false),
    });
  }

  addToCart(p: Product) { this.cart.add(p, 1); }
}
