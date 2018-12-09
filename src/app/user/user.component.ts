import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns = ['id', 'username', 'email'];
  dataSource = new MatTableDataSource<User>();
  constructor(private router: Router, private userService: UserService) {
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.dataSource.data = data.result;
      }
    );
  }

}
