import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  userId: String ="";
  userName: String = "";
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
      console.log('User ID:', this.userId);
      this.userName = this.userService.getUserData().user.username;
      // Use the userId to fetch the user data or perform any other logic
    });
  }
  
}
