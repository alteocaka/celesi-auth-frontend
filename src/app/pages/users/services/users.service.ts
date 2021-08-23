import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../../../core/tokens/ApiUrl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    @Inject(API_URL) private api: string,
    private http: HttpClient
  ) { }

  getUsers(page: number, rows: number): Observable<any> {
    const path = `${this.api}/users?page=${page}&limit=${rows}`
    return this.http.get(path);
  }

  getUserDays(id: number, page: number, limit: number): Observable<any> {
    const path = `${this.api}/days?join=user&filter=user.id||$eq||${id}&page=${page}&limit=${limit}`;
    return this.http.get(path);
  }

  getUserDetails(id: number): Observable<any> {
    const path = `${this.api}/users/${id}`;
    return this.http.get(path);
  }
}
