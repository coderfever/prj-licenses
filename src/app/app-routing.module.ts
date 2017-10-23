import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LicensesComponent } from './licenses/licenses.component'
import { LicenseDetailsComponent } from './licenses/license-details/license-details.component';
import { LicenseListComponent } from './licenses/license-list/license-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/licenses', pathMatch: 'full'},
  {path: 'licenses', component: LicensesComponent, children: [
    // {path: 'new', component: LicenseEditComponent},
    {path: ':id', component: LicenseDetailsComponent},
    // {path: ':id/edit', component: LicenseEditComponent}
  ]},
  {path: '**', redirectTo: '/licenses'}

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
