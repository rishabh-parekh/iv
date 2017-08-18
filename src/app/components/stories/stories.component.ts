import { Component, OnInit} from '@angular/core';
import {
    Http
} from '@angular/http';
import {
    ArticleService
} from '../../service/articleservice';
import {
    Observable
} from 'rxjs/Rx';
import {
    IArticle
} from '../../service/article';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  articles: IArticle[];
  errorMessage: string;
  articleURL ;

  playAudio(audioURL: string ) {
    this.articleURL = this.domSanitizer.bypassSecurityTrustResourceUrl(audioURL);
  }

  constructor(private _articleService: ArticleService,private domSanitizer : DomSanitizer) {
    this.articleURL=this.domSanitizer.bypassSecurityTrustResourceUrl("https://anchor.fm/e/9d6fe8?at=604329");
  }

  ngOnInit() {
    let self = this;
    self._articleService.getArticles().subscribe(response => this.articles = response, error => this.errorMessage = < any > error);

  }
}
