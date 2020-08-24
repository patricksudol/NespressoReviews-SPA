import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodTileComponent } from './pod-tile.component';

describe('PodTileComponent', () => {
  let component: PodTileComponent;
  let fixture: ComponentFixture<PodTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
