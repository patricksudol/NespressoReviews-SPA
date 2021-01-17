/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CupsizeService } from './cupsize.service';

describe('Service: Cupsize', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CupsizeService]
    });
  });

  it('should ...', inject([CupsizeService], (service: CupsizeService) => {
    expect(service).toBeTruthy();
  }));
});
