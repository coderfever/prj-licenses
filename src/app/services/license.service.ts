import { Injectable } from '@angular/core';
import { License } from '../shared/license.model';

@Injectable()
export class LicenseService {

  licenses: License[] = [
    new License('A123001', 17001, [1,2],['added'], true),
    new License('A123002', 17002, [1,2,3],['added'], false),
  ]

  getLicenses() {
    return this.licenses.slice();
  }

  getLicense(index) {
    return this.licenses[index];
  }

}
