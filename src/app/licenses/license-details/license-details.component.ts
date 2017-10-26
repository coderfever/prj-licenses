import { Component, OnInit, Input} from '@angular/core';
import { License } from '../../shared/license.model';

import { LicenseService } from '../../services/license.service';

import {ActivatedRoute, Router, Params} from '@angular/router';
@Component({
  selector: 'app-license-details',
  templateUrl: './license-details.component.html',
  styleUrls: ['./license-details.component.css']
})
export class LicenseDetailsComponent implements OnInit {
  licenseDetail: License;
  id: number;
  note: string

  constructor(private LicenseService: LicenseService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.licenseDetail = this.LicenseService.getLicense(this.id);
        }
      )
  };

  onAddNewNote(note: string) {
    this.licenseDetail.notes.unshift(note)
  }

  onClickEdit(license: License, noteIndex: number) {
    console.log(license, noteIndex)
    this.note = this.LicenseService.getNote(license, noteIndex)
    console.log(this.note)
  }

}
