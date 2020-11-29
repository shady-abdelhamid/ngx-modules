import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model';
import { UserService } from './user/user.service';

@Component({
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  user: User = new User();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(1).subscribe({
      next: (response: any) => {
        this.user = response;
        console.log(this.user);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log('Done');
      }
    });
  }

}
