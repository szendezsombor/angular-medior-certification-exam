import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StockSentimentApi } from './stock-sentiment.api';
import { StockSentimentModel } from '../models/stock-sentiment.model';

@Injectable()
export class StockSentimentFacade {
    constructor(private stockSentimentApi: StockSentimentApi) {}

    getStock(stockSymbol: string): Observable<StockSentimentModel[]> {
        return this.stockSentimentApi.getStockSentiment(stockSymbol);
    }
}
