import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTerm = new BehaviorSubject('');
  public currentSearchTerm = this.searchTerm.asObservable();

  public updateSearchTerm(term: string) {
    this.searchTerm.next(term);
    console.log(this.searchTerm.value);
  }
}
