import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Podtype } from 'src/app/models/podtype.model';

@Injectable({
  providedIn: 'root'
})
export class PodTypeService {
  constructor(private http: HttpClient) {}

  public getPodTypes() {
    return this.http.get('http://localhost:8080/api/podtypes');
  }
}
