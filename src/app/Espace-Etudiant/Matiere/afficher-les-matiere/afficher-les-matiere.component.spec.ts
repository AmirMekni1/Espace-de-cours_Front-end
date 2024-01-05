import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherLesMatiereComponent } from './afficher-les-matiere.component';

describe('AfficherLesMatiereComponent', () => {
  let component: AfficherLesMatiereComponent;
  let fixture: ComponentFixture<AfficherLesMatiereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherLesMatiereComponent]
    });
    fixture = TestBed.createComponent(AfficherLesMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
