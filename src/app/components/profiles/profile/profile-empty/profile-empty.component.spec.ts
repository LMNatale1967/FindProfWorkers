import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEmptyComponent } from './profile-empty.component';

describe('ProfileEmptyComponent', () => {
  let component: ProfileEmptyComponent;
  let fixture: ComponentFixture<ProfileEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
