import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private readonly API = environment.api;

  currentUserValue: any = localStorage.getItem('currentUser');

  login(username: string, password: string) {
    return this.http
      .post(`${this.API}/auth/login`, { username, password })
      .subscribe((user: any) => {
        console.log(user);
        localStorage.setItem('currentUser', user.access_token);
        this.router.navigateByUrl('/');
        console.log(localStorage.getItem('currentUser'));
        return user;
      });
  }

  getLoggedInUser() {
    return this.http.get(`${this.API}/users/me`);
  }
}
