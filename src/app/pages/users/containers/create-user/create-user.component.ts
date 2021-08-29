import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { API_URL } from 'src/app/core/tokens/ApiUrl';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(@Inject(API_URL) private api: string,
    private http: HttpClient, private usersService: UsersService) { }

  ngOnInit(): void {
  }

  handleCreateUser(payload: any) {
    console.log('Hello!')
    this.usersService.createUser(payload).subscribe((result) =>  result)
  }

}
