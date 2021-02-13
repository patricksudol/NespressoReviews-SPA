import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CupSizeService {
  constructor(private http: HttpClient) { }

  public getCupSizes(): any {
    return this.http.get('http://localhost:8080/api/cupsize');
  }

  public getCupSize(id: string): any {
    return this.http.get(`http://localhost:8080/api/cupsize/${id}`);
  }
}
