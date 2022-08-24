import { TestBed } from '@angular/core/testing';

import { ProfilesListService } from './profiles-list.service';

describe('ProfilesListService', () => {
  let service: ProfilesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
