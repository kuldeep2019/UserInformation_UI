import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleUserDetailsComponent } from './google-user-details.component';

describe('GoogleUserDetailsComponent', () => {
  let component: GoogleUserDetailsComponent;
  let fixture: ComponentFixture<GoogleUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
