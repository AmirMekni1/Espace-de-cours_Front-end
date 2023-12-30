import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSupprimerDoucumentComponent } from './modifier-supprimer-doucument.component';

describe('ModifierSupprimerDoucumentComponent', () => {
  let component: ModifierSupprimerDoucumentComponent;
  let fixture: ComponentFixture<ModifierSupprimerDoucumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierSupprimerDoucumentComponent]
    });
    fixture = TestBed.createComponent(ModifierSupprimerDoucumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
