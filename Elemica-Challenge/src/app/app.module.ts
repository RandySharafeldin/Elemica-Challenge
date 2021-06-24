import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchaseConfirmationCardComponent } from './components/purchase-confirmation-card/purchase-confirmation-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ShippingDataPannelComponent } from './components/shipping-data-pannel/shipping-data-pannel.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { OrderDataCardComponent } from './components/order-data-card/order-data-card.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    PurchaseConfirmationCardComponent,
    ShippingDataPannelComponent,
    OrderDataCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
