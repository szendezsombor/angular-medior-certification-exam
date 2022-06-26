import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { StockModel } from '../models/stock.model';
import { environment } from '../../../environments/environment';
import { StockQuoteResponseModel } from '../models/stock-quote-response.model';
import { StockQueryResponseModel } from '../models/stock-query-response.model';

@Injectable()
export class StockApi {
    constructor(private http: HttpClient) {}

    getStock(stockSymbol: string): Observable<StockModel> {
        const stockQuoteParams: HttpParams = new HttpParams()
            .set('symbol', stockSymbol)
            .set('token', environment.finnHubApiKey);

        const stockQueryParams: HttpParams = new HttpParams()
            .set('q', stockSymbol)
            .set('token', environment.finnHubApiKey);

        const stockRequests: [Observable<StockQuoteResponseModel>, Observable<StockQueryResponseModel>] = [
            this.http.get<StockQuoteResponseModel>('https://finnhub.io/api/v1/quote', { params: stockQuoteParams }),
            this.http.get<StockQueryResponseModel>('https://finnhub.io/api/v1/search', { params: stockQueryParams }),
        ];

        return forkJoin(stockRequests).pipe(
            map((response: [StockQuoteResponseModel, StockQueryResponseModel]) => {
                const stockQuoteResponse: StockQuoteResponseModel = response[0];
                const stockQueryResponse: StockQueryResponseModel = response[1];

                return {
                    symbol: stockSymbol,
                    name: stockQueryResponse.result[0].description,
                    currentPrice: stockQuoteResponse.c,
                    highPrice: stockQuoteResponse.h,
                    openingPrice: stockQuoteResponse.o,
                    percentChange: stockQuoteResponse.dp / 100,
                } as StockModel;
            })
        );
    }
}
