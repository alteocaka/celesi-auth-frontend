import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DaysService } from 'src/app/days/days.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent implements OnInit {


  data: any;

  constructor(
    private daysService: DaysService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.daysService.getAllUsersDays().subscribe(response => {
      this.data = response;
      console.log(this.data);
    })
  }

  userDetails(id: number): void {
      this.router.navigateByUrl(`user-details/${id}`);
  }
}
