import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSupprimerComponent } from './modifier-supprimer.component';

describe('ModifierSupprimerComponent', () => {
  let component: ModifierSupprimerComponent;
  let fixture: ComponentFixture<ModifierSupprimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierSupprimerComponent]
    });
    fixture = TestBed.createComponent(ModifierSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
