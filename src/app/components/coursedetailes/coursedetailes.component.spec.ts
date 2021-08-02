import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedetailesComponent } from './coursedetailes.component';

describe('CoursedetailesComponent', () => {
  let component: CoursedetailesComponent;
  let fixture: ComponentFixture<CoursedetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursedetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
