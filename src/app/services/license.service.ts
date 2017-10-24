import { Injectable } from '@angular/core';
import { License } from '../shared/license.model';
import { LicenseOption } from '../shared/licenseOption.model';

@Injectable()
export class LicenseService {
  test: LicenseOption = new LicenseOption('abc',1)

  licenses: License[] = [
    new License('A123001',
                17001,
                [
                  new LicenseOption('BaseSoftware1',1),
                  new LicenseOption('AddonSoftware2',1)
                ],
                ['added',
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

  getLicense(index) {
    return this.licenses[index];
  }

}
