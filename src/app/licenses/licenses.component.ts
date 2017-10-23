import { Component, OnInit } from '@angular/core';
import { LicenseService } from '../services/license.service';
import { License } from '../shared/license.model'

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.css']
})
export class LicensesComponent implements OnInit {
  licenses: License[];

  constructor(private LicenseService: LicenseService) { }

  ngOnInit() {
    this.licenses = this.LicenseService.getLicenses();
  }

}
