import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LicensesComponent } from './licenses/licenses.component'

import { LicenseService } from './services/license.service';
import { LicenseDetailsComponent } from './licenses/license-details/license-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LicensesComponent,
    LicenseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ LicenseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
