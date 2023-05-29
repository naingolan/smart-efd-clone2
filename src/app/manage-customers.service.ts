import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Customers {
  customerName: string;
  phoneNumber: string;
  TIN: string;
  VRN: string;
  customerAddress: string;
}

@Injectable({
  providedIn: 'root'
})
export class ManageCustomersService {
  private customersList: Customers[] = [
    { customerName: 'Kelvin Diego', phoneNumber:"0768498799", TIN:"485839393939", VRN:"4848484884", customerAddress:"Iringa, Tanzania" },
    { customerName: 'Kelvin Diego', phoneNumber:"0768498799", TIN:"485839393939", VRN:"4848484884", customerAddress:"Iringa, Tanzania" },
    { customerName: 'Kelvin Diego', phoneNumber:"0768498799", TIN:"485839393939", VRN:"4848484884", customerAddress:"Iringa, Tanzania" },
    { customerName: 'Kelvin Diego', phoneNumber:"0768498799", TIN:"485839393939", VRN:"4848484884", customerAddress:"Iringa, Tanzania" },
    // Add more products here
  ];

  private customersAddedSubject: Subject<void> = new Subject<void>();

  getCustomersList(): Customers[] {
    return this.customersList;
  }

  getCustomerAddedObservable(): Observable<void> {
    return this.customersAddedSubject.asObservable();
  }

  addCustomers(customers: Customers): void {
    this.customersList.push(customers);
    this.customersAddedSubject.next(); // Emit a value to notify subscribers that a new product was added
  }
}
