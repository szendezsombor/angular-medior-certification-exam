import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRoutingModule } from './stock-routing.module';
import { StockViewComponent } from './containers/stock-view/stock-view.component';
import { FormsModule } from '@angular/forms';
import { StockApi } from './services/stock.api';
import { StockFacade } from './services/stock.facade';
import { StockViewService } from './services/stock-view.service';
import { StockDetailComponent } from './components/stock-detail/stock-detail.component';
import { StockSentimentViewComponent } from './containers/stock-sentiment-view/stock-sentiment-view.component';
import { StockSentimentFacade } from './services/stock-sentiment.facade';
import { StockSentimentApi } from './services/stock-sentiment.api';
import { StockStatusIndicatorComponent } from './components/stock-status-indicator/stock-status-indicator.component';
import { TrackStockComponent } from './components/track-stock/track-stock.component';
import { StockSentimentDetailComponent } from './components/stock-sentiment-detail/stock-sentiment-detail.component';
import { OnlyLetterValidatorDirective } from './directives/only-letter-validator.directive';

@NgModule({
    declarations: [
        StockViewComponent,
        StockDetailComponent,
        StockSentimentViewComponent,
        StockStatusIndicatorComponent,
        OnlyLetterValidatorDirective,
        TrackStockComponent,
        StockSentimentDetailComponent,
    ],
    imports: [CommonModule, FormsModule, StockRoutingModule],
    providers: [StockApi, StockFacade, StockViewService, StockSentimentFacade, StockSentimentApi],
})
export class StockModule {}
