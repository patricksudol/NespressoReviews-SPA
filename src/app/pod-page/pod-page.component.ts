import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-pod-page',
  templateUrl: './pod-page.component.html',
  styleUrls: ['./pod-page.component.scss']
})
export class PodPageComponent implements OnInit {

  constructor() { }

  // ngOnInit(): void {
  // }
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
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
      }
    ];
  }

}
