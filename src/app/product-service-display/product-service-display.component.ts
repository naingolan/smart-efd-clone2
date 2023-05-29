import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { ProductService } from '../product.service';

interface Product {
  name: string;
  addedOn: Date;
  taxCategory: string;
}

@Component({
  selector: 'app-product-service-display',
  templateUrl: './product-service-display.component.html',
  styleUrls: ['./product-service-display.component.css']
})
export class ProductServiceDisplayComponent implements OnInit {
  displayedColumns: string[] = ['name', 'addedOn', 'taxCategory'];
  dataSource!: MatTableDataSource<Product>;
  searchControl: FormControl = new FormControl('');

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Product>(this.productService.getProductList());

    // Filter the table based on the search input value
    this.searchControl.valueChanges.subscribe(value => {
      this.dataSource.filter = value.trim().toLowerCase();
    });

    // Subscribe to changes in the product list
    // Subscribe to changes in the product list
    this.productService['productListChanged'].subscribe((products: Product[]) => {
      this.dataSource.data = products;
    });
  }
}
