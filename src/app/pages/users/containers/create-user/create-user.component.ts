import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { API_URL } from 'src/app/core/tokens/ApiUrl';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(@Inject(API_URL) private api: string,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  createUser() {
    return console.log('Hello!')
  }

}
