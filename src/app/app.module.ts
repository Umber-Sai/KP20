import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonDirective } from './directives/button.directive';
import { CurrencyPipePipe } from './pipes/currency-pipe.pipe';
import { ShortTextPipe } from './pipes/short-text.pipe';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdvantagesComponent,
    ProductComponent,
    ButtonDirective,
    CurrencyPipePipe,
    ShortTextPipe,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent, AdvantagesComponent]
})
export class AppModule { }
