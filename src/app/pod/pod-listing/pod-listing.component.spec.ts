import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { StringFilterPipe } from 'src/app/pipes/string-filter.pipe';

import { PodListingComponent } from './pod-listing.component';

describe('PodListingComponent', () => {
  let component: PodListingComponent;
  let fixture: ComponentFixture<PodListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgxPaginationModule ],
      declarations: [ PodListingComponent, StringFilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
