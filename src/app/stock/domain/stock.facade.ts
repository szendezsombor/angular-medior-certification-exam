import {Observable} from "rxjs";
import {StockModel} from "../models/stock.model";
import {StockApi} from "./stock.api";
import {Injectable} from "@angular/core";


@Injectable()
export class StockFacade {

  constructor(private stockService: StockApi) {}

  getStock(stockSymbol: string): Observable<StockModel> {
    return this.stockService.getStock(stockSymbol);
  }
}
