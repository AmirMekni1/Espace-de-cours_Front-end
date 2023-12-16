import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherLesClassesComponent } from './afficher-les-classes.component';

describe('AfficherLesClassesComponent', () => {
  let component: AfficherLesClassesComponent;
  let fixture: ComponentFixture<AfficherLesClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherLesClassesComponent]
    });
    fixture = TestBed.createComponent(AfficherLesClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
