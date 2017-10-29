import { Injectable } from '@angular/core';
import { License } from '../shared/license.model';
import { LicenseOption } from '../shared/licenseOption.model';
import { Note } from '../shared/note.model'

import * as moment from 'moment';

@Injectable()
export class LicenseService {
  tempLicense: License

  licenses: License[] = [
    new License('A123001',
                17001,
                [
                  new LicenseOption('BaseSoftware1',1),
                  new LicenseOption('AddonSoftware2',1)
                ],
                [
                  new Note('MH',
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at it',
                    moment('2017/09/09 01:00', 'YYYY/MM/DD HH:mm')),
                ],
                true),
    new License('A123002',
                17002,
                [
                  new LicenseOption('BaseSoftware1',1),
                  new LicenseOption('AddonSoftware1',1),
                  new LicenseOption('AddonSoftware2',2)
                ],
                [
                  new Note('MH',
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at it',
                    moment('2017/09/09 01:00', 'YYYY/MM/DD HH:mm')),
                ],
                false),
  ]

  getLicenses() {
    return this.licenses.slice();
  }

  getLicense(index:number) {
    return this.licenses[index];
  }

  getNote(license: License, noteIndex:number ) {
    // this.tempLicense = this.getLicense(licenseIndex)
    return license.notes[noteIndex]
  }

}
