import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdChipsModule, MdIconModule,MdButtonModule,MdToolbarModule,MdInputModule, 
  MdSelectModule,MdCardModule,MdTabsModule, MdDialogModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//import { URLSearchParams } from '@angular/http'
import { ContactListComponent} from './contact-list/contact-list.component'
import { ContactDetailComponent } from './contact-detail/contact-detail.component'
import { EmployeeComponent } from './employee/employee.component' 
import { SearchBarComponent } from './search-bar/search-bar.component' 
import { NavigationComponent } from './navigation/navigation.component' 
import { FilterComponent } from './filter/filter.component'
import { ReactiveFormsModule } from '@angular/forms';

import { BtnSvgComponent } from './btn-svg/btn-svg.component'
import { AppComponent } from './app.component'
import { FormComponent } from './form/form.component'
import { AppService } from './app.service'
import 'hammerjs'

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    EmployeeComponent,
    SearchBarComponent,
    BtnSvgComponent,
    NavigationComponent,
    FormComponent,
    FilterComponent
  ],
  entryComponents: [FilterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdDialogModule,
    MdInputModule,
    MdCardModule,
    MdTabsModule,
    MdChipsModule,
    //URLSearchParams,
    BrowserAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
