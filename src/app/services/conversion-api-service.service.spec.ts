import { TestBed } from '@angular/core/testing';

import { ConversionApiServiceService } from './conversion-api-service.service';

describe('ConversionApiServiceService', () => {
  let service: ConversionApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
