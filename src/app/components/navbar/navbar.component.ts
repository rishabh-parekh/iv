import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public flashMessage:FlashMessagesService,
    private router:Router,
    private route:ActivatedRoute,
    public authService:AuthService

  ) { }

  ngOnInit() {

  }


}
