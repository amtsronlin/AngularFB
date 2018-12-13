import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { catchError, retry } from 'rxjs/operators';
import { LoginService } from './login.service';
import { TokenStorage } from '../core/token.storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  url = "/api/";
  error = false;
  constructor(private router: Router, private loginService: LoginService, private token: TokenStorage) {}
  credentials = {username: 'alex123', password: 'alex123'};

  ngOnInit() {
  }
  login() {
    this.loginService.attemptAuth(this.credentials.username, this.credentials.password).subscribe(
      data => {
        this.token.saveToken(data.result.token);
        this.router.navigate(['user']);
      }
    );
  }


}
