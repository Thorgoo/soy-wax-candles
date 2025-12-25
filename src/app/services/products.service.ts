import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/products.json');
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.getProducts().pipe(map(list => list.find(p => p.id === id)));
  }
}
