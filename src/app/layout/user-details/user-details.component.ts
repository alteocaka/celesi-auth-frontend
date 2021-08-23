import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { throwError } from 'rxjs';
import { catchError, pluck, subscribeOn, switchMap } from 'rxjs/operators';
import { DaysService } from 'src/app/days/days.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: any;
  fileName= 'User_Data.xlsx';  

  days$ = this.route.params.pipe(
    pluck('userId'),
    switchMap((id: number) => this.daysService.getOneUserDays(id)),
    catchError(error => {
      this.router.navigateByUrl('admin');
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message
      })
      return throwError(error)
    })
  )

  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }

  constructor(
    private daysService: DaysService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

}