import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersFormComponent implements OnInit {


  @Input() userId!: number;
  @Output() submitted = new EventEmitter
  constructor() { }

  ngOnInit(): void {
    if(this.userId) {
      //bej thirjen ne server dhe popullo formen
    }
  }

}
