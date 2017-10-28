export class Note {
  public author: string;
  public note: string;
  public dateTime: Date;

  constructor(author: string,
              note: string,
              dateTime: Date
    ) {
        this.author = author;
        this.note = note;
        this.dateTime = dateTime;          
      }
}
