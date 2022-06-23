import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.scss']
})
export class StockViewComponent {

  onStockFormSubmit(form: NgForm) {
    if (form.invalid) return;
    const stockSymbol = form.value.stockSymbol;
    localStorage.setItem('stockSymbol', stockSymbol);
    form.resetForm();
  }
}
