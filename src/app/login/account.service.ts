import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs'
@Injectable()
export class AccountService {
  link: string = "http://niw.cloudapp.net/"
  constructor(private http: Http) { }
  getDelegates(search:string): Promise<any> {
    return this.http.get(this.link + "api/delegate?search="+search).toPromise()
      .then(resp => resp.json())
      .catch(this.error)
  }
  private error(error: any): Promise<any> {
    return Promise.reject(error.message || error)
  }



}
