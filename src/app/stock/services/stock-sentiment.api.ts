import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable, pluck } from 'rxjs';
import { StockSentimentModel } from '../models/stock-sentiment.model';
import { StockSentimentResponseModel } from '../models/stock-sentiment-response.model';

@Injectable()
export class StockSentimentApi {
    constructor(private http: HttpClient) {}

    getStockSentiment(stockSymbol: string): Observable<StockSentimentModel[]> {
        const now = new Date(Date.now());
        const threeMonthAgo = new Date(now);
        threeMonthAgo.setMonth(now.getMonth() - 2);
        const from = `${threeMonthAgo.getFullYear()}-${(threeMonthAgo.getMonth() + 1).toString().padStart(2, '0')}-01`;

        const params: HttpParams = new HttpParams()
            .set('symbol', stockSymbol)
            .set('from', from)
            .set('token', environment.finnHubApiKey);

        return this.http
            .get<StockSentimentResponseModel>('https://finnhub.io/api/v1/stock/insider-sentiment', { params })
            .pipe(
                pluck('data'),
                map((stockSentiments: StockSentimentModel[]) =>
                    stockSentiments.map((stockSentiment: StockSentimentModel) => {
                        stockSentiment.date = new Date(stockSentiment.year, stockSentiment.month);
                        return stockSentiment;
                    })
                )
            );
    }
}
