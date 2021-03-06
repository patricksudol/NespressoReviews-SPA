import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pod } from 'src/app/models/pod.model';
import { PodService } from 'src/app/services/pod/pod.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-pod-listing',
  templateUrl: './pod-listing.component.html',
  styleUrls: ['./pod-listing.component.scss']
})
export class PodListingComponent implements OnInit {

  @Input()
  public filterTerm: string;
  public filter: string;
  public pods: Pod[];
  public page: number = 1;

  constructor(
    private searchService: SearchService,
    private podService: PodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.searchService.currentSearchTerm.subscribe(search => this.filterTerm = search);
    this.pods = this.route.snapshot.data.pods;
  }
}
