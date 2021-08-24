import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck, switchMap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  $userData = this.route.params.pipe(
    pluck('userId'),
    switchMap((id) => {
      return this.usersService.getUserDetails(id);
    }),
    map(result => result)
  )

  ngOnInit(): void {
  }

}
