import { Injectable } from '@angular/core';
import { Receipt } from './daily-receipt.model';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  getReceipts(): Receipt[] {
    // Simulate forged data
    const receipts: Receipt[] = [];
    for (let i = 0; i < 24; i++) {
      const hour = `${i.toString().padStart(2, '0')}.00`;
      const taxInclusive = Math.floor(Math.random() * 1000);
      const taxExclusive = Math.floor(Math.random() * 800);
      const tax = taxInclusive - taxExclusive;
      receipts.push({ hour, taxInclusive, taxExclusive, tax });
    }
    return receipts;
  }
}
