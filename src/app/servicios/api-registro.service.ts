import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { _global } from './_global';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

      
  Get(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
     
      })
    };
    return this.http.get(this.url + 'user', httpOptions).pipe(map(this.extractData));
  }
  
  GetId(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'token': localStorage.getItem('token')
      
      })
    };
    return this.http.get(this.url + 'user/' + id, httpOptions).pipe(map(this.extractData));
  }


  Post(modelo):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
        
      })
    };
    return this.http.post<any>(this.url + 'user',JSON.stringify(modelo), httpOptions).pipe();
  }

  PostC(modelo,ter):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
        
      })
    };
    return this.http.post<any>(this.url + 'user/cli' ,JSON.stringify(modelo), httpOptions).pipe();
  }
  
  Patch(id, modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'token': localStorage.getItem('token')

      })
    };
    return this.http.patch(this.url + 'user/editar/' + id, JSON.stringify(modelo), httpOptions).pipe();
  }
  Delete(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      
      })
    };
    return this.http.delete(this.url + 'user/' + id, httpOptions).pipe();
  }

  Get1(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
     
      })
    };
    return this.http.get(this.url + 'user/cli', httpOptions).pipe(map(this.extractData));
  }
  
  GetId1(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'token': localStorage.getItem('token')
      
      })
    };
    return this.http.get(this.url + 'user/cli/' + id, httpOptions).pipe(map(this.extractData));
  }

}
