import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Adding the youtube https://github.com/orizens/ng2-youtube-player module
import { YoutubePlayerModule } from 'ng2-youtube-player';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireModule} from 'angularfire2';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {firebaseConfig} from '../environments/firebase.config';
//import {Ng2PageScrollModule} from 'ng2-page-scroll';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { EventComponent } from './components/events/event.component';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {FirebaseService} from './service/firebase.service';

import {AuthService} from './service/auth.service';
import {AuthGuardService} from './service/auth-guard.service';

import { SignupComponent } from './components/signup/signup.component';

import { AngularFireAuth } from 'angularfire2/auth';

import {ResourceService} from './service/resource.service';
import {ContactService} from './service/contact.service';
import {EventService} from './service/event.service';

import { ResourcefilterPipe } from './components/resources/resourcefilter.pipe';
import { VideoComponent } from './components/video/video.component';

import { SafePipe } from './pipes/safe.pipe';
import { GoalsComponent } from './components/goals/goals.component';

const appRoutes: Routes = [
  {path:'', component:MainComponent},
  {path:'resources', component:ResourcesComponent},
  {path:'signup', component:SignupComponent},

  {path:'fromresources/:pagename', component:MainComponent},
  {path:'signup/:logout', component:SignupComponent},
]

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    MainComponent,
    ResourcesComponent,
    SignupComponent,
    EventComponent,
    ResourcefilterPipe,
    VideoComponent,
    SafePipe,
    GoalsComponent
  ],
  imports: [
    BrowserModule,
    // Adding the youtube module
    YoutubePlayerModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
    //Ng2PageScrollModule.forRoot()
  ],
  providers: [FirebaseService,AngularFireDatabase,AuthService,AuthGuardService,AngularFireAuth,ResourceService,ContactService,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
