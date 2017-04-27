import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MdChipsModule,MdCheckboxModule, MdIconModule, MdButtonModule, MdToolbarModule, MdInputModule,
  MdSelectModule, MdCardModule, MdTabsModule, MdDialogModule
} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//import { URLSearchParams } from '@angular/http'
import { ContactListComponent } from './contact-list/contact-list.component'
import { ContactDetailComponent } from './contact-detail/contact-detail.component'
import { EmployeeComponent } from './employee/employee.component'
import { NavigationComponent } from './navigation/navigation.component'
import { FilterComponent } from './filter/filter.component'
import { ReactiveFormsModule } from '@angular/forms';

import { BtnSvgComponent } from './btn-svg/btn-svg.component'
import { AppComponent } from './app.component'
import { FormComponent } from './form/form.component'
import { AppService } from './app.service'
import { lookupListToken, lookupLists } from './provides';
import { Routing} from './app.routing'
import { RefreshService } from './refresh.service'
import 'hammerjs'

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    EmployeeComponent,
    BtnSvgComponent,
    NavigationComponent,
    FormComponent,
    FilterComponent
  ],
  entryComponents: [FilterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCheckboxModule,
    MdDialogModule,
    MdInputModule,
    MdCardModule,
    MdTabsModule,
    MdChipsModule,
    MdSelectModule,
    Routing,
    //URLSearchParams,
    BrowserAnimationsModule
  ],
  providers: [AppService,RefreshService,
    {
      provide: lookupListToken, useValue: lookupLists
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
