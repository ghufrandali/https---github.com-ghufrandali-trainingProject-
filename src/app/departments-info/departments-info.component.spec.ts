import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsInfoComponent } from './departments-info.component';

describe('DepartmentsInfoComponent', () => {
  let component: DepartmentsInfoComponent;
  let fixture: ComponentFixture<DepartmentsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
