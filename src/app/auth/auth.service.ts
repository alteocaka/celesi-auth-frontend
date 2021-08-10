import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private readonly API = environment.api;

  login(username: string, password: string) {
    return this.http
      .post(`${this.API}/auth/login`, { username, password })
      .subscribe((token: any) => {
        console.log(token.access_token);
        localStorage.setItem('access_token', JSON.stringify(token.access_token));
        this.router.navigateByUrl('');
        return token;
      });
  }

  logout() {
    localStorage.removeItem('access_token');
    // localStorage.removeItem("expires_at");
  }
}
