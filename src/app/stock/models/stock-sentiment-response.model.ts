import {StockSentimentModel} from "./stock-sentiment.model";

export interface StockSentimentResponseModel {
  data: StockSentimentModel[];
  symbol: string;
}
