import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {StockSentimentApi} from "./stock-sentiment.api";

@Injectable()
export class StockSentimentFacade {

  constructor(private stockSentimentApi: StockSentimentApi) {}

  getStock(stockSymbol: string): Observable<any> {
    return this.stockSentimentApi.getStockSentiment(stockSymbol);
  }
}
