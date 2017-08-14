import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  user = {};
  constructor(public af: AngularFireAuth) {
    /*this.af.authState.subscribe(user => {
          if(user) {
            // user logged in
            console.log('user is:' + user.getToken())
            this.user = user;
          }
          else {
            //
              console.log('user not logged in');
            this.user = {};
          }
        });*/

  }

}
