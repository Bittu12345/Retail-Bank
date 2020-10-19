import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStatementComponent } from './get-statement.component';

describe('GetStatementComponent', () => {
  let component: GetStatementComponent;
  let fixture: ComponentFixture<GetStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
