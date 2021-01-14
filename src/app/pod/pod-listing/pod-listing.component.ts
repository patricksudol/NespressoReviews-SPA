import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Pod } from 'src/app/models/pod';
import { PodService } from 'src/app/services/pod.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-pod-listing',
  templateUrl: './pod-listing.component.html',
  styleUrls: ['./pod-listing.component.scss']
})
export class PodListingComponent implements OnInit {

  @Input()
  public filterTerm: string;
  public pods: Pod[];
  // public pods: string[] = Array(100).fill('test').concat(Array(100).fill('cookie')).concat(Array(4).fill('pie'));
  public filter: string;
  public page: number = 1;

  constructor(
    private searchService: SearchService,
    private podService: PodService
  ) {}

  ngOnInit() {
    this.searchService.currentSearchTerm.subscribe(search => this.filterTerm = search);
    this.showPods()
  }

  public showPods() : void {
    this.podService.getPods()
      .subscribe((pods: Pod[]) => {
        this.pods = pods
      });
  }

}
