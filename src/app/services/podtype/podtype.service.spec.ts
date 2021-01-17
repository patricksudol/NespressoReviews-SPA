/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PodtypeService } from './podtype.service';

describe('Service: Podtype', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PodtypeService]
    });
  });

  it('should ...', inject([PodtypeService], (service: PodtypeService) => {
    expect(service).toBeTruthy();
  }));
});
