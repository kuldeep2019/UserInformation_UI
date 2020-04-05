import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleUserInfoFormComponent } from './google-user-info-form.component';

describe('GoogleUserInfoFormComponent', () => {
  let component: GoogleUserInfoFormComponent;
  let fixture: ComponentFixture<GoogleUserInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleUserInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleUserInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
