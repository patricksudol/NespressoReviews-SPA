import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodPageComponent } from './pod-page.component';
import { NgxPaginationModule } from 'ngx-pagination';

describe('PodPageComponent', () => {
  let component: PodPageComponent;
  let fixture: ComponentFixture<PodPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgxPaginationModule ],
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
