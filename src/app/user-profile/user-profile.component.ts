import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild(CustomerDetailsComponent)
  customerDetailsComponent!: CustomerDetailsComponent;
  

  
  myForm: FormGroup;
  userData: any;
  email:String =  '';

  constructor(private fb: FormBuilder, private userService: UserService) {
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
    this.userData = this.userService.getUserData();
    this.email= this.userData.user.email;
    console.log(this.userData)
  }
}
