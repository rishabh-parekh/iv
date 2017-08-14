import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class FirebaseService {

  constructor(public http: Http,public afd: AngularFireDatabase)
  {
    //directoryPath = '/JSGD/Directory/';
    //this.afd.list(this.directoryPath);
  }

  getListings()
  {
  
  }

}
