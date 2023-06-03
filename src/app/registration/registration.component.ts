import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

interface RegistrationResponse {
  message: string;
  userId: string;
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private http: HttpClient, 
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
    ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      tinNumber: ['', Validators.required],
      vrn: ['', Validators.required]
    });
  }

  register() {
    if (this.registrationForm.invalid) {
      // Form validation failed, handle the error
      return;
    }

    const userData = this.registrationForm.value;
    console.log(userData);
    this.http.post<RegistrationResponse>('http://localhost:3000/api/users/register', userData).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        const userId = response.userId; // Access the userId from the response
        
        this.userService.fetchUserData().subscribe(
          (userData) => {
            console.log('User data fetched successfully:', userData);
            // Store user data in the service or local storage for access across components
          })
        this.router.navigate(['/home'], { queryParams: { userId } }); // Pass the userId as a query parameter to the home route
        
        // Add any success handling or navigation logic here
      },
      (error) => {
        console.error('Failed to register user:', error);
        // Add any error handling logic here
      }
    );
  }
}
