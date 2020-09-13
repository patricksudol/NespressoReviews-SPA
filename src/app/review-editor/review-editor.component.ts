import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-editor',
  templateUrl: './review-editor.component.html',
  styleUrls: ['./review-editor.component.scss']
})
export class ReviewEditorComponent implements OnInit {

  public isReviewed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
