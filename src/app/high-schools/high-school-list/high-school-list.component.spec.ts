import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSchoolListComponent } from './high-school-list.component';

describe('HighSchoolListComponent', () => {
  let component: HighSchoolListComponent;
  let fixture: ComponentFixture<HighSchoolListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighSchoolListComponent]
    });
    fixture = TestBed.createComponent(HighSchoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
