# Handmade Soy Wax Candles - Angular Shop

A simple Angular storefront for hand-poured soy wax candles. Features:
- Product listing and detail pages
- Cart with quantity controls
- Basic checkout form (no real payments yet)
- Responsive layout with minimal styling

## Develop locally
```bash
npm install
npm start
# open http://localhost:4200
```

## Deploys
On each push to `main`, GitHub Actions builds with base-href `/soy-wax-candles/` and publishes to:
- https://thorgoo.github.io/soy-wax-candles/

## Manage products
Edit `src/assets/products.json` and add images under `src/assets/images/`.
