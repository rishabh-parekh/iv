import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


import { ContactData } from '../components/contact/contactdata';


@Injectable()
export class ContactService 
{

  resourcedatpath: string = '/Palav/contactus/';
  listings: FirebaseListObservable<any[]>;

  constructor(private http: Http,public afd: AngularFireDatabase) 
  {
	this.listings = this.afd.list(this.resourcedatpath);
  }


  updateContactData(contactData)
  {
	return this.listings.push(contactData);
  }

}
