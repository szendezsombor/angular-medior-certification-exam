import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {StockModel} from "../../models/stock.model";
import {StockViewService} from "../../services/stock-view.service";

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockViewComponent {
  stocks$: Observable<StockModel[]>;

  constructor(private stockViewService: StockViewService) {
    this.stocks$ = this.stockViewService.getStocks$();
  }

  onStockSymbolTracked(stockSymbol: string) {
    this.stockViewService.getStock(stockSymbol).subscribe();
  }

  removeStock(stockSymbol: string) {
    this.stockViewService.removeStock$(stockSymbol);
  }
}
