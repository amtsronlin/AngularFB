import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  url = "/api/";

  constructor(private router: Router, private http: HttpClient) {}
  username: string;
  password: string;
  headers: HttpHeaders =  new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
  });
  ngOnInit() {
  }
  login(): void {
    const user = { userName: "user", password: "password"};
    console.log(user);
    this.http.post(this.url + "login", user, {headers: this.headers})
      .pipe(
      ).subscribe(hero => {
        console.log(hero);
        this.router.navigate(["user"]);
    });
  }

  user(): void {
    const user = { userName: "user", password: "password" };
    this.http.get(this.url + "users", { headers: this.headers })
      .pipe().subscribe(hero => {
        console.log(hero);
      });
  }
}
