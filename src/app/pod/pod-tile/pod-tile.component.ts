import { Component, OnInit, Input } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

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

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
