import { Component, OnInit } from '@angular/core';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  public header: string;
  public body: string;
  public photos: Photo[];



  ngOnInit(): void {
  }

}
