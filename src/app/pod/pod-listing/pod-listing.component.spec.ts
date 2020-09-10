import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodListingComponent } from './pod-listing.component';

describe('PodListingComponent', () => {
  let component: PodListingComponent;
  let fixture: ComponentFixture<PodListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodListingComponent ]
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
