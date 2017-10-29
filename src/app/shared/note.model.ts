import * as moment from 'moment';

export class Note {
  public author: string;
  public note: string;
  public dateTime: moment.Moment;

  constructor(author: string,
              note: string,
              dateTime: moment.Moment
    ) {
        this.author = author;
        this.note = note;
        this.dateTime = dateTime;
      }
}
