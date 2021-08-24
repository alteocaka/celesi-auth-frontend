import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, pluck, switchMap, take } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  $userData = this.route.params.pipe(
    pluck('userId'),
    switchMap((id) => {
      return this.usersService.getUserDetails(id);
    }),
  )

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleSubmitForm(payload: any, userId: number): void {
    this.usersService.updateUser(userId, payload).pipe(take(1)).subscribe(result => {
      // shto nje toast me messages service
      this.router.navigateByUrl('users');
    },
      error => {
      //shto nje toast
      })
  }

}
