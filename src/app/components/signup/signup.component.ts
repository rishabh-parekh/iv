import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  token: string;
  displayConfirmPassword = false;
  displayForgotPassword = false;
  error: any;
  infomessage:any;

  constructor(public authService: AuthService,
    private router: Router,
    private route:ActivatedRoute,) { }

  ngOnInit() {
    console.log('inside SignupComponent.ngOnInit');
    const paramname = this.route.snapshot.params["logout"];
    console.log('inside NavbarComponent:' + paramname);
    if (paramname && paramname === 'logout')
    {
      this.authService.logout();
    }
  }

  displaySignup()
  {
    this.displayConfirmPassword = true;
    this.displayForgotPassword = false;
  }

  displayForgotPasswordScreen()
  {
    this.displayConfirmPassword = false;
    this.displayForgotPassword = true;
  }

  displayLogin()
  {
    this.displayConfirmPassword = false;
    this.displayForgotPassword = false;
  }

  onSignup(form: NgForm)
  {
    console.log('onSignup:' + form);
    this.error = null;
    this.infomessage = null;
    if (!this.displayConfirmPassword && !this.displayForgotPassword)
    {
      this.doLogin(form);
    } else if (this.displayConfirmPassword && !this.displayForgotPassword)
    {
      this.doSignup(form);
    } else if (!this.displayConfirmPassword && this.displayForgotPassword)
    {
      this.resetPassword(form);
    }
  }

  resetPassword(form: NgForm)
  {
    console.log('inside resetPassword');
    const email = form.value.forgetemail;
    this.authService.resetemail(email)
    .then (
      response => {
        console.log('inside  reset response is: ' + response);
        //alert('Email sent at:'+ email + ': to reset password');
        this.infomessage = 'Email sent at:'+ email + ': to reset password';
        this.displayLogin();
      }
    )
    .catch(
      error =>
      {
        console.log('inside  reset error:' + error);
        this.error = error.message;
      }
    )
  }

  doLogin(form: NgForm)
  {
    console.log('inside doLogin');
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signinUser(email,password)
    .then
    (
      response => {
        console.log('inside  response is: ' + response);
        this.authService.getToken();
        this.router.navigate(['/']);
        //alert(email + ' :successfully logged in');
        //return response;
      }
    )
    .catch(
      error =>
      {
        console.log('inside  error:' + error);
        this.error = error.message;

      }
    )

  }

  loginGoogle()
  {
    this.authService.signInWithPopup().then(
        (success) => {
          this.authService.getToken();
        this.router.navigate(['/']);
      }).catch(
        (err) => {
        this.error = err;
      });
  }

  doSignup(form: NgForm)
  {
    console.log('inside doSignup');
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signupUser(email,password)
    .then
    (
      response => {
        console.log('inside  response is: ' + response);
        this.authService.getToken();
        this.router.navigate(['/']);
        //alert(email + ' :successfully created');
        //return response;
      }
    )
    .catch(
      error =>
      {
        console.log('inside  error:' + error);
        this.error = error.message;
      }
    )


  }//end of onSignup

  logout()
  {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
