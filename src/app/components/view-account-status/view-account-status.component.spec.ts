import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountStatusComponent } from './view-account-status.component';

describe('ViewAccountStatusComponent', () => {
  let component: ViewAccountStatusComponent;
  let fixture: ComponentFixture<ViewAccountStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccountStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccountStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
