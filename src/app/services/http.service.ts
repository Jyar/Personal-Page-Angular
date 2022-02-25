import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config, Observable , throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable()
export class HttpService {
    configUrl: string = window.location.protocol + '//' + window.location.host + '/mediumapi';

    constructor(private http: HttpClient){
        
    }

   
  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return this.http
      .get<any>(this.configUrl, requestOptions);
    
  }
   
    getMedium(){
        const mediumOptions  = {
            headers: new HttpHeaders({
                'Accept': 'text/html, application/xhtml+xml, */*',
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            observe: 'events' as const,
            responseType: 'text' as 'json'
        };

        return this.http.get<Observable<string>>(this.configUrl, mediumOptions);
    }

}