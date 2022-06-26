import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { StockModel } from '../models/stock.model';
import { StockFacade } from './stock.facade';

@Injectable()
export class StockViewService {
    _stocks$: BehaviorSubject<StockModel[]>;

    constructor(private stockFacade: StockFacade) {
        this._stocks$ = new BehaviorSubject<StockModel[]>(this.readStocksFromLocalStorage());
    }

    getStocks$ = (): Observable<StockModel[]> => {
        return this._stocks$.asObservable();
    };

    addStock$ = (stock: StockModel): void => {
        const stocks = [stock, ...this._stocks$.getValue()];
        this._stocks$.next(stocks);
        this.storeStocksInLocalStorage(stocks);
    };

    removeStock$ = (stockSymbol: string): void => {
        const stocks = [...this._stocks$.getValue()];
        const stock: StockModel | undefined = stocks.find((stock: StockModel) => stockSymbol === stock.symbol);
        if (!stock) return;
        const stockIndex: number = stocks.indexOf(stock);
        stocks.splice(stockIndex, 1);
        this._stocks$.next(stocks);
        this.storeStocksInLocalStorage(stocks);
    };

    getStock(stockSymbol: string): Observable<StockModel> {
        return this.stockFacade.getStock(stockSymbol).pipe(tap(this.addStock$));
    }

    storeStocksInLocalStorage(stocks: StockModel[]): void {
        localStorage.setItem('stocks', JSON.stringify(stocks));
    }

    readStocksFromLocalStorage(): StockModel[] {
        const stocks: StockModel[] = JSON.parse(localStorage.getItem('stocks') || '[]');

        stocks.map((stock: StockModel) => {
            return {
                ...stock,
                percentChange: +stock.percentChange,
                highPrice: +stock.highPrice,
                currentPrice: +stock.currentPrice,
                openingPrice: +stock.openingPrice,
            } as StockModel;
        });

        return stocks;
    }
}
