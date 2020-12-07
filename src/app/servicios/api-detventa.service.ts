import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { _global } from './_global';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiDetventaService {
  url: string;

  constructor(
    private http: HttpClient
  ) { 
    this.url = _global.url;
  }
  private extractData(res: Response){
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
    return this.http.get(this.url + 'detventa', httpOptions).pipe(map(this.extractData));
  }
  
  GetId(id):  Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
       
      })
    };
    return this.http.get(this.url + 'detventa/' + id, httpOptions).pipe(map(this.extractData));
  }
  Post( modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
        
      })
    };
    return this.http.post<any>(this.url + 'detventa', JSON.stringify(modelo), httpOptions).pipe();
  }
  Patch(id,modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'token': localStorage.getItem('token')
       
      })
    };
    return this.http.patch(this.url + 'detventa/' + id, JSON.stringify(modelo), httpOptions).pipe();
  }
  Delete(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'appliation/json',
        'token': localStorage.getItem('token')
  
      })
    };
    return this.http.delete(this.url +'detventa/' + id, httpOptions).pipe();
  }

  Getpro(id,can,cli):Observable<any>{
  
    const httpOptions ={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
       
      })
    };
    return this.http.get(this.url + 'detventa/agregar/' + id+'/cantidad/'+can+'/cliente/'+cli, httpOptions).pipe(map(this.extractData));
  }

  Getcli(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    };
    return this.http.get(this.url + 'detventa/cliente/' + id, httpOptions).pipe(map(this.extractData));
  }

}
