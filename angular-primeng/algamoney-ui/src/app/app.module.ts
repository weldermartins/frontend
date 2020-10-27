import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion'; // accordion and accordion tab
import { MenuItem } from 'primeng/api';              // api
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
