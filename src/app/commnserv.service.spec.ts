import { TestBed } from '@angular/core/testing';

import { CommnservService } from './commnserv.service';

describe('CommnservService', () => {
  let service: CommnservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommnservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
