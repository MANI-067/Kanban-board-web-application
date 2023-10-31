import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmmessageComponent } from './confirmmessage.component';

describe('ConfirmmessageComponent', () => {
  let component: ConfirmmessageComponent;
  let fixture: ComponentFixture<ConfirmmessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmmessageComponent]
    });
    fixture = TestBed.createComponent(ConfirmmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
