import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
    this.http.get(`${this.API}/users?join=days`).subscribe((data) => data);
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
