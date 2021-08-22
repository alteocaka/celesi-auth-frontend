import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  // vendos metoden qe merr gjith userat nepermjet servisit
  data$ = of(null).pipe(catchError(error => {
    // bej dicka nese ka error
    return throwError(error)
  }))

  constructor() { }

  ngOnInit(): void {
  }

  handleRowClicked(id: number) {
    // bejj dicka kur useri klikon butonin shiko ditet
  }

}
