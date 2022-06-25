import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockStatusIndicatorComponent } from './stock-status-indicator.component';

describe('StockStatusIndicatorComponent', () => {
  let component: StockStatusIndicatorComponent;
  let fixture: ComponentFixture<StockStatusIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockStatusIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockStatusIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
