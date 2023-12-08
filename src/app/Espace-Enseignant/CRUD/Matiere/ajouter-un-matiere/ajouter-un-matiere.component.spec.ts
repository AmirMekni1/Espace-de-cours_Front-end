import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnMatiereComponent } from './ajouter-un-matiere.component';

describe('AjouterUnMatiereComponent', () => {
  let component: AjouterUnMatiereComponent;
  let fixture: ComponentFixture<AjouterUnMatiereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterUnMatiereComponent]
    });
    fixture = TestBed.createComponent(AjouterUnMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
