# Handmade Soy Wax Candles - Angular Shop

A simple Angular storefront for hand-poured soy wax candles. Features:
- Product listing and detail pages
- Cart with quantity controls
- Basic checkout form (no real payments yet)
- Responsive layout with minimal styling

## Getting Started

1. Install Angular CLI:
```bash
npm i -g @angular/cli
```

2. Create the project:
```bash
ng new soy-wax-candles --routing --style=scss
cd soy-wax-candles
```

3. Copy files from this README into the corresponding paths under `src/`.

4. Install optional payments lib (for future Stripe integration):
```bash
npm i @stripe/stripe-js
```

5. Run:
```bash
ng serve
```
Open http://localhost:4200

## Managing Products
Edit `src/assets/products.json`. Add your own candle entries with:
```json
{
      "id": "my-candle-id",
        "name": "Display Name",
          "description": "Short description",
            "price": 12.99,
              "imageUrl": "assets/images/my-candle.jpg",
                "size": "8oz",
                  "scents": ["Lavender", "Vanilla"],
                    "inStock": true
}
```
Place product images under `src/assets/images/`.

## Optional: Enable Real Payments with Stripe Checkout
This app currently simulates an order. For real payments:
- Create a tiny backend (Node/Express, Cloud Functions, or any server) that calls Stripe’s API to create a Checkout Session.
- In the frontend, call your backend and then redirect with Stripe.js:
```ts
import { loadStripe } from '@stripe/stripe-js';
const stripe = await loadStripe('pk_live_...');
const { id } = await fetch('/api/create-checkout-session', { method: 'POST', body: JSON.stringify(cartItems) }).then(r => r.json());
stripe?.redirectToCheckout({ sessionId: id });
```

## Deployment
- Static hosting (Netlify, Vercel, GitHub Pages) works well:
```bash
ng build --configuration production
```
Upload the `dist/soy-wax-candles` folder to your hosting provider.

## SEO Tips
- Update `<title>` and `<meta name="description">` in `index.html`.
- Add alt text for images in products.json.

## Credits
Lovingly crafted candles by my wife. 💚
}