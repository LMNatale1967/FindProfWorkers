import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCompetencesComponent } from './profile-competences.component';

describe('ProfilCompetencesComponent', () => {
  let component: ProfilCompetencesComponent;
  let fixture: ComponentFixture<ProfilCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilCompetencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
