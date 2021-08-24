import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  state$ = this.layoutState.state$;

  constructor(private layoutState: LayoutService) { }

  ngOnInit(): void {
  }

  setSidebar(sidebar: boolean): void {
     this.layoutState.setSidebar(sidebar);
  }

}
