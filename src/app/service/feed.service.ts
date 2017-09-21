import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Feed } from '../model/feed';
import { FeedInfo } from '../model/feed-info';

import * as rss2json from 'rss-to-json';


@Injectable()
export class FeedService {

  private rssToJsonServiceBaseUrl: string = 'https://api.rss2json.com/v1/api.json?rss_url=';
  parser: any;
  xmlDoc : any;
  blogTitle : string;
  items = [];
  generator : any;
  item : any;
  feedItems = [];
  constructor(
    private http: Http
  ) {

  }

  // getFeedContent(url: string): Observable<Feed> {
  //
  //   return this.http.get(this.rssToJsonServiceBaseUrl+url)
  //           .map(this.extractFeeds)
  //           .catch(this.handleError);
  // }


  // getFeedContent(url: string) : Observable<Feed> {
  //     let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded' });
  //     let options = new RequestOptions({ headers: headers, method: RequestMethod.Post});
  //     //used xml2js parser from npm (https://www.npmjs.com/package/xml2js)
  //     //and in my service i used this
  //
  //     return this.http.get(url)
  //         .map(this.extractFeeds)
  //         .catch(this.handleError);
  // }

  getFeedContent(url: string) : Observable<Feed> {
      return this.http.get(url)
          .map(this.extractFeeds)
          .catch(this.handleError);
  }

  private extractFeeds = (res: Response) => { // <-- using arrow syntax
    let content =  res.text("iso-8859");
    let feed = this.extractItems(content);
    return feed ;
  }

  private getItemWithoutEndTag(content, tag) {
      let tagStart = 0, tagEnd = 0, s = '', count = 0;
      while (content.search('<' + tag) > 0 && count < content.length) {
          tagStart = content.search('<' + tag);
          tagEnd = content.search(' />');
          if (tagEnd > tagStart) {
              s = content.substr(tagStart + 20, tagEnd - tagStart -21);
              break;
          } else {
              count++
          }
      }
      return s.replace("<![CDATA[", "")
          .replace("]]>", "")
          .replace(/<[^>]+>/g, '')
          .replace(/\r?\n|\r/g, '')
  }

  private getItem(content, tag) {
      let tagStart = 0, tagEnd = 0, s = '', count = 0;
      while (content.search('<' + tag) > 0 && count < content.length) {
          tagStart = content.search('<' + tag);
          tagEnd = content.search('/' + tag + '>');

          if (tagEnd > tagStart) {
              s = content.substr(tagStart, tagEnd - tagStart + tag.length + 2);
              content = content.replace(s, '')
          } else {
              count++
          }
      }
      return s.replace("<![CDATA[", "")
          .replace("]]>", "")
          .replace(/<[^>]+>/g, '')
          .replace(/\r?\n|\r/g, '')
  }

  private getItemWithHtml(content, tag) {
      let tagStart = 0, tagEnd = 0, s = '', count = 0;
      while (content.search('<' + tag) > 0 && count < content.length) {
          tagStart = content.search('<' + tag);
          tagEnd = content.search('/' + tag + '>');

          if (tagEnd > tagStart) {
              s = content.substr(tagStart + tag.length + 2, tagEnd - tagStart - tag.length);
              content = content.replace(s, '')
          } else {
              count++
          }
      }
      s = s.substr(0,s.length -3);
      return s.replace("<![CDATA[", "")
          .replace("]]>", "")
  }


