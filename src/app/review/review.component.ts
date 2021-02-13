import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../models/photo.model';
import { PodReview } from '../models/podreview.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit{

  @Input()
  public podReview: PodReview;
  public reviewHeader: string;
  public photos: Photo[];
  public isCollapsed: boolean;
  public minimizedBody: string;

  constructor() {
    // const reviewArray: string[] = this.reviewBody.split(' ');
    // this.isCollapsed = reviewArray.length > 50 ? true : false;
    // this.minimizedBody = reviewArray.slice(0, 50 ).join(' ');
  }

  ngOnInit(){
    console.log(this.podReview);
  }

  public toggleCollapse() {
    this.isCollapsed = this.isCollapsed ? false : true;
  }

}
