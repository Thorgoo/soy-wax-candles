import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product';

export interface CartItem { product: Product; quantity: number; }

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSig = signal<CartItem[]>([]);

  items = computed(() => this.itemsSig());
  totalQuantity = computed(() => this.itemsSig().reduce((sum, i) => sum + i.quantity, 0));
  totalPrice = computed(() => this.itemsSig().reduce((sum, i) => sum + i.product.price * i.quantity, 0));

  add(product: Product, qty = 1) {
    const items = [...this.itemsSig()];
    const idx = items.findIndex(i => i.product.id === product.id);
    if (idx > -1) {
      items[idx] = { ...items[idx], quantity: items[idx].quantity + qty };
    } else {
      items.push({ product, quantity: qty });
    }
    this.itemsSig.set(items);
  }

  updateQuantity(productId: string, qty: number) {
    const items = this.itemsSig().map(i => i.product.id === productId ? { ...i, quantity: Math.max(1, qty) } : i);
    this.itemsSig.set(items);
  }

  remove(productId: string) { this.itemsSig.set(this.itemsSig().filter(i => i.product.id !== productId)); }
  clear() { this.itemsSig.set([]); }
}
