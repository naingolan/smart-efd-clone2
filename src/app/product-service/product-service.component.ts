import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
  styleUrls: ['./product-service.component.css']
})
export class ProductServiceComponent {
  productServiceForm: FormGroup;
  taxGroups: string[] = ['1', '2', '3'];

  constructor(private productService: ProductService) {
    this.productServiceForm = new FormGroup({
      productService: new FormControl(''),
      taxGroup: new FormControl('')
    });
  }

  saveProductService(): void {
    // Retrieve the form values
    const productServiceValue = this.productServiceForm.value.productService;
    const taxGroupValue = this.productServiceForm.value.taxGroup;

    // Create a new product object
    const product: Product = {
      name: productServiceValue,
      addedOn: new Date(),
      taxCategory: taxGroupValue
    };

    // Add the product to the ProductService
    this.productService.addProduct(product);

    // Reset the form
    this.productServiceForm.reset();
  }

  onTaxGroupSelectionChange(event: MatSelectChange): void {
    // Get the selected value from the dropdown
    const selectedTaxGroup = event.value;

    // Example: Log the selected value
    console.log('Selected Tax Group:', selectedTaxGroup);
  }
}
