import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdIconModule,MdButtonModule,MdToolbarModule,MdInputModule, MdSelectModule,MdCardModule,MdTabsModule, MdDialogModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//import { URLSearchParams } from '@angular/http'
import { ContactListComponent } from './contact-list/contact-list.component'
import { ContactDetailComponent } from './contact-detail/contact-detail.component'
import { EmployeeComponent } from './employee/employee.component' 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdToolbarModule,
    MdIconModule,
    MdDialogModule,
    MdInputModule,
    MdCardModule,
    MdTabsModule,
    //URLSearchParams,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
