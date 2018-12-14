import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceCenterComponent } from './customer-service-center.component';

describe('CustomerServiceCenterComponent', () => {
  let component: CustomerServiceCenterComponent;
  let fixture: ComponentFixture<CustomerServiceCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServiceCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
