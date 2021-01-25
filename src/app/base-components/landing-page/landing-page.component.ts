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

  private pods: Pod[];

  constructor(
    private podTypeService: PodTypeService,
    private podService: PodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.podTypes = this.route.snapshot.data.podtypes;
    this.pods = this.route.snapshot.data.pods;
    this.originalPods = this.pods.filter(pod => pod.podTypeId == this.getPodTypeId('Original'));
    this.vertuoPods = this.pods.filter(pod => pod.podTypeId == this.getPodTypeId('Vertuo'));
  }

  private getPodTypeId(name: string): string {
    return this.podTypes.find(podtype => podtype.name == name).id;
  }

}
