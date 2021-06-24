import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsExpanseComponent } from './details-expanse.component';

describe('DetailsExpanseComponent', () => {
  let component: DetailsExpanseComponent;
  let fixture: ComponentFixture<DetailsExpanseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsExpanseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsExpanseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
