import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireModule} from 'angularfire2';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {firebaseConfig} from '../environments/firebase.config';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { StreetwearComponent } from './components/streetwear/streetwear.component';
import { StoriesComponent } from './components/stories/stories.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {FirebaseService} from './service/firebase.service';
import {AuthService} from './service/auth.service';
import {AuthGuardService} from './service/auth-guard.service';
import {AngularFireAuth } from 'angularfire2/auth';
import {ContactService} from './service/contact.service';
import {ArticleService} from './service/articleservice';
import {CatalogService} from './service/catalogservice';
import {WindowService} from './service/windowservice';
import {FeedService} from './service/feed.service';

import { OrganizationsComponent } from './components/organizations/organizations.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { StripHtmlTagsPipe } from './pipes/strip-html-tags.pipe';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'fromresources/:pagename', component: MainComponent },
]

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    StreetwearComponent,
    StoriesComponent,
    ContactComponent,
    MainComponent,
    OrganizationsComponent,
    FeedComponent,
    FeedCardComponent,
    StripHtmlTagsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FeedService,ArticleService, WindowService, CatalogService, FirebaseService, AngularFireDatabase, AuthService, AuthGuardService, AngularFireAuth,  ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
