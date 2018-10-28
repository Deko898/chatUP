import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs, Http, Headers } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class GeneralService {

    constructor(private http: Http) { }

    makeCall(url: string, method: string, data?: any, headers?: Headers): Observable<any> {

        let options: RequestOptionsArgs = {
            method: method || 'GET',
            body: data || '',
            headers: headers
        };
        console.log(url, options)
        return this.http.request(url, options)
            .map(res => res.json())
        // return this.http[method](url)
        //     .map(res => res.json());
    }

}