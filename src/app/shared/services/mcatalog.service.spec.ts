import { TestBed } from '@angular/core/testing';

import { McatalogService } from './mcatalog.service';

describe('McatalogService', () => {
  let service: McatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
