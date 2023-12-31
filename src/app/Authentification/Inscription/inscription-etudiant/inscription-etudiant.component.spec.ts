import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEtudiantComponent } from './inscription-etudiant.component';

describe('InscriptionEtudiantComponent', () => {
  let component: InscriptionEtudiantComponent;
  let fixture: ComponentFixture<InscriptionEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionEtudiantComponent]
    });
    fixture = TestBed.createComponent(InscriptionEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
