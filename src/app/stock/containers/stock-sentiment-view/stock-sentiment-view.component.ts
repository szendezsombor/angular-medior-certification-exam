import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { StockSentimentModel } from '../../models/stock-sentiment.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StockModel } from '../../models/stock.model';
import { StockFacade } from '../../services/stock.facade';
import { StockSentimentFacade } from '../../services/stock-sentiment.facade';

@Component({
    selector: 'app-stock-sentiment-view',
    templateUrl: './stock-sentiment-view.component.html',
    styleUrls: ['./stock-sentiment-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockSentimentViewComponent implements OnInit {
    stockSentiments: Observable<StockSentimentModel[]> = of([]);
    stock: Observable<StockModel | null> = of(null);

    constructor(
        private activatedRoute: ActivatedRoute,
        private stockFacade: StockFacade,
        private stockSentimentFacade: StockSentimentFacade
    ) {}

    ngOnInit(): void {
        this.activatedRoute.paramMap
            .pipe(
                tap((paramMap: ParamMap) => {
                    const stockSymbol = paramMap.get('symbol') || '';
                    this.stock = this.stockFacade.getStock(stockSymbol);
                    this.stockSentiments = this.stockSentimentFacade.getStock(stockSymbol);
                })
            )
            .subscribe();
    }
}
