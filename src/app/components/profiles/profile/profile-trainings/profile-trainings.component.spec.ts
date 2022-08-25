import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTrainingsComponent } from './profile-trainings.component';

describe('ProfielTrainingsComponent', () => {
  let component: ProfileTrainingsComponent;
  let fixture: ComponentFixture<ProfileTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTrainingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
