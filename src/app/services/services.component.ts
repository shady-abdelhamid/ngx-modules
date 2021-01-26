import { Component, OnInit } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { User } from './user/user.model';
import { UserService } from './user/user.service';

@Component({
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  user: User = new User();
  constructor(private userService: UserService, private snackbarService: SnackbarService) { }

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

  public callSnackbar(): void {
    this.snackbarService.callSnackbar('a prompt from snackbar service.');
  }

}