  private getItemAtom(content, tag) {
      const match = content.match('<' + tag + '(.*)?/>');
      if (match !== null) {
          return match[0].match(/"(.*)"/)[0].replace(/"/g, '')
      } else {
          return ''
      }
  }

  // title: string,
  // link: string,
  // guid: string,
  // pubDate: Date,
  // categories: Array<string>,
  // author: string,
  // thumbnail: string,
  // description: string,
  // content: string

  private getItems(content, tag) {
      let arr = [], tagStart = 0, tagEnd = 0, count = 0;
      while (content.search('<' + tag) > 0 && count < content.length) {
          tagStart = content.search('<' + tag);
          tagEnd = content.search('/' + tag + '>');
          if (tagEnd > tagStart) {
              let
                  s = content.substr(tagStart, tagEnd - tagStart + tag.length + 2),
                  t = this.getItem(s, 'title'),
                  a = this.getItem(s, 'itunes:author'),
                  thumb = this.getItemWithoutEndTag(s, 'itunes:image'),
                  d = this.getItemWithHtml(s, 'description'),
                  w = this.getItem(s, 'h1'),

                  l = this.getItem(s, 'link'),
                  duration = this.getItem(s,"itunes:duration"),
                  dt = this.getItem(s,"pubDate");

              if (t === '') t = '[Failed]';
              if (l === '') l = this.getItemAtom(s, 'link');
              if (l === '') l = '[Failed]';
              arr.push({title: t,  link: l, author : a, word: w, description : d, thumbnail: thumb, content: duration, pubDate: dt});
              content = content.replace(s, '')
          }
          count++
      }
      return arr
  }

  private getTitle(content) {
      let
          s = content.toString(),
          titleStart = s.indexOf('<title'),
          titleEnd = s.indexOf('</title>');
      s = s.substr(titleStart, titleEnd - titleStart + 8);
      if ( s === '') s = '[Failed]';
      return s.replace("<![CDATA[", "")
          .replace("]]>", "")
          .replace(/<[^>]+>/g, '')
          .replace(/\r?\n|\r/g, '')
  }

  // link: string,
  // author: string,
  // description: string,
  // image: string
  private getLink(content) {
      let
          s = content.toString(),
          linkStart = s.indexOf('<link'),
          linkEnd = s.indexOf('</link>');
      s = s.substr(linkStart, linkEnd - linkStart);
      if ( s === '') s = '[Failed]';
      return s.replace("<![CDATA[", "")
          .replace("]]>", "")
          .replace(/<[^>]+>/g, '')
          .replace(/\r?\n|\r/g, '')
  }

  private getAuthor(content) {
      let
          s = content.toString(),
          authorStart = s.indexOf('<itunes:author'),
          authorEnd = s.indexOf('</itunes:author>');
      s = s.substr(authorStart, authorEnd - authorStart);
      if ( s === '') s = '[Failed]';
      return s.replace("<![CDATA[", "")
          .replace("]]>", "")
          .replace(/<[^>]+>/g, '')
          .replace(/\r?\n|\r/g, '')
  }

  private getDescription(content) {
      let
          s = content.toString(),
          descriptionStart = s.indexOf('<description>'),
          descriptionEnd = s.indexOf('</description>');
      s = s.substr(descriptionStart+13, descriptionEnd - descriptionStart-13);
      if ( s === '') s = '[Failed]';
      return s.replace("<![CDATA[", "")
          .replace("]]>", "")
          .replace(/<[^>]+>/g, '')
          .replace(/\r?\n|\r/g, '')
  }

  private getImage(content) {
      let
          s = content.toString(),
          imageStart = s.indexOf('<image'),
          imageEnd = s.indexOf('</image>');
      s = s.substr(imageStart, imageEnd - imageStart);
      let imageLinkStart = s.indexOf('<url>'),
          imageLinkEnd = s.indexOf('</url>');
      s = s.substr(imageLinkStart, imageLinkEnd - imageLinkStart);

      if ( s === '') s = '[Failed]';
      return s.replace("<![CDATA[", "")
          .replace("]]>", "")
          .replace(/<[^>]+>/g, '')
          .replace(/\r?\n|\r/g, '')
  }


  private getFeedInfo(content,tag): FeedInfo {
    let arr = [], tagStart = 0, tagEnd = 0, count = 0;
    if (content.search('<' + tag) > 0) {
      tagStart = content.search('<' + tag);
      tagEnd = content.search('/' + tag + '>');
      if (tagEnd > tagStart) {
        let s = content.substr(tagStart, tagEnd - tagStart + tag.length + 2),
            t = this.getTitle(s),
            link = this.getLink(s),
            author = this.getAuthor(s),
            description = this.getDescription(s),
            image= this.getImage(s);
        return { title: t, link: link , author : author , description : description, image : image}
      }
    }
  }

  private extractItems(content) : Feed {
      let f = this.getFeedInfo(content,"channel");
      return {
          status: "ok",
          feed : f ,
          items: this.getItems(content.toString(), 'item')
                     .concat(this.getItems(content.toString(), 'entry'))
      }
  }



  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
