import { TestBed } from '@angular/core/testing';

import { CoursedetailesService } from './coursedetailes.service';

describe('CoursedetailesService', () => {
  let service: CoursedetailesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursedetailesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
