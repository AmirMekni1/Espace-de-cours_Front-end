import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEtudiantEnseignantComponent } from './inscription-etudiant-enseignant.component';

describe('InscriptionEtudiantEnseignantComponent', () => {
  let component: InscriptionEtudiantEnseignantComponent;
  let fixture: ComponentFixture<InscriptionEtudiantEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionEtudiantEnseignantComponent]
    });
    fixture = TestBed.createComponent(InscriptionEtudiantEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
