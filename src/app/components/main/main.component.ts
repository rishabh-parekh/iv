import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
//import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit
{
  pagename:any;
  constructor(private router: Router,
              private route: ActivatedRoute
              //private pageScrollService: PageScrollService,
               //@Inject(DOCUMENT) private document: any
             ) {
  }

  ngOnInit() {
    this.pagename = this.route.snapshot.params['pagename'];
    console.log('########################:'+this.pagename);
    if (this.pagename)
    {
    //  this.scrollTo();
    }

  }

  scrollTo()
  {
//    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, this.pagename);
//    this.pageScrollService.start(pageScrollInstance);
  }

}
