import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  fetchUserData(): Observable<any> {
    // Make an HTTP GET request to fetch user data
    return this.http.get<any>(`${this.apiUrl}/userdata`);
  }
}
