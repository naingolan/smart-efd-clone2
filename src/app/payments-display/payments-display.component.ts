import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { PaymentService, Payment } from '../payments.service';

@Component({
  selector: 'app-payments-display',
  templateUrl: './payments-display.component.html',
  styleUrls: ['./payments-display.component.css']
})
export class PaymentsDisplayComponent implements OnInit {
  displayedColumns: string[] = ['paymentMethod', 'accountNumber', 'accountName', 'actions'];
  dataSource!: MatTableDataSource<Payment>;
  searchControl: FormControl = new FormControl('');

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Payment>(this.paymentService.getPaymentList());

    this.paymentService.getPaymentAddedObservable().subscribe(() => {
      this.dataSource.data = this.paymentService.getPaymentList();
    });

    this.searchControl.valueChanges.subscribe(value => {
      this.dataSource.filter = value.trim().toLowerCase();
    });
  }
  deletePayment(payment: Payment): void {
    this.paymentService.deletePayment(payment);
  }
}
