import { Component, OnInit } from '@angular/core';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  public reviewHeader: string;
  public reviewBody: string = (
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius, nisi in pharetra aliquam, risus' +
    'libero' +
    'suscipit est, tristique accumsan risus lacus nec augue. Aliquam erat volutpat. Nulla sodales mi dolor, non' +
    'posuere' +
    'diam gravida vitae. Vestibulum malesuada accumsan rhoncus. Sed semper rhoncus cursus. Curabitur sed dapibus' +
    'dolor.' +
    'Aenean lacinia velit sed purus sodales porttitor. Fusce tempus lacinia libero, sed egestas ligula imperdiet id.' +
    'Morbi non neque diam. Quisque ac sem eu ex lobortis tempus vitae non mauris. Vivamus quis mauris ipsum.' +
    'Maecenas dui lorem, varius eu tellus et, viverra eleifend libero. Donec augue leo, cursus ut mattis nec,' +
    'sollicitudin id sapien. Sed auctor ligula quis orci pulvinar imperdiet. Duis finibus faucibus dignissim.' +
    'Maecenas' +
    'ultricies molestie nisl, at scelerisque ipsum molestie eget. In hac habitasse platea dictumst. Proin mattis' +
    'feugiat' +
    'ante a vulputate. Phasellus elit metus, blandit eu eleifend a, viverra vitae eros. Morbi in nisl eu diam' +
    'imperdiet' +
    'fermentum nec at purus. Nunc sit amet fermentum massa, in venenatis diam. Duis ut orci nec quam accumsan' +
    'interdum.' +
    'Quisque vel tortor luctus, aliquet ante id, dapibus neque.'
  );
  public photos: Photo[];
  public isCollapsed: boolean;
  public minimizedBody: string;

  constructor() {
    const reviewArray: string[] = this.reviewBody.split(' ');
    this.isCollapsed = reviewArray.length > 51 ? true : false;
    this.minimizedBody = reviewArray.slice(0, 50 ).join(' ');
  }

  toggleCollapse() {
    this.isCollapsed = this.isCollapsed ? false : true;
  }

}
