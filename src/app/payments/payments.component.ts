import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentService, Payment } from '../payments.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  paymentForm: FormGroup;

  constructor(private paymentService: PaymentService) {
    this.paymentForm = new FormGroup({
      paymentMethod: new FormControl(''),
      accountNumber: new FormControl(''),
      accountName: new FormControl('')
    });
  }

  savePayment(): void {
    // Retrieve the form values
    const paymentMethodValue = this.paymentForm.value.paymentMethod;
    const accountNumberValue = this.paymentForm.value.accountNumber;
    const accountNameValue = this.paymentForm.value.accountName;

    // Create a new payment object
    const payment: Payment = {
      paymentMethod: paymentMethodValue,
      accountNumber: accountNumberValue,
      accountName: accountNameValue
    };

    // Add the payment to the PaymentService
    this.paymentService.addPayment(payment);

    // Reset the form
    this.paymentForm.reset();
  }
}
