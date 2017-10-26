import { Injectable } from '@angular/core';
import { License } from '../shared/license.model';
import { LicenseOption } from '../shared/licenseOption.model';

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
                ['It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usin',
                 'Comment 2'],
                true),
    new License('A123002',
                17002,
                [
                  new LicenseOption('BaseSoftware1',1),
                  new LicenseOption('AddonSoftware1',1),
                  new LicenseOption('AddonSoftware2',2)
                ],
                ['added'],
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
