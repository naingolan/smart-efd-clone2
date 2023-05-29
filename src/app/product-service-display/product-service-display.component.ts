import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product-service-display',
  templateUrl: './product-service-display.component.html',
  styleUrls: ['./product-service-display.component.css']
})
export class ProductServiceDisplayComponent implements OnInit {
  displayedColumns: string[] = ['name', 'addedOn'];
  dataSource!: MatTableDataSource<Product>;
  searchControl: FormControl = new FormControl('');

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Product>(this.productService.getProductList());

    this.productService.getProductAddedObservable().subscribe(() => {
      this.dataSource.data = this.productService.getProductList();
    });

    this.searchControl.valueChanges.subscribe(value => {
      this.dataSource.filter = value.trim().toLowerCase();
    });
  }
}