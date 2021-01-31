/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PodReviewService } from './pod-review.service';

describe('Service: PodReview', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PodReviewService]
    });
  });

  it('should ...', inject([PodReviewService], (service: PodReviewService) => {
    expect(service).toBeTruthy();
  }));
});
