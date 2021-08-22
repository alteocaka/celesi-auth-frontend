import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { throwError } from 'rxjs';
import { catchError, pluck, subscribeOn, switchMap } from 'rxjs/operators';
import { DaysService } from 'src/app/days/days.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: any;

 days$ = this.route.params.pipe(
   pluck('userId'),
   switchMap((id: number) => this.daysService.getOneUserDays(id)),
   catchError(error => {
     this.router.navigateByUrl('admin');
     this.messageService.add({
       severity: 'error',
       summary:'Error',
       detail: error.message
     })
     return throwError(error)
   })
  )

  constructor(
    private daysService: DaysService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
  }

}
