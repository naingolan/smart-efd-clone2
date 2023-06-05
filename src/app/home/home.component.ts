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
      this.userName = this.userService.userData().user.username;
  }
  
}
