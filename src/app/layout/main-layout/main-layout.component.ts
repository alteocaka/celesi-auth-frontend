import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, Message } from 'primeng/api';
import { AuthService } from 'src/app/auth/auth.service';
import { DaysService } from 'src/app/days/days.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  constructor(
    private router: Router,
    private daysService: DaysService,
    private confirmationService: ConfirmationService,
    private authService: AuthService
  ) {}

  display: any;
  username: any;
  msgs: Message[] = [];

  ngOnInit(): void {
    // this.authService.currentUserValue1();
    return this.daysService.createDay();
  }

  getUsername() {
    return this.authService.getLoggedInUser().subscribe((response) => {
      this.username = response;
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
    // localStorage.removeItem("expires_at");
  }

  confirmJobStart() {
    this.confirmationService.confirm({
      message: 'A je i sigurt se do të konfirmosh orarin e fillimit të punës?',
      accept: () => {
        this.msgs = [
          {
            severity: 'success',
            summary: 'Sukses!',
            detail: 'Orari u regjistrua, punë të mbarë.',
          },
        ];
        return this.daysService.updateJobStart();
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'warn',
            summary: 'Në pritje!',
            detail: 'Orari ende nuk është regjistruar!',
          },
        ];
      },
    });
  }

  confirmBreakStart() {
    this.confirmationService.confirm({
      message:
        'A je i sigurt se do të konfirmosh orarin e fillimit të pushimit?',
      accept: () => {
        this.msgs = [
          {
            severity: 'success',
            summary: 'Sukses!',
            detail: 'Orari u regjistrua, pushim të mbarë.',
          },
        ];
        return this.daysService.updateBreakStart();
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'warn',
            summary: 'Në pritje!',
            detail: 'Orari ende nuk është regjistruar!',
          },
        ];
      },
    });
  }

  confirmBreakFinish() {
    this.confirmationService.confirm({
      message:
        'A je i sigurt se do të konfirmosh orarin e mbarimit të pushimit?',
      accept: () => {
        this.msgs = [
          {
            severity: 'success',
            summary: 'Sukses!',
            detail: 'Orari u regjistrua, punë të mbarë.',
          },
        ];
        return this.daysService.updateBreakFinish();
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'warn',
            summary: 'Në pritje!',
            detail: 'Orari ende nuk është regjistruar!',
          },
        ];
      },
    });
  }

  confirmJobFinish() {
    this.confirmationService.confirm({
      message: 'A je i sigurt se do të konfirmosh orarin e mbarimit të punës?',
      accept: () => {
        this.msgs = [
          {
            severity: 'success',
            summary: 'Sukses!',
            detail: 'Orari u regjistrua, ia kalofsh mirë.',
          },
        ];
        return this.daysService.updateJobFinish();
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'warn',
            summary: 'Në pritje!',
            detail: 'Orari ende nuk është regjistruar!',
          },
        ];
      },
    });
  }
}
