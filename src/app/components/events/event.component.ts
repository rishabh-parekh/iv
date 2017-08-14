import { Component, OnInit } from '@angular/core';
import {EventService} from '../../service/event.service';
import {AuthService} from '../../service/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventData } from './eventdata'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit 
{
  eventData: EventData[];
  constructor(private eventService: EventService) 
  {
	this.getEventsInfo();
  }

  ngOnInit() {
  }


  getEventsInfo()
  {
   this.eventService.getEventsInfo().subscribe(
      (eventData: EventData[]) =>
      {
        this.eventData = eventData;
      });
  }

}
