import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SummaryItemComponent } from './summary-item/summary-item.component';
import {SalesChartComponent} from './sales-chart/sales-chart.component';
import { RouterModule, Routes, RouterState } from "@angular/router";

const routes:Routes = [
  {path: '', component: DashboardComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardComponent,
    SummaryItemComponent,
    SalesChartComponent
  ]
})
export class DashboardModule { }
