/**
 * Book entity, used for filtering as well.
 */
export class EventData {

  eventdate: string;
  eventname: string;
  eventdescription: string;
  eventlocation: string;
  eventactive: boolean;
  eventimage: string;

  constructor(eventdate:string, eventname:string, eventdescription:string,eventlocation:string,eventactive:boolean,eventimage:string) {
    this.eventdate = eventdate;
    this.eventname = eventname;
    this.eventdescription = eventdescription;
    this.eventlocation = eventlocation;
    this.eventactive = eventactive;
    this.eventimage = eventimage;
  }

}