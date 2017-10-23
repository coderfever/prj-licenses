import { Component, OnInit, Input} from '@angular/core';
import { License } from '../../shared/license.model';


@Component({
  selector: 'app-license-details',
  templateUrl: './license-details.component.html',
  styleUrls: ['./license-details.component.css']
})
export class LicenseDetailsComponent implements OnInit {
  @Input() licenseDetails: License;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
