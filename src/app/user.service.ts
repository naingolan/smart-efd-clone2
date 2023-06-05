import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: any;

  constructor(private http: HttpClient) { }

  // Fetch user data based on userId and store it in the userData variable
  fetchUserData(userId: string): Observable<any> {
    const url = `http://localhost:3000/api/users/${userId}`;
    return this.http.get(url).pipe(
      tap((data) => {
        this.userData = data;
      })
    );
  }
  
  // Get the stored user data
  getUserData(): any {
    return this.userData;
  }
}
