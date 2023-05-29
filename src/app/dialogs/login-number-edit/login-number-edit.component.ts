import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-number-edit',
  templateUrl: './login-number-edit.component.html',
  styleUrls: ['./login-number-edit.component.css']
})
export class LoginNumberEditComponent {

  customer: any;

  constructor(
    public dialogRef: MatDialogRef<LoginNumberEditComponent>,
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
