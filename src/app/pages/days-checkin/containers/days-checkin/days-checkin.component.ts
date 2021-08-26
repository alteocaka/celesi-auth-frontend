import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, Message } from 'primeng/api';
import { DaysCheckinService } from '../../services/days-checkin.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-days-checkin',
  templateUrl: './days-checkin.component.html',
  styleUrls: ['./days-checkin.component.css'],
})
export class DaysCheckinComponent implements OnInit {
  constructor(
    private router: Router,
    private daysCheckInService: DaysCheckinService,
    private confirmationService: ConfirmationService,
    private authService: AuthService
  ) {}

  display: any;
  username: any;
  msgs: Message[] = [];
  user: any = null;

  ngOnInit(): void {
    // this.authService.currentUserValue1();

    this.authService.getLoggedInUser().subscribe((user: any) => {
      this.user = user;
    });

    return this.daysCheckInService.createDay();
  }

  getUserData() {
    return this.authService.getLoggedInUser().subscribe((response: any) => {
      this.username = response;
      console.log(this.username);
    });
  }

  userDetails(user: any) {
    if (user && user.id) {
      this.router.navigate([`/user-details/${user.id}`]);
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
    // localStorage.removeItem("expires_at");
    // this.authService.currentUserSubject.next(null);
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
        return this.daysCheckInService.updateJobStart();
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
        return this.daysCheckInService.updateBreakStart();
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
        return this.daysCheckInService.updateBreakFinish();
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
        return this.daysCheckInService.updateJobFinish();
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
