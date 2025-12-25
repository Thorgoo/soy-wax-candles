import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent { 
  constructor(public cart: CartService) {}  
  trackById = (_: number, item: any) => item.product.id;
  
  onQuantityChange(productId: string, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.cart.updateQuantity(productId, +value);
  }
}
