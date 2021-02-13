import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../models/photo.model';
import { PodReview } from '../models/podreview.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input()
  public podReview: PodReview;
  public user: User;
  public photos: Photo[];
  public isCollapsed: boolean;
  public minimizedBody: string;

  constructor(private userService: UserService) {
    // const reviewArray: string[] = this.reviewBody.split(' ');
    // this.isCollapsed = reviewArray.length > 50 ? true : false;
    // this.minimizedBody = reviewArray.slice(0, 50 ).join(' ');
  }

  ngOnInit(): void {
    this.userService.getUser(this.podReview.userId).subscribe((data: User) => {
      console.log(data);
      this.user = data;
    });
  }

  public toggleCollapse() {
    this.isCollapsed = this.isCollapsed ? false : true;
  }

}
