import { Component, OnInit } from '@angular/core';
import { DaysService } from 'src/app/days/days.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent implements OnInit {
  constructor(private daysService: DaysService) {}

  users = this.daysService.getAllUsersDays();

  ngOnInit(): void {
    this.daysService.getAllUsersDays();
  }
}
