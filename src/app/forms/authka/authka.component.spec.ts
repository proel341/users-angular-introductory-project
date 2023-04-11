import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthkaComponent } from './authka.component';

describe('AuthkaComponent', () => {
  let component: AuthkaComponent;
  let fixture: ComponentFixture<AuthkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
