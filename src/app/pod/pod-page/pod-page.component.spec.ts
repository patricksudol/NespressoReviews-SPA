import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodPageComponent } from './pod-page.component';

describe('PodPageComponent', () => {
  let component: PodPageComponent;
  let fixture: ComponentFixture<PodPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
