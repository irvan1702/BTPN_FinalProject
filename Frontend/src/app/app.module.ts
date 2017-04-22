import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdListModule, MdLineModule, MaterialModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//import { URLSearchParams } from '@angular/http'
import { ContactListComponent } from './contact-list/contact-list.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdListModule,
    MdLineModule,
    MaterialModule,
    //URLSearchParams,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
