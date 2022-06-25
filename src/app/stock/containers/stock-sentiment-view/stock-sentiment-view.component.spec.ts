import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSentimentViewComponent } from './stock-sentiment-view.component';

describe('StockSentimentViewComponent', () => {
  let component: StockSentimentViewComponent;
  let fixture: ComponentFixture<StockSentimentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockSentimentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockSentimentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
