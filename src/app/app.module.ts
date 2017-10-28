import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { MomentModule } from 'angular2-moment';

import { LicenseService } from './services/license.service';

import {AppRoutingModule} from './app-routing.module'

import { DropdownDirective } from './directives/dropdown.directive';

import { AppComponent } from './app.component';
import { LicensesComponent } from './licenses/licenses.component'
import { LicenseDetailsComponent } from './licenses/license-details/license-details.component';
import { LicenseListComponent } from './licenses/license-list/license-list.component';
import { LicenseItemComponent } from './licenses/license-list/license-item/license-item.component';


@NgModule({
  declarations: [
    DropdownDirective,
    AppComponent,
    LicensesComponent,
    LicenseDetailsComponent,
    LicenseListComponent,
    LicenseItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ LicenseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
