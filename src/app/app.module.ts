import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { MomentModule } from 'angular2-moment';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { LicenseService } from './services/license.service';

import {AppRoutingModule} from './app-routing.module'

import { DropdownDirective } from './directives/dropdown.directive';

import { AppComponent } from './app.component';
import { LicensesComponent } from './licenses/licenses.component'
import { LicenseDetailsComponent } from './licenses/license-details/license-details.component';
import { LicenseListComponent } from './licenses/license-list/license-list.component';
import { LicenseItemComponent } from './licenses/license-list/license-item/license-item.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    DropdownDirective,
    AppComponent,
    LicensesComponent,
    LicenseDetailsComponent,
    LicenseListComponent,
    LicenseItemComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MomentModule,
    Angular2FontawesomeModule
  ],
  providers: [ LicenseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
