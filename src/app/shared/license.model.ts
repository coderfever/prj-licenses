import { LicenseOption } from './licenseOption.model';

export class License {
  public licenseId: string;
  public job: number;
  public licenseOptions: LicenseOption[];
  public notes: string[];
  public isDemo: boolean;

  constructor(licenseId: string,
              job: number,
              licenseOptions: LicenseOption[],
              notes: string[],
              isDemo: boolean
  ) {
    this.licenseId = licenseId;
    this.job = job;
    this.licenseOptions = licenseOptions;
    this.notes = notes;
    this.isDemo = isDemo;
  }
}
