import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { toR3Reference } from '@angular/compiler-cli/src/ngtsc/annotations/src/util';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

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
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
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

  handleDeleteClicked(userId: number): void {
    this.confirmationService.confirm({
      message: 'A je i sigurt se do të fish profilin e përdoruesit?',
      header: 'Konfirmim!',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usersService.deleteUser(userId).pipe(take(1)).subscribe(() => {
        this.messageService.add({severity:'success', summary:'Sukses!', detail:'Përdoruesi dhe rekordet e tij u fshinë nga sistemi.'});
        this.data$ = this.usersService.getUsers(this.paginator.page, this.paginator.count).pipe(catchError(error => {
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
        }, error => {
          this.messageService.add({severity:'error', summary:'Error!', detail: error.error.message});

        })
      },
      reject: () => {
        this.messageService.add({severity:'info', summary:'U refuzua!', detail:'Profili i përdoruesit është ende aktiv.'});
      }
    });
  }
}
