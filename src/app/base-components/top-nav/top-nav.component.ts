import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from 'src/app/services/search/search.service';

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
