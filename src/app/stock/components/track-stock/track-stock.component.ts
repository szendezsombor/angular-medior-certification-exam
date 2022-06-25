import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-track-stock',
  templateUrl: './track-stock.component.html',
  styleUrls: ['./track-stock.component.scss']
})
export class TrackStockComponent {

  @Output() stockSymbolTrack: EventEmitter<string> = new EventEmitter<string>();

  onStockFormSubmit(form: NgForm) {
    if (form.invalid) return;
    const stockSymbol = form.value.stockSymbol.toUpperCase();
    this.stockSymbolTrack.emit(stockSymbol);
    form.resetForm();
  }
}
