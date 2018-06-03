import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryItemComponent } from './summary-item/summary-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SummaryItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: DashboardComponent},
      { path: '**', component: DashboardComponent }
    ]),
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,

    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
