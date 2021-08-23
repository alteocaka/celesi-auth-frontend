import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { toR3Reference } from '@angular/compiler-cli/src/ngtsc/annotations/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: [ './all-users.component.css' ]
})
export class AllUsersComponent implements OnInit {

  paginator: { page: number; count: number; total: number; pageCount: number } = {
    page: 1,
    count: 10,
    total: 0,
    pageCount: 0
  };

  data$ = this.usersService.getUsers(this.paginator.page, this.paginator.count).pipe(catchError(error => {
    // this.messageService.add
    return throwError(error)
  }), tap(result => {
    if (result) {
      this.paginator =
        {
          ...this.paginator,
          page: result.page,
          total: result.total,
          pageCount: result.pageCount
        }
    }
  }))

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  handleRowClicked(id: number) {
    this.router.navigateByUrl(`users/details/${id}`);
  }

  handlePaginatorChange(paginator: any): void {
    console.log(paginator);
    this.data$ = this.usersService.getUsers(paginator.page + 1, paginator.rows).pipe(catchError(error => {
      return throwError(error)
    }), tap(result => {
      if (result) {
        this.paginator =
          {
            count: paginator.rows,
            page: result.page,
            total: result.total,
            pageCount: result.pageCount
          }
      }
    }))
  }
}
