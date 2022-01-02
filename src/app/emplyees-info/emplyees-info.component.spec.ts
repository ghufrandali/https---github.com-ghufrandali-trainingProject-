import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeesInfoComponent } from './emplyees-info.component';

describe('EmplyeesInfoComponent', () => {
  let component: EmplyeesInfoComponent;
  let fixture: ComponentFixture<EmplyeesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplyeesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplyeesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
