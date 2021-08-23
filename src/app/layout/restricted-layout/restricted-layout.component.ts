import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restricted-layout',
  templateUrl: './restricted-layout.component.html',
  styleUrls: ['./restricted-layout.component.css']
})
export class RestrictedLayoutComponent implements OnInit {

  displayBasic: boolean = false;
  constructor() { }

  showBasicDialog() {
    this.displayBasic = true;
  }

  ngOnInit(): void {
    return this.showBasicDialog()
  }

}
