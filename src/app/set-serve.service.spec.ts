import { TestBed } from '@angular/core/testing';

import { SetServeService } from './set-serve.service';

describe('SetServeService', () => {
  let service: SetServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
