import { TestBed } from '@angular/core/testing';

import { PeopletableserviceService } from './peopletableservice.service';

describe('PeopletableserviceService', () => {
  let service: PeopletableserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopletableserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
