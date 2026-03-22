import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormatCurrencyPipe } from './format-currency.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FormatCurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
