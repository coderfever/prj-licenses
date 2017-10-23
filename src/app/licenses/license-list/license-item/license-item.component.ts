import { Component, OnInit, Input } from '@angular/core';
import { License } from '../../../shared/license.model';

@Component({
  selector: 'app-license-item',
  templateUrl: './license-item.component.html',
  styleUrls: ['./license-item.component.css']
})
export class LicenseItemComponent implements OnInit {
  @Input() licenseDetails: License;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
