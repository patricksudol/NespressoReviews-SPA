import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { Pod } from 'src/app/models/pod.model';

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

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
