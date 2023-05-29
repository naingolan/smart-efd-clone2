import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild(CustomerDetailsComponent)
  customerDetailsComponent!: CustomerDetailsComponent;
  
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      companyName: ['EVAS AUTOTRAVLE COMPANY LIMITED', Validators.required],
      tim: ['128826791', Validators.required],
      vrn: ['NOT REGISTERED', Validators.required],
      poBox: ['63314', Validators.required],
      street: ['DUNGA', Validators.required],
      region: ['DAR ES SALAAM', Validators.required],
      country: ['TANZANIA', Validators.required]
    });
  }

  ngOnInit(): void {
  }
}
