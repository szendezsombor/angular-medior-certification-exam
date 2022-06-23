import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StockRoutingModule} from "./stock-routing.module";
import { StockViewComponent } from './containers/stock-view/stock-view.component';
import {FormsModule} from "@angular/forms";
import {StockApi} from "./domain/stock.api";
import {StockFacade} from "./domain/stock.facade";
import {StockViewService} from "./services/stock-view.service";
import {StockDetailComponent} from "./components/stock-detail/stock-detail.component";

@NgModule({
  declarations: [
    StockViewComponent,
    StockDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StockRoutingModule,
  ],
  providers: [
    StockApi,
    StockFacade,
    StockViewService,
  ]
})
export class StockModule { }
