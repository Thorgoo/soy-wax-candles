import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  private fb = inject(FormBuilder);
  cart = inject(CartService);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.minLength(6)]],
    notes: [''],
  });

  placing = false;
  orderPlaced = false;

  placeOrder() {
    if (this.form.invalid || this.cart.items().length === 0) return;
    this.placing = true;
    setTimeout(() => { this.placing = false; this.orderPlaced = true; this.cart.clear(); }, 1000);
  }
}
