import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodTypeService {
  constructor(private http: HttpClient) {}

  public getPodTypes(): any {
    return this.http.get('http://localhost:8080/api/podtypes');
  }

  public getPodType(id: string): any {
    return this.http.get(`http://localhost:8080/api/podtypes/${id}`);
  }
}
