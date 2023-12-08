import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherLesMatieresComponent } from './afficher-les-matieres.component';

describe('AfficherLesMatieresComponent', () => {
  let component: AfficherLesMatieresComponent;
  let fixture: ComponentFixture<AfficherLesMatieresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherLesMatieresComponent]
    });
    fixture = TestBed.createComponent(AfficherLesMatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
