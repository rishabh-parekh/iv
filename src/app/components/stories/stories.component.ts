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
  selectedArticle: IArticle ;
  audioURL : any;

  playAudio(article: IArticle ) {
    this.selectedArticle = article;
    this.audioURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.selectedArticle.audioURL);
  }

  constructor(private _articleService: ArticleService,private domSanitizer : DomSanitizer) {
    this.audioURL=this.domSanitizer.bypassSecurityTrustResourceUrl("https://anchor.fm/e/9d6fe8?at=604329");
    this.selectedArticle = {
      id: 1,
      imgURL: "test",
      title: "test",
      author: "test",
      quote: "test",
      audioURL: "test",
      shortStory: "test"
    };

    let self = this;
    self._articleService.getArticles().subscribe(response => {
      this.articles = response, error => this.errorMessage = < any > error
      this.selectedArticle = this.articles[0];
    });
  }

  ngOnInit() {
  }
}
