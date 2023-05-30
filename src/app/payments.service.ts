import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Payment {
  paymentMethod: string;
  accountNumber: string;
  accountName: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentList: Payment[] = [
    { paymentMethod: 'Credit Card', accountNumber: '123456789', accountName: 'John Doe' },
    { paymentMethod: 'PayPal', accountNumber: '987654321', accountName: 'Jane Smith' },
    // Add more payments here
  ];

  private paymentAddedSubject: Subject<void> = new Subject<void>();

  getPaymentList(): Payment[] {
    return this.paymentList;
  }

  getPaymentAddedObservable(): Observable<void> {
    return this.paymentAddedSubject.asObservable();
  }

  addPayment(payment: Payment): void {
    this.paymentList.push(payment);
    this.paymentAddedSubject.next(); // Emit a value to notify subscribers that a new payment was added
  }

  deletePayment(payment: Payment): void {
    const index = this.paymentList.findIndex(p => p === payment);
    if (index !== -1) {
      this.paymentList.splice(index, 1);
      this.paymentAddedSubject.next(); // Emit a value to notify subscribers that a payment was deleted
    }
  }
}
