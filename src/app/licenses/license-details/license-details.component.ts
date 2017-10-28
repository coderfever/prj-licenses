import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
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
  showForm: boolean = false;
  note: string
  @ViewChild('noteInput') noteInputRef: ElementRef;

  d: any

  constructor(private LicenseService: LicenseService,
              private route: ActivatedRoute,
              private router: Router,
            ) { this.d = new Date()}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.licenseDetail = this.LicenseService.getLicense(this.id);
        }
      )
  };


  onAddNewNote() {
    const note = this.noteInputRef.nativeElement.value;
    console.log(note);
    this.licenseDetail.notes.unshift(note)

    this.showForm = false;
    this.noteInputRef.nativeElement.value = "";

    this.d = this.d.getTime();
    console.log(this.d)
  }

  onClickEdit(license: License, noteIndex: number) {
    console.log(license, noteIndex)
    this.note = this.LicenseService.getNote(license, noteIndex)
    console.log(this.note)
  }

}
