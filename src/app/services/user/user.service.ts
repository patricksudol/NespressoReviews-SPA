import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  public getUsers(): any {
    return this.http.get('http://localhost:8080/api/users');
  }

  public getUser(id: string): any {
    return this.http.get(`http://localhost:8080/api/users/${id}`);
  }
}
