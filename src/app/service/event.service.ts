import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { EventData } from '../components/events/eventdata';


@Injectable()
export class EventService 
{

  resourcedatpath: string = '/Palav/eventsinfo/';


  constructor(public afd: AngularFireDatabase) {
  }

  getEventsInfo(): Observable<EventData[]>
  {
	return this.afd.list(this.resourcedatpath);
  }

}
