import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StockModel } from '../../models/stock.model';

@Component({
    selector: 'app-stock-detail',
    templateUrl: './stock-detail.component.html',
    styleUrls: ['./stock-detail.component.scss'],
})
export class StockDetailComponent {
    @Input() stock!: StockModel;

    @Output() cardCloseEvent: EventEmitter<string> = new EventEmitter<string>();

    closeCard(stockSymbol: string): void {
        this.cardCloseEvent.emit(stockSymbol);
    }
}
