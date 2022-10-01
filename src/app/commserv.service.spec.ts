import { TestBed } from '@angular/core/testing';

import { CommservService } from './commserv.service';

describe('CommservService', () => {
  let service: CommservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
