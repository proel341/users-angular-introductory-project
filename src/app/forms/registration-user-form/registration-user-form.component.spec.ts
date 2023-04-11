import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationUsefFormComponent } from './registration-user-form.component';

describe('RegistrationUsefFormComponent', () => {
  let component: RegistrationUsefFormComponent;
  let fixture: ComponentFixture<RegistrationUsefFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationUsefFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationUsefFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
