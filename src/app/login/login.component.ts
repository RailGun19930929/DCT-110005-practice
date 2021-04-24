import { UserInfo } from './../interfaces/user-info';
import { UserLoginInfo } from './../interfaces/login-info';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('onSubmit');
    const userLogin: UserLoginInfo = {
      email: 'demo@miniasp.com',
      password: '123456'
    };
    this.loginService.login(userLogin)
      .subscribe((res: UserInfo) => {
        localStorage.setItem('JWTToken', res.user.token);
        this.router.navigate(['/']);
      });
  }
}
