import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnClasseComponent } from './ajouter-un-classe.component';

describe('AjouterUnClasseComponent', () => {
  let component: AjouterUnClasseComponent;
  let fixture: ComponentFixture<AjouterUnClasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterUnClasseComponent]
    });
    fixture = TestBed.createComponent(AjouterUnClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
