import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { ManageCustomersService, Customers } from '../manage-customers.service';

@Component({
  selector: 'app-manage-customers-display',
  templateUrl: './manage-customers-display.component.html',
  styleUrls: ['./manage-customers-display.component.css']
})
export class ManageCustomersDisplayComponent implements OnInit {
  displayedColumns: string[] = ['customerName', 'phoneNumber','TIN', 'actions'];
  dataSource!: MatTableDataSource<Customers>;
  searchControl: FormControl = new FormControl('');

  constructor(private manageCustomersService: ManageCustomersService){}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Customers>(this.manageCustomersService.getCustomersList());

    this.manageCustomersService.getCustomerAddedObservable().subscribe(() => {
      this.dataSource.data = this.manageCustomersService.getCustomersList();
    });

    this.searchControl.valueChanges.subscribe(value => {
      this.dataSource.filter = value.trim().toLowerCase();
    });
  }
  deleteCustomer(customer:Customers) {
    this.manageCustomersService.deleteCustomer(customer);
  
  }
}


