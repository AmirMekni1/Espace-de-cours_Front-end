import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEnseignantComponent } from './main-enseignant.component';

describe('MainEnseignantComponent', () => {
  let component: MainEnseignantComponent;
  let fixture: ComponentFixture<MainEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainEnseignantComponent]
    });
    fixture = TestBed.createComponent(MainEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
