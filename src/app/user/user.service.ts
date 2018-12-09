import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  authenticated = false;
  constructor(private http: HttpClient) {}

  private userUrl = 'http://localhost:8080/';

  public getUsers(): Observable<any> {
    return this.http.get(this.userUrl + 'users');
  }
}
