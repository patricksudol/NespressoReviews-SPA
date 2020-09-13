import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit{
  public searchTerm: string;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.currentSearchTerm.subscribe(search => this.searchTerm = search);
  }


  public updateSearchTerm() {
    this.searchService.updateSearchTerm(this.searchTerm);
  }
}
