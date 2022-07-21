import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
registerLocaleData(localeEs, 'es-MX');
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Mx' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
