import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery-9';
import { Pod } from 'src/app/models/pod.model';
import { PodReview } from 'src/app/models/podreview.model';
import { PodService } from 'src/app/services/pod/pod.service';

@Component({
  selector: 'app-pod-page',
  templateUrl: './pod-page.component.html',
  styleUrls: ['./pod-page.component.scss']
})
export class PodPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private podService: PodService
  ) { }

  private podId: string;


  @Input()
  public podName: string;
  @Input()
  public cupSize: string;
  @Input()
  public description: string;

  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];
  public reviews: string[] = Array(100).fill('test');
  public pod: Pod;
  public podReviews: PodReview[];
  public page: number = 1;


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.podId = params['id'];
    });

    this.podService.getPod(this.podId).subscribe((data: Pod) => {
      this.pod = data;
    });

    this.galleryOptions = [
      { imageDescription: true },
      { "image": false, "thumbnailsRemainingCount": true, "height": "100px" },
      { "breakpoint": 500, "width": "100%", "thumbnailsColumns": 2, "thumbnailsArrows": true },
    ];

    this.galleryImages = [
      {
        small: 'assets/images/puertorico.png',
        medium: 'assets/images/puertorico.png',
        big: 'assets/images/puertorico.png'
      },
      {
        small: 'assets/images/puertorico.png',
        medium: 'assets/images/puertorico.png',
        big: 'assets/images/puertorico.png'
      },
      {
        small: 'assets/images/puertorico.png',
        medium: 'assets/images/puertorico.png',
        big: 'assets/images/puertorico.png'
      },
      {
        small: 'assets/images/puertorico.png',
        medium: 'assets/images/puertorico.png',
        big: 'assets/images/puertorico.png'
      },
      {
        small: 'assets/images/puertorico.png',
        medium: 'assets/images/puertorico.png',
        big: 'assets/images/puertorico.png'
      },
      {
        small: 'assets/images/puertorico.png',
        medium: 'assets/images/puertorico.png',
        big: 'assets/images/puertorico.png'
      },
      {
        small: 'assets/images/puertorico.png',
        medium: 'assets/images/puertorico.png',
        big: 'assets/images/puertorico.png'
      },
      {
        small: 'assets/images/puertorico.png',
        medium: 'assets/images/puertorico.png',
        big: 'assets/images/puertorico.png'
      },
      {
        small: 'assets/images/puertorico.png',
        medium: 'assets/images/puertorico.png',
        big: 'assets/images/puertorico.png'
      },
      {
        small: 'assets/images/puertorico.png',
        medium: 'assets/images/puertorico.png',
        big: 'assets/images/puertorico.png'
      },
      {
        small: 'assets/images/puertorico.png',
        medium: 'assets/images/puertorico.png',
        big: 'assets/images/puertorico.png'
      },
      {
        small: 'assets/images/puertorico.png',
        medium: 'assets/images/puertorico.png',
        big: 'assets/images/puertorico.png'
      }
    ];
  }

}
