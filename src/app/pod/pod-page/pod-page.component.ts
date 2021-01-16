import { Component, Input, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery-9';
import { PodReview } from 'src/app/models/podreview.model';

@Component({
  selector: 'app-pod-page',
  templateUrl: './pod-page.component.html',
  styleUrls: ['./pod-page.component.scss']
})
export class PodPageComponent implements OnInit {

  constructor() { }

  @Input()
  public podName: string;
  @Input()
  public cupSize: string;
  @Input()
  public description: string;

  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];
  public reviews: string[] = Array(100).fill('test');
  public podReviews: PodReview[];
  public page: number = 1;


  ngOnInit(): void {

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
