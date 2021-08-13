import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DaysService {
  constructor(private http: HttpClient) {}

  private readonly API = environment.api;

  createEmptyDay() {
    return this.http
      .post(`${this.API}/days`, {
        job_start: '',
        break_start: '',
        break_finish: '',
        job_finish: '',
        user: 1,
      })
      .subscribe((day) => day);
  }

  getAllUsersDays() {
    return this.http
      .get(`${this.API}/users?join=days`)
      .subscribe((data) => console.log(data));
  }
}
