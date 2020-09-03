import { Component, OnInit } from '@angular/core';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  public reviewHeader: string;
  public reviewBody: string;
  public photos: Photo[];
  public isCollapsed: boolean;



  ngOnInit(): void {
    // this.toCollapse = this.tooBig(this.reviewBody);
  }

  // public tooBig(message: string): boolean {
  //   return message.length > 50 ? true : false;
  // }

}
