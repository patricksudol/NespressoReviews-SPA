import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss']
})
export class StarsRatingComponent {

  @Input() public rating: number;
  public readOnly: boolean;


  public getRoundedValue(): number {
    return Math.round(this.rating);
  }

}
