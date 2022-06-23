import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Observable, of} from "rxjs";
import {StockModel} from "../../models/stock.model";
import {StockFacade} from "../../domain/stock.facade";
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

  onStockFormSubmit(form: NgForm) {
    if (form.invalid) return;
    const stockSymbol = form.value.stockSymbol;

    this.stockViewService.getStock(stockSymbol).subscribe();
    form.resetForm();
  }

  removeStock(stockSymbol: string) {
    this.stockViewService.removeStock$(stockSymbol);
  }
}
