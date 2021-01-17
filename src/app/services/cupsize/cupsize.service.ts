import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CupSizeService {
  constructor(private http: HttpClient) { }

  getCupSizes() {
    return this.http.get('http://localhost:8080/api/cupsize');
  }
}
