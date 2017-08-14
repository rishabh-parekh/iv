import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router,public afauth: AngularFireAuth)
  {
    this.afauth.authState.subscribe(user => {
          if(user) {
            // user logged in
            console.log('user is:' + user.email);
            this.getToken();
          }
          else {
            //
              console.log('user not logged in');
            //this.user = {};
          }
        });
  }

  signInWithPopup()
  {
    return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  signupUser(email: string, password: string)
  {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
      /*.then(
        response => {
          console.log('inside service response is: ' + response);
          return response;
        }
      )
      .catch(
        error => console.log('inside service error:' + error)
      )*/
  }

  signinUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);

  }

  resetemail(email: string)
  {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {this.token = token; console.log('token is:'+this.token)}
      );
    return this.token;
  }

getUser()
{
  return firebase.auth().currentUser;
}

  isAuthenticated() {
    console.log('this.token:' + firebase.auth().currentUser);
    return this.token != null;
  }
}
