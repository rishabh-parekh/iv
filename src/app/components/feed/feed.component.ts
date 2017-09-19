import { Component, OnInit } from '@angular/core';

import { FeedService } from '../../service/feed.service';
import { FeedEntry } from '../../model/feed-entry';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    private feedUrl: string = 'https://pinecast.com/feed/illuminate-stories';
    feeds: Array<FeedEntry> = [];

    constructor (
      private feedService: FeedService
    ) {}

    ngOnInit() {
      this.refreshFeed();
    }

    refreshFeed() {
      this.feeds.length = 0;
      // Adds 1s of delay to provide user's feedback.
      this.feedService.getFeedContent(this.feedUrl).delay(1000)
          .subscribe(
              feed => this.feeds = feed.items,
              error => console.log(error));
    }

}
