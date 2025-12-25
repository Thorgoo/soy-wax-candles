import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: ProductListComponent, title: 'Soy Wax Candles' },
  { path: 'product/:id', component: ProductDetailComponent, title: 'Candle Details' },
  { path: 'cart', component: CartComponent, title: 'Your Cart' },
  { path: 'checkout', component: CheckoutComponent, title: 'Checkout' },
  { path: '**', redirectTo: '' },
];

export default routes;
