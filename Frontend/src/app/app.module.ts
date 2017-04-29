import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MdChipsModule,MdCheckboxModule, MdIconModule, MdButtonModule, MdToolbarModule, MdInputModule,
  MdSelectModule,MdRadioModule, MdCardModule, MdTabsModule, MdDialogModule
} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//import { URLSearchParams } from '@angular/http'
import { ContactListComponent } from './contact-list/contact-list.component'
import { ContactDetailComponent } from './contact-detail/contact-detail.component'
import { NavigationComponent } from './navigation/navigation.component'
import { FilterComponent } from './filter/filter.component'
import { DeleteComponent } from './delete/delete.component'
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

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
    BtnSvgComponent,
    NavigationComponent,
    FormComponent,
    FilterComponent,
    DeleteComponent
  ],
  entryComponents: [FilterComponent,DeleteComponent],
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
    MdRadioModule,
    MdSelectModule,
    Routing,
    
    //URLSearchParams,
    BrowserAnimationsModule
  ],
  providers: [AppService,RefreshService,DatePipe,
    {
      provide: lookupListToken, useValue: lookupLists
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
