import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [ './user-profile.component.css' ]
})
export class UserProfileComponent implements OnInit {

  userInformation: any;

  constructor(
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.usersService.getUserProfile().pipe(take(1), switchMap((user) => this.usersService.getUserDays(user.id, 1, 3))).subscribe((result => this.userInformation = result))
  }

}
