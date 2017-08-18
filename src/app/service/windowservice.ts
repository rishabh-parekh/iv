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

@Injectable()
export class WindowService {
    constructor(private http: Http) {}
    //
    getNativeWindow() {
      return window;
    }
    
    private handleError(errorResponse: Response) {
        //console.log(errorResponse.statusText);
        return Observable.throw(errorResponse.json().error || "Server error");
    }
}
