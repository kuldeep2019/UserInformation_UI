import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookUserDetailsComponent } from './facebook-user-details.component';

describe('FacebookUserDetailsComponent', () => {
  let component: FacebookUserDetailsComponent;
  let fixture: ComponentFixture<FacebookUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
