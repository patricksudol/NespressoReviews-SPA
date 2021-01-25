import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pod } from 'src/app/models/pod.model';
import { Podtype } from 'src/app/models/podtype.model';
import { PodService } from 'src/app/services/pod/pod.service';
import { PodTypeService } from 'src/app/services/podtype/podtype.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public podTypes: Podtype[];
  public trendingPods: Pod[];
  public originalPods: Pod[];
  public vertuoPods: Pod[];

  constructor(
    private podTypeService: PodTypeService,
    private podService: PodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.trendingPods = this.route.snapshot.data.pods;
    this.podTypes = this.route.snapshot.data.podtypes;
    console.log(this.trendingPods);
  }

}
