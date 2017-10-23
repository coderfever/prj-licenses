import { Component, OnInit, Input } from '@angular/core';
import { LicenseService } from '../../services/license.service';
import { License } from '../../shared/license.model';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.css']
})
export class LicenseListComponent implements OnInit {
  @Input() licenseDetails: License;
  @Input() index: number;
  licenses: License[];

  constructor(private LicenseService: LicenseService) { }

  ngOnInit() {
    this.licenses = this.LicenseService.getLicenses();
  }

}
