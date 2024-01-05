import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherLesDocumentComponent } from './afficher-les-document.component';

describe('AfficherLesDocumentComponent', () => {
  let component: AfficherLesDocumentComponent;
  let fixture: ComponentFixture<AfficherLesDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherLesDocumentComponent]
    });
    fixture = TestBed.createComponent(AfficherLesDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
