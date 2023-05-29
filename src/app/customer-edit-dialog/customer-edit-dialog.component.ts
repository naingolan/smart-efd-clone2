import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-customer-edit-dialog',
  templateUrl: './customer-edit-dialog.component.html',
  styleUrls: ['./customer-edit-dialog.component.css']
})
export class CustomerEditDialogComponent {
  customer: any;

  constructor(
    public dialogRef: MatDialogRef<CustomerEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // The data passed to the dialog can be accessed through the `data` property
    this.customer = { ...data.customer };
  }

  saveChanges(): void {
    // Perform any necessary actions to save the changes
    // For example, you can emit an event or call a service method
    // In this example, we will pass the updated customer object back to the caller
    this.dialogRef.close(this.customer);
  }

  cancelEdit(): void {
    // Perform any necessary actions when the edit is canceled
    this.dialogRef.close();
  }
}
