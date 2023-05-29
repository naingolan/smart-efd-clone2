import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  @ViewChild('editDialog')
  editDialog!: TemplateRef<any>;
  customer = {
    name: 'John Doe',
    phoneNumber: '1234567890',
    email: 'johndoe@example.com'
  };
  editPhoneNumber!: string;
  editEmail!: string;

  constructor(private dialog: MatDialog) {}

  openEditDialog(): void {
    this.editPhoneNumber = this.customer.phoneNumber;
    this.editEmail = this.customer.email;
    this.dialog.open(this.editDialog);
  }

  saveChanges(): void {
    this.customer.phoneNumber = this.editPhoneNumber;
    this.customer.email = this.editEmail;
    this.dialog.closeAll();
  }

  cancelEdit(): void {
    this.dialog.closeAll();
  }
}
