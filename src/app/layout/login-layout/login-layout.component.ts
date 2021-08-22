import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css'],
})
export class LoginLayoutComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) {}

  // login() {
  //   const value = this.loginForm.value;
  //   this.authService
  //     .login(value.username, value.password)
  //     .subscribe((user: any) => {
  //       this.router.navigateByUrl('/');
  //     });
  // }

  login() {
    const value = this.loginForm.value;
    this.authService.login(value.username, value.password);
  }

  ngOnInit(): void {}
}
