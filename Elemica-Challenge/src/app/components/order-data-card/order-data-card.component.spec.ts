import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDataCardComponent } from './order-data-card.component';

describe('OrderDataCardComponent', () => {
  let component: OrderDataCardComponent;
  let fixture: ComponentFixture<OrderDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDataCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
