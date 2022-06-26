import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-stock-status-indicator',
    templateUrl: './stock-status-indicator.component.html',
    styleUrls: ['./stock-status-indicator.component.scss'],
})
export class StockStatusIndicatorComponent {
    @Input() status: 'increase' | 'decrease' = 'increase';
}
