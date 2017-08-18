import {
    Injectable
} from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions,
    Response
} from '@angular/http';
import {
    Observable,
    Subject
} from 'rxjs/Rx';
import 'rxjs/Rx'; //get everything from Rx
import 'rxjs/add/operator/toPromise';
import {
    IArticle
} from './article';

@Injectable()
export class ArticleService {
    private jsonFileURL: string = "./assets/data/article-data.json";
    constructor(private http: Http) {}
    //
    getArticles(): Observable < IArticle[] > {
        return this.http.get(this.jsonFileURL).map((response: Response) => {
            return <IArticle[] > response.json()
        }).catch(this.handleError);
    }
    //
    private handleError(errorResponse: Response) {
        //console.log(errorResponse.statusText);
        return Observable.throw(errorResponse.json().error || "Server error");
    }
}
