import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss']
})
export class StarsRatingComponent {

  public readOnly: boolean;
  private rating: number;

  public getRoundedValue(): number {
    return Math.round(this.rating);
  }

}
