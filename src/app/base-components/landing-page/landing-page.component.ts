import { Component, OnInit } from '@angular/core';
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
    private podService: PodService
  ) {}

  ngOnInit(): void {
    this.getPodTypes();
    this.getPods();
  }

  private getPodTypes(): void {
    this.podTypeService.getPodTypes()
      .subscribe((data: Podtype[]) => {
        this.podTypes = data;
      });
  }

  private getPodTypeId(name: string): string {
    return this.podTypes.filter(podType => podType.name === name)[0].id;
  }

  private getPods(): void {
    this.podService.getPods()
      .subscribe((data: Pod[]) => {
        this.trendingPods = data
        this.vertuoPods = data
        this.originalPods = data
      });
  }
}
