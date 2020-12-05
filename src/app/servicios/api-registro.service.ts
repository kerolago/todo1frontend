import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _global } from './_global';

@Injectable({
  providedIn: 'root'
})
export class ApiRegistroService {

  url: string;

  constructor(
    private http: HttpClient ) {
      
    this.url = _global.url;
   }
   private extractData( res : Response){
     let body = res ;
     return body || {};
   }
}
