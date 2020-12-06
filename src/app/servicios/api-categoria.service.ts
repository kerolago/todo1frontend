import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { _global } from './_global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCategoriaService {
  url:string;

  constructor(
    private http: HttpClient
  ) {
    this.url = _global.url;
   }
  
   private extractData ( res: Response){
    let body = res;
    return body || {};
  }
  Get(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
       
      })
    };
    return this.http.get(this.url + 'categoria', httpOptions).pipe(map(this.extractData));
  }
  
  GetId(id):  Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
       
      })
    };
    return this.http.get(this.url + 'categoria/' + id, httpOptions).pipe(map(this.extractData));
  }
  Post( modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
        
      })
    };
    return this.http.post<any>(this.url + 'categoria', JSON.stringify(modelo), httpOptions).pipe();
  }
  Patch(id,modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'token': localStorage.getItem('token')
       
      })
    };
    return this.http.patch(this.url + 'categoria/' + id, JSON.stringify(modelo), httpOptions).pipe();
  }
  Delete(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'appliation/json',
        'token': localStorage.getItem('token')
  
      })
    };
    return this.http.delete(this.url +'categoria/' + id, httpOptions).pipe();
  }
}
