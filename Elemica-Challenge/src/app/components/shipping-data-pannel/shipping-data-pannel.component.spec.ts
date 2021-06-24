import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingDataPannelComponent } from './shipping-data-pannel.component';

describe('ShippingDataPannelComponent', () => {
  let component: ShippingDataPannelComponent;
  let fixture: ComponentFixture<ShippingDataPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingDataPannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingDataPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
