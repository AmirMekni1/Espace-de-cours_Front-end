import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseAJourProfileComponent } from './mise-a-jour-profile.component';

describe('MiseAJourProfileComponent', () => {
  let component: MiseAJourProfileComponent;
  let fixture: ComponentFixture<MiseAJourProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiseAJourProfileComponent]
    });
    fixture = TestBed.createComponent(MiseAJourProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
