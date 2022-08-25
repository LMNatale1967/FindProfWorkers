import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRequirementsComponent } from './profile-requirements.component';

describe('ProfileRequirementsComponent', () => {
  let component: ProfileRequirementsComponent;
  let fixture: ComponentFixture<ProfileRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileRequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
