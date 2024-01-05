import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoindreACoursComponent } from './rejoindre-a-cours.component';

describe('RejoindreACoursComponent', () => {
  let component: RejoindreACoursComponent;
  let fixture: ComponentFixture<RejoindreACoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejoindreACoursComponent]
    });
    fixture = TestBed.createComponent(RejoindreACoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
