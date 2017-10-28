import { LicenseOption } from './licenseOption.model';
import { Note } from './note.model';

export class License {
  public licenseId: string;
  public job: number;
  public licenseOptions: LicenseOption[];
  public notes: Note[];
  public isDemo: boolean;

  constructor(licenseId: string,
              job: number,
              licenseOptions: LicenseOption[],
              notes: Note[],
              isDemo: boolean
  ) {
    this.licenseId = licenseId;
    this.job = job;
    this.licenseOptions = licenseOptions;
    this.notes = notes;
    this.isDemo = isDemo;
  }
}
