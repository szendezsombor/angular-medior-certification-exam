import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSentimentDetailComponent } from './stock-sentiment-detail.component';

describe('StockSentimentDetailComponent', () => {
  let component: StockSentimentDetailComponent;
  let fixture: ComponentFixture<StockSentimentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockSentimentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockSentimentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
