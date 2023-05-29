import { Injectable, EventEmitter } from '@angular/core';

interface Product {
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
    // Add more products here
  ];

  productListChanged: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  getProductList(): Product[] {
    return this.productList;
  }

  addProduct(product: Product): void {
    this.productList.push(product);
    this.productListChanged.emit(this.productList);
  }
}
