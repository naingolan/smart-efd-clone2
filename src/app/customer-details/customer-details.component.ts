import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerEditDialogComponent } from '../customer-edit-dialog/customer-edit-dialog.component';
import { BusinessNumberEditComponent } from '../dialogs/business-number-edit/business-number-edit.component';
import { LoginNumberEditComponent } from '../dialogs/login-number-edit/login-number-edit.component';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  customer = {
    name: 'John Doe',
    phoneNumber: '1234567890',
    email: 'johndoe@example.com',
    businessNumber : "0768498799",
    loginNumber: "0718771159"
  };

  constructor(private dialog: MatDialog) {}

  openEditDialog(): void {
    const dialogRef = this.dialog.open(CustomerEditDialogComponent, {
      width: '400px',
      data: { customer: { ...this.customer } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the customer details with the changes from the dialog
        this.customer = { ...result };
      }
    });
  }
  openBusinessNumberEdit():void{
    const dialogRef = this.dialog.open(BusinessNumberEditComponent,{
      width:'400px',
      data: { customer: this.customer }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the customer details with the changes from the dialog
        this.customer = { ...result };
      }
    });
  }

  openLoginNumberEdit():void{
    const dialogRef = this.dialog.open(LoginNumberEditComponent,{
      width:'400px',
      data: { customer: this.customer }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the customer details with the changes from the dialog
        this.customer = { ...result };
      }
    });
  }
}
