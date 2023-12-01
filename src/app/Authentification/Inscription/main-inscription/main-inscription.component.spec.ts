import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInscriptionComponent } from './main-inscription.component';

describe('MainInscriptionComponent', () => {
  let component: MainInscriptionComponent;
  let fixture: ComponentFixture<MainInscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainInscriptionComponent]
    });
    fixture = TestBed.createComponent(MainInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
