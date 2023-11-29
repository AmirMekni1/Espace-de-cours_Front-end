import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEnseignantComponent } from './inscription-enseignant.component';

describe('InscriptionEnseignantComponent', () => {
  let component: InscriptionEnseignantComponent;
  let fixture: ComponentFixture<InscriptionEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionEnseignantComponent]
    });
    fixture = TestBed.createComponent(InscriptionEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
