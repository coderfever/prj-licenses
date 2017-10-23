export class License {
  public licenseId: string;
  public job: number;
  public licenseOptions: number[];
  public notes: string[];
  public isDemo: boolean;

  constructor(licenseId: string,
              job: number,
              licenseOptions: number[],
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
