import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ManageCustomersService, Customers } from '../manage-customers.service';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})

export class ManageCustomersComponent {
  manageCustomersServiceForm: FormGroup;
  taxGroups: string[] = ['1', '2', '3'];

  constructor(private manageCustomersService: ManageCustomersService) {
    this.manageCustomersServiceForm = new FormGroup({
      customerName: new FormControl(''),
      phoneNumber: new FormControl(''),
      TIN: new FormControl(''),
      VRN: new FormControl(''),
      customerAddress: new FormControl('')

    });
  }

  saveManageCustomers(): void {
    // Retrieve the form values
    const customerNameValue = this.manageCustomersServiceForm.value.customerName;
    const phoneNumberValue = this.manageCustomersServiceForm.value.phoneNumber;
    const TINValue = this.manageCustomersServiceForm.value.TIN;
    const VRNValue = this.manageCustomersServiceForm.value.VRN;
    const customerAddressValue= this.manageCustomersServiceForm.value.customerAddress;

    // Create a new product object
    const customers: Customers = {
      customerName: customerNameValue,
      phoneNumber: phoneNumberValue,
      TIN: TINValue,
      VRN: VRNValue,
      customerAddress:customerAddressValue
    };

    // Add the product to the ProductService
    this.manageCustomersService.addCustomers(customers);

    // Reset the form
    this.manageCustomersServiceForm.reset();
  }

}
