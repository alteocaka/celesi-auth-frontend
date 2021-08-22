import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Details } from '../layout/user-details/details.interface';

@Injectable({
  providedIn: 'root',
})
export class DaysService {
  constructor(private http: HttpClient) {}

  private readonly API = environment.api;

  // Method for initializing a day
  createDay() {
    this.http.post(`${this.API}/days`, null).subscribe((day) => day);
  }

  // Method for getting all users days
  getAllUsersDays() {
    return this.http.get(`${this.API}/users?join=days`);
  }

  // Method for getting one user days
  getOneUserDays(id: number) {
    return this.http.get<Details>(`${this.API}/users/${id}?join=days`);
  }



  // ****************************************
  // Methods for updating the day properties:
  // ****************************************

  // Update Job Start Method
  updateJobStart() {
    this.http
      .patch(`${this.API}/days/update/job_start`, null)
      .subscribe((day) => day);
  }

  // Update Break Start Method
  updateBreakStart() {
    this.http
      .patch(`${this.API}/days/update/break_start`, null)
      .subscribe((day) => day);
  }

  // Update Break Finish Method
  updateBreakFinish() {
    this.http
      .patch(`${this.API}/days/update/break_finish`, null)
      .subscribe((day) => day);
  }

  // Update Job Finish Method
  updateJobFinish() {
    this.http
      .patch(`${this.API}/days/update/job_finish`, null)
      .subscribe((day) => day);
  }
}
