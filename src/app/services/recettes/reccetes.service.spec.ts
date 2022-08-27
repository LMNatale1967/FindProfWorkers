import { TestBed } from '@angular/core/testing';
import { ReccetesService } from './reccetes.service';

describe('ReccetesService', () => {
  let service: ReccetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReccetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
