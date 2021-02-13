import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodReviewService {
  constructor(private http: HttpClient) {}

  public getPodReviews(): any {
    return this.http.get('http://localhost:8080/api/podreviews');
  }

  public getPodReviewsByPod(podId: string): any {
    return this.http.get(`http://localhost:8080/api/podreviews?podid=${podId}`);
  }
  public getPodReview(id: string): any {
    return this.http.get(`http://localhost:8080/api/podreviews/${id}`);
  }

  public getPodReviewAverage(podId: string): any {
    return this.http.get(`http://localhost:8080/api/podreviews/${podId}/average`)
  }

}
