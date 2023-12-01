import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEtudiantComponent } from './main-etudiant.component';

describe('MainEtudiantComponent', () => {
  let component: MainEtudiantComponent;
  let fixture: ComponentFixture<MainEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainEtudiantComponent]
    });
    fixture = TestBed.createComponent(MainEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
