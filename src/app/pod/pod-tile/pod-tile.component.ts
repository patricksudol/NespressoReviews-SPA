import { Component, Input } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { PodReviewService } from 'src/app/services/pod-review/pod-review.service';

@Component({
  selector: 'app-pod-tile',
  templateUrl: './pod-tile.component.html',
  styleUrls: ['./pod-tile.component.scss']
})
export class PodTileComponent {

  @Input()
  public height: string;
  @Input()
  public paddingBottom: string;
  @Input()
  public name: string;
  @Input()
  public podId: string;

  public podReviewAverage: number;

  constructor(
    private podReviewService: PodReviewService
  ) {}

  ngOnInit() {
    this.podReviewService.getPodReviewAverage(this.podId).subscribe((data: number) => {
      this.podReviewAverage = data;
    });
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
