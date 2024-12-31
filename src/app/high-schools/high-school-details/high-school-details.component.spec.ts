import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSchoolDetailsComponent } from './high-school-details.component';

describe('HighSchoolDetailsComponent', () => {
  let component: HighSchoolDetailsComponent;
  let fixture: ComponentFixture<HighSchoolDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighSchoolDetailsComponent]
    });
    fixture = TestBed.createComponent(HighSchoolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
