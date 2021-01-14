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
  public pods: string[] = Array(100).fill('test').concat(Array(100).fill('cookie')).concat(Array(4).fill('pie'));
  public filter: string;
  public page: number = 1;
  public pod: Pod;

  constructor(
    private searchService: SearchService,
    private podService: PodService
  ) {}

  ngOnInit() {
    this.searchService.currentSearchTerm.subscribe(search => this.filterTerm = search);
    this.showPods()
  }

  public showPods() : void {
    // const cookie = this.podService.getPods()
    //   .subscribe((data: Pod) => this.pod = {
    //     id: data.id,
    //     name: data.name,
    //     price: data.price,
    //     description: data.description,
    //     cupSizeId: data.cupSizeId,
    //     podTypeId: data.podTypeId
    //   });
    this.podService.getPods()
      .subscribe(responseData => console.log(responseData));
      console.log('weee');
      console.log('biscuit');
  }

}
