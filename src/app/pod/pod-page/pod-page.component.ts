import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery-9';
import { Cupsize } from 'src/app/models/cupsize.model';
import { Pod } from 'src/app/models/pod.model';
import { PodReview } from 'src/app/models/podreview.model';
import { Podtype } from 'src/app/models/podtype.model';
import { CupSizeService } from 'src/app/services/cupsize/cupsize.service';
import { PodReviewService } from 'src/app/services/pod-review/pod-review.service';
import { PodService } from 'src/app/services/pod/pod.service';
import { PodTypeService } from 'src/app/services/podtype/podtype.service';

@Component({
  selector: 'app-pod-page',
  templateUrl: './pod-page.component.html',
  styleUrls: ['./pod-page.component.scss']
})
export class PodPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private podService: PodService,
    private podTypeService: PodTypeService,
    private cupSizeService: CupSizeService,
    private podReviewService: PodReviewService
  ) { }

  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];

  public reviews: string[] = Array(100).fill('test');
  public pod: Pod;
  public podType: Podtype;
  public cupSize: Cupsize;
  public podReviews: PodReview[];
  public page: number = 1;

  private podId: string;


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.podId = params['id'];
    });

    this.podService.getPod(this.podId).subscribe((pod: Pod) => {
      this.pod = pod;
      this.podTypeService.getPodType(pod.podTypeId).subscribe((podtype: Podtype) => {
        this.podType = podtype;
      });
      this.cupSizeService.getCupSize(pod.cupSizeId).subscribe((cupsize: Cupsize) => {
        this.cupSize = cupsize;
      });
      this.podReviewService.getPodReviewsByPod(pod.id).subscribe((podreviews: PodReview[]) => {
        this.podReviews = podreviews;
      })

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
