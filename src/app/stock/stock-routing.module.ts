import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StockViewComponent} from "./containers/stock-view/stock-view.component";
import {StockSentimentViewComponent} from "./containers/stock-sentiment-view/stock-sentiment-view.component";

const routes: Routes = [
  {
    path: '',
    component: StockViewComponent,
  },
  {
    path: 'sentiment/:symbol',
    component: StockSentimentViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {
}
