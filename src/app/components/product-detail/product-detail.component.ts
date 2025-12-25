import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productsSvc = inject(ProductsService);
  private cart = inject(CartService);

  product?: Product;
  loading = true;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productsSvc.getProductById(id).subscribe({
      next: (p) => { this.product = p; this.loading = false; },
      error: () => (this.loading = false),
    });
  }

  addToCart() { if (this.product) this.cart.add(this.product); }
}
