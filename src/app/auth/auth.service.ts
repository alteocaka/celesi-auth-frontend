import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject(
      localStorage.getItem('currentUser')
    );
    this.loggedInUser = this.currentUserSubject;
    console.log(this.loggedInUser);
  }

  private readonly API = environment.api;
  private currentUserSubject: BehaviorSubject<any>;
  public loggedInUser: Observable<any>;

  currentUserValue: any = localStorage.getItem('currentUser');

  public get currentUserValue1(): any {
		return this.currentUserSubject
	}

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
