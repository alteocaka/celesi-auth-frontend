import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, pluck, switchMap, tap } from 'rxjs/operators';
import { forkJoin, throwError } from 'rxjs';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  paginator: { page: number; count: number; total: number; pageCount: number } = {
    page: 1,
    count: 1,
    total: 0,
    pageCount: 0
  };

  fileName = 'User_Data.xlsx';

  // user$ = this.route.params.pipe(
  //   pluck('userId'),
  //   switchMap(id => this.usersService.getUserDetails(id)))
  //
  // days$ = this.route.params.pipe(
  //   pluck('userId'),
  //   switchMap(id => this.usersService.getUserDays(id, 1, 10)))

  userDetails$ = this.route.params.pipe(
    pluck('userId'),
    switchMap(id =>
      forkJoin(
        [
          this.usersService.getUserDetails(id),
          this.usersService.getUserDays(id, 1, 10)
        ]
      )),
    map((result: any) => ({ user: result[0], days: result[1] })),
    catchError(error => {
      this.router.navigateByUrl('users');
      return throwError(error)
    }),
  )

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
  handleRowClicked(id: number) {
    this.exportexcel()
  }

  handlePaginatorChange(paginator: any): void {
    console.log(paginator);
    this.userDetails$ = this.usersService.getUserDays(5, paginator.page + 1, paginator.rows).pipe(catchError(error => {
      return throwError(error)
    }), tap(result => {
      if (result) {
        this.paginator =
        {
          ...this.paginator,
          page: result.days.page,
          total: result.days.total,
          pageCount: result.days.pageCount
        }
      }
    }))
  }


  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

}
