/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FeedService } from './feed.service';

describe('Service: Feed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [FeedService]
    });
  });

  it('should inject the FeedService', inject([FeedService], (service: FeedService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve the requested RSS feed', async(inject([FeedService], (service: FeedService) => {
    service.getFeedContent('https://pinecast.com/feed/illuminate-stories')
        .subscribe(result => {
          expect(result).toBeDefined();
          expect(result.status).toBe('ok');
          expect(result.items.length).toBeGreaterThan(0);
          });
    })));
});
