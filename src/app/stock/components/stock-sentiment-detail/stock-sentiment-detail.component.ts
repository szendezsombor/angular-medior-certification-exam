import {Component, Input } from '@angular/core';
import {StockModel} from "../../models/stock.model";
import {StockSentimentModel} from "../../models/stock-sentiment.model";

@Component({
  selector: 'app-stock-sentiment-detail',
  templateUrl: './stock-sentiment-detail.component.html',
  styleUrls: ['./stock-sentiment-detail.component.scss']
})
export class StockSentimentDetailComponent {

  @Input() stock: StockModel | null = null;
  @Input() stockSentiments!: StockSentimentModel[];
}
