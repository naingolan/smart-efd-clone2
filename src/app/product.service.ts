import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Product {
  name: string;
  addedOn: Date;
  taxCategory: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList: Product[] = [
    { name: 'Product A', addedOn: new Date('2023-05-01'), taxCategory: 'Category 1' },
    { name: 'Product B', addedOn: new Date('2023-05-05'), taxCategory: 'Category 2' },
    { name: 'Product C', addedOn: new Date('2023-05-10'), taxCategory: 'Category 3' },
    { name: 'Kelvin Pizza', addedOn: new Date('2023-05-10'), taxCategory: 'Category'}
    // Add more products here
  ];

  private productAddedSubject: Subject<void> = new Subject<void>();

  getProductList(): Product[] {
    return this.productList;
  }

  getProductAddedObservable(): Observable<void> {
    return this.productAddedSubject.asObservable();
  }

  addProduct(product: Product): void {
    this.productList.push(product);
    this.productAddedSubject.next(); // Emit a value to notify subscribers that a new product was added
  }
}
