import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseConfirmationCardComponent } from './purchase-confirmation-card.component';

describe('PurchaseConfirmationCardComponent', () => {
  let component: PurchaseConfirmationCardComponent;
  let fixture: ComponentFixture<PurchaseConfirmationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseConfirmationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseConfirmationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
