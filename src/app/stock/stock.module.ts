import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StockRoutingModule} from "./stock-routing.module";
import { StockViewComponent } from './containers/stock-view/stock-view.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    StockViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StockRoutingModule,
  ]
})
export class StockModule { }
