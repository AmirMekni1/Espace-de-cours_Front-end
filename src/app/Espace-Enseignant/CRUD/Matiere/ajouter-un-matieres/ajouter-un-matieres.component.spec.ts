import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnMatieresComponent } from './ajouter-un-matieres.component';

describe('AjouterUnMatieresComponent', () => {
  let component: AjouterUnMatieresComponent;
  let fixture: ComponentFixture<AjouterUnMatieresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterUnMatieresComponent]
    });
    fixture = TestBed.createComponent(AjouterUnMatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
