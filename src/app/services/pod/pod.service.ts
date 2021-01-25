import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodService {
  constructor(private http: HttpClient) {}

  public getPods(): any {
    return this.http.get('http://localhost:8080/api/pods');
  }
}
