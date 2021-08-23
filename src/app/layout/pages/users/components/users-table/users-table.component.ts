import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  @Input() data: any;
  @Output() rowClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
