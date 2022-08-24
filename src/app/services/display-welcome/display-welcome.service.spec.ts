import { TestBed } from '@angular/core/testing';

import { DisplayWelcomeService } from './display-welcome.service';

describe('DisplayWelcomeService', () => {
  let service: DisplayWelcomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayWelcomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
