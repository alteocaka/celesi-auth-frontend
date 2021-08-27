import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {

  @Output() createRequest = new EventEmitter();

  @Output()
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  createRequestEvent() {
    this.createRequest.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
