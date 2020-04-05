import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookUserInfoFormComponent } from './facebook-user-info-form.component';

describe('FacebookUserInfoFormComponent', () => {
  let component: FacebookUserInfoFormComponent;
  let fixture: ComponentFixture<FacebookUserInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookUserInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookUserInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
