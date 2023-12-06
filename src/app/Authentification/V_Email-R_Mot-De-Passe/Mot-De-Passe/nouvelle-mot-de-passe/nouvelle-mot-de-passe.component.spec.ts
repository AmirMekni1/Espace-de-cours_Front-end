import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleMotDePasseComponent } from './nouvelle-mot-de-passe.component';

describe('NouvelleMotDePasseComponent', () => {
  let component: NouvelleMotDePasseComponent;
  let fixture: ComponentFixture<NouvelleMotDePasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouvelleMotDePasseComponent]
    });
    fixture = TestBed.createComponent(NouvelleMotDePasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
