import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDocumentsComponent } from './profil-documents.component';

describe('ProfilDocumentsComponent', () => {
  let component: ProfilDocumentsComponent;
  let fixture: ComponentFixture<ProfilDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
