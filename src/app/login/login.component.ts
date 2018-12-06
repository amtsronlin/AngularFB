import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  url = "http://locahost:8080/api/login";
  constructor(private router: Router, private http: HttpClient) { }
  username: string;
  password: string;
  ngOnInit() {
  }
  login(): void {
    const user = { username: this.username, password: this.password};
    this.http.post(this.url, user)
      .pipe().subscribe(hero => {
        console.log(hero);
        this.router.navigate(["user"]);
    });
    // if (this.username === 'admin' && this.password === 'admin') {
    //   this.router.navigate(["user"]);
    // } else {
    //   alert("Invalid credentials");
    // }
  }
}
