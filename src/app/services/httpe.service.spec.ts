import { TestBed } from '@angular/core/testing';

import { HttpeService } from './httpe.service';

describe('HttpeService', () => {
  let service: HttpeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
