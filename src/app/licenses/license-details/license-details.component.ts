import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import { License } from '../../shared/license.model';
import { Note } from '../../shared/note.model';

import { LicenseService } from '../../services/license.service';

import {ActivatedRoute, Router, Params} from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-license-details',
  templateUrl: './license-details.component.html',
  styleUrls: ['./license-details.component.css']
})
export class LicenseDetailsComponent implements OnInit {
  licenseDetail: License;
  id: number;
  showForm: boolean = false;
  note: Note;
  authors: string[];
  @ViewChild('noteInput') noteInputRef: ElementRef;
  @Input() licenseIndex: number;

  date:moment.Moment;

  constructor(private LicenseService: LicenseService,
              private route: ActivatedRoute,
              private router: Router,
            ) {
              this.authors=['MH', 'KH']
            }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.licenseDetail = this.LicenseService.getLicense(this.id);
        }
      )
  }

  onAddNewNote() {
    const note = this.noteInputRef.nativeElement.value;
    const dateTime = moment();
    const noteDetail = new Note('MH', note, dateTime);
    this.licenseDetail.notes.unshift(noteDetail);

    this.showForm = false;
    this.noteInputRef.nativeElement.value = "";
  }

  onEditNote(noteIndex: number) {
    // console.log(license, noteIndex)
    // this.note = this.LicenseService.getNote(license, noteIndex)
    // console.log(this.note)
  }

  onDeleteNote(noteIndex: number) {
    this.LicenseService.deleteNote(this.id, noteIndex)
  }

}
