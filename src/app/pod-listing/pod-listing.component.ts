import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pod-listing',
  templateUrl: './pod-listing.component.html',
  styleUrls: ['./pod-listing.component.scss']
})
export class PodListingComponent {

  @Input()
  public filterTerm: string;
  public pods: string[] = Array(100).fill('test');
  public page: number = 1;

}
